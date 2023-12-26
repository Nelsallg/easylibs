import { FetchRequest } from "../../fetch-request/src/index";
import { ProcessIndexedDB } from "../../tempdata/src";
import { BlobTransformer } from "../functions/data-transfomer";
import { escape } from "../../utils/src/utils";

export class ProcessBackend {
  private _uri: string;
  private _database: ProcessIndexedDB;
  private _response: any = null;
  /**
   *
   * @param database - base de données
   * @param uri - L'URL de destination où les données du formulaire seront envoyées.
   */
  constructor(database: ProcessIndexedDB, uri: string) {
    this._database = database;
    this._uri = uri;
  }
  /**
   * Persists data to the server.
   *
   * @param redirectURL - The URL to redirect to after the data is persisted.
   * @param callback - The callback function to be called after the data is persisted.
   * @returns A promise that resolves when the data is persisted.
   */
  public async persist(
    redirectURL?: string,
    callback: Function = (result: any) => {}
  ): Promise<void> {
    const elements = await this._database.getIndexedData();
    const promises: any[] | PromiseLike<any[]> = [];
    if (elements instanceof Array && elements.length > 0) {
      for (let i = 0; i < elements.length; i++) {
        ((currentIndex) => {
          promises.push(
            new Promise(async (resolve, reject) => {
              try {
                const data = await this._database._getData(
                  currentIndex,
                  "classic-object"
                );
                delete data["@base64String"];
                delete data["@id"];
                resolve(data);
              } catch (error) {
                reject("Désolé une probleme est survenu: " + error);
              }
            })
          );
        })(i);
      }
    }
    const formData = this.normalizeArrayField(await Promise.all(promises));
    const setResponse = (result: any) => {
      this._response = result;
      callback(this._response);
      if (redirectURL && this._response && this._response.success) {
        return (window.location.href = redirectURL || "/");
      }
      return this._response;
    };
    new FetchRequest({
      uri: this._uri,
      data: formData,
      postFetchAction: setResponse,
      options: {
        method: "POST",
        acceptDataFormat: "form-data",
      },
    });
  }
  /**
   * Saves form data to the server.
   *
   * @param data - The data object containing the submiter, callback, redirectUrl, and loader properties.
   * @param data.submiter - The submit button element.
   * @param data.callback - The callback function to be called after the data is saved.
   * @param data.redirectUrl - The URL to redirect to after the data is saved.
   * @param data.loader - The loader HTML content to display while saving the data.
   */
  public save(data: {
    submiter: HTMLElement;
    callback: Function;
    redirectUrl?: string;
    loader?: string;
    preFetchAction?: Function;
  }) {
    const form =
      (data.submiter.closest("form") as HTMLFormElement) ??
      (document.querySelector("form") as HTMLFormElement);
    data.submiter.addEventListener("click", async (e) => {
      e.preventDefault();
      const isEmpty = await this._database._isEmpty();
      if (true === isEmpty && !form.checkValidity()) {
        return form.reportValidity();
      }
      const innerSubmiter = escape(data.submiter.innerHTML);
      if (data.loader) {
        data.submiter.innerHTML = data.loader;
      }
      if (true === isEmpty && form.checkValidity()) {
        const formData = new FormData(form);
        if(data.preFetchAction){data.preFetchAction(formData);}
        const postFetchAction = function () {
          const { response } = request;
          data.submiter.innerHTML = innerSubmiter;
          if (data.redirectUrl && response["success"] === true) {
            data.callback(response);
            return (window.location.href = data.redirectUrl);
          }
          return data.callback(response);
        };
        const request = new FetchRequest({
          uri: this._uri,
          data: formData,
          postFetchAction,
          options: {
            method: "POST",
            acceptDataFormat: "form-data",
          },
        });
        return;
      }

      form.setAttribute("novalidate", "");
      await this.persist(data.redirectUrl, (response: any) => {
        data.submiter.innerHTML = innerSubmiter;
        data.callback(response);
      });
    });
  }
  /**
   * Normalizes an array field into a FormData object.
   * This method takes an array of data objects and normalizes it into a FormData object. It handles files within the data objects by transforming them into Blobs using a BlobTransformer. The resulting FormData object is returned.
   * @param datas - The array of data objects to be normalized.
   * @returns The normalized FormData object.
   */
  protected normalizeArrayField(datas: Array<any>): FormData {
    const transformer = new BlobTransformer();
    let index = 0;
    return datas.reduce((result: FormData, data) => {
      const objectsFormData = Object.keys(data).reduce((formData, key) => {
        const files = data[key] as Array<File>;
        if (Array.isArray(files) && files.length > 0) {
          files.forEach((file) => {
            formData.append(key, transformer.fromFile(file), file.name);
          });
        } else {
          formData.set(key, data[key]);
        }
        return formData;
      }, new FormData());
      objectsFormData.forEach((value, key) => {
        result.append(key, value);
      });
      index++;
      return result;
    }, new FormData());
  }
  /**
   * Retourne la réponse du serveur.
   */
  public get response(): any {
    return this._response;
  }
}

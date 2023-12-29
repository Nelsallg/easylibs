import Utils from "@easylibs/utils";
import { Transformer } from '@easylibs/transformer';

declare type FileUploaderType =
  | Array<{
      name: string;
      base64String: string | null;
      contentType: string;
      size: number;
      arrayBuffer: ArrayBuffer;
    }>
  | {
      name: string;
      base64String: string | null;
      contentType: string;
      size: number;
      arrayBuffer: ArrayBuffer;
    };
export default class FileUploader {
  private input: Element | HTMLCollection | NodeListOf<Element> | undefined;
  private fileElement:
    | Element
    | HTMLCollection
    | NodeListOf<Element>
    | undefined
    | null;
  private autoEvent: boolean = true;
  private progressContainer?: HTMLElement;
  /**
   * @param input La balise input qui recevra l'image
   * @param fileElement La balise dans laquelle l'image sera affiché
   */
  constructor(
    input: HTMLInputElement | string,
    fileElement?: HTMLImageElement | string | null,
    autoEvent: boolean = true,
    progressContainer?: HTMLElement | string
  ) {
    this.input = Utils.$$(input);
    this.fileElement = fileElement ? Utils.$$(fileElement) : null;
    this.autoEvent = autoEvent;
    this.progressContainer = progressContainer instanceof HTMLElement ? progressContainer : document.querySelector(`${progressContainer}`) as HTMLElement;
  }
  public load<T extends FileUploaderType>(callback = (files: T) => {}) {
    const setUploading = (input: HTMLInputElement) => {
      if (input.files) {
        let { files } = input;
        if (files.length === 1) {
          this.singleUploading(files[0], (file) => {
            return callback(file);
          });
        }
        if (files.length > 1) {
          this.multipleUploading(files, (_files) => {
            return callback(_files);
          });
        }
      }
    };
    if (this.input && this.input instanceof HTMLInputElement) {
      if (true === this.autoEvent) {
        this.input.addEventListener("change", () => {
          const input = this.input as HTMLInputElement;
          return setUploading(input);
        });
      }
      if (false === this.autoEvent) {
        try {
          const { input } = this;
          if (!input) {
            throw new Error("No Input Target");
          }
          return setUploading(input);
        } catch (error) {
          console.log(`Error ${error}`);
        }
      }
    }
  }
  private singleUploading(file: File, callback: (_file: any) => void) {
    let _file: {
      name: string;
      base64String: string | null;
      contentType: string;
      size: number;
      arrayBuffer: ArrayBuffer;
    } | null = null;
    const fileReader = new FileReader();
    this.progress(file);
    fileReader.onload = async () => {
      const base64String = fileReader.result;
      _file = {
        name: file.name,
        base64String: base64String ? base64String.toString() : "",
        contentType: file.type,
        size: file.size,
        arrayBuffer: await file.arrayBuffer(),
      };
      Utils.processNodes(this.fileElement, (element: HTMLImageElement) => {
        element.src = `${base64String}`;
      });
      return callback(_file);
    };
    fileReader.readAsDataURL(file);
  }
  private multipleUploading(files: FileList, callback: (files: any) => void) {
    let _files: Array<{
      name: string;
      base64String: string | null;
      contentType: string;
      size: number;
      arrayBuffer: ArrayBuffer;
    }> = [];
    for (let i = 0; i < files.length; i++) {
      let file = files[i];
      this.progress(file);
      if (file instanceof Blob) {
        let reader = new FileReader();
        reader.onload = async () => {
          const base64String = reader.result;
          _files.push({
            name: file.name,
            base64String: base64String ? base64String.toString() : "",
            contentType: file.type,
            size: file.size,
            arrayBuffer: await file.arrayBuffer(),
          });
          if (_files.length === files.length) {
            callback(_files);
          }
        };
        reader.readAsDataURL(file);
      }
    }
  }
  public autoUploadFile() {
    const transformer = new Transformer.FileTransformer();
    const filesInput = document.querySelectorAll("input[type='file']") as NodeListOf<HTMLInputElement>;
    Utils.processNodes(filesInput, (fileInput: HTMLInputElement) => {
      const value = fileInput.dataset.value;
      if (value && value !== "") {
        const file = transformer.fromBase64String(value, null, null, false);
        if (file) {
          const newFileList = new DataTransfer();
          newFileList.items.add(file);
          Object.defineProperty(fileInput, 'files', {
            value: newFileList.files,
            writable: false,
          });
          fileInput.removeAttribute('data-value');
          const changeEvent = new Event('change');
          fileInput.dispatchEvent(changeEvent);
        }
      }
    });
  }
  public progress(file: File) {
    try {
      if(!file){
        return;
      }
      if(!this.progressContainer){
        return;
      }
      let progressBar = this.progressHTML();
      this.progressContainer.appendChild(progressBar);

      let xhr = new XMLHttpRequest();

      xhr.upload.addEventListener('progress', function (e) {
        console.log(e.lengthComputable)
          if (e.lengthComputable) {
            let percentComplete = (e.loaded / e.total) * 100;
            progressBar.style.width = percentComplete + '%';
            progressBar.innerHTML = percentComplete.toFixed(0) + '%';
            console.log(percentComplete.toFixed(0) + '%');
          }
      });
    } catch (error) {
      console.error(error);
    }
  }

  private progressHTML(){
    let target = `<div id="progress-container">
        <div id="progress-bar"></div>
    </div>`;
    const element = Utils.textToHTMLElement(target) as HTMLElement;
    element.style.position = 'absolute';
    return element;
  }
  private createInput() {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("multiple", "true");
    input.style.display = "none";
  }
}

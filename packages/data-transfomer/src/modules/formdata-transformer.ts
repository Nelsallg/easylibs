import { IFormDataTransformer } from "../main";

export class FormDataTransformer implements IFormDataTransformer{
    private _data: object | undefined;
    constructor(data: object | FormData) {
      this._data = data;
    }
    public transform(): FormData {
      const formData = new FormData();
      if (typeof this._data === "object") {
        let data = this._data as any;
        try {
          for (const key in this._data) {
            if (this._data.hasOwnProperty(key)) {
              formData.append(key, data[key]);
            }
          }
        } catch (error) {
          console.error("Erreur détectée: " + error);
        }
      }
      return formData;
    }
    public reverse(): object {
      let elementObject: object = {};
      if (this._data instanceof FormData) {
        try {
          const tempObject: any = {};
          this._data.forEach((value, key) => {
            tempObject[key] = value;
          });
          elementObject = { ...tempObject };
        } catch (error) {
          console.error("Erreur détectée: " + error);
        }
      }
      return elementObject;
    }
    public option(option: string) {
      if (option === "onlyobject") {
        if (this._data instanceof FormData) {
          return this.reverse();
        }
        return this._data;
      }
      if (option === "onlyformdata") {
        if (this._data instanceof FormData) {
          return this._data;
        }
        return this.transform();
      }
      if (option === "auto") {
        return this.auto();
      }
    }
    protected auto() {
      if (this._data instanceof FormData) {
        return this.reverse();
      } else {
        return this.transform();
      }
    }
  }
  
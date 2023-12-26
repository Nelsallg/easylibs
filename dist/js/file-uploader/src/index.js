var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
define(["require", "exports", "../../utils/src/dom", "../../utils/src/convert-type", "../../utils/src/process-node"], function (require, exports, dom_1, convert_type_1, process_node_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.FileUploader = void 0;
    class FileUploader {
        /**
         * @param input La balise input qui recevra l'image
         * @param fileElement La balise dans laquelle l'image sera affiché
         */
        constructor(input, fileElement, autoEvent = true, progressContainer) {
            this.autoEvent = true;
            this.input = (0, dom_1.$$)(input);
            this.fileElement = fileElement ? (0, dom_1.$$)(fileElement) : null;
            this.autoEvent = autoEvent;
            this.progressContainer = progressContainer instanceof HTMLElement ? progressContainer : document.querySelector(`${progressContainer}`);
        }
        load(callback = (files) => { }) {
            const setUploading = (input) => {
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
                        const input = this.input;
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
                    }
                    catch (error) {
                        console.log(`Error ${error}`);
                    }
                }
            }
        }
        singleUploading(file, callback) {
            let _file = null;
            const fileReader = new FileReader();
            this.progress(file);
            fileReader.onload = () => __awaiter(this, void 0, void 0, function* () {
                const base64String = fileReader.result;
                _file = {
                    name: file.name,
                    base64String: base64String ? base64String.toString() : "",
                    contentType: file.type,
                    size: file.size,
                    arrayBuffer: yield file.arrayBuffer(),
                };
                (0, process_node_1.processNodes)(this.fileElement, (element) => {
                    element.src = `${base64String}`;
                });
                return callback(_file);
            });
            fileReader.readAsDataURL(file);
        }
        multipleUploading(files, callback) {
            let _files = [];
            for (let i = 0; i < files.length; i++) {
                let file = files[i];
                this.progress(file);
                if (file instanceof Blob) {
                    let reader = new FileReader();
                    reader.onload = () => __awaiter(this, void 0, void 0, function* () {
                        const base64String = reader.result;
                        _files.push({
                            name: file.name,
                            base64String: base64String ? base64String.toString() : "",
                            contentType: file.type,
                            size: file.size,
                            arrayBuffer: yield file.arrayBuffer(),
                        });
                        if (_files.length === files.length) {
                            callback(_files);
                        }
                    });
                    reader.readAsDataURL(file);
                }
            }
        }
        progress(file) {
            try {
                if (!file) {
                    return;
                }
                if (!this.progressContainer) {
                    return;
                }
                let progressBar = this.progressHTML();
                this.progressContainer.appendChild(progressBar);
                let xhr = new XMLHttpRequest();
                xhr.upload.addEventListener('progress', function (e) {
                    console.log(e.lengthComputable);
                    if (e.lengthComputable) {
                        let percentComplete = (e.loaded / e.total) * 100;
                        progressBar.style.width = percentComplete + '%';
                        progressBar.innerHTML = percentComplete.toFixed(0) + '%';
                        console.log(percentComplete.toFixed(0) + '%');
                    }
                });
            }
            catch (error) {
                console.error(error);
            }
        }
        progressHTML() {
            let target = `<div id="progress-container">
        <div id="progress-bar"></div>
    </div>`;
            const element = (0, convert_type_1.textHtmlToNode)(target);
            element.style.position = 'absolute';
            return element;
        }
        createInput() {
            const input = document.createElement("input");
            input.setAttribute("type", "file");
            input.setAttribute("multiple", "true");
            input.style.display = "none";
        }
    }
    exports.FileUploader = FileUploader;
});
//# sourceMappingURL=index.js.map
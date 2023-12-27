declare type FileUploaderType = Array<{
    name: string;
    base64String: string | null;
    contentType: string;
    size: number;
    arrayBuffer: ArrayBuffer;
}> | {
    name: string;
    base64String: string | null;
    contentType: string;
    size: number;
    arrayBuffer: ArrayBuffer;
};
export declare class FileUploader {
    private input;
    private fileElement;
    private autoEvent;
    private progressContainer?;
    /**
     * @param input La balise input qui recevra l'image
     * @param fileElement La balise dans laquelle l'image sera affiché
     */
    constructor(input: HTMLInputElement | string, fileElement?: HTMLImageElement | string | null, autoEvent?: boolean, progressContainer?: HTMLElement | string);
    load<T extends FileUploaderType>(callback?: (files: T) => void): void;
    private singleUploading;
    private multipleUploading;
    progress(file: File): void;
    private progressHTML;
    private createInput;
}
export {};

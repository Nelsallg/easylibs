type FileUploaderType =
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

interface FileUploaderOptions {
  input: HTMLInputElement | string;
  fileElement?: HTMLImageElement | string | null;
  autoEvent?: boolean;
  progressContainer?: HTMLElement | string;
}

export interface FileUploaderInterface<T extends FileUploaderType> {
  load(callback: (files: T) => void): void;
  progress(file: File): void;
}

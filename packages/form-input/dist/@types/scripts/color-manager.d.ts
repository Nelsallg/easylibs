export default class ColorManager {
    protected colorPicker: string | HTMLInputElement;
    constructor(colorPicker: string | HTMLInputElement);
    fetchColors(url: string): void;
}

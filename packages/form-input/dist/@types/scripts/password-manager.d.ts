export default class PasswordManager {
    passwordVisibility(): typeof PasswordVisibility;
}
declare class PasswordVisibility {
    private iconPath;
    private showIconsToClick;
    constructor(iconPath: {
        hide: string;
        show: string;
    }, showIconsToClick?: boolean);
    active: () => void;
    private html;
    private iconStyle;
}
export {};

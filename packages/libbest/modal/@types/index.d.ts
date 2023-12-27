export declare class FormModal {
    private openingButton?;
    private modal?;
    private closingButton?;
    private modalIdentifier?;
    private animation;
    init(): this;
    setAnimation(animation?: {
        type: string;
        position: string;
    }, display?: string, animateElement?: HTMLElement): this;
    private checkExistingData;
}

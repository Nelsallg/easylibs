export interface AnimationType {
    in: {
        position: 'bottom' | 'left' | 'right' | 'top';
        duration: number;
        type: {
            fade: 'fade-in' | 'fade-out';
            slide: 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right';
        };
        callback: (...args: Array<any>) => void | Promise<any>;
        options?: object;
    };
    out: {
        position: 'bottom' | 'left' | 'right' | 'top';
        duration: number;
        type: {
            fade: 'fade-in' | 'fade-out';
            slide: 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right';
            scale: 'scale-x-to-y' | 'scale-y-to-x' | 'scale-to-0';
        };
        callback: (...args: Array<any>) => void | Promise<any>;
    };
}

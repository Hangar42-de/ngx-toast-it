export declare enum ToastType {
    success = "toast--success",
    warning = "toast--warning",
    error = "toast--error",
    info = "toast--info"
}
export declare enum ToastPosition {
    topLeft = "top-left",
    topRight = "top-right",
    bottomLeft = "bottom-left",
    bottomRight = "bottom-right"
}
export declare class ToastConfig {
    position?: ToastPosition;
    groupingThreshold?: number;
    progressBarEnabled?: boolean;
    constructor(config?: {});
}
export declare class Toast {
    type: ToastType;
    heading: string;
    subheading?: string;
    message: string;
    timeout?: number;
    constructor(toast: any);
}

export enum ToastType {
  success = 'toast--success',
  warning = 'toast--warning',
  error = 'toast--error',
  info = 'toast--info'
}

export enum ToastPosition {
  topLeft = 'top-left',
  topRight = 'top-right',
  bottomLeft = 'bottom-left',
  bottomRight = 'bottom-right'
}

export class ToastConfig {
  position?: ToastPosition = ToastPosition.topRight;
  groupingThreshold?: number = 5;

  constructor(config = {}){
    Object.assign(this, config)
  }
}

export class Toast {
  type: ToastType;
  heading: string;
  subheading?: string;
  message: string;
  timeout?: number = 5;

  constructor(toast) {
    Object.assign(this, toast);
  }
}

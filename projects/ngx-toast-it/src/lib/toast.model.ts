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
  position ? = ToastPosition.topRight;
  groupingThreshold ? = 5;
  progressBarEnabled ? = true;

  constructor(config = {}) {
    Object.assign(this, config);
  }
}

export class Toast {

  type: ToastType;
  heading: string;
  subheading ? = '';
  message: string;
  timeout ? = 5;

  constructor(toast) {
    Object.assign(this, toast);
  }
}

import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {Toast, ToastConfig} from './toast.model';


@Injectable({
  providedIn: 'root'
})
export class ToastService {

  public activeToasts$ = new Subject<Toast>();
  public activeConfig$ = new Subject<ToastConfig>();

  constructor() {
  }

  public setConfig(config: ToastConfig) {
    this.activeConfig$.next(new ToastConfig(config));
  }

  public createToast(toast: Toast) {
    const newToast = new Toast(toast);
    this.activeToasts$.next(newToast);
  }

  public deleteToast(id: number) {
  }

  public resetToasts() {
  }
}

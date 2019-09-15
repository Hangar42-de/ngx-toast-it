import { Subject } from 'rxjs';
import { Toast, ToastConfig } from './toast.model';
export declare class ToastItService {
    activeToasts$: Subject<Toast>;
    activeConfig$: Subject<ToastConfig>;
    constructor();
    setConfig(config: ToastConfig): void;
    createToast(toast: Toast): void;
    deleteToast(id: number): void;
    resetToasts(): void;
}

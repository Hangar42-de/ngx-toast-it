import { OnInit } from '@angular/core';
import { ToastItService } from '../toast-it.service';
import { Observable } from 'rxjs';
import { Toast, ToastConfig } from '../toast.model';
export declare class ToastContainerComponent implements OnInit {
    private toastService;
    private activeToasts$;
    private toastCountStream$;
    config: ToastConfig;
    toasts$: Observable<Toast[]>;
    toastCount$: Observable<number>;
    constructor(toastService: ToastItService);
    ngOnInit(): void;
    destroy(index: any): void;
    private insertNewToast;
    private handleIncomingToast;
    private setConfig;
}

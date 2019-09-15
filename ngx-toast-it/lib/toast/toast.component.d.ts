import { EventEmitter, OnInit } from '@angular/core';
import { Toast, ToastConfig } from '../toast.model';
export declare class ToastComponent implements OnInit {
    style: {};
    toast: Toast;
    config: ToastConfig;
    toastCount: number;
    destroyEmitter: EventEmitter<any>;
    constructor();
    ngOnInit(): void;
    getIconByType(): import("@fortawesome/fontawesome-common-types").IconDefinition;
    destroy: () => void;
    private startTimer;
}

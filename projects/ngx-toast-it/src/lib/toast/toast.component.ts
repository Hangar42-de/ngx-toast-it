import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Toast, ToastConfig} from '../toast.model';
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons/faCheckCircle';
import {faExclamationCircle} from '@fortawesome/free-solid-svg-icons/faExclamationCircle';
import {faExclamationTriangle} from '@fortawesome/free-solid-svg-icons/faExclamationTriangle';
import {faInfoCircle} from '@fortawesome/free-solid-svg-icons/faInfoCircle';


const FACTOR_SECONDS_TO_MS = 1000;

@Component({
  selector: 'lib-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {

  public style = {};
  @Input() public toast: Toast;
  @Input() public config: ToastConfig;
  @Input() public toastCount: number;
  @Output() public destroyEmitter = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
    this.startTimer();
  }

  public getIconByType() {
    switch (this.toast.type) {
      case 'toast--success':
        return faCheckCircle;
      case 'toast--info':
        return faInfoCircle;
      case 'toast--warning':
        return faExclamationTriangle;
      case 'toast--error':
        return faExclamationCircle;
    }
  }

  public destroy = () => this.destroyEmitter.next();

  private startTimer() {
    if (this.toast.timeout === 0) {
      return;
    }

    setTimeout(() => this.destroy(), this.toast.timeout * FACTOR_SECONDS_TO_MS);
  }
}

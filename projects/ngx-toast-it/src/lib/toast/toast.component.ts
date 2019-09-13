import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Toast} from '../toast.model';

const FACTOR_SECONDS_TO_MS = 1000;

@Component({
  selector: 'lib-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {

  public style = {};
  @Input() public toast: Toast;
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
        return 'ion-md-checkmark-circle';
      case 'toast--info':
        return 'ion-md-information-circle';
      case 'toast--warning':
        return 'ion-md-warning';
      case 'toast--error':
        return 'ion-md-alert';
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

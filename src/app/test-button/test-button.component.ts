import {Component, OnInit} from '@angular/core';
import {ToastItService} from '../../../projects/ngx-toast-it/src/lib/toast-it.service';
import {Toast, ToastConfig, ToastPosition, ToastType} from '../../../projects/ngx-toast-it/src/lib/toast.model';

@Component({
  selector: 'app-test-button',
  templateUrl: './test-button.component.html',
  styleUrls: ['./test-button.component.scss']
})
export class TestButtonComponent implements OnInit {

  public toastPosition = ToastPosition;
  public toastType = ToastType;

  public toastConfig: ToastConfig = {
    position: ToastPosition.topRight,
    groupingThreshold: 5
  };

  public toast: Toast = {
    type: ToastType.success,
    heading: 'Great',
    subheading: 'You found the Toast Component',
    message: 'Let us know what you like about it',
    timeout: 0
  };

  constructor(private toastService: ToastItService) {
  }

  ngOnInit() {
    this.sendConfig();
  }

  public sendTestToast() {
    this.toastService.createToast(this.toast);
  }

  public sendConfig(){
    this.toastService.setConfig(this.toastConfig);
  }

}

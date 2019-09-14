import {Component, OnInit} from '@angular/core';
import {ToastItService, Toast, ToastConfig, ToastPosition, ToastType} from 'ngx-toast-it';

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
    groupingThreshold: 5,
    progressBarEnabled: true
  };

  public toast: Toast = {
    type: ToastType.success,
    heading: 'Great',
    subheading: 'You found the Toast Component',
    message: 'Let us know what you think about it',
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

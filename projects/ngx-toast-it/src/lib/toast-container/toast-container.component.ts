import {Component, OnInit} from '@angular/core';
import {ToastItService} from '../toast-it.service';
import {BehaviorSubject, from, Observable} from 'rxjs';
import {Toast, ToastConfig} from '../toast.model';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {filter, take, toArray} from 'rxjs/operators';

@Component({
  selector: 'app-toast-container',
  templateUrl: './toast-container.component.html',
  styleUrls: ['./toast-container.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({opacity: 0})),
      transition('void <=> *', animate(250)),
    ]),
  ]
})
export class ToastContainerComponent implements OnInit {

  private activeToasts$ = new BehaviorSubject<Toast[]>([]);
  private toastCountStream$ = new BehaviorSubject<number>(0);

  public config = new ToastConfig();
  public toasts$: Observable<Toast[]>;
  public toastCount$ = this.toastCountStream$.pipe(filter(count => count > 0));

  constructor(private toastService: ToastItService) {
  }

  ngOnInit() {
    this.toastService.activeConfig$.subscribe(config => this.setConfig(config));
    this.toastService.activeToasts$.subscribe(toast => this.insertNewToast(toast));
    this.activeToasts$.subscribe(toasts => this.handleIncomingToast(toasts));
  }

  public destroy(index) {
    const newValue = this.activeToasts$.getValue();
    newValue.splice(index, 1);
    this.activeToasts$.next(newValue);
  }

  private insertNewToast(toast) {
    const newValue = this.activeToasts$.getValue();
    newValue.push(toast);
    this.activeToasts$.next(newValue);
  }

  private handleIncomingToast(toasts: Toast[]) {
    const {groupingThreshold} = this.config;
    this.toasts$ = from(toasts).pipe(take(groupingThreshold), toArray());
    this.toastCountStream$.next(toasts.length - groupingThreshold);
  }

  private setConfig(config: ToastConfig) {
    setTimeout(() => this.config = config, 0);
  }

}

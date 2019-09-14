import {Component, Input, OnInit} from '@angular/core';
import {interval} from 'rxjs';
import {take} from 'rxjs/operators';

const FACTOR_SECONDS_TO_MS = 1000;
const REFRESH_RATE = 30; // ~33hz

@Component({
  selector: 'lib-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {

  @Input() progress: number = 0;
  @Input() duration: number;

  constructor() {
  }

  ngOnInit() {
    this.calculateDuration();
  }

  private calculateDuration() {
    if (!this.duration) {
      return;
    }

    const amountOfMarblesUntilFinished = this.duration * FACTOR_SECONDS_TO_MS / REFRESH_RATE;
    const amountOfPercentageOfEachMarble = 100 / amountOfMarblesUntilFinished;

    interval(REFRESH_RATE)
      .pipe(take(amountOfMarblesUntilFinished))
      .subscribe(() => this.progress += amountOfPercentageOfEachMarble);
  }
}

import { Component } from '@angular/core';
import { NumberSeriesService } from '../services/number-series.service';

@Component({
  selector: 'app-number-series',
  templateUrl: './number-series.component.html',
  styleUrls: ['./number-series.component.css']
})
export class NumberSeriesComponent {

  lb: number;
  ub: number;
  series!: number[];
  errMsg!: string | null;
  isComplete: boolean;

  constructor(private nss: NumberSeriesService) {
    this.lb = 0;
    this.ub = 0;
    this.isComplete=true;
  }

  start() {
    this.series = [];
    this.errMsg = null;
    this.isComplete = false;

    let ob = this.nss.generateSeries(this.lb, this.ub);

    ob.subscribe({
      next: n => { this.series.push(n); },
      error: err => { this.errMsg = err; this.isComplete = true; },
      complete: () => { this.isComplete = true; }
    });
  }
}
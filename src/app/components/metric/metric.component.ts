import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-metric',
  templateUrl: './metric.component.html',
  styleUrls: ['./metric.component.css'],
})
export class MetricComponent implements OnInit {
  @Input() title: string = '';
  @Input() description = '';
  @Input('used')
  set value(value: number) {
    this._value = isNaN(value) ? 0 : value;
  }

  get value() {
    return this._value;
  }

  @Input('available')
  set max(max: number) {
    if (isNaN(max)) {
      max = 100;
    }
    this._max = max;
  }

  get max() {
    return this._max;
  }

  private _max = 100;
  private _value = 0;

  isDanger(): boolean {
    return this.value / this.max > 0.7;
  }

  constructor() {}

  ngOnInit(): void {}
}

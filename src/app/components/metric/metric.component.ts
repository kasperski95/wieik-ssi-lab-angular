import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-metric',
  templateUrl: './metric.component.html',
  styleUrls: ['./metric.component.css'],
})
export class MetricComponent implements OnInit {
  @Input() title: string = '';
  @Input() description = '';
  @Input('used') value = 0;
  @Input('available') max = 100;
  private _value = 0;
  private _max = 100;

  isDanger(): boolean {
    return this.value / this.max > 0.7;
  }

  constructor() {}

  ngOnInit(): void {}
}

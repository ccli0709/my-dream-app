import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-areachange',
  templateUrl: './areachange.component.html',
  styleUrls: ['./areachange.component.css']
})
export class AreachangeComponent implements OnInit {
  title = '面積換算';
  areas: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0];

  message = '';

  constructor() {
  }
  onKeyup($event, focusIndex): void {
    this.message = focusIndex;

    // 任何 -> 平方公尺
    let m2 = 0;
    if (focusIndex === 0) { m2 = this.areas[focusIndex]; }
    else if (focusIndex === 1) { m2 = this.areas[focusIndex] / 0.3025; }
    else if (focusIndex === 2) { m2 = this.areas[focusIndex] / 0.001; }
    else if (focusIndex === 3) { m2 = this.areas[focusIndex] / 0.001; }
    else if (focusIndex === 4) { m2 = this.areas[focusIndex] / 0.00103; }
    else if (focusIndex === 5) { m2 = this.areas[focusIndex] / 0.01; }
    else if (focusIndex === 6) { m2 = this.areas[focusIndex] / 0.00025; }
    else { m2 = this.areas[focusIndex] / 0.0015; }

    // 平方公尺 -> 所有
    this.areas[0] = m2; // 平方公尺
    this.areas[1] = m2 * 0.3025; // 坪
    this.areas[2] = m2 * 0.001; // 公頃
    this.areas[3] = m2 * 0.001; // 甲
    this.areas[4] = m2 * 0.00103; // 分
    this.areas[5] = m2 * 0.01; // 公畝
    this.areas[6] = m2 * 0.00025; // 英畝
    this.areas[7] = m2 * 0.0015; // 市畝

  }

  ngOnInit(): void {
  }

  onCount(): void {
  }

  onClear(): void {
  }
}

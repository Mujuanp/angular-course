import { Component, OnInit, Input } from '@angular/core';
// import { DetailsComponent } from '../details/details.component';
@Component({
  selector: 'mu-log-line',
  templateUrl: './log-line.component.html',
  styleUrls: ['./log-line.component.css']
})
export class LogLineComponent implements OnInit {
  id: number;
  text: string;
  @Input() toggleCount: number;
  @Input() details: string;

  constructor() {
  }

  ngOnInit() {
    this.id = this.toggleCount;
    this.text = this.details;
  }

  getColor() {
    return this.id > 5 ? 'blue' : 'white';
  }

}

import { Component, OnInit } from '@angular/core';
import { LogLineComponent } from '../log-line/log-line.component';
@Component({
  selector: 'mu-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  detailVisible: boolean;
  logLines: Array<string>;
  toggleCount: number;

  constructor() {
    this.detailVisible = false;
    this.logLines = [];
    this.toggleCount = 0;

  }

  ngOnInit() {
  }

  onToggleDetails() {

    this.detailVisible = !this.detailVisible;
    this.toggleCount++;
    this.logLines.push('Toggle #' + this.toggleCount + '. Now are: ' + (this.detailVisible ? 'Visible' : 'Not visible') + '.');
  }


}

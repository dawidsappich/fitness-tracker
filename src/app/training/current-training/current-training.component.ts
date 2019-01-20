import {Component, OnInit} from '@angular/core';
import {of} from 'rxjs';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {
  progress = 0;
  private interval: number;

  constructor() {
  }

  ngOnInit() {
    this.interval = setInterval(() => {
      this.progress += 5;
      if (this.progress >= 100) {
        clearInterval(this.interval);
      }
    }, 1000);
  }

  onStop() {
    clearInterval(this.interval);
  }
}

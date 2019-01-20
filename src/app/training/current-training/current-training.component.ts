import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatDialog} from '@angular/material';
import {StopTrainingComponent} from '../stop-training/stop-training.component';
import {el} from '@angular/platform-browser/testing/src/browser_util';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {

  @Output() trainingExit = new EventEmitter<void>();

  progress = 0;
  private interval: number;

  constructor(private dialog: MatDialog) {
  }

  ngOnInit() {
    this.startOrResumeTimer();
  }

  private startOrResumeTimer() {
    this.interval = setInterval(() => {
      this.progress += 5;
      if (this.progress >= 100) {
        clearInterval(this.interval);
      }
    }, 1000);
  }

  onStop() {
    clearInterval(this.interval);
    const dialogRef = this.dialog.open(StopTrainingComponent, {
      data: {
        progress: this.progress
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.trainingExit.emit();
      } else {
        this.startOrResumeTimer();
      }
    });
  }
}

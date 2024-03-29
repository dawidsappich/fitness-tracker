import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {StopTrainingComponent} from '../stop-training/stop-training.component';
import {TrainingService} from '../training.service';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {

  progress = 0;
  private interval: number;

  constructor(private dialog: MatDialog, private trainingService: TrainingService) {
  }

  ngOnInit() {
    this.startOrResumeTimer();
  }

  private startOrResumeTimer() {
    const step = this.trainingService.getRunningEercise().duration / 100 * 1000;
    this.interval = setInterval(() => {
      this.progress += 1;
      if (this.progress >= 100) {
        this.trainingService.completeExercise();
        clearInterval(this.interval);
      }
    }, step);
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
        this.trainingService.cancelExercise(this.progress);
      } else {
        this.startOrResumeTimer();
      }
    });
  }
}

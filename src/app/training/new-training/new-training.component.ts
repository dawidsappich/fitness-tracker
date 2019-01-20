import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {

  @Output() isExerciseStarted = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit() {

  }

  onStartExercise() {
    this.isExerciseStarted.emit();
  }
}

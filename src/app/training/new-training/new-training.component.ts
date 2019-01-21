import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TrainingService} from '../training.service';
import {Exercise} from '../exercise.model';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {
  exercises: Exercise[] = [];

  @Output() isExerciseStarted = new EventEmitter<void>();

  constructor(private trainingService: TrainingService) {
  }

  ngOnInit() {
    this.exercises = this.trainingService.loadNewExercises();
  }

  onStartExercise() {
    this.isExerciseStarted.emit();
  }
}

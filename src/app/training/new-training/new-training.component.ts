import {Component, OnInit} from '@angular/core';
import {TrainingService} from '../training.service';
import {NgForm} from '@angular/forms';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {
  exercises: Observable<any>;

  constructor(private trainingService: TrainingService, private database: AngularFirestore) {
  }

  ngOnInit() {
    this.exercises = this.database
      .collection('availableExercises')
      .valueChanges();
  }

  onStartExercise(form: NgForm) {
    this.trainingService.startExercise(form.value.exercise);
  }
}

import {Injectable} from '@angular/core';
import {Exercise} from './exercise.model';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {
  exerciseChanged = new Subject<Exercise>();

  private availableExercises: Exercise[] = [
    {id: 'burpees', name: 'Burpees', calories: 500, duration: 5},
    {id: 't2b', name: 'Toes-to-Bar', calories: 600, duration: 180},
    {id: 'pullups', name: 'Pullups', calories: 200, duration: 120},
    {id: 'pushups', name: 'Pushups', calories: 200, duration: 120}
  ];

  runningExercise: Exercise;
  private exercises: Exercise[] = [];

  constructor() {
  }

  loadNewExercises() {
    return this.availableExercises.slice();
  }

  startExercise(exerciseId: string) {
    this.runningExercise = this.availableExercises.find(exercise => exercise.id === exerciseId);
    this.exerciseChanged.next({...this.runningExercise});
  }

  completeExercise() {
    this.exercises.push({...this.runningExercise, date: new Date(), state: 'completed'});
    this.runningExercise = null;
    this.exerciseChanged.next(null);
  }

  cancelExercise(progress: number) {
    this.exercises.push({
      ...this.runningExercise,
      duration: this.runningExercise.duration * (progress / 100),
      calories: this.runningExercise.calories * (progress / 100),
      date: new Date(),
      state: 'canceled'
    });
    this.runningExercise = null;
    this.exerciseChanged.next(null);
  }

  getRunningEercise() {
    return {...this.runningExercise};
  }
}

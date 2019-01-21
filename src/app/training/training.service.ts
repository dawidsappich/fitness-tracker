import {Injectable} from '@angular/core';
import {Exercise} from './exercise.model';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {
  private availableExercises: Exercise[] = [
    {id: 'burpees', name: 'Burpees', calories: 500, duration: 20},
    {id: 't2b', name: 'Toes-to-Bar', calories: 600, duration: 12},
    {id: 'pullups', name: 'Pullups', calories: 200, duration: 15},
    {id: 'pushups', name: 'Pushups', calories: 200, duration: 15}
  ];

  constructor() {
  }

  loadNewExercises() {
    return this.availableExercises.slice();
  }
}

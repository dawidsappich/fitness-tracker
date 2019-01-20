import { NgModule } from '@angular/core';
import {MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule],
  exports: [MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule]
})
export class MyMaterialModule { }

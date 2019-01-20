import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MyMaterialModule} from './my-material/my-material.module';
import {SignupComponent} from './auth/signup/signup.component';
import {LoginComponent} from './auth/login/login.component';
import {TrainingComponent} from './training/training.component';
import {CurrentTrainingComponent} from './training/current-training/current-training.component';
import {NewTrainingComponent} from './training/new-training/new-training.component';
import {PastTrainingComponent} from './training/past-training/past-training.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {WelcomeComponent} from './welcome/welcome.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule} from '@angular/forms';
import {HeaderComponent} from './navigation/header/header.component';
import {SidenavListComponent} from './navigation/sidenav-list/sidenav-list.component';
import {StopTrainingComponent} from './training/stop-training/stop-training.component';
import {AuthService} from './auth/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    TrainingComponent,
    CurrentTrainingComponent,
    NewTrainingComponent,
    PastTrainingComponent,
    WelcomeComponent,
    HeaderComponent,
    SidenavListComponent,
    StopTrainingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MyMaterialModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
  entryComponents: [StopTrainingComponent]
})
export class AppModule {
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import {AngularFireModule} from "angularfire2";
import {firebaseConfig} from "../environments/firebase.config";
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProblemsListComponent} from './Problemes/Problems.component'
import { ScoreComponent} from './Score/Score.component' ;

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ProblemsListComponent,
    ScoreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

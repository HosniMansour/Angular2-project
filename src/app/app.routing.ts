import { RouterModule, Route} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import { ProblemsListComponent} from './Problemes/Problems.component'
import { ScoreComponent} from './Score/Score.component' ;

export const routes: Route[] = [
  {path :'login', component : LoginComponent },
  {path :'problems', component : ProblemsListComponent },
  {path :'score', component : ScoreComponent },
  { path : 'home', component: HomeComponent,},
  { path: '',redirectTo: 'login',pathMatch: 'full'}
];

export const routing = RouterModule.forRoot(routes);

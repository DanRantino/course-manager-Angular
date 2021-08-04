import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { Error404Component } from './error-404/Error-404.component';

@NgModule({
  declarations:[
    NavBarComponent
  ],
  imports:[
    RouterModule.forChild([
      {
        path:'**', component:Error404Component ,
      }
    ]),
  ],
  exports: [
    NavBarComponent,
  ]
})
export class CoreModule {}

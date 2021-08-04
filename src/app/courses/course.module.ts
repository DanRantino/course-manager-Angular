import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { StarModule } from "../shared/component/star/star.module";
import { AppPipeModule } from "../shared/pipe/app-pipe.module";
import { CourseInfoComponent } from "./course-info.component";
import { CourseListComponent } from "./course-list.component";

@NgModule({
  declarations:[
    CourseListComponent,
    CourseInfoComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    StarModule,
    AppPipeModule,
    RouterModule.forChild([
      {
        path: 'courses/info/:id', component: CourseInfoComponent,
      },
      {
        path:'courses', component: CourseListComponent,
      }
    ])
  ]
})
export class CourseModule{

}

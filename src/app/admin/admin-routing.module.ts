import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { AddEventComponent } from './add-event/add-event.component';
import { AddNewsComponent } from './news/add-news/add-news.component';
import { AddTimeTableComponent } from './time-table/add-time-table/add-time-table.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageNewsComponent } from './news/manage-news/manage-news.component';
import { NewsListComponent } from './news/news-list/news-list.component';
import { ManageTimetableComponent } from './time-table/manage-timetable/manage-timetable.component';
import { ManageCoursesComponent } from './courses/manage-courses/manage-courses.component';

const routes: Routes = [
  {
    path: 'xccs-admin', component : AdminComponent,
    children : [
      {
        path : '', component : DashboardComponent
      },
      {
        path : 'news', component : ManageNewsComponent ,
        children : [
          {
            path : '', component : NewsListComponent
          }
        ]
      },
      {
        path : 'events', component : AddEventComponent
      },
      {
        path : 'timetable', component : ManageTimetableComponent
      },
      {
        path : 'courses', component : ManageCoursesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

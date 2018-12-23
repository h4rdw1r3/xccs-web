import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Firebase
import { AngularFireModule } from '@angular/fire'
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';

import { MaterialModule } from './material.module'

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// Feature Modules
import { AboutModule } from './about/about.module';
import { AdminModule } from './admin/admin.module';
import { HomeModule } from './home/home.module';
import { CoursesModule } from './courses/courses.module';
import { TimeTableModule } from './time-table/time-table.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    MaterialModule,
    AboutModule,
    AdminModule,
    HomeModule,
    CoursesModule,
    TimeTableModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

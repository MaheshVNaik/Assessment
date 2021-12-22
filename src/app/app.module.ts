import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';
import { JoinnowComponent } from './joinnow/joinnow.component';
import { AboutComponent } from './about/about.component';
import { AngularPracticeComponent } from './angular-practice/angular-practice.component';
import { ColorDirective } from './color.directive';
import { ErrorPageComponent } from './error-page/error-page.component';
import { TopheadingComponent } from './topheading/topheading.component';
import {HttpClientModule} from '@angular/common/http';
import {NewsapiservicesService} from './service/newsapiservices.service';
import { LatestnewsComponent } from './latestnews/latestnews.component';
import { TechnolgynewsComponent } from './technolgynews/technolgynews.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CourseComponent,
    JoinnowComponent,
    AboutComponent,
    AngularPracticeComponent,
    ColorDirective,
    ErrorPageComponent,
    TopheadingComponent,
    LatestnewsComponent,
    TechnolgynewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [NewsapiservicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

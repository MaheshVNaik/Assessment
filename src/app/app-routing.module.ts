import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AngularPracticeComponent } from './angular-practice/angular-practice.component';
import { CourseComponent } from './course/course.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from './home/home.component';
import { JoinnowComponent } from './joinnow/joinnow.component';
import { LatestnewsComponent } from './latestnews/latestnews.component';
import { TechnolgynewsComponent } from './technolgynews/technolgynews.component';
import { TopheadingComponent } from './topheading/topheading.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'course',component:CourseComponent},
  {path:'joinnow',component:JoinnowComponent},
  {path:'about',component:AboutComponent},
  {path: 'angularPractice', component:AngularPracticeComponent},
  {path: 'newspage', component:TopheadingComponent, children: [
    {
      path:'latestnews', component:LatestnewsComponent
    },
    {
      path:'technews', component:TechnolgynewsComponent
    }
  ]},
  {path: '**', component:ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

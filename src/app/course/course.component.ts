import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }
  course=[
    {'id':1, 'name':'Learn Angular','description':'Angular is a magical front end platform that not only allows developing mind-blowing applications.', 'image':'../../assets/angular.png'},
    {'id':2, 'name':'Learn Node','description':'Node. js (Node) is an open source development platform for executing JavaScript code server-side', 'image':'../../assets/node.jpg'},
    {'id':3, 'name':'Learn React','description':'React is a declarative, efficient, and flexible JavaScript library for building user interfaces.', 'image':'../../assets/react.png'},
    {'id':4, 'name':'Learn Typescript','description':'TypeScript extends JavaScript by adding data types, classes, and other object-oriented features with type-checking.', 'image':'../../assets/typescript.png'}
  
  ]
  gotoPage(pageName:String):void{
    this.router.navigate([`${pageName}`]);
  }
 

}

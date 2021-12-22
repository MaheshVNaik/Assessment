import { Component, OnInit } from '@angular/core';
import {NgForm}  from '@angular/forms'


@Component({
  selector: 'app-joinnow',
  templateUrl: './joinnow.component.html',
  styleUrls: ['./joinnow.component.css']
})
export class JoinnowComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 
  userLogin(item:any){
      console.warn(item)
  }

}

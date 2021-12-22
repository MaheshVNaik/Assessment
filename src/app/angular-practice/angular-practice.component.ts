import { preserveWhitespacesDefault } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-angular-practice',
  templateUrl: './angular-practice.component.html',
  styleUrls: ['./angular-practice.component.css']
})
export class AngularPracticeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  getName(){
    alert("Function Called");
    console.warn("called");
  }
  onclick(abc:String){
      console.warn(abc);
  }
  show:String='';
  getValue(val: String){
      console.warn(val);
      this.show=val
  }
  count = 0;
  onCount(type: string){

      type==='add' ?this.count++:this.count--
      
  }
  color = "red"
  BackGround="white"
  onChange(){
    this.color = "white";
    this.BackGround = "black"
  }
  display= true;
  change(){
this.display=!this.display
  }

}

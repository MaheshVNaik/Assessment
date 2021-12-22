import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';

@Component({
  selector: 'app-technolgynews',
  templateUrl: './technolgynews.component.html',
  styleUrls: ['./technolgynews.component.css']
})
export class TechnolgynewsComponent implements OnInit {

  constructor(private _services: NewsapiservicesService) { }

  techNewsDisplay:any = [];

  ngOnInit(): void {
    this._services.techHeading().subscribe((result)=>{
      console.log(result);
      this.techNewsDisplay = result.articles;
    })
  }

}

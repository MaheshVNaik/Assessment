import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';

@Component({
  selector: 'app-latestnews',
  templateUrl: './latestnews.component.html',
  styleUrls: ['./latestnews.component.css']
})
export class LatestnewsComponent implements OnInit {

  constructor(private _services: NewsapiservicesService) { }

  latestNewsDisplay:any = [];

  ngOnInit(): void {
    this._services.topHeading().subscribe((result)=>{
      console.log(result);
      this.latestNewsDisplay = result.articles;
    })
  }

}

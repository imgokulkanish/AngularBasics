import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  //String Interpolation
  channelId : number = 1;
  channelName: string ="Unpopular Cricket"
  constructor() { }

  ngOnInit(): void {
  }

}

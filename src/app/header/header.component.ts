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
  //Property Binding
  channelActive: boolean = false;
  //Event Binding
  channelMember: number = 2;
  AddChannelMember(){
    this.channelMember++;
 }
 //Event Binding with Parameter

 inputEvent(event:any){
   console.log(event.target.value);
 }
 //Twowaybinding
 channelWebsite: string ="UnpopularCricket"
  constructor() { 
   setTimeout(() => {
     this.channelActive = true;
   }, 5000);
  }
  ngOnInit(): void {
  }
}

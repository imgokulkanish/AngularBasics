import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [ `.custom{
                color:white;
                padding:40px;
    }
    `]
})
export class HeaderComponent implements OnInit {

  //String Interpolation
  channelId : number = 1;
  channelName: string ="Unpopular Cricket"
  //Property Binding
  channelActive: boolean = false;
  //Event Binding
  channelMember: number = 2;
  //directives-ngif
 IsMemberAdded: boolean = false;
 //ngfor
 Channels: any = ["Kirikettu","UnpopularCricket","CricMania"];
  AddChannelMember(){
    this.channelMember++;
    this.IsMemberAdded = true;
 }
 //ngstyle
 getcolor(){
   return this.IsMemberAdded ? 'green' : 'red' ;
 }
 //ngclass
 getPermission(){
   return this.IsMemberAdded;
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

import { Component, OnInit } from '@angular/core';
import { Flashlight } from '@awesome-cordova-plugins/flashlight/ngx';
import{ValorantService}from '../Services/valorant.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
valData:any = [];
  constructor(private flashlight: Flashlight,private ValorantService:ValorantService) {}
  Flashlight()
  {
    this.flashlight.toggle();
  }

  
ngOnInit(): void {
  this.ValorantService.GetValData().subscribe(
    (data)=>{
this.valData = data.status;
console.log(this.valData);
    }
  );
}

}

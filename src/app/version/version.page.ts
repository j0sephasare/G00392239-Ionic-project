import { Component, OnInit } from '@angular/core';
import{ValorantService}from '../Services/valorant.service';
import {NavController} from '@ionic/angular';
@Component({
  selector: 'app-version',
  templateUrl: './version.page.html',
  styleUrls: ['./version.page.scss'],
})
export class VersionPage implements OnInit {
  valData:any = [];
  constructor(private navCtrl:NavController,private valorantService:ValorantService) { }

  ngOnInit(){
    this.valorantService.GetValData().subscribe(
      (data)=>{
        this.valData = data.data;
        console.log(this.valData);

      }
    );
  }
  backtohome(){
    this.navCtrl.navigateBack('/home');
  }
}

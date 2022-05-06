import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import { Flashlight } from '@awesome-cordova-plugins/flashlight/ngx';
@Component({
  selector: 'app-pheonix',
  templateUrl: './pheonix.page.html',
  styleUrls: ['./pheonix.page.scss'],
})
export class PheonixPage implements OnInit {

  constructor(private navCtrl:NavController,private flashlight: Flashlight) { }

  ngOnInit() {
  }
  backtohome(){
    this.navCtrl.navigateBack('/home');
  }
  Flashlight()
  {
    this.flashlight.toggle();
  }
}

import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
@Component({
  selector: 'app-pheonix',
  templateUrl: './pheonix.page.html',
  styleUrls: ['./pheonix.page.scss'],
})
export class PheonixPage implements OnInit {

  constructor(private navCtrl:NavController) { }

  ngOnInit() {
  }
  backtohome(){
    this.navCtrl.navigateBack('/home');
  }
}

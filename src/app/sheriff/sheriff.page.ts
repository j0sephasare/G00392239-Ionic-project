import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
@Component({
  selector: 'app-sheriff',
  templateUrl: './sheriff.page.html',
  styleUrls: ['./sheriff.page.scss'],
})
export class SheriffPage implements OnInit {

  constructor(private navCtrl:NavController) { }

  ngOnInit() {
  }
  backtohome(){
    this.navCtrl.navigateBack('/home');
  }
}

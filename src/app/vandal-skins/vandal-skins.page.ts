import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
@Component({
  selector: 'app-vandal-skins',
  templateUrl: './vandal-skins.page.html',
  styleUrls: ['./vandal-skins.page.scss'],
})
export class VandalSkinsPage implements OnInit {

  constructor(private navCtrl:NavController) { }

  ngOnInit() {
  }
  backtohome(){
    this.navCtrl.navigateBack('/home');
  }
}

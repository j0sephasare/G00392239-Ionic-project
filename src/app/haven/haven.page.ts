import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
@Component({
  selector: 'app-haven',
  templateUrl: './haven.page.html',
  styleUrls: ['./haven.page.scss'],
})
export class HavenPage implements OnInit {

  constructor(private navCtrl:NavController) { }

  ngOnInit() {
  }
  backtohome(){
    this.navCtrl.navigateBack('/home');
  }
}

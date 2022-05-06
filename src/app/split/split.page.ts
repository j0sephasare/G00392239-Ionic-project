import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
@Component({
  selector: 'app-split',
  templateUrl: './split.page.html',
  styleUrls: ['./split.page.scss'],
})
export class SplitPage implements OnInit {

  constructor(private navCtrl:NavController) { }

  ngOnInit() {
  }
  backtohome(){
    this.navCtrl.navigateBack('/home');
  }
}

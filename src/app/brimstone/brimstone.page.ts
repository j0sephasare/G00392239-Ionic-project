import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
@Component({
  selector: 'app-brimstone',
  templateUrl: './brimstone.page.html',
  styleUrls: ['./brimstone.page.scss'],
})
export class BrimstonePage implements OnInit {

  constructor(private navCtrl:NavController) { }

  ngOnInit() {
  }
  backtohome(){
    this.navCtrl.navigateBack('/home');
  }
}

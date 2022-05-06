import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
@Component({
  selector: 'app-favagent',
  templateUrl: './favagent.page.html',
  styleUrls: ['./favagent.page.scss'],
})
export class FavagentPage implements OnInit {
yourAgents:string = "";
  constructor(private navCtrl:NavController,private storage:Storage) { }

  ngOnInit() {
  }
  backtohome(){
    this.navCtrl.navigateBack('/home');
  }
  savestatus()
  {
this.storage.create().then(()=>{
  this.storage.set("agent",this.yourAgents).then(()=>{console.log(this.yourAgents)}).then(()=>{this.navCtrl.navigateBack('/home');}).catch();
}).catch();
  }

  ionViewDidEnter(){
    this.storage.create()
    .then(()=>{
      this.storage.get('agent')
      .then((agent)=>{this.yourAgents = agent;})
      .catch();
    })
    .catch();
  }
}

import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
valData:any = [];
yourAgents:string="";
  constructor(private storage:Storage) {}
  
  
ngOnInit() {
  
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

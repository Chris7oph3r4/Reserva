import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  SlideTabsPrincipal: string="Favoritos";
  datas:any =[];
  constructor(public navCtrl: NavController) {
  for(let index=0; index <10; index++){
      this.datas.push(index);
  }
  }

}

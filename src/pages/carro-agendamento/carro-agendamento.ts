import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Carro } from './../../models/carro.model';

@IonicPage()
@Component({
  selector: 'page-carro-agendamento',
  templateUrl: 'carro-agendamento.html',
})
export class CarroAgendamentoPage implements OnInit {

  carro: Carro;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams) {

      this.carro = this.navParams.get('obj');
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarroAgendamentoPage');
  }

}

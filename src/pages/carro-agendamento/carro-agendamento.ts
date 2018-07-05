import { CarroProvider } from './../../providers/carros.provider';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Carro } from './../../models/carro.model';
import { AcessorioProvider } from '../../providers/acessorios.provider';

@IonicPage()
@Component({
  selector: 'page-carro-agendamento',
  templateUrl: 'carro-agendamento.html',
})
export class CarroAgendamentoPage {

  carro: Carro = <Carro>{};

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public carroProvider: CarroProvider,
    public acessorioProvider: AcessorioProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarroAgendamentoPage');
    const param = this.navParams.get('obj');
    if (param) {
      this.carro = param;
      console.log("carro: " + JSON.stringify(this.carro));
    }
  }

}

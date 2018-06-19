import { HomePage } from './../home/home';
import { CarroProvider } from './../../providers/carros.provider';
import { Carro } from './../../models/carro.model';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-carro-form',
  templateUrl: 'carro-form.html',
})
export class CarroFormPage {

  carro: Carro = {
    nome: '',
    preco: 0
  };

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private _carroService: CarroProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarroFormPage');
  }

  inserirCarro(carro: Carro) {
    this._carroService.inserir(carro).then(() => {
      alert('inserido com sucesso');

      this.navCtrl.push(HomePage);
    });
  }

}

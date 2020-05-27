import { Acessorio } from './../../models/acessorio.model';
import { AcessorioProvider } from './../../providers/acessorios.provider';
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

  private _preco: number;
  
  carro: Carro = {
    nome: '',
    preco: null
  };
  acessorios: Array<Acessorio>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private _carroService: CarroProvider,
    private _acessorioService: AcessorioProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarroFormPage');
    this._acessorioService.listar().subscribe((list) => {
      this.acessorios = list;
    });
  }

  inserirCarro(carro: Carro) {

    carro.acessorios = this.acessorios
      .filter(el => el.check)
        .map(el => <Acessorio>{ nome: el.nome, preco: el.preco });

    this._carroService.inserir(carro).then(() => {
      alert('inserido com sucesso');

      this.navCtrl.push(HomePage);
    });
  }

  get precoTotal() {
    return 0;
  }


}

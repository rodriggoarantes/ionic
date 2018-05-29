import { CarroAgendamentoPage } from './../carro-agendamento/carro-agendamento';
import { CarroFormPage } from './../carro-form/carro-form';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, Loading, AlertController } from 'ionic-angular';

import {Carro} from './../../models/carro.model'

import { CarroProvider } from './../../providers/carros.provider';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  listCarros: Observable<Carro[]>;
  carroFormPage = CarroFormPage;

  private _loading: Loading;

  constructor(
    public navCtrl: NavController, 
    public carroProvider: CarroProvider,
    private _loadingCtrl: LoadingController,
    private _alertCtrl: AlertController) {
  }

  ngOnInit() {
    console.log('ngOnInit');
    this.buildLoading();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad');
    this.loadingList();
  }

  selecionaCarro(carro: Carro) {
    console.log('click: ' + carro);
    this.navCtrl.push(CarroAgendamentoPage, { obj: carro });
  }

  // ------

  private loadingList() {
    this._loading.present();
    this.listCarros = this.carroProvider.listar();

    this.listCarros.subscribe((itens) => {
      this.mensagens(false);
    }, err => {
      console.log(err);
      this.mensagens(true);
    });
  }

  private buildLoading() {
    this._loading = this._loadingCtrl.create({
      content: 'Carregando...'
    });
  }

  private mensagens(error: boolean) {
    this._loading.dismiss();

    if (error) {
      this._alertCtrl.create({
        title: 'Falha ao listar os itens',
        subTitle: 'Não foi possivel carregar a listagem',
        buttons: [
          { text: 'Ok'}
        ]
      }).present();
    }
  }

  

}

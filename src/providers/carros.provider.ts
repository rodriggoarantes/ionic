
import { Injectable } from '@angular/core';

import { Carro } from './../models/carro.model';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

@Injectable()
export class CarroProvider {

  private collection: AngularFirestoreCollection<Carro> =  this._db.collection<Carro>('carros');

  constructor(private _db: AngularFirestore) {
  }

  public listar() {
    return this.collection.valueChanges();
  }

  public inserir(car: Carro) {
    this.collection.add(car);
  }
}

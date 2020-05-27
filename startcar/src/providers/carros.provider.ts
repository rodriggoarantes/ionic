import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { Carro } from './../models/carro.model';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

@Injectable()
export class CarroProvider {

  private collection: AngularFirestoreCollection<Carro>;

  constructor(private _db: AngularFirestore) {
    this.collection = this._db.collection<Carro>('carros');
  }

  public listar(): Observable<Carro[]> {
    return this.collection.valueChanges();
  }

  public inserir(car: Carro) {
    return this.collection.add(car);
  }

  public inserirCarro(nome: string, preco: number): Promise<void> {
    // Persist a document id
    const key = this._db.createId();
    const carro: Carro = { key, nome, preco };
    return this.collection.doc(key).set(carro);
  }

  public obter(key: string): Observable<Carro> {
    const carroDoc: AngularFirestoreDocument<Carro> = this._db.doc('/carros/' + key);
    return carroDoc.valueChanges();
  }

  public atualizar(carro: Carro): Promise<void> {
    const carroDoc: AngularFirestoreDocument<Carro> = this._db.doc('/carros/' + carro.key);
    return carroDoc.update(carro);
  }

}

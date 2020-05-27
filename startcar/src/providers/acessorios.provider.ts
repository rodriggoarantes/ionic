
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

import { Acessorio } from './../models/acessorio.model';

@Injectable()
export class AcessorioProvider {

  private collection: AngularFirestoreCollection<Acessorio>;

  constructor(private _db: AngularFirestore) {
    this.collection = this._db.collection<Acessorio>('acessorios');
  }

  public listar(): Observable<Acessorio[]> {
    return this.collection.valueChanges();
  }

  public obter(key: string): Observable<Acessorio> {
    const carroDoc: AngularFirestoreDocument<Acessorio> = this._db.doc('/acessorios/' + key);
    return carroDoc.valueChanges();
  }

}

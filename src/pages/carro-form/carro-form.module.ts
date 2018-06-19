import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CarroFormPage } from './carro-form';

@NgModule({
  declarations: [
    CarroFormPage,
  ],
  imports: [
    IonicPageModule.forChild(CarroFormPage),
  ],
  exports: [
    CarroFormPage
  ]
  
})
export class CarroFormPageModule {}

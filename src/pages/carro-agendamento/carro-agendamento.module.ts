import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CarroAgendamentoPage } from './carro-agendamento';

@NgModule({
  declarations: [
    CarroAgendamentoPage,
  ],
  imports: [
    IonicPageModule.forChild(CarroAgendamentoPage),
  ],
})
export class CarroAgendamentoPageModule {}

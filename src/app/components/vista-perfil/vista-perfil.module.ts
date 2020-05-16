import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ButtonPerfilComponent } from './components/button-perfil/button-perfil.component';
import { VistaPerfilComponent } from './pages/vista-perfil.component';
import { VistaPerfilRoutingModule } from './vista-perfil-routing.module';

import {
  NzButtonModule,
  NzFormModule,
  NzGridModule,
  NzInputModule,
  NzLayoutModule,
  NzModalModule,
  NzCardModule
} from 'ng-zorro-antd';



@NgModule({
  declarations: [VistaPerfilComponent, ButtonPerfilComponent],
  imports: [
    CommonModule,
    VistaPerfilRoutingModule,
    NzButtonModule,
    NzFormModule,
    NzGridModule,
    NzInputModule,
    NzLayoutModule,
    NzModalModule,
    NzCardModule,
  ],
  exports: [VistaPerfilComponent],
})
export class VistaPerfilModule { }

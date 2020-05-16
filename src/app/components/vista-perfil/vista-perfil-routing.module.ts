import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { VistaPerfilComponent } from './pages/vista-perfil.component';

const routes: Routes = [
  {
    path: '',
    component: VistaPerfilComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VistaPerfilRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthUserComponent } from './auth-user/auth-user.component';

const routes: Routes = [
  {
    path: '',
    component: AuthUserComponent,
    children: [
      {
        path: 'welcome',
        loadChildren: () =>
          import('../welcome/welcome.module').then((m) => m.WelcomeModule),
      },
      {
        path: 'view-perfil',
        loadChildren: () =>
          import('../vista-perfil/vista-perfil.module').then((m) => m.VistaPerfilModule),
      },
    ],
  },
  {
    path: '**', redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}

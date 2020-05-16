import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { AuthUserComponent } from './auth-user/auth-user.component';
import { LayoutRoutingModule } from './layout-routing.module';


import {
  NzBreadCrumbModule,
  NzGridModule,
  NzMenuModule,
  NzLayoutModule,
} from 'ng-zorro-antd';
import { IconsProviderModule } from '../../shared/icons/icons-provider.module';

@NgModule({
  declarations: [AuthUserComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    NzBreadCrumbModule,
    NzGridModule,
    NzMenuModule,
    NzLayoutModule,
    IconsProviderModule,
  ]
})

export class LayoutModule {}

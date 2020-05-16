import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import es from '@angular/common/locales/es';
import { NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';

import { AppComponent } from './app.component';

import { es_ES } from 'ng-zorro-antd/i18n';
import { IconsProviderModule } from './shared/icons/icons-provider.module';
import { HttpClientModule } from '@angular/common/http';

import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { LayoutModule } from './components/layout/layout.module';
import { RouterModule } from '@angular/router';

registerLocaleData(es);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    IconsProviderModule,
    LayoutModule,
    RouterModule.forRoot([])
  ],
  providers: [{ provide: NZ_I18N, useValue: es_ES }],
  bootstrap: [AppComponent]
})
export class AppModule { }

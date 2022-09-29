/**
 * アプリのルートモジュール。
 *
 * @module ./app/app.module
 */
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import browserHelper from './core/browser-helper';

import { DateValidatorDirective } from './localtime-converter/shared/valid-date.directive';
import { AppComponent } from './app.component';
import { LocaltimeConverterComponent } from './localtime-converter/localtime-converter.component';

/**
 * アプリのルートモジュールクラス。
 */
@NgModule({
  declarations: [
    AppComponent,
    DateValidatorDirective,
    LocaltimeConverterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => new TranslateHttpLoader(http, './assets/i18n/'),
        deps: [HttpClient]
      }
    }),
  ],
  providers: [
    { provide: LOCALE_ID, useValue: browserHelper.getLocale() },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

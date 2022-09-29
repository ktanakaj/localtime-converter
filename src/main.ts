/**
 * @file アプリのブートローダー。
 */
import { enableProdMode } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeJa from '@angular/common/locales/ja';
import localeDe from '@angular/common/locales/de';
import localeEs from '@angular/common/locales/es';
import localeFr from '@angular/common/locales/fr';
import localeZh from '@angular/common/locales/zh';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import 'moment/locale/ja';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

registerLocaleData(localeJa, 'ja');
registerLocaleData(localeDe, 'de');
registerLocaleData(localeEs, 'es');
registerLocaleData(localeFr, 'fr');
registerLocaleData(localeZh, 'zh');

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

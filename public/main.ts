/**
 * @file ローカル日時変換ブートローダー。
 * @author Koichi Tanaka
 */
import { enableProdMode } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeJa from '@angular/common/locales/ja';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

enableProdMode();
registerLocaleData(localeJa, 'ja');
platformBrowserDynamic().bootstrapModule(AppModule)
	.catch(err => console.error(err));

/**
 * @file ローカル日時変換ブートローダー。
 * @author Koichi Tanaka
 */
// ※ ↓は含めなくてもコンパイルは通るので軽量化のために外す。代わりにindex.htmlにCDNから読み込む設定を入れている。
// import "zone.js";
// import 'reflect-metadata';
import { enableProdMode } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeJa from '@angular/common/locales/ja';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

enableProdMode();
registerLocaleData(localeJa, 'ja');
platformBrowserDynamic().bootstrapModule(AppModule)
	.catch(err => console.error(err));

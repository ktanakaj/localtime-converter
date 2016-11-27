﻿/**
 * @file ローカル日時変換ルートモジュール。
 * @author Koichi Tanaka
 */
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DateValidatorDirective } from './localtime-converter/shared/valid-date.directive';
import { LocaltimeConverterComponent } from './localtime-converter/localtime-converter.component';

/**
 * ローカル日時変換ルートモジュールクラス。
 */
@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
	],
	declarations: [
		AppComponent,
		DateValidatorDirective,
		LocaltimeConverterComponent,
	],
	bootstrap: [AppComponent]
})
export class AppModule { }

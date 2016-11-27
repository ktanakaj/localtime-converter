/**
 * @file ローカル日時変換ルートモジュール。
 * @author Koichi Tanaka
 */
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { TranslateModule } from 'ng2-translate';
import { AppComponent } from './app.component';
import localeHelper  from './shared/locale-helper';
import { DateValidatorDirective } from './localtime-converter/shared/valid-date.directive';
import { LocaltimeConverterComponent } from './localtime-converter/localtime-converter.component';

/**
 * ローカル日時変換ルートモジュールクラス。
 */
@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		TranslateModule.forRoot(),
	],
	declarations: [
		AppComponent,
		DateValidatorDirective,
		LocaltimeConverterComponent,
	],
	providers: [
		{ provide: LOCALE_ID, useValue: localeHelper.getLocale() }
	],
	bootstrap: [AppComponent]
})
export class AppModule { }

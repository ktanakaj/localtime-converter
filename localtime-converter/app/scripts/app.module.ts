/**
 * @file ローカル日時変換ルートモジュール。
 * @author Koichi Tanaka
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LocaltimeConverterService } from './services/localtime-converter';
import { LocaltimeConverterComponent } from './controllers/localtime-converter';

/**
 * ローカル日時変換ルートモジュールクラス。
 */
@NgModule({
	imports: [BrowserModule],
	declarations: [
		AppComponent,
		LocaltimeConverterComponent,
	],
	providers: [LocaltimeConverterService],
	bootstrap: [AppComponent]
})
export class AppModule { }

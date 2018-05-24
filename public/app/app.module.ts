/**
 * @file ローカル日時変換ルートモジュール。
 * @author Koichi Tanaka
 */
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppComponent } from './app.component';
import localeHelper from './shared/locale-helper';
import { DateValidatorDirective } from './localtime-converter/shared/valid-date.directive';
import { LocaltimeConverterComponent } from './localtime-converter/localtime-converter.component';

/**
 * ローカル日時変換ルートモジュールクラス。
 */
@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		HttpClientModule,
		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: (http: HttpClient) => new TranslateHttpLoader(http, './i18n/'),
				deps: [HttpClient]
			}
		}),
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

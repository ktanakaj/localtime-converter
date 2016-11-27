/**
 * @file ローカル日時変換ルートコンポーネント。
 * @author Koichi Tanaka
 */
import { Component } from '@angular/core';
import { TranslateService } from 'ng2-translate';
import localeHelper  from './shared/locale-helper';

/**
 * ローカル日時変換ルートコンポーネントクラス。
 */
@Component({
	selector: 'app-root',
	templateUrl: 'app/app.html',
})
export class AppComponent {
	/**
	 * サービスをDIしてコンポーネントを生成する。
	 * @param translate 国際化サービス。
	 */
	constructor(translate: TranslateService) {
		// アプリで使用する言語を設定
		translate.setDefaultLang('en');
		translate.use(localeHelper.getLanguage());
	}
}

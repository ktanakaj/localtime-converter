/**
 * @file ローカル日時変換ルートコンポーネント。
 * @author Koichi Tanaka
 */
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import localeHelper from './shared/locale-helper';

/**
 * ローカル日時変換ルートコンポーネントクラス。
 */
@Component({
	selector: 'app-root',
	templateUrl: 'app/app.component.html',
})
export class AppComponent {
	/**
	 * サービスをDIしてコンポーネントを生成する。
	 * @param translate 国際化サービス。
	 */
	constructor(
		private translate: TranslateService) { }

	/**
	 * コンポーネント起動時の処理。
	 */
	async ngOnInit(): Promise<void> {
		// アプリで使用する言語を設定
		this.translate.setDefaultLang('en');
		this.translate.use(localeHelper.getLanguage());
	}
}

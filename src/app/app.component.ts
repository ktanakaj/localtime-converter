/**
 * アプリのルートコンポーネント。
 *
 * @module ./app/app.component
 */
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import browserHelper from './core/browser-helper';

/**
* アプリのルートコンポーネントクラス。
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  /**
   * サービスを使用するコンポーネントを生成する。
   *
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
    this.translate.use(browserHelper.getLanguage());
  }
}

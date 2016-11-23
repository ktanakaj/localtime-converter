/**
 * ローカル日時変換サービスモジュール。
 * @module ./scripts/services/localtime-converter
 */
import { Injectable } from '@angular/core';

/**
 * ローカル日時変換サービスクラス。
 */
@Injectable()
export class LocaltimeConverterService {
	/**
	 * 曖昧な入力値を許容するnew Date()。
	 * @param dateOrTimestamp 日時文字列またはタイムスタンプ。
	 * @returns 生成したDateインスタンスと生成元種別の配列。
	 * @throws インスタンス生成に失敗した場合。
	 */
	newDate(dateOrTimestamp: any): [Date, string] {
		// new Date() は、
		// ・stringだと日付書式として変換
		// ・numberだとタイムスタンプとして変換
		// するので、数値だけの文字列をnumberで処理させる。
		const timestamp = Number(dateOrTimestamp);
		let date = new Date(dateOrTimestamp);
		let createdBy = 'dateString';
		if (!isNaN(timestamp)) {
			// 桁数が10桁未満の場合、ミリ秒抜きのunixtimeであろう
			// ということで1000倍する
			if (String(timestamp).length <= 10) {
				date = new Date(timestamp * 1000);
				createdBy = 'unixtime';
			} else {
				date = new Date(timestamp);
				createdBy = 'unixms';
			}
		}

		// 変換に失敗している場合は例外を投げる
		if (isNaN(date.getTime())) {
			throw new Error("Invalid Date");
		}
		return [date, createdBy];
	}
}
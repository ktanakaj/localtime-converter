/**
 * ローカル日時変換サービスモジュール。
 * @module ./app/localtime-converter/shared/localtime-converter.service
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
			throw new Error("Invalid Date: " + dateOrTimestamp);
		}
		return [date, createdBy];
	}

	/**
	 * 時刻を指定されたタイムゾーン分を加味したものに変換する。
	 * @param date 変換する日時。
	 * @param offset タイムゾーン差分（分）。
	 * @returns 変換した日時。
	 */
	toLocalDate(date: Date, offset: number): Date {
		// offset を計算したタイムゾーンを加味した時刻を生成
		const dt = new Date(date.getTime());
		dt.setMinutes(dt.getMinutes() - offset);
		return dt;
	}

	/**
	 * 時刻から指定されたタイムゾーン分の差分を取り除く。
	 * @param date 取り除く日時。
	 * @param offset タイムゾーン差分（分）。
	 * @returns 取り除いた日時。
	 */
	toUtcDate(date: Date, offset: number): Date {
		// ローカル時間を出して時差を算出、その分を取り除く
		const timestamp = date.getTime();
		return new Date(timestamp - (this.toLocalDate(date, offset).getTime() - timestamp));
	}
}
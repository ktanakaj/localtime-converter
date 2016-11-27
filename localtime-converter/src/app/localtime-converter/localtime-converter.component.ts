/**
 * ローカル日時変換コンポーネント。
 * @module ./app/localtime-converter/localtime-converter.component
 */
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import 'moment-timezone';
import { LocaltimeConverterService } from './shared/localtime-converter.service';

/**
 * ローカル日時変換コンポーネントクラス。
 */
@Component({
	selector: 'localtime-converter',
	templateUrl: 'app/localtime-converter/localtime-converter.html',
	providers: [LocaltimeConverterService],
})
export class LocaltimeConverterComponent implements OnInit {
	/** タイムゾーン名リスト */
	timezones: string[];
	/** ユーザーのタイムゾーンの略称（JSTなど） */
	abbr: string;
	/** ユーザーのタイムゾーンのオフセット（+09:00など） */
	offset; string;
	/** フォーム入力値 */
	form: { date: string, timezone: string };
	/** 変換結果 */
	result: { unixtime: number, date: Date, utctime: string, localtime: string, createdBy: string, abbr: string, offset: string };

	/**
	 * サービスをDIしてコンポーネントを生成する。
	 * @param service ローカル日時変換サービス。
	 */
	constructor(
		private service: LocaltimeConverterService) { }

	/**
	 * コンポーネント起動時の処理。
	 */
	ngOnInit(): void {
		// タイムゾーン一覧を設定して画面をリセット
		//moment.locale(String);
		this.timezones = moment.tz.names();
		this.reset();
	}

	/**
	 * 画面表示のリセット。
	 */
	reset(): void {
		// クライアントPCのタイムゾーンを設定
		const now = moment();
		const timezone = moment.tz.guess();
		this.abbr = now.tz(timezone).format('z');
		this.offset = now.tz(timezone).format('Z');

		// フォームと結果を現在日時と現在のタイムゾーンで初期化
		this.form = {
			date: now.format('YYYY-MM-DD HH:mm:ss'),
			timezone: timezone,
		};
		this.convert();
	}

	/**
	 * 日時変換処理。
	 */
	convert(): void {
		// ※バリデーションNGの時も呼ばれてしまうため、
		//   NGの場合は何もしない
		let info;
		try {
			info = this.service.newDate(this.form.date);
		} catch (e) {
			return;
		}
		// 取得した日時から各種タイムゾーン情報などを結果に格納
		const date = info[0];
		const m = moment(date);
		const abbr = m.tz(this.form.timezone).format('z');
		this.result = {
			unixtime: Math.floor(date.getTime() / 1000),
			date: date,
			utctime: m.tz('UTC').format('lll'),
			localtime: m.tz(this.form.timezone).format('lll'),
			createdBy: info[1],
			abbr: isNaN(Number(abbr)) ? abbr : '',
			offset: m.tz(this.form.timezone).format('Z'),
		};
	}
}

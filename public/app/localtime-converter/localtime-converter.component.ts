/**
 * ローカル日時変換コンポーネント。
 * @module ./app/localtime-converter/localtime-converter.component
 */
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { LocaltimeConverterService } from './shared/localtime-converter.service';

/**
 * ローカル日時変換コンポーネントクラス。
 */
@Component({
	selector: 'localtime-converter',
	templateUrl: 'app/localtime-converter/localtime-converter.component.html',
	providers: [LocaltimeConverterService],
})
export class LocaltimeConverterComponent implements OnInit {
	/** タイムゾーン名リスト */
	timezones: string[];
	/** ユーザーのタイムゾーンの略称（JSTなど） */
	abbr: string;
	/** ユーザーのタイムゾーンのオフセット（+09:00など） */
	offset; string;
	/** ユーザーのタイムゾーンのオフセット（分） */
	offsetMin; number;
	/** フォーム入力値 */
	form: { date: string, timezone: string };
	/** 変換結果 */
	result: { unixtime: number, date: Date, utctime: Date, localtime: Date, createdBy: string, abbr: string, offset: string };

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
		const zone = now.tz(timezone);
		this.abbr = zone.format('z');
		this.offset = zone.format('Z');
		this.offsetMin = moment.tz.zone(timezone).offset(Date.now());

		// フォームと結果を現在日時と現在のタイムゾーンで初期化
		// ※ ↓の日付書式がブラウザでパース出来ないものだとアプリの初期化に失敗するので注意
		this.form = {
			date: now.format('YYYY/MM/DD HH:mm:ss'),
			timezone: timezone,
		};
		this.convert();
	}

	/**
	 * 日時変換処理。
	 */
	convert(): void {
		// ※バリデーションNGの時も呼ばれてしまうため、NGの場合は何もしない
		let info;
		try {
			info = this.service.newDate(this.form.date);
		} catch (e) {
			return;
		}
		// 取得した日時から各種タイムゾーン情報などを結果に格納
		// ※ momentのformatで十分変換できるが、日本語のロケールだと書式が変なので、
		//    タイムゾーン情報だけとって後は自前で計算する。
		const date = info[0];
		const m = moment(date);
		const zone = m.tz(this.form.timezone);
		const abbr = zone.format('z');
		const offsetMin = moment.tz.zone(this.form.timezone).offset(date.getTime());
		this.result = {
			unixtime: Math.floor(date.getTime() / 1000),
			date: date,
			utctime: this.service.toUtcDate(date, this.offsetMin),
			localtime: this.service.toUtcDate(this.service.toLocalDate(date, offsetMin), this.offsetMin),
			createdBy: info[1],
			abbr: isNaN(Number(abbr)) ? abbr : '',
			offset: zone.format('Z'),
		};
	}
}

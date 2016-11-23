/**
 * ローカル日時変換コンポーネント。
 * @module ./scripts/controllers/localtime-converter
 */
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import 'moment-timezone';
import { LocaltimeConverterService } from '../services/localtime-converter';

/**
 * ローカル日時変換コンポーネントクラス。
 */
@Component({
	moduleId: module.id,
	selector: 'localtime-converter',
	templateUrl: 'views/localtime-converter.html',
	providers: [LocaltimeConverterService]
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
	result: { unixtime: number, date: Date, createdBy: string, abbr: string, offset: string };

	/**
	 * サービスをDIしてコンポーネントを生成する。
	 * @param localtimeConverterService ローカル日時変換サービス
	 */
	constructor(
		/*private localtimeConverterService: LocaltimeConverterService*/) { }

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
		const now = Date.now();
		const timezone = moment.tz.guess();
		this.abbr = moment(now).tz(timezone).format('z');
		this.offset = moment(now).tz(timezone).format('Z');

		// フォームと結果を現在日時と現在のタイムゾーンで初期化
		this.form = {
			date: String(now),//$filter('date')(now, 'medium'),
			timezone: timezone,
		};
		this.convert();
	}

	/**
	 * 日時変換処理。
	 */
	convert(): void {
		//const result = this.localtimeConverterService.newDate(this.form.date);
		const date = new Date();//result[0];
		const abbr = moment(date).tz(this.form.timezone).format('z');
		this.result = {
			unixtime: Math.floor(date.getTime() / 1000),
			date: date,
			createdBy: "unixtime",//result[1],
			abbr: isNaN(Number(abbr)) ? abbr : '',
			offset: moment(date).tz(this.form.timezone).format('Z'),
		};
	}
}

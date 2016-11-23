import * as moment from 'moment';
import 'moment-timezone';

/**
 * ローカル日時変換Angular.jsコントローラ。
 * @module ./scripts/controllers/localtime-converter
 * @param $scope スコープ。
 * @param $filter フィルター。
 * @param localtimeConverterService ローカル日時変換サービス。
 */
export default ["$scope", "$filter", "localtimeConverterService", function ($scope, $filter, localtimeConverterService) {

	/**
	 * 画面表示のリセット。
	 * @function reset
	 */
	this.reset = () => {
		// クライアントPCのタイムゾーンを設定
		const now = Date.now();
		const timezone = moment.tz.guess();
		this.abbr = moment(now).tz(timezone).format('z');
		this.offset = moment(now).tz(timezone).format('Z');

		// フォームと結果を現在日時と現在のタイムゾーンで初期化
		this.form = {
			date: $filter('date')(now, 'medium'),
			timezone: timezone,
		};
		this.convert();
	};

	/**
	 * 日時変換処理。
	 * @function convert
	 */
	this.convert = () => {
		const result = localtimeConverterService.newDate(this.form.date);
		const date = result[0];
		const abbr = moment(date).tz(this.form.timezone).format('z');
		this.result = {
			unixtime: Math.floor(date.getTime() / 1000),
			date: date,
			createdBy: result[1],
			abbr: isNaN(Number(abbr)) ? abbr : '',
			offset: moment(date).tz(this.form.timezone).format('Z'),
		};
	};

	// タイムゾーン一覧を設定して画面をリセット
	this.timezones = moment.tz.names();
	this.reset();
}];

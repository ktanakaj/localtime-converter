"use strict";
/**
 * ローカル日時変換Angular.jsサービス。
 * @module ./scripts/services/localtime-converter
 * @returns {Object} サービスインスタンス。
 */

export default /* @ngInject */ function () {
	return {
		newDate: newDate,
	};

	/**
	 * 曖昧な入力値を許容するnew Date()。
	 * @function newDate
	 * @param {string} dateOrTimestamp 日時文字列またはタイムスタンプ。
	 * @returns {Date} 生成したDateインスタンス。createdByという独自プロパティに生成元種別を含む。
	 * @throws {Error} インスタンス生成に失敗した場合。
	 */
	function newDate(dateOrTimestamp) {
		// new Date() は、
		// ・stringだと日付書式として変換
		// ・numberだとタイムスタンプとして変換
		// するので、数値だけの文字列をnumberで処理させる。
		const timestamp = Number(dateOrTimestamp);
		let date = new Date(dateOrTimestamp);
		date.createdBy = 'dateString';
		if (!isNaN(timestamp)) {
			// 桁数が10桁未満の場合、ミリ秒抜きのunixtimeであろう
			// ということで1000倍する
			if (String(timestamp).length <= 10) {
				date = new Date(timestamp * 1000);
				date.createdBy = 'unixtime';
			} else {
				date = new Date(timestamp);
				date.createdBy = 'unixms';
			}
		}

		// 変換に失敗している場合は例外を投げる
		if (isNaN(date.getTime())) {
			throw new Error("Invalid Date");
		}
		return date;
	}
}
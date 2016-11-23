"use strict";
/**
 * Date変換可否バリデーションAngular.jsディレクティブ。
 * @module ./scripts/directives/validate-date
 * @param {Object} localtimeConverterService ローカル日時変換サービス。
 * @returns {Object} バリデーションインスタンス。
 */
export default /* @ngInject */ function (localtimeConverterService) {
	return {
		require: 'ngModel',
		scope: {},
		/**
		 * Date変換可否のバリデーションを行う。
		 * @function link
		 * @param {Object} scope スコープ。
		 * @param {Object} elm 要素。
		 * @param {Object} attrs 引数。
		 * @param {Object} ctrl コントローラ。
		 */
		link: function(scope, elm, attrs, ctrl) {
			ctrl.$validators.validateDate = (modelValue) => {
				if (ctrl.$isEmpty(modelValue)) {
					return true;
				}

				// Dateとして解釈できない値が設定されている場合NG
				try {
					localtimeConverterService.newDate(modelValue);
				} catch (e) {
					return false;
				}
				return true;
			};
		},
	};
}
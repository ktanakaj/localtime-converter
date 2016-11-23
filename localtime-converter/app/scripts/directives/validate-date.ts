/**
 * Date変換可否バリデーションAngular.jsディレクティブ。
 * @module ./scripts/directives/validate-date
 * @param localtimeConverterService ローカル日時変換サービス。
 * @returns バリデーションインスタンス。
 */
export default ["localtimeConverterService", function (localtimeConverterService): Object {
	return {
		require: 'ngModel',
		scope: {},
		/**
		 * Date変換可否のバリデーションを行う。
		 * @function link
		 * @param scope スコープ。
		 * @param elm 要素。
		 * @param attrs 引数。
		 * @param ctrl コントローラ。
		 */
		link: function (scope, elm, attrs, ctrl) {
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
}];
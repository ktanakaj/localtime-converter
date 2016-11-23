/**
 * @file ローカル日時変換共通定義部。
 * @author Koichi Tanaka
 */
import * as angular from 'angular';
import angularUtils from './libs/angular-utils';

const app = angular.module('localtimeConveterApp', ['ui.bootstrap', 'pascalprecht.translate']);

// 国際化の設定
app.config(["$translateProvider", function ($translateProvider) {
	$translateProvider.useStaticFilesLoader({
		prefix: './resources/locale_',
		suffix: '.json'
	});
	$translateProvider.preferredLanguage(angularUtils.getLanguage());
	$translateProvider.useSanitizeValueStrategy('escape');
}]);

// 基底の例外ハンドラー
app.factory("$exceptionHandler", ["$window", "$log", "$filter", function ($window, $log, $filter) {
	return function (exception) {
		$log.error(exception);
		$window.alert($filter('translate')("FATAL_ERROR"));
	};
}]);

// ディレクティブ・サービス・コントローラのインポートと登録
import validateDate from './directives/validate-date';
import localtimeConverterService from './services/localtime-converter';
import localtimeConverterController from './controllers/localtime-converter';

app.directive('validateDate', validateDate);
app.service('localtimeConverterService', localtimeConverterService);
app.controller('localtimeConverterController', localtimeConverterController);
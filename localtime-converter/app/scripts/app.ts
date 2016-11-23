"use strict";
/**
 * @file ローカル日時変換共通定義部。
 * @author Koichi Tanaka
 */
import angularUtils from './libs/angular-utils.js';

const app = angular.module('localtimeConveterApp', ['ui.bootstrap', 'pascalprecht.translate']);

// 国際化の設定
app.config(/* @ngInject */ function ($translateProvider) {
	$translateProvider.useStaticFilesLoader({
		prefix: './resources/locale_',
		suffix: '.json'
	});
	$translateProvider.preferredLanguage(angularUtils.getLanguage());
	$translateProvider.useSanitizeValueStrategy('escape');
});

// 基底の例外ハンドラー
app.factory("$exceptionHandler", /* @ngInject */ function ($window, $log, $filter) {
	return function (exception) {
		$log.error(exception);
		$window.alert($filter('translate')("FATAL_ERROR"));
	};
});

// ディレクティブ・サービス・コントローラのインポートと登録
import validateDate from './directives/validate-date.js';
import localtimeConverterService from './services/localtime-converter.js';
import localtimeConverterController from './controllers/localtime-converter.js';

app.directive('validateDate', validateDate);
app.service('localtimeConverterService', localtimeConverterService);
app.controller('localtimeConverterController', localtimeConverterController);
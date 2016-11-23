/**
 * Angularjs全般のユーティリティ。
 * @module ./scripts/libs/angular-utils
 */

/**
 * ブラウザの言語設定を取得する。
 * @returns 2文字の言語コード。取得失敗時は空文字列。
 */
function getBrowserLanguage(): string {
	try {
		return navigator.language.substr(0, 2);
	} catch (e) {
		return "";
	}
}

/**
 * アプリで使用する言語設定を取得する。
 * @returns 2文字の言語コード。
 */
function getLanguage(): string {
	// 日英のみ対応なので、日本語以外は英語で返す
	let lang = getBrowserLanguage();
	if (lang != "" && lang != "ja") {
		return "en";
	} else {
		return "ja";
	}
}

export default {
	getBrowserLanguage: getBrowserLanguage,
	getLanguage: getLanguage,
};
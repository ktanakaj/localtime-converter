/**
 * ロケール処理用のヘルパーモジュール。
 * @module ./app/shared/locale-helper
 */

/**
 * アプリで使用する言語設定を取得する。
 * @returns 2文字の言語コード。
 */
function getLanguage(): string {
	// 日英のみ対応なので、日本語以外は英語で返す
	let lang = getLocale().substr(0, 2);
	if (lang !== "" && lang !== "ja") {
		return "en";
	} else {
		return "ja";
	}
}

/**
 * アプリで使用するロケールを取得する。
 * @returns ロケールコード。
 */
function getLocale(): string {
	// 取得失敗時はデフォルトとしてアメリカを返す
	try {
		return navigator.language;
	} catch (e) {
		return "en-US";
	}
}

export default {
	getLanguage: getLanguage,
	getLocale: getLocale,
};
/**
 * ブラウザ関連のヘルパーモジュール。
 *
 * @module ./app/core/browser-helper
 */

/**
 * ブラウザのロケールを取得する。
 *
 * @returns ロケールコード。
 */
const getLocale = (): string => {
  // 取得失敗時はデフォルトとしてアメリカを返す
  try {
    return navigator.language;
  } catch (e) {
    return 'en-US';
  }
};

/**
 * ページの言語設定を取得する。
 *
 * @returns 2文字の言語コード。
 */
const getLanguage = (): string => {
  return getLocale().substr(0, 2);
};

export default {
  getLocale,
  getLanguage,
};

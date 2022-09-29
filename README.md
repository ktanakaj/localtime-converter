# Local Time Converter / ローカル日時変換
日時を指定したタイムゾーンでの日時に変換するミニWebアプリです。  
入力値としては、各種日時文字列の他Unixtimeと、JavaScriptのミリ秒まで含んだUnixtimeに対応します。  
（日時文字列は、単に `new Date()` するだけなので、JavaScriptが対応していれば何でも変換します。）

## 環境
* Angular 14
    * TypeScript 4.x
    * ngx-translate 14.x
    * Moment 2.2.x

### 対応ブラウザ
* &gt;= Google Chrome Ver106
* &gt;= Firefox Ver105
* &gt;= Safari (iOS 16)

### 開発環境
* Node.js 16
* Visual Studio Code

## 設置方法
JavaSriptオンリーで動いているので、ビルドしたファイルを適当な場所に設置すれば動作します。

### ビルド方法
ビルド等する場合は、プロジェクトのディレクトリにて `npm install` の上で、以下のコマンドを実行してください。

* `npm run build` - アプリのビルド
* `npm run watch` - アプリのビルド（デバッグ用）
* `npm run start` - アプリのデバッグ実行
* `npm test` - アプリのユニットテスト実行
* `npm run lint` - アプリの静的解析ツール実行
* `npm run clean` - 全ビルド生成物の削除

## 実行方法
ビルドしたファイルをWeb上においてアクセスしてください。

### デモ
https://ktanakaj.github.io/localtime-converter/

## 操作方法
日時文字列またやUnixtimeを入れれば自動的に変換されます。

日本語／英語両対応。ユーザーの環境に応じて自動的に切り替わります。

## ライセンス
[MIT](https://github.com/ktanakaj/localtime-converter/blob/master/LICENSE)

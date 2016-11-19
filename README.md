# Local Time Converter / ローカル日時変換
日時を指定したタイムゾーンでの日時に変換するミニWebアプリです。  
入力値としては、各種日時文字列の他Unixtimeと、JavaScriptのミリ秒まで含んだUnixtimeに対応します。  
（日時文字列は、単に `new Date()` するだけなので、JavaScriptが対応していれば何でも変換します。AngularJSとMoment呼ぶだけ。）

## 環境
* AngularJS 1.5.7
    * Bable 6.5.2
    * browserify 13.1.0
    * UI Bootstrap 1.3.3
    * Moment Timezone 0.5.9

### 対応ブラウザ
* &gt;= Google Chrome Ver51.0.2704.106
* &gt;= Microsoft Edge 38.14393.0.0
* &gt;= Firefox 48.0
* &gt;= Safari (iOS 10)

### 開発環境
* Vagrant 1.8.4 - 仮想環境管理
    * VirtualBox 5.0.24 - 仮想環境
    * vagrant-vbguest - Vagrantプラグイン
* Visual Studio Community 2015 (NTVS) - アプリ開発用IDE

## 設置方法
JavaScriptオンリーで作っているので、`app`以下のファイルを適当な場所に設置すれば動作します。  
ただし、babelを使用している関係上ビルドが必要です。

動作する仮想環境は、ソース一式の展開後に `vagrant up` で自動的に立ち上がります。

### ビルド方法
ビルド等する場合は `localtime-converter` ディレクトリにて以下のコマンドを実行してください。

* `npm run build` - アプリのビルド
* `npm run watch` - アプリのビルド（デバッグ用）
* `npm run doc` - アプリのAPIドキュメント生成
* `npm test` - アプリのユニットテスト実行
* `npm run eslint` - アプリの静的解析ツール実行
* `npm run clean` - 全ビルド生成物の削除

## 実行方法
`localtime-converter/app/` にWeb上からアクセスしてください。デフォルトのVMでは http://172.16.10.15/ でアクセス可能です。

### デモ
http://honeplus.web.fc2.com/localtime-converter/

## 操作方法
日時文字列またやUnixtimeを入れれば自動的に変換されます。

日本語／英語両対応。ユーザーの環境に応じて自動的に切り替わります。

## ライセンス
[MIT](https://github.com/ktanakaj/localtime-converter/blob/master/LICENSE)

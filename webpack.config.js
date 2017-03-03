﻿/**
 * @file webpack設定スクリプト。
 */
module.exports = {
	entry: './public/app/main.ts',
	output: {
		path: __dirname + '/public',
		filename: 'bundle.js'
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js", ".json"]
	},
	module: {
		rules: [{
			test: /\.tsx?$/,
			use: [
				{ loader: "ts-loader" },
			]
		}]
	},
	externals: {
		"moment": "moment",
	},
	watchOptions: {
		poll: 1000
	}
};
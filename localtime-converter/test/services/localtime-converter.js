"use strict";
/**
 * @file localtime-converter.jsのテスト。
 */
const assert = require('power-assert');

import localtimeConverterService from '../../app/scripts/services/localtime-converter';
const service = localtimeConverterService();

describe('localtimeConverterService', () => {
	describe('#newDate()', () => {
		it('should return new date instances', () => {
			let date = service.newDate(0);
			assert.strictEqual(date.getTime(), 0);
			assert.strictEqual(date.createdBy, 'unixtime');
			date = service.newDate('0');
			assert.strictEqual(date.getTime(), 0);
			assert.strictEqual(date.createdBy, 'unixtime');
			date = service.newDate('9999999999');
			assert.strictEqual(date.getTime(), 9999999999000);
			assert.strictEqual(date.createdBy, 'unixtime');
			date = service.newDate('10000000000');
			assert.strictEqual(date.getTime(), 10000000000);
			assert.strictEqual(date.createdBy, 'unixms');
			date = service.newDate('10000000000');
			assert.strictEqual(date.getTime(), 10000000000);
			assert.strictEqual(date.createdBy, 'unixms');
			date = service.newDate('2016-11-19T09:46:58.000Z');
			assert.strictEqual(date.getTime(), 1479548818000);
			assert.strictEqual(date.createdBy, 'dateString');
		});

		it('should throw exception when invalid string', () => {
			assert.throws(
				() => {
					service.newDate('1year ago');
				},
				Error
			);
		});
	});
});
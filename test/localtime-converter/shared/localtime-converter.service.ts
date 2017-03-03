/**
 * @file localtime-converter.service.jsのテスト。
 */
import * as assert from 'power-assert';
import 'mocha';
import 'reflect-metadata';

import { LocaltimeConverterService } from '../../../src/app/localtime-converter/shared/localtime-converter.service';
const service = new LocaltimeConverterService();

describe('localtimeConverterService', () => {
	describe('#newDate()', () => {
		it('should return new date instances', () => {
			let result = service.newDate(0);
			assert.strictEqual(result[0].getTime(), 0);
			assert.strictEqual(result[1], 'unixtime');
			result = service.newDate('0');
			assert.strictEqual(result[0].getTime(), 0);
			assert.strictEqual(result[1], 'unixtime');
			result = service.newDate('9999999999');
			assert.strictEqual(result[0].getTime(), 9999999999000);
			assert.strictEqual(result[1], 'unixtime');
			result = service.newDate('10000000000');
			assert.strictEqual(result[0].getTime(), 10000000000);
			assert.strictEqual(result[1], 'unixms');
			result = service.newDate('10000000000');
			assert.strictEqual(result[0].getTime(), 10000000000);
			assert.strictEqual(result[1], 'unixms');
			result = service.newDate('2016-11-19T09:46:58.000Z');
			assert.strictEqual(result[0].getTime(), 1479548818000);
			assert.strictEqual(result[1], 'dateString');
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
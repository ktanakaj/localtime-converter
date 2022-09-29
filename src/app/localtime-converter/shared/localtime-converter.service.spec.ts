/**
 * localtime-converter.service.jsのテスト。
 *
 * @module ./app/localtime-converter/shared/localtime-converter.service.spec
 */
import { TestBed, inject } from '@angular/core/testing';

import { LocaltimeConverterService } from './localtime-converter.service';

describe('LocaltimeConverterService', () => {
  beforeEach(async () => {
    TestBed.configureTestingModule({
      providers: [
        LocaltimeConverterService,
      ],
    });
  });

  describe('#newDate()', () => {
    it('should return new date instances', inject([LocaltimeConverterService], (service: LocaltimeConverterService) => {
      let result = service.newDate(0);
      expect(result[0].getTime()).toBe(0);
      expect(result[1]).toBe('unixtime');

      result = service.newDate('0');
      expect(result[0].getTime()).toBe(0);
      expect(result[1]).toBe('unixtime');

      result = service.newDate('9999999999');
      expect(result[0].getTime()).toBe(9999999999000);
      expect(result[1]).toBe('unixtime');

      result = service.newDate('10000000000');
      expect(result[0].getTime()).toBe(10000000000);
      expect(result[1]).toBe('unixms');

      result = service.newDate('10000000000');
      expect(result[0].getTime()).toBe(10000000000);
      expect(result[1]).toBe('unixms');

      result = service.newDate('2016-11-19T09:46:58.000Z');
      expect(result[0].getTime()).toBe(1479548818000);
      expect(result[1]).toBe('dateString');
    }));

    it('should throw exception when invalid string', inject([LocaltimeConverterService], (service: LocaltimeConverterService) => {
      expect(() => service.newDate('1year ago')).toThrowError();
    }));
  });
});

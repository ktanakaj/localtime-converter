/**
 * Date変換可否バリデーションディレクティブ。
 *
 * @module ./app/localtime-converter/shared/valid-date
 */
import { Directive } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, Validator, ValidatorFn, ValidationErrors } from '@angular/forms';
import { LocaltimeConverterService } from './localtime-converter.service';

/**
 * Date変換可否バリデーションディレクティブクラス。
 */
@Directive({
	selector: '[appValidDate]',
	providers: [
		{ provide: NG_VALIDATORS, useExisting: DateValidatorDirective, multi: true },
		LocaltimeConverterService,
	]
})
export class DateValidatorDirective implements Validator {
	/**
	 * サービスを使用するコンポーネントを生成する。
	 *
	 * @param service ローカル日時変換サービス。
	 */
	constructor(
		private service: LocaltimeConverterService) { }

	/**
	 * バリデーションを実行する。
	 *
	 * @param control コントロール。
	 * @returns バリデーション結果。
	 */
	validate(control: AbstractControl): ValidationErrors | null {
		return dateValidator(this.service)(control);
	}
}

/**
 * Date変換可否バリデーションファクトリー。
 *
 * @param service ローカル日時変換サービス。
 * @returns バリデーション関数。
 */
export function dateValidator(service: LocaltimeConverterService): ValidatorFn {
	return (control: AbstractControl): ValidationErrors | null => {
		const date = control.value;
		if (date === undefined || date === null || date === '') {
			return null;
		}
		// Dateとして解釈できない値が設定されている場合NG
		try {
			service.newDate(date);
		} catch (e) {
			return { 'validDate': { date } };
		}
		return null;
	};
}

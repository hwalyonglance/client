import { Component, OnInit, AfterViewInit, AfterViewChecked, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContainerComponent } from '../container/container.component';
import { authFormErrors, authFormRules, authFormValidationMessages } from './auth.form';
@Component({
	selector: 'app-auth',
	templateUrl: './auth.component.html',
	styleUrls: ['./auth.component.scss']
})
	export class AuthComponent /*implements OnInit, AfterViewInit, AfterViewChecked*/ {
	@ViewChild(ContainerComponent) _cC: ContainerComponent;
	authForm: FormGroup;
	constructor(private fb: FormBuilder) {}
	sideNavToggle(): void {
		this._cC.sideNavToggle();
	}
	buildAuthForm(): void {
		this.authForm = this.fb.group({
			username: ['', [
				this.isRequired(authFormRules.username.required),
				Validators.minLength(8), Validators.maxLength(32)]
			], password: ['', [
				Validators.required, Validators.minLength(8), Validators.maxLength(32)]
			], notRobot: ['', [Validators.required]]
		});
		this.authForm.valueChanges
			.subscribe(data => this.onValueChanged(data));
	}
	onValueChanged(data?: any) {
		if (!this.authForm) { return; }
		const form = this.authForm;
		for (const field in authFormErrors) {
			// clear previous error message (if any)
			authFormErrors[field] = '';
			const control = form.get(field);
			if (control && control.dirty && !control.valid) {
				const messages = authFormValidationMessages[field];
				// tslint:disable-next-line:forin
				for (const key in control.errors) {
					authFormErrors[field] += messages[key] + ' ';
				}
			}
		}
	}
	isRequired(cond: boolean): any {
		return cond ? Validators.required : null;
	}
}

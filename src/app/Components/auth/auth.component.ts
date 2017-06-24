import { Component, OnInit, AfterViewInit, AfterViewChecked, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContainerComponent } from '../container/container.component';

@Component({
	selector: 'app-auth',
	templateUrl: './auth.component.html',
	styleUrls: ['./auth.component.scss']
})
	export class AuthComponent /*implements OnInit, AfterViewInit, AfterViewChecked*/ {
	@ViewChild(ContainerComponent) _cC: ContainerComponent;
	authForm: FormGroup;
	authFormErrors = {
		'username': '',
		'password': ''
	};
	authFormRules = {
		username: {
			required: true,
			minlength: 8,
			maxlength: 32
		},
		password: {
			required: true,
			minlength: 8,
			maxlength: 32
		}
	};
	authFormValidationMessages = {
		'username': {
			'required': 'Username is required.',
			'minlength': 'Username must be at least 8 characters long.',
			'maxlength': 'Name cannot be more than 32 characters long.'
		},
		'password': {
			'required': 'Power is required.',
			'minlength': 'Password must be at least 8 characters long.',
			'maxlength': 'Password cannot be more than 32 characters long.'
		}
	};
	constructor(private fb: FormBuilder) {}
	sideNavToggle(): void {
		this._cC.sideNavToggle();
	}
	buildAuthForm(): void {
		this.authForm = this.fb.group({
			username: ['', [
				this.isRequired(this.authFormRules.username.required),
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
		// tslint:disable-next-line:forin
		for (const field in this.authFormErrors) {
			// clear previous error message (if any)
			this.authFormErrors[field] = '';
			const control = form.get(field);
			if (control && control.dirty && !control.valid) {
				const messages = this.authFormValidationMessages[field];
				// tslint:disable-next-line:forin
				for (const key in control.errors) {
					this.authFormErrors[field] += messages[key] + ' ';
				}
			}
		}
	}
	isRequired(cond: boolean): any {
		return cond ? Validators.required : null;
	}
}

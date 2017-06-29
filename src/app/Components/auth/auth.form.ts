export const authFormErrors = {
	'username': '',
	'password': ''
};
export const authFormRules = {
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
export const authFormValidationMessages = {
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

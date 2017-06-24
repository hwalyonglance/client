import { Component, Inject } from '@angular/core';
import { APP_SHELL_DIRECTIVES, IS_PRERENDER } from '@angular/app-shell';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'app';
	constructor(@Inject(IS_PRERENDER) isPrerender: boolean) {
		if ( !isPrerender ) {
			// fetch some data
		}
	}
}

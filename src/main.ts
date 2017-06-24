import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { APP_SHELL_BUILD_PROVIDERS } from '@angular/app-shell';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
	enableProdMode();
}
platformBrowserDynamic()
	.bootstrapModule(AppModule, APP_SHELL_BUILD_PROVIDERS)
	.then(() => {
		if ( 'serviceWorker' in navigator) {
			navigator.serviceWorker.register('/worker-basic.min.js');
		}
	});

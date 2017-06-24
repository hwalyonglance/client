declare var process: any;
declare var System: any;

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export function getLazyModule() {
	return System.import('./+lazy/lazy.module' + (process.env.AOT ? '.ngfactory' : ''))
		.then(mod => mod[(process.env.AOT ? 'LazyModuleNgFactory' : 'LazyModule')]);
}

import { HomeComponent } from './Components/home/home.component';
import { AuthComponent } from './Components/auth/auth.component';
export const ROUTES: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'auth', component: AuthComponent },
	// { path: 'lazy', loadChildren: getLazyModule},
	{ path: '**', pathMatch: 'full', redirectTo: '/' },
];

@NgModule({
	imports: [RouterModule.forRoot(ROUTES)],
	exports: [RouterModule]
})
export class AppRoutingModule { }

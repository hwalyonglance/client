import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './Components/home/home.component';

const routes: Routes = [
	// { path: '', component: HomeComponent },
	{ path: 'inbox', component: HomeComponent, children: [
		{ path: 'outbox', component: HomeComponent},
		{ path: 'spam', component: HomeComponent },
		{ path: 'trash', component: HomeComponent },
		{ path: 'none', component: HomeComponent },
	]},
	{ path: '**', pathMatch: 'full', redirectTo: '/inbox' },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }

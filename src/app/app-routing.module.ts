import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './Components/home/home.component';
import { AuthComponent } from './Components/auth/auth.component';
const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'auth', component: AuthComponent},
	{ path: '**', pathMatch: 'full', redirectTo: '/' },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }

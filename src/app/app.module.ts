import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { APP_SHELL_BUILD_PROVIDERS, APP_SHELL_DIRECTIVES, IS_PRERENDER } from '@angular/app-shell';

import { AppRoutingModule } from './app-routing.module';
import 'hammerjs';

// ------------------
import { HomeModule } from './+home/home.module';
import { AboutModule } from './+about/about.module';
import { TodoModule } from './+todo/todo.module';
import { SharedModule } from './shared/shared.module';
// ------------------

import { AppService } from './Services/app/app.service';

import { AppComponent } from './app.component';
export { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { ContainerComponent } from './Components/container/container.component';
import { SidenavComponent } from './Components/sidenav/sidenav.component';
import { AuthComponent } from './Components/auth/auth.component';
import { NavComponent } from './Components/nav/nav.component';
import { FooterComponent } from './Components/footer/footer.component';
@NgModule({
	declarations: [
		APP_SHELL_DIRECTIVES, IS_PRERENDER,
		AppComponent,
		HomeComponent,
		ContainerComponent,
		SidenavComponent,
		AuthComponent,
		NavComponent,
		FooterComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		NoopAnimationsModule,
		MaterialModule,
		RouterModule,
		SharedModule,
		HomeModule,
		AboutModule,
		TodoModule
	],
	providers: [
		APP_SHELL_BUILD_PROVIDERS,
		AppService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }

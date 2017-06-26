import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import 'hammerjs';

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
		AppComponent,
		HomeComponent,
		ContainerComponent,
		SidenavComponent,
		AuthComponent,
		NavComponent,
		FooterComponent,
	],
	imports: [
		AppRoutingModule, BrowserAnimationsModule, BrowserModule, FlexLayoutModule,
		FormsModule, ReactiveFormsModule, MaterialModule, NoopAnimationsModule, RouterModule
	],
	providers: [
		AppService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }

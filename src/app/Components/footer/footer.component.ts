import { Component, OnInit, AfterViewInit, AfterViewChecked, ViewChild } from '@angular/core';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, AfterViewInit, AfterViewChecked {
	since = '2016';
	now: string;
	constructor() {
		this.now = (new Date()).getFullYear().toString();
	}
	ngOnInit() {}
	ngAfterViewInit() {}
	ngAfterViewChecked() {}

}

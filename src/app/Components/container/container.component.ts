import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { MdSidenav } from '@angular/material';

@Component({
	selector: 'app-container',
	templateUrl: './container.component.html',
	styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
	SMALL_WIDTH_BREAKPOINT = 700;
	@ViewChild('mainsidenav') mainSideNav: MdSidenav;
	constructor() {}
	ngOnInit() {}
	sideNavToggle(): void {
		this.mainSideNav.toggle();
	}
	isScreenSmall(): boolean {
		return window.matchMedia(`(max-width: ${this.SMALL_WIDTH_BREAKPOINT}px)`).matches;
	}
}

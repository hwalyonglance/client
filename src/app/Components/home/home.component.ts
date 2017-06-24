import { Component, OnInit, AfterViewInit, AfterViewChecked, ViewChild} from '@angular/core';
import { ContainerComponent } from '../container/container.component';
@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit, AfterViewChecked {
	@ViewChild(ContainerComponent) _cC: ContainerComponent;
	constructor() {}

	ngOnInit() {}
	ngAfterViewInit() {}
	ngAfterViewChecked() {}
	sideNavToggle(): void {
		this._cC.sideNavToggle();
	}
}

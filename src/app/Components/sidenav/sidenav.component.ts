import { Component, OnInit } from '@angular/core';
import { AppService } from '../../Services/AppService/app.service';
@Component({
	selector: 'app-sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
	activeList: string;
	links: any[] = [
		{ name: 'Inbox', url: '/inbox'},
		{ name: 'Outbox', url: '/', child: [
			{ name: 'One', url: 'outbox/one'},
			{ name: 'Two', url: 'outbox/two'},
			{ name: 'Three', url: 'outbox/three'},
		]},
		{ name: 'Spam', url: 'spam'},
		{ name: 'Trash', url: 'trash'},
		{ name: 'None', url: '/', child: [
			{ name: 'Foo', url: 'none/foo'},
			{ name: 'Bar', url: 'none/bar'},
			{ name: 'Baz', url: 'none/baz'}
		]},
	];
	constructor(app: AppService) {
		this.activeList = window.location.pathname.replace('/inbox/', '');
		console.log(this.activeList);
		console.log(app);
	}
	ngOnInit() {}

}

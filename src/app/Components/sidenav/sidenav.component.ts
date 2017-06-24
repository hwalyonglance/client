import { Component, OnInit } from '@angular/core';
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
	constructor() {}
	ngOnInit() {}

}

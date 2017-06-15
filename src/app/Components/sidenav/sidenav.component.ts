import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
	links: any[] = [
		{ name: 'Inbox'},
		{ name: 'Outbox', child: [
			{ name: 'One'},
			{ name: 'Two'},
			{ name: 'Three'},
		]},
		{ name: 'Spam'},
		{ name: 'Trash'},
		{ name: 'None', child: [
			{ name: 'Foo'},
			{ name: 'Bar'},
			{ name: 'Baz'}
		]},
	];
	constructor() { }

	ngOnInit() {}

}

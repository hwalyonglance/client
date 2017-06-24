import { Injectable } from '@angular/core';

@Injectable()
export class AppService {
	hostname = 'localhost';
	port = '8000';
	host = this.hostname + ':' + this.port;
	protocol = 'http:';
	origin = this.protocol + '//' + this.host;
	pathname = '/foo/bar/baz';
	href = this.origin + this.pathname;
	constructor() { }

}

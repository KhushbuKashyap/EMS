import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class CommonService {

	data = [];
	httpLink = ''; _url = '';
	origin = window.location.origin + '/';
	imgurl: string;


	constructor() {
		if (this.origin === 'http://localhost:4200/') {
			this.httpLink = 'http://localhost:44359/';
		}
		else if (this.origin === '') {
			this.httpLink = '';
			this.imgurl = '';
		}
	}

	GetHost() {
		return this.httpLink;
	}


	handleError(error: any, _sessionCall: any, _notification: any) {

		let _ = this;
		try {
			let errorMessage = '';
			var statusCode = error.status;
			if (this.data.length != 0) {
				console.log(error.status);
			}
			if (statusCode === '401' || statusCode === 401) {
				// _notification.error('Your session is expired. Please login again.', 'Session expired')
				// _sessionCall.logout(this._sessionCall.getLoginLoggedType());
				console.log(error.status);
			} else {
				var err = error.error;
				if (err instanceof ErrorEvent) {
					// client-side error
					errorMessage = `Error: ${err.message}`;


				} else {

					// server-side error
					errorMessage = `Error Code: ${error.status}\nMessage: ${err.Message}`;
					var statusCode = error.status;
					if (statusCode === '401' || statusCode === 401) {
						// _notification.error('Your session is expired. Please login again.', 'Session expired');
						// _sessionCall.logout(this._sessionCall.getLoginLoggedType());
						console.log(error.status);
					} else {
						console.log(error.status);
						console.log(err.ExceptionMessage, errorMessage)
						// _notification.error(err.ExceptionMessage, errorMessage);
					}
				}
				console.log(error)
				console.log(error.message)
				// return _notification.error(error.message);
			}
		} catch (error) {
			console.log(error);
			return _notification.error(error)
		}
	}
}

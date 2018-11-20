import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	constructor() {
		// Initialize Firebase
		const config = {
			apiKey: 'AIzaSyAaBJ1famygMK71w7Zx96TnH4QBPOOwC4c',
			authDomain: 'angular-twd.firebaseapp.com',
			databaseURL: 'https://angular-twd.firebaseio.com',
			projectId: 'angular-twd',
			storageBucket: 'angular-twd.appspot.com',
			messagingSenderId: '669905926827'
		};
		firebase.initializeApp(config);
	}
}

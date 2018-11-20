import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
	selector: 'app-liste',
	templateUrl: './liste.component.html',
	styleUrls: ['./liste.component.scss']
})
export class ListeComponent implements OnInit {

	characterList: any[];

	constructor() { }

	ngOnInit() {
		this.getCharacters();
	}

	getCharacters() {
		firebase.database().ref('/characters').on('value', (data) => {
			this.characterList = data.val() ? data.val() : [];
		}
		);
	}


}

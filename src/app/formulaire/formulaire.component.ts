import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import * as firebase from 'firebase';

@Component({
	selector: 'app-formulaire',
	templateUrl: './formulaire.component.html',
	styleUrls: ['./formulaire.component.scss']
})
export class FormulaireComponent implements OnInit {

	characterList: any[];

	constructor(private formBuilder: FormBuilder) { }

	myForm = this.formBuilder.group({
		name: [''],
		pictureUrl: ['']
	});

	ngOnInit() {
		this.getCharacters();
	}

	getCharacters() {
		firebase.database().ref('/characters').on('value', (data) => {
			this.characterList = data.val() ? data.val() : [];
		}
		);
	}


	onSubmit() {
		if (this.myForm.value.name && this.myForm.value.pictureUrl) {
			this.characterList.push(this.myForm.value);
			firebase.database().ref('/characters').set(this.characterList);
			this.myForm.reset();
			console.log('saved');
		} else {
			alert('Un personnage sans nom ni image ? Ça passera pas !');
		}
	}

}

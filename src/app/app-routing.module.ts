import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { ListeComponent } from './liste/liste.component';

const routes: Routes = [
	{ path: '', component: ListeComponent },
	{ path: 'add', component: FormulaireComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }

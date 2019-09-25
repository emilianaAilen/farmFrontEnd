import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FarmsListComponent } from './farms-list/farms-list.component';
import { ChickensListComponent } from './chickens-list/chickens-list.component';
import { ChickensEditComponent } from './chickens-edit/chickens-edit.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'farms-list' },
  { path: 'farms-list', component: FarmsListComponent },
  { path: 'chickens-list', component: ChickensListComponent },
  { path: 'chickens-list/:id', component: ChickensListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

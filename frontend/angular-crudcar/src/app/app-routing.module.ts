import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrudcarComponent } from "./crudcar/crudcar.component";

const routes: Routes = [
  {path: '', component: CrudcarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

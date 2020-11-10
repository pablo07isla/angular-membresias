import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteDescriptionComponent } from './cliente-description/cliente-description.component';
import { ClienteListComponent } from './cliente-list/cliente-list.component';

const routes: Routes = [
  { path: 'clientes', component: ClienteListComponent },
  { path: '', redirectTo: 'clientes', pathMatch: 'full' },
  { path: 'cliente/:id', component: ClienteDescriptionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

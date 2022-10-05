

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes enrutados
import { ClientesComponent } from './pages/clientes/clientes.component';
import { ContactosComponent } from './pages/contactos/contactos.component';
import { InicioComponent } from './pages/inicio/inicio.component';

const routes: Routes = [
  { path: '',   redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'contactanos', component: ContactosComponent },
  // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

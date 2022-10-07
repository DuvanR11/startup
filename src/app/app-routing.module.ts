import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes enrutados
import { ClientesComponent } from './pages/clientes/clientes.component';
import { ContactosComponent } from './pages/contactos/contactos.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { SolicitudComponent } from './pages/admin/solicitud/solicitud.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';

const routes: Routes = [
  { path: '',   redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'contactanos', component: ContactosComponent },
  // Administrador
  { path: 'dashboard', component: DashboardComponent },
  { path: 'solicitud', component: SolicitudComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

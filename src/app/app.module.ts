import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { ContactosComponent } from './pages/contactos/contactos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Modulos Angular Material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { AsociadosComponent } from './sliders/asociados/asociados.component';
import { ProyectosComponent } from './sliders/proyectos/proyectos.component';
import { ContactanosComponent } from './formularios/contactanos/contactanos.component';
import { LoginComponent } from './formularios/login/login.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { WhatsappComponent } from './components/whatsapp/whatsapp.component';
import { MensajesComponent } from './sliders/mensajes/mensajes.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { TestimoniosComponent } from './components/testimonios/testimonios.component';
import { AgendayaComponent } from './components/agendaya/agendaya.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { SolicitudComponent } from './pages/admin/solicitud/solicitud.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';



@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    HeaderComponent,
    FooterComponent,
    ClientesComponent,
    ContactosComponent,
    AsociadosComponent,
    ProyectosComponent,
    ContactanosComponent,
    LoginComponent,
    ServiciosComponent,
    WhatsappComponent,
    MensajesComponent,
    NosotrosComponent,
    TestimoniosComponent,
    AgendayaComponent,
    DashboardComponent,
    SolicitudComponent,
    NotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    CarouselModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

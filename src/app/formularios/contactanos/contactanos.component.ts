import { NotificationsService } from './../../services/notifications.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactanosService } from 'src/app/services/contactanos.service';

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrls: ['./contactanos.component.scss']
})
export class ContactanosComponent implements OnInit {
  model = {
    text: 'Dominicode',
  };
  formulario: FormGroup
  sercivios = [
    {
      id: 1,
      src: 'https://mattfarley.ca/img/projects/wfdesignbuild.png',
      text: 'Desarrollo de tiendas'
    },
    {
      id: 2,
      src: 'https://mattfarley.ca/img/projects/burkettandco.png',
      text: 'Marketing Digital'
    },
    {
      id: 3,
      src: 'https://mattfarley.ca/img/projects/chronicled.png',
      text: 'Sistema punto de venta'
    },
    {
      id: 4,
      src: 'https://mattfarley.ca/img/projects/glcsolutions.png',
      text: 'Soporte Web'
    },
    {
      id: 5,
      src: 'https://mattfarley.ca/img/projects/coupal.png',
      text: 'Soporte Web'
    },
    {
      id: 6,
      src: 'https://mattfarley.ca/img/projects/wedlerengineering.png',
      text: 'Soporte Web'
    },
  ]

  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(private contactanostSvc: ContactanosService, private notificationsSvc: NotificationsService) {
    this.formulario = new FormGroup({
      nombres: new FormControl('', [Validators.required, Validators.minLength(3)]),
      apellidos: new FormControl('', [Validators.required, Validators.minLength(3)]),
      telefono: new FormControl('', [Validators.required, Validators.minLength(10)]),
      correo: new FormControl('', [Validators.required, Validators.minLength(6), Validators.pattern(this.emailPattern)]),
      categoria: new FormControl('', [Validators.required]),
      descripcion: new FormControl('', [Validators.required, Validators.minLength(10)]),
    })
  }

  ngOnInit(): void {
  }

  onResetForm(): void {
    this.formulario.reset();
  }

  enviarSolicitud(): void {
    if(this.formulario.valid){
      const response = this.contactanostSvc.addContacto(this.formulario.value)
      console.log(response);
      this.onResetForm();
      this.notificationsSvc.addSuccess('Envio Exitoso');
      console.log('Valido')
    }else{
      this.notificationsSvc.addDanger('Error al Enviar');
      console.log('No valido')
    }
  }
}

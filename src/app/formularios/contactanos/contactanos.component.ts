import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ContactanosService } from 'src/app/services/contactanos.service';

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrls: ['./contactanos.component.scss']
})
export class ContactanosComponent implements OnInit {

  formulario: FormGroup

  constructor(private contactanostSvc: ContactanosService) {
    this.formulario = new FormGroup({
      nombres: new FormControl(),
      apellidos: new FormControl(),
      telefono: new FormControl(),
      correo: new FormControl(),
      descripcion: new FormControl(),
    })
  }

  ngOnInit(): void {
  }

  enviarSolicitud(): void {
    console.log(this.formulario.value)
    const response = this.contactanostSvc.addContacto(this.formulario.value)
    console.log(response)
  }
}

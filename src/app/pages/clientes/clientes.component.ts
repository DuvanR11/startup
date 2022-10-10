import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {
  }

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
}

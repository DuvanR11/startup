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
      src: 'https://img.freepik.com/vector-premium/equipo-discusion-programador-o-desarrollador-cuando-trabaja-oficina-tema-fondo-relacionado_197170-130.jpg',
      text: 'Desarrollo de software a la medida'
    },
    {
      id: 2,
      src: 'https://img.freepik.com/vector-premium/equipo-discusion-programador-o-desarrollador-cuando-trabaja-oficina-tema-fondo-relacionado_197170-130.jpg',
      text: 'Marketing Digital'
    },
    {
      id: 3,
      src: 'https://img.freepik.com/vector-premium/equipo-discusion-programador-o-desarrollador-cuando-trabaja-oficina-tema-fondo-relacionado_197170-130.jpg',
      text: 'Sistema punto de venta'
    },
    {
      id: 4,
      src: 'https://img.freepik.com/vector-premium/equipo-discusion-programador-o-desarrollador-cuando-trabaja-oficina-tema-fondo-relacionado_197170-130.jpg',
      text: 'Soporte Web'
    },
    {
      id: 5,
      src: 'https://img.freepik.com/vector-premium/equipo-discusion-programador-o-desarrollador-cuando-trabaja-oficina-tema-fondo-relacionado_197170-130.jpg',
      text: 'Alojamiento web'
    },
  ]
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent implements OnInit {


  sercivios = [
    {
      id: 1,
      src: 'https://digitalepartner.com/wp-content/uploads/2020/12/v-copia-2.png',
      text: 'Desarrollo de tiendas'
    },
    {
      id: 2,
      src: 'https://digitalepartner.com/wp-content/uploads/2020/12/v.png',
      text: 'Marketing Digital'
    },
    {
      id: 3,
      src: 'https://digitalepartner.com/wp-content/uploads/2020/12/v-copia-1.png',
      text: 'Sistema punto de venta'
    },
    {
      id: 4,
      src: 'https://digitalepartner.com/wp-content/uploads/2020/12/v-copia-3-1.png',
      text: 'Soporte Web'
    },

  ]

  constructor() { }

  ngOnInit(): void {
  }

}

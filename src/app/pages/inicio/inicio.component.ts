import { Component, OnInit, VERSION  } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  dynamicSlides = [
    {
      id: 1,
      src:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png',
      alt:'Side 1',
      title:'Side 1'
    },
    {
      id: 2,
      src:'https://i0.wp.com/www.nsit.com.co/wp-content/uploads/2020/07/Logo-Microsoft.png?fit=900%2C255&ssl=1',
      alt:'Side 2',
      title:'Side 2'
    },
    {
      id: 3,
      src:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png',
      alt:'Side 3',
      title:'Side 3'
    },
    {
      id: 4,
      src:'https://www.abd.es/wp-content/uploads/2021/03/principal.png',
      alt:'Side 4',
      title:'Side 4'
    },
    {
      id: 5,
      src:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Spotify_logo_with_text.svg/1200px-Spotify_logo_with_text.svg.png',
      title:'Side 5'
    }
  ]

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

 customOptions: OwlOptions = {
   margin: 10,
   autoWidth:false,
   autoHeight:false,
   loop: true,
   autoplay: true,
   mouseDrag: true,
   touchDrag: false,
   pullDrag: false,
   dots: false,
   navSpeed: 100,
   navText: ['&#8249', '&#8250;'],
   responsive: {
     0: {
       items: 1
     },
     400: {
       items: 2
     },
     760: {
       items: 3
     },
     1000: {
       items: 4
     }
   },
   nav: false
 }
}

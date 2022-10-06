import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-asociados',
  templateUrl: './asociados.component.html',
  styleUrls: ['./asociados.component.scss']
})
export class AsociadosComponent implements OnInit {

  dynamicSlides = [
    {
      id: 1,
      src:'http://www.multiplicalia.com/wp-content/uploads/2015/02/Facebook-logo.png',
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
      id: 5,
      src:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Spotify_logo_with_text.svg/1200px-Spotify_logo_with_text.svg.png',
      title:'Side 5'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }
  customOptions: OwlOptions = {
    margin: 20,
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

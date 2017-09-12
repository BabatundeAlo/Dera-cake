import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
Collections: any[]= [
   {
    'Clothid': 1,
    'Make': 'Gucci',
    'imageURL': 'assets/img/_gix2255.jpg'

},
{
 'Clothid': 2,
    'Make': 'Prada',
    'imageURL': 'assets/img/_gix2720_fase 2.jpg'
},
{
  'Clothid': 3,
    'Make': 'Versace',
    'imageURL': 'assets/img/1_halo4.jpg',
},
];
  constructor() { }

  ngOnInit() {
  }

}

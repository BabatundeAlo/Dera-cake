import { Component, OnInit } from '@angular/core';

export class Pricings {
  id: number;
  name: string;
}

@Component({
  selector: 'app-pricings',
  templateUrl: './pricings.component.html',
  styleUrls: ['./pricings.component.scss']
})
export class PricingsComponent implements OnInit {
  id: number;
name: string;
pricing: Pricings = {
  id: 1,
  name: 'Windstorm'
};
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

products = [
 {
    id:1,
    name: 'Goku',
    description: 'dragon ball',
    price: 'P100000.00',
    image:'https://pbs.twimg.com/profile_images/1053055123193122816/IUwo6l_Q_400x400.jpg'
 },
 {
    id:2,
    name: 'Naruto',
    description: 'naruto',
    price: 'P200000.00',
    image:'https://cdn.staticneo.com/w/naruto/Nprofile2.jpg',
 },
 {
  id:3,
  name: 'Luffy',
  description: 'one piece',
  price: 'P300000.00',
  image:'https://i.redd.it/ji6mzwuhv2z21.jpg',
}

]

  constructor() { }

  ngOnInit(): void {
  }

}

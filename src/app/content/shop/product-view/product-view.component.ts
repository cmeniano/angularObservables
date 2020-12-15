import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit, OnDestroy {

  selectedProduct:any;
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

  constructor(private router:ActivatedRoute, private _globalService: GlobalService) {
    // this.router.snapshot.params.id
   }

  ngOnInit(): void {
    this.router.params.subscribe(
      (params: Params) => {
        const id = params.id;
        const selected = this.products.filter(
          (product) => {
            return + product.id === +id;
          }
        );    
        
        if(selected.length > 0)
        {
          this.selectedProduct = selected[0];
          //post
          this._globalService.subjectName.next(this.selectedProduct.name);
        }

      }
    );
  }

  ngOnDestroy(): void{
    this._globalService.subjectName.next('');
  }

}

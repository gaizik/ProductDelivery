import { Subject, of } from 'rxjs';
import { SProductsService } from './../sproducts.service';
import { Component, OnInit, Pipe } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  ProductList = [];
 query ="";
   startPoint = 0;
  endPoint = 5;
  pages = 1;
Pipe =0 ;
totalPages = this.ProductList.length / 5 ;

  constructor(private service : SProductsService) {
    this.ProductList = this.service.getProduct();
   this.service.queryChange.subscribe(q =>  this.query = q );
   this.service.pipeChange.subscribe(p => this.Pipe = p);
   }

   geteditItem(e){
     this.service.changeEdititem(e);
   }


   next() {
    if (this.endPoint < this.ProductList.length) {
      this.startPoint += 5;
      this.endPoint += 5;
    }
    this.pages  = ( (this.startPoint + 5 )    / 5);
    this.totalPages = (this.ProductList.length / 5);
  }
  previous() {
    if (this.startPoint > 0) {
      this.startPoint -= 5;
      this.endPoint -= 5;
    }
    this.pages  = ((this.startPoint + 5 )  / 5);

  }


  ngOnInit() {

  }

}

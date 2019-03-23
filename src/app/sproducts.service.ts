import { Injectable, Output, EventEmitter } from '@angular/core';
import {FiltersComponent} from './filters/filters.component';
import {IProduct} from "./Product";

import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SProductsService {
  url = "https://msbit-exam-products-store.firebaseio.com/deliveryProducts/products.json";

  productsList: IProduct[] = [];
  editItem:IProduct;
  newProduct:IProduct;


  @Output() queryChange: EventEmitter<string> = new EventEmitter();
  @Output() pipeChange: EventEmitter<number> = new EventEmitter();


  private editItemSource = new BehaviorSubject<IProduct>(this.editItem);
    item = this.editItemSource.asObservable();



  constructor( private http: HttpClient ) {
  }


changeQuery(q:string){
this.queryChange.emit(q);
}

changeEdititem(e:IProduct){
  this.editItemSource.next(e);
}

changePipe(p:number){
  this.pipeChange.next(p);
}

  getProduct(): IProduct[]{
     this.http.get<any>(this.url).subscribe(obj => {
      obj.forEach(x => {
        if (x.fedex) {
          this.newProduct = {
            name: x.fedex.name,
            id: x.fedex.id,
            description: x.fedex.description,
            ThumbnailImage: x.fedex.thumbnailUrl,
            price: x.fedex.price,
            creationDate: x.fedex.creationDate,
            bigImage: x.fedex.url
          };
          this.productsList.push(this.newProduct);
        }
        if (x.ups) {
          for (let i = 0; i < x.ups.length; i++) {
            this.newProduct = {
              name: x.ups[i].name,
              id: x.ups[i].id,
              description: x.ups[i].description,
              ThumbnailImage: x.ups[i].thumbnailUrl,
              price: x.ups[i].price,
              creationDate: x.ups[i].creationDate,
              bigImage: x.ups[i].url
            };
            this.productsList.push(this.newProduct);
          }
        } else if (x.name !== undefined) {
          this.newProduct = {
            name: x.name,
            id: x.id,
            description: x.description,
            ThumbnailImage: x.thumbnailUrl,
            price: x.price,
            creationDate: x.creationDate,
            bigImage: x.url
          };
          this.productsList.push(this.newProduct);
        }
      });

     })
     return this.productsList;

  }

}

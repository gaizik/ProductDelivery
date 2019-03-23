import { Component, OnInit, Injectable } from '@angular/core';
import { SProductsService } from './../sproducts.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export  class FiltersComponent implements OnInit {

  state:number;
  Query ='';
  selectOp = [
    { name: "product name", value: 0 },
    { name: "product Price", value: 1 }
  ];

  constructor(private service : SProductsService ) {

  }
  setQuery(){
   this.service.changeQuery(this.Query);
  }
  setpipeState(){
    this.service.changePipe(this.state);
          console.log(this.state)
  }



  ngOnInit() {

  }

}

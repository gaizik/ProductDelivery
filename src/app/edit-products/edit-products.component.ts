import { IProduct } from './../Product';
import { Component, OnInit } from '@angular/core';
import { SProductsService } from './../sproducts.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-edit-products',
  templateUrl: './edit-products.component.html',
  styleUrls: ['./edit-products.component.scss']
})
export class EditProductsComponent implements OnInit {
  EditItem: IProduct;
  editForm : FormGroup;
  submitted = false;

  constructor( private formbuilder: FormBuilder, private service : SProductsService) {
    this.service.item.subscribe(e => {this.EditItem = e ; this.generteForm(); } );
  }
generteForm(){
  this.editForm = this.formbuilder.group({
    editName: ['', [Validators.required]],
    editDiscribtion: ['', [Validators.required,  Validators.minLength(25)]],
    editPrice:['', [Validators.required, Validators.min(1)]]
  });
}
  ngOnInit() {

  }

  get f() { return this.editForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.editForm.invalid) {
      console.log(this.editForm.invalid);
      return;
    }
  }
}

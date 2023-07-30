import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Item } from 'src/app/models/item.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  @Output() itemDog = new EventEmitter<Item>();
  @Output() openCart = new EventEmitter();
  // listDog: Item[] = [];
  form = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(200000),
    quantity: new FormControl(1),
    description: new FormControl(''),
  });
  onSubmit() {
    console.log(this.form.value);

    let Dog = <Item>{
      name: this.form.value.name,
      price: this.form.value.price,
      quantity: this.form.value.quantity,
      description: this.form.value.description,
      image: 'https://product.hstatic.net/200000722513/product/umbphim-recovered-recovered-recovered_b5c814186337478cadc98c2395fda090_5323cd03000e4ebe91127cbaac626292_master.gif',
    };

  this.itemDog.emit(Dog);
  }
  openDialog() {
    this.openCart.emit();
  }
  @Output() closeFormDialog = new EventEmitter();
  close() { 
    this.closeFormDialog.emit();
  }
}



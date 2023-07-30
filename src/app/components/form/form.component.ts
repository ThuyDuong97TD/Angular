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
      image: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MK2A3?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1628010471000',
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



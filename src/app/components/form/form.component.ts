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
    image: new FormControl(''),
  });
  onSubmit() {
    console.log(this.form.value);

    let Dog = <Item>{
      name: this.form.value.name,
      price: this.form.value.price,
      quantity: this.form.value.quantity,
      description: this.form.value.description,
      image: this.form.value.image,
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

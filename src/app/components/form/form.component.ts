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
    price: new FormControl(2000),
    quantity: new FormControl(1),
    description: new FormControl(''),
  });
  onSubmit() {
    console.log(this.form.value);
    // alert(JSON.stringify(this.form.value));
    let Dog = <Item>{
      name: this.form.value.name,
      price: this.form.value.price,
      quantity: this.form.value.quantity,
      description: this.form.value.description,
      image: 'https://qpet.vn/wp-content/uploads/2023/04/Hinh-anh-cho-ngau.jpg',
    };
  //   this.listDog.push(Dog);
    // let total = 0;
    // for (let i = 0; i < this.listDog.length; i++) {
    //   total += this.listDog[i].price * this.listDog[i].quantity;
    // }
    // // console.log(this.listDog);
    // alert('Tổng tiền là: ' + total);
  // console.log(Dog);
  // alert(Dog.name)
  this.itemDog.emit(Dog);
  }
  openDialog() {
    this.openCart.emit();
  }
}



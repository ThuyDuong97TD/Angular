import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataServicesService } from 'src/app/data-services.service';
import { Item } from 'src/app/models/item.model';

@Component({
  selector: 'app-formedit',
  templateUrl: './formedit.component.html',
  styleUrls: ['./formedit.component.scss']
})
export class FormeditComponent {
  @Input() itemDog : Item = <Item>{};
  @Output() openCart = new EventEmitter();
  // listDog: Item[] = [];
  form = new FormGroup({
    id : new FormControl<string | null >(''),
    name: new FormControl<string | null >(''),
    price: new FormControl<number | null >(200000),
    quantity: new FormControl<number | null >(1),
    description: new FormControl<string | null >(''),
    image: new FormControl<string | null >(''),
  });
  onSubmit() {
    console.log(this.form.value);

    // let Dog = <Item>{
    //   name: this.form.value.name,
    //   price: this.form.value.price,
    //   quantity: this.form.value.quantity,
    //   description: this.form.value.description,
    //   image: this.form.value.image,
    // };

    // this.itemDog.emit(Dog);
  }
  openDialog() {
    this.openCart.emit();
  }
  @Output() closeFormDialog = new EventEmitter();
  close() {
    this.closeFormDialog.emit();
  }
  constructor(public dataServices: DataServicesService) { 
    // this.form.setValue({
    //   id : this.itemDog.id==undefined ? "a" : this.itemDog.id,
    //   name: dataServices.itemBanPhim.name==undefined ? "a" : this.dataServices.itemBanPhim.name,
    //   price: dataServices.itemBanPhim.price==undefined ? 0 : this.dataServices.itemBanPhim.price,
    //   quantity: dataServices.itemBanPhim.quantity==undefined ? 0 : this.dataServices.itemBanPhim.quantity,
    //   description: dataServices.itemBanPhim.description==undefined ? "abc" : this.dataServices.itemBanPhim.description,
    //   image: dataServices.itemBanPhim.image==undefined ? "abcd" : this.dataServices.itemBanPhim.image,
    // });
    // let id = this.dataServices.itemBanPhim.id==undefined ? "abc" : this.dataServices.itemBanPhim.id;
    // console.log(id);
    // this.form.controls['name'].setValue(this.itemDog.name);
    // this.form.controls['price'].setValue(this.dataServices.itemBanPhim.price);
    this.form.patchValue(this.itemDog)
    console.log(this.itemDog);
  } 
}

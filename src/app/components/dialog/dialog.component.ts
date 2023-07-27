import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from 'src/app/models/item.model';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
@Input() cart!: Item[];
@Output() closeDialog = new EventEmitter();
  close() { 
    this.closeDialog.emit();
  }
  total() {
    let total = 0;
    for (let i = 0; i < this.cart.length; i++) {
      total += this.cart[i].price * this.cart[i].quantity;
    }
    alert('Tổng tiền là: ' + total);
  }
}

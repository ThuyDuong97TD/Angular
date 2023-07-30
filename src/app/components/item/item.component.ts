import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from 'src/app/models/item.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
  @Input() itemDog!: Item;
  @Output() onCartDog = new EventEmitter();
  them() {
    this.onCartDog.emit();
    alert("Đã thêm vào giỏ hàng");
  }
}

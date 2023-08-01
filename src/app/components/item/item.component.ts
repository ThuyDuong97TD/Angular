import { Component, EventEmitter, Input, Output } from '@angular/core';
import { user } from '@angular/fire/auth';
import { DataServicesService } from 'src/app/data-services.service';
import { Item } from 'src/app/models/item.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
  @Input() itemDog!: Item;
  
  @Output() onCartDog = new EventEmitter();
  @Output() onItembanphim = new EventEmitter();
  constructor(private dataServices: DataServicesService) { 

  }

  them() {
    if(user == null){
      alert("Bạn cần đăng nhập để thêm vào giỏ hàng")
    } 
    else{

    }
   
    this.onCartDog.emit();
    alert("Đã thêm vào giỏ hàng");
  }
  chooseItem(item: Item) {
    this.dataServices.itemBanPhim = item;
    console.log(this.dataServices.itemBanPhim);
    this.onItembanphim.emit(item);
  }
}

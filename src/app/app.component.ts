import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Item } from './models/item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('cart') dialog: ElementRef<HTMLDialogElement> | undefined;
  title = 'my-app';
  carts: Item[] = [];

  listDog: Item[] = [
    {
      id: 1,
      name: 'Husky',
      price: 2000,
      quantity: 1,
      description: 'Đại ngáo nhưng biết tán gái ^^',
      image: 'https://qpet.vn/wp-content/uploads/2023/04/Hinh-anh-cho-ngau.jpg',
    },
    {
      id: 2,
      name: 'Tró Lãng Tử ',
      price: 3000,
      quantity: 1,
      description: 'Ngoại hình bóng bẩy, nội tâm đa nghi',
      image:
        'https://png.pngtree.com/thumb_back/fw800/background/20230610/pngtree-dog-laying-on-the-ground-with-red-roses-image_2901045.png',
    },
    {
      id: 3,
      name: 'Corgi',
      price: 3000,
      quantity: 1,
      description: 'Chân ngắn, mặt xấu, nhưng rất dễ thương',
      image:
        'https://demoda.vn/wp-content/uploads/2022/01/hinh-nen-cho-800x509.jpg',
    },
  ];
  addItem(item: any) {
    item.id = this.listDog.length + 1;
    alert(item.name);
    this.listDog.push(item);
  }
  addCart(item: any) {
    let index = this.carts.findIndex((cart) => cart.id === item.id);
    if (index !== -1) {
      this.carts[index].quantity++;
    } else {
      item.quantity = 1;

      this.carts.push(item);
    }
  }
  showDialog() {
    this.dialog?.nativeElement.showModal();
  }
  close() {
    this.dialog?.nativeElement.close();
  }
}

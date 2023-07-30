import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Item } from './models/item.model';
import { Router } from '@angular/router';

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
      name: 'Bàn phím cơ AKKO 5075B Plus Black & Cyan',
      price: 2290000,
      quantity: 1,
      description: 'Tình trạng: Còn hàng',
      image: 'https://product.hstatic.net/200000722513/product/thumbphim_1a943a5bf0534b369eaef4b1a8ef5246_8b6eff8194ee45d5bddaee9d2a6e40dc_master.gif',
    },
    {
      id: 2,
      name: 'Bàn phím Akko PC75 Plus v2 Black Gold ',
      price: 2590000,
      quantity: 1,
      description: 'Tình trạng: Còn hàng',
      image:
        'https://product.hstatic.net/200000722513/product/thumbphim_157da9b59bd64aa89556ec9bafac9848_19efd0e450a043a691d8466510e38019_master.png',
    },
    {
      id: 3,
      name: 'Bàn phím Akko 5075b Plus Dragon Ball',
      price: 2990000,
      quantity: 1,
      description: 'Tình trạng: Còn hàng',
      image:
        'https://product.hstatic.net/200000722513/product/thumbphim_d829ff88d74d4ababb105793cd37dd09_957965f2d37b4182a039f45a015eff33_master.gif',
    },
    {
      id: 4,
      name: 'Bàn phím cơ AKKO MOD007 PC Blue on White',
      price: 2490000,
      quantity: 1,
      description: 'Tình trạng: Còn hàng',
      image:
        'https://product.hstatic.net/200000722513/product/thumbphim-recovered_75cf14850d4247789be5a1763968f569_89aa2774fcfb4534adde6d02d89bbe4e_master.gif',
    },
    {
      id: 5,
      name: 'Bàn phím cơ AKKO 5075B Plus Naruto',
      price: 2990000,
      quantity: 1,
      description: 'Tình trạng: Còn hàng',
      image:
        'https://product.hstatic.net/200000722513/product/thumbphim_9e7f596eb320400abe489ac4ba9ecd76_918b4ff71da54bb98ab860a50adb83d7_master.gif',
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
  openDialogCart(){
    this.dialog?.nativeElement.showModal();
  }
  navigatethemcart(){
    this.router.navigate(['/themcart']);
  }

  constructor(public router: Router) {

  }
}

import { Injectable } from '@angular/core';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  listDog: Item[] = [
    {
      id: 1,
      name: 'Husky',
      price: 2000,
      quantity: 1,
      description: '',
      image: 'https://qpet.vn/wp-content/uploads/2023/04/Hinh-anh-cho-ngau.jpg',
    },
    {
      id: 2,
      name: 'Tró Lãng Tử ',
      price: 3000,
      quantity: 1,
      description: '',
      image:
        'https://png.pngtree.com/thumb_back/fw800/background/20230610/pngtree-dog-laying-on-the-ground-with-red-roses-image_2901045.png',
    },
    {
      id: 3,
      name: 'Corgi',
      price: 3000,
      quantity: 1,
      description: '',
      image:
        'https://demoda.vn/wp-content/uploads/2022/01/hinh-nen-cho-800x509.jpg',
    },
  ];
  constructor(public cardService: ServicesService) {

  }

   
}

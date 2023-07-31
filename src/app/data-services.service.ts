import { Injectable } from '@angular/core';
import { Item } from './models/item.model';
import {
  Firestore,
  addDoc,
  collection,
  collectionSnapshots,
} from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root',
})
export class DataServicesService {
  listDog: Item[] = [
    {
      id: 'g',
      name: 'Husky',
      price: 2000,
      quantity: 1,
      description: '',
      image: 'https://qpet.vn/wp-content/uploads/2023/04/Hinh-anh-cho-ngau.jpg',
    },
    {
      id: 'g',
      name: 'Tró Lãng Tử ',
      price: 3000,
      quantity: 1,
      description: '',
      image:
        'https://png.pngtree.com/thumb_back/fw800/background/20230610/pngtree-dog-laying-on-the-ground-with-red-roses-image_2901045.png',
    },
    {
      id: 'g',
      name: 'Corgi',
      price: 3000,
      quantity: 1,
      description: '',
      image:
        'https://demoda.vn/wp-content/uploads/2022/01/hinh-nen-cho-800x509.jpg',
    },
  ];
  itemCollection = collection(this.firestore, 'item');
  constructor(private firestore: Firestore) {
    this.getData();
  }
  getData() {
    collectionSnapshots(this.itemCollection).subscribe((snapshot) => {
      let result = snapshot.map((doc) => doc.data());
      this.listDog = result as Item[];
    });
  }
  async addItems(item: Item) {
    let timestamp = Date.now().toString();
    let newItem = {
      ...item,
      id: timestamp,
    };
    this.listDog.push(newItem);
    let result = await addDoc(this.itemCollection, newItem);
  }
}

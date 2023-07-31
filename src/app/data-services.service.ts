import { Injectable } from '@angular/core';
import { Item } from './models/item.model';
import {
  Firestore,
  addDoc,
  collection,
  collectionSnapshots,
  deleteDoc,
  doc,
  updateDoc,
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
    this.updateItem({
      id: '1',
      name: 'Bàn phím cơ AKKO 5075B Plus Black & Cyan',
      price: 2290000,
      quantity: 1,
      description: 'Tình trạng: Còn hàng',
      image:
        'https://product.hstatic.net/200000722513/product/thumbphim_1a943a5bf0534b369eaef4b1a8ef5246_8b6eff8194ee45d5bddaee9d2a6e40dc_master.gif',
    });
    this.deleteItem('e1D3I5XdSVGDnBWRj2P9');
    console.log(this.itemCollection);
  }
  getData(): void {
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
    let docRef = doc(this.firestore, 'item');
  }

  //update
  async updateItem(item: Item) {
    let docRef = doc(this.firestore, 'item', '');
    let result = await updateDoc(docRef, { item });
    return result;
  }
  //delete
  // docref dia chi
  async deleteItem(id: string) {
    let docRef = doc(this.firestore, 'item', id);
    // deleteDoc(docRef);
    let result = await deleteDoc(docRef);
    // .then(() => {
    //   console.log('Xóa thành công');
    // })
    // .catch((err) => {
    //   console.log('Xóa thất bại');
    // }
    // );
    return result;
  }
}

import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ItemModel } from '../shared/item.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @Output() onClose = new EventEmitter<string>();
  @Input() id = "";
  @Input() category = "";
  selectedItem: ItemModel = new ItemModel();
  selectedItemList: ItemModel[] = [];
  totalBill: number = 0;
  selectedItemQty: number = 1;
  constructor(private http: HttpClient,) { }

  ngOnInit(): void {
    this.getItemList();
  }

  onClosePopUp() {
    this.onClose.emit('true');
  }
  getItemList() {
    this.selectedItem.selectedItemQty = 1;
    this.http.get(environment.url + 'products').subscribe((data: any) => {
      data.filter((item: ItemModel) => {
        if (item.category == this.category && item.id == this.id) {
          item.imageURL = 'http://localhost:4400/assets' + item.imageURL;
          item.selectedItemQty = 1;
          item.totalPrice = item.price;
          this.totalBill = this.totalBill + item.price;
          this.selectedItemList.push(item);
        }
      });
    });
  }

  increaseItemQty(selectedItem: ItemModel) {
    this.totalBill = 0;
    this.selectedItemList.filter((item) => {
      if (item.category == selectedItem.category && item.id == selectedItem.id) {
        item.totalPrice = 0;
        ++item.selectedItemQty;
        item.totalPrice = item.price * item.selectedItemQty;
      }
      this.totalBill = this.totalBill + item.price * item.selectedItemQty;
    });
  
  }

  decreaseItemQty(selectedItem: ItemModel) {
    this.selectedItemList.filter((item) => {
      if (item.category == selectedItem.category && item.id == selectedItem.id) {
        if(this.selectedItemQty != 0){
          item.totalPrice = 0;
          --item.selectedItemQty;
          item.totalPrice = item.price * item.selectedItemQty;
          this.totalBill = this.totalBill - item.totalPrice;
        }
      }
    })
  }

}

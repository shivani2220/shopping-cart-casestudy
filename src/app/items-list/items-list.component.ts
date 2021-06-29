import { Component, OnInit, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ItemModel } from '../shared/item.model';
import { ActivatedRoute } from "@angular/router";
import { Routes, RouterModule, Router } from "@angular/router";
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {
  itemList: ItemModel[] = [];
  selectedItemId: string = '';
  showCart: boolean = false;
  selectedId: string = '';
  selectedCategory: string = '';
  @ViewChild(CartComponent) cartRef: any;
  constructor(private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.selectedItemId = params.id.replace(":", "");
      this.getItemList();
      
    });
   
  }

  getItemList() {
    this.itemList = [];
    this.http.get(environment.url + 'products').subscribe((data: any) => {
      data.filter((item: ItemModel) => {
        if (item.category == this.selectedItemId) {
          this.itemList.push(item);
        }
      });
      this.itemList.filter((item: ItemModel) => {
        item.imageURL = environment.frontendUrl + item.imageURL;
      });
      console.log('item', this.itemList)
    });
  }

  addtoCart(item: ItemModel) {
    this.showCart = true;
    this.selectedId = item.id;
    this.selectedCategory = item.category;
    console.log(this.cartRef.selectedItemList)
    if (this.cartRef.selectedItemList && this.cartRef.selectedItemList.length) {
      item.selectedItemQty = 1;
      item.totalPrice = item.price;
      this.cartRef.selectedItemList.push(item);
      this.cartRef.totalBill = this.cartRef.totalBill + (item.totalPrice * item.selectedItemQty);
    }
  }

  onClose() {
    this.showCart = false;
  }

}

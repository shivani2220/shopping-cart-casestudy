import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  showCart: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  onClickEmptyCart(){
    this.showCart = true;
  }

  onClose() {
    this.showCart = false;
  }

}

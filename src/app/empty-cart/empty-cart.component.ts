import { Component, OnInit, Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-empty-cart',
  templateUrl: './empty-cart.component.html',
  styleUrls: ['./empty-cart.component.scss']
})
export class EmptyCartComponent implements OnInit {
  @Output() onClose = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }


  onClosePopUp() {
    this.onClose.emit('true');
  }
}

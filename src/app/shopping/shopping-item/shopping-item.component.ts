import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Article } from '../models/Article';
import { ShoppingService } from '../services/shopping.service';

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.scss'],
})
export class ShoppingItemComponent implements OnInit {
  @Input() article: Partial<Article> = {};
  @Output() onDeleteItem: EventEmitter<string>;
  @Output() onRemoveQtyItem: EventEmitter<string>;
  @Output() onAddQtyItem: EventEmitter<string>;

  constructor() {
    this.onDeleteItem = new EventEmitter<string>();
    this.onRemoveQtyItem = new EventEmitter<string>();
    this.onAddQtyItem = new EventEmitter<string>();
  }

  ngOnInit(): void {}

  removeQty() {
    if (this.article.id) {
      this.onRemoveQtyItem.emit(this.article.id);
    }
  }

  addQty() {
    if (this.article.id) {
      this.onAddQtyItem.emit(this.article.id);
    }
  }

  delete() {
    if (this.article.id) {
      this.onDeleteItem.emit(this.article.id);
    }
  }
}

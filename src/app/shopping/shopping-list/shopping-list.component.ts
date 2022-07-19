import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../models/Article';
import { ShoppingService } from '../services/shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
  @Input() articles: Article[] = [];

  constructor(private _shoppingService: ShoppingService) {}

  ngOnInit(): void {}

  removeQty(id: string) {
    this._shoppingService.removeItemQty(id);
    this.articles = this._shoppingService.getArticles();
  }

  addQty(id: string) {
    this._shoppingService.addItemQty(id);
    this.articles = this._shoppingService.getArticles();
  }

  deleteItem(id: string) {
    this._shoppingService.deleteItem(id);
    this.articles = this._shoppingService.getArticles();
  }
}

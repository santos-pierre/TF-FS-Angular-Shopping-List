import { Injectable } from '@angular/core';
import { nanoid } from 'nanoid';
import { Article } from '../models/Article';

@Injectable({
  providedIn: 'root',
})
export class ShoppingService {
  private articles: Article[] = [
    { id: nanoid(), name: 'pomme', qty: 1 },
    { id: nanoid(), name: 'poire', qty: 2 },
  ];

  constructor() {}

  getArticles() {
    return this.articles;
  }

  addArticle(name: string) {
    const item = this.articles.find(
      (article) => article.name.toLowerCase().trim() === name.toLocaleLowerCase().trim()
    );
    if (item) {
      this.addItemQty(item.id);
    } else {
      this.articles.push({
        id: nanoid(),
        qty: 1,
        name,
      });
    }
  }

  deleteItem(id: string) {
    this.articles = this.articles.filter((article) => article.id !== id);
  }

  addItemQty(id: string) {
    const item = this.articles.find((article) => article.id === id);
    if (!item) {
      console.error(`Article: ${id} not found`);
      return;
    }
    item.qty++;
  }

  removeItemQty(id: string) {
    const item = this.articles.find((article) => article.id === id);

    if (!item) {
      console.error(`Article: ${id} not found`);
      return;
    }
    if (item.qty === 1) {
      this.deleteItem(item.id);
    } else {
      item.qty--;
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Article } from './models/Article';
import { ShoppingService } from './services/shopping.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss'],
})
export class ShoppingComponent implements OnInit {
  articleNameControl = new FormControl(null, Validators.required);

  articles: Article[] = [];

  constructor(private _shoppingService: ShoppingService) {
    this.articles = this._shoppingService.getArticles();
  }

  ngOnInit(): void {}

  handleArticleNameChange(event: KeyboardEvent) {
    if (event.key === 'Enter' && this.articleNameControl.value !== null && this.articleNameControl.valid) {
      this.addArticle();
    }
  }

  addArticle(): void {
    if (this.articleNameControl.value !== null && this.articleNameControl.valid) {
      this._shoppingService.addArticle(this.articleNameControl.value);
      this.articleNameControl.reset();
    }
  }
}

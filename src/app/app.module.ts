import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ShoppingListComponent } from './shopping/shopping-list/shopping-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShoppingComponent } from './shopping/shopping.component';
import { ShoppingItemComponent } from './shopping/shopping-item/shopping-item.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    ShoppingListComponent,
    ShoppingComponent,
    ShoppingItemComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

# ShoppingList

Liste de shopping en Angular

### Matière abordé

- @Input()/ @Output() : Communication entre composant
- Validation formulaire
- Utilisation de service
- Directives \*ngFor/\*ngIF/\*ngClass

### Librairie utilisé

- [TailwindCSS](https://tailwindcss.com/) : Framework CSS
- [NanoID](https://www.npmjs.com/package/nanoid) : Générateur d'id unique

### Point supplémentaire

- Utilisation d'event natif, keydown pour effectuer une action lorsque l'utilisateur appuye sur enter

```html
<div>
  <!--  -->
  <input
    type="text"
    class="block w-64 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
    [formControl]="articleNameControl"
    (keydown)="handleArticleNameChange($event)"
  />
  <!--  -->
</div>
```

```ts
  handleArticleNameChange(event: KeyboardEvent) {
    if (event.key === 'Enter' && this.articleNameControl.value !== null && this.articleNameControl.valid) {
      this.addArticle();
    }
  }
```

import {Ingredient} from '../shared/ingredient.model';
import {EventEmitter} from '@angular/core';

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  // Return a copy of the property instead of reference
  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredients(ingredients: Ingredient[]) {
    // Results in too many event emissions
    //
    // for(let ingredient of ingredients) {
    //   this.addIngredient(ingredient);
    // }

    // The spread operator extracts an array into a list of values
    this.ingredients.push(...ingredients);

    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}

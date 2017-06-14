import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import { Injectable } from '@angular/core';

@Injectable()
export class RecipeService {
  // recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      1,
      'Tasty Schnitzel',
      'This is simply a test 1',
      'http://assets-jpcust.jwpsrv.com/thumbs/tjNwoclK-720.jpg',
      [
        new Ingredient('Meat', 1), new Ingredient('French Fries', 20),
      ]
    ),
    new Recipe(
      2,
      'Big Fat Burger',
      'This is simply a test 1',
      'http://assets-jpcust.jwpsrv.com/thumbs/tjNwoclK-720.jpg',
      [
        new Ingredient('Meat', 1), new Ingredient('Buns', 2),
      ]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipe(id: number) {
    const recipe = this.recipes.find(
      (r) => {
        return r.id === id;
      }
    );
    return recipe;
  }

  // Return a copy of the property instead of reference
  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}

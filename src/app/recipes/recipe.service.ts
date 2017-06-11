import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe 1', 'This is simply a test 1', 'http://assets-jpcust.jwpsrv.com/thumbs/tjNwoclK-720.jpg'),
    new Recipe('A Test Recipe 2', 'This is simply a test 2', 'http://assets-jpcust.jwpsrv.com/thumbs/tjNwoclK-720.jpg'),
    new Recipe('A Test Recipe 3', 'This is simply a test 3', 'http://assets-jpcust.jwpsrv.com/thumbs/tjNwoclK-720.jpg'),
  ];

  // Return a copy of the property instead of reference
  getRecipes() {
    return this.recipes.slice();
  }
}

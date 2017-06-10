import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe 1', 'This is simply a test 1', 'http://assets-jpcust.jwpsrv.com/thumbs/tjNwoclK-720.jpg'),
    new Recipe('A Test Recipe 2', 'This is simply a test 2', 'http://assets-jpcust.jwpsrv.com/thumbs/tjNwoclK-720.jpg'),
    new Recipe('A Test Recipe 3', 'This is simply a test 3', 'http://assets-jpcust.jwpsrv.com/thumbs/tjNwoclK-720.jpg'),
  ];
  @Output() recipeWasSelected = new EventEmitter<Recipe>();


  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}

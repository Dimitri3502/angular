import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit{
  title = 'first-app';
  recipes : Recipe[];

  delete(item: Recipe) {
    this.recipes.splice(this.recipes.indexOf(item),1);
  }

  constructor(private recipeService: RecipeService){

  }


ngOnInit(): void {
  this.recipeService.getRecipes().subscribe(
    (result: Recipe[]) => {
      this.recipes = result
    },
    (error) => {
        // Traiter l'erreur
    }
)
  }
}



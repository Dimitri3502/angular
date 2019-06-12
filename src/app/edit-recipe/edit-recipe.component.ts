import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { RecipeService } from '../recipe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.scss']
})
export class EditRecipeComponent implements OnInit {

recipe = new Recipe();

  constructor(private recipeService:RecipeService, private router:Router) { }

  ngOnInit() {
    this.recipe.instructions=["ohhhhh"];
  }

  onSubmit(){
    this.recipeService.postRecipe(this.recipe).subscribe(() => this.router.navigate(['/recipes']));
    
    console.log("ok");
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RecipesComponent } from '../recipes/recipes.component';
import { RecipeService } from '../recipe.service';
import { Router } from '@angular/router';
import { Recipe } from '../recipes/recipe.model';

@Component({
  selector: 'app-reactive-add-recipe',
  templateUrl: './reactive-add-recipe.component.html',
  styleUrls: ['./reactive-add-recipe.component.scss']
})
export class ReactiveAddRecipeComponent implements OnInit {
  recipeForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private recipeService: RecipeService,
    private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.recipeForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: '',
      picture: ''
    });
  }

  onSubmitForm() {
    const newRecipe = new Recipe(
      this.recipeForm.get('name').value,
      this.recipeForm.get('description').value,
      this.recipeForm.get('picture').value
    );
    console.log(newRecipe.name);
    this.recipeService.postRecipe(newRecipe).subscribe(() => this.router.navigate(['/recipes']));
    
  }

}



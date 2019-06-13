import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import  {Recipe} from '../models/recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  @Input()
recipe: Recipe;
panelOpenState: boolean = false;

@Output()
event = new EventEmitter<Recipe>();

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  this.recipeService.getRecipe(this.recipe.id.toString()).subscribe()
    }

  toggleExpand(){
    this.panelOpenState = !this.panelOpenState;
  }
  deleteRecipe(){
    this.recipeService.deleteRecipe(this.recipe.id.toString()).subscribe(() => this.event.emit(this.recipe));
    
    
  }
    
  }



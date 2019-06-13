import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import {EditRecipeComponent} from './edit-recipe/edit-recipe.component';
import { ReactiveAddRecipeComponent } from './reactive-add-recipe/reactive-add-recipe.component';


const routes: Routes = [
  {
    path: 'recipes/reactiveAdd',
      component: ReactiveAddRecipeComponent,
      pathMatch: 'full'
  },
  {
    path: 'recipes/add',
      component: EditRecipeComponent,
      pathMatch: 'full'
  },
  {
    path: 'recipes/:id',
      component: RecipeDetailComponent,
      pathMatch: 'full'
  },
  {
      path: 'recipes',
      component: RecipesComponent,
      pathMatch: 'full'
  },
  {
      path: '**',
      redirectTo: 'recipes',
      pathMatch: 'full'
  }
];

@NgModule({
  exports: [
    RouterModule
],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})

export class AppRoutingModule { }

import { RecipeIngredientModel } from './recipes/recipe-ingredient.model';

export class Recipe {
    id: number;
    name: string;
    picture: string;
    description: string;
    ingredients: RecipeIngredientModel[];
    instructions: string[];
 }
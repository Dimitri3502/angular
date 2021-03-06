import { RecipeIngredientModel } from '../models/recipe-ingredient.model';

export class Recipe {
    id: number;
    // name: string;
    // picture: string;
    // description: string;
    ingredients: RecipeIngredientModel[];
    instructions: string[];

    constructor(
        public name: string,
        public picture: string,
        public description: string,
      ) {}
 }
export type Ingredient = string;

export interface CocktailRecipe {
  id: number;
  key: string;
  title: string;
  instructions: string;
  modified: string;
  ingredients: Ingredient[];
}

export type CocktailRecipesResponse = CocktailRecipe[];

export type AvailableIngredientsResponse = Ingredient[];

export interface AllIngredientsResponse
  extends Array<{
    id: number;
    name: Ingredient;
  }> {}

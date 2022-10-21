import api from "./api";
import { CocktailRecipe, Ingredient } from "./api/interface";
import { uniqueByKey } from "./util";

export class Home {
  private _ingredients: Ingredient[];
  private _recipes: CocktailRecipe[];

  constructor() {
    this._ingredients = [];
    this._recipes = [];
  }

  public get ingredients() {
    return this._ingredients;
  }

  public set ingredients(ingredients: Ingredient[]) {
    this._ingredients = ingredients;
  }

  public fetchIngredients() {
    return api.availableIngredients();
  }

  public get recipes() {
    return this._recipes;
  }

  public set recipes(recipes: CocktailRecipe[]) {
    this._recipes = uniqueByKey(recipes, "key");
  }

  public fetchRecipes() {
    return api.recipes();
  }
}

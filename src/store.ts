import api from "./api";
import { Ingredient } from "./api/interface";

export class Store {
  private _ingredients: Ingredient[];

  constructor() {
    this._ingredients = [];
  }

  public fetchIngredients() {
    return api.allIngredients();
  }

  public get ingredients() {
    return this._ingredients;
  }

  public set ingredients(ingredients: Ingredient[]) {
    this._ingredients = ingredients;
  }
}

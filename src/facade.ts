import { Home } from "./home";
import { Store } from "./store";
import { CocktailRecipe, Ingredient } from "./api/interface";

export class Facade {
  protected home: Home;
  protected store: Store;

  constructor(home?: Home, store?: Store) {
    this.home = home || new Home();
    this.store = store || new Store();
  }

  public async fetchIngredients(): Promise<void> {
    const [atHomeIngredients, inTheStoreIngredients] = await Promise.all([
      this.home.fetchIngredients(),
      this.store.fetchIngredients(),
    ]);

    const normalizedStoreIngredients = inTheStoreIngredients.map(
      (ingredient: any) => ingredient.name
    );

    this.home.ingredients = atHomeIngredients;
    this.store.ingredients = normalizedStoreIngredients;

    if (!this.home.ingredients.length) {
      console.warn("Sorry, both fridge and shelves at home are empty!");
    }

    if (!this.store.ingredients.length) {
      console.warn("Sorry, shelves at the store are empty!");
    }
  }

  public async fetchRecipes() {
    this.home.recipes = await this.home.fetchRecipes();
    if (!this.home.recipes.length) {
      console.warn("Sorry, it seems like the book of recipes has disappeared!");
    }
  }

  public get ingredientsAtHand(): Ingredient[] {
    return this.home.ingredients;
  }

  public get recipes(): CocktailRecipe[] {
    return this.home.recipes;
  }

  public async doableRecipes(
    additionalIngredient: Ingredient | null = null
  ): Promise<CocktailRecipe[]> {
    if (additionalIngredient) {
      this.home.ingredients = [...this.home.ingredients, additionalIngredient];
    }

    return this.home.recipes.filter((r) =>
      r.ingredients.every((ing: any) => this.ingredientsAtHand.includes(ing))
    );
  }

  public async cocktailRecipes(): Promise<CocktailRecipe[]> {
    let doableRecipes = await this.doableRecipes();
    if (doableRecipes.length) {
      return doableRecipes;
    }
    return await this.doableRecipes(this.ingredientSuggestion());
  }

  public ingredientSuggestion(): Ingredient | null {
    // ingredients max size
    const ingredientMaxSize = this.ingredientsAtHand.length + 1;

    const possibleRecipes = this.home.recipes
      .filter((recipe) => {
        if (recipe.ingredients.length > ingredientMaxSize) {
          return;
        }

        let missingIngredients = new Set(
          Array.from(recipe.ingredients).filter(
            (x) => !new Set(this.ingredientsAtHand).has(x)
          )
        );
        recipe.similarityDiff = Array.from(missingIngredients);

        if (recipe.similarityDiff.length !== 1) {
          return;
        }

        return this.store.ingredients.includes(recipe.similarityDiff[0])
          ? recipe
          : null;
      })
      .sort((a, b) => Number(a.similarity) - Number(b.similarity));

    if (possibleRecipes.length) {
      const index = Math.floor(Math.random() * possibleRecipes.length);

      return (
        this.store.ingredients.find((ingredient) =>
          Array.from(possibleRecipes[index].similarityDiff || []).includes(
            ingredient
          )
        ) || null
      );
    }
    return null;
  }
}

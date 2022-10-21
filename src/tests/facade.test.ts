import { Facade } from "../facade";
import { Home } from "../home";
import { Store } from "../store";
import { Ingredient } from "../api/interface";
import { VodkaAndTonicCocktailRecipe } from "./__mocks__/home-recipes";

describe("testing facade file", () => {
  let facade = new Facade();

  test("defines fetchIngredients()", () => {
    expect(typeof facade.fetchIngredients).toBe("function");
  });

  test("defines fetchRecipes()", () => {
    expect(typeof facade.fetchRecipes).toBe("function");
  });

  test("defines ingredientsAtHand as an array", () => {
    expect(facade.ingredientsAtHand).toBeDefined();
    expect(Array.isArray(facade.ingredientsAtHand)).toBe(true);
  });

  test("defines doableRecipes()", () => {
    expect(typeof facade.doableRecipes).toBe("function");
  });

  test("doableRecipes to not be empty", async () => {
    const home = new Home();
    home.ingredients = ["Vodka", "Tonic water"];
    home.recipes = [VodkaAndTonicCocktailRecipe];

    facade = new Facade(home);

    const cocktailRecipes = await facade.cocktailRecipes();

    expect(Array.isArray(cocktailRecipes)).toBe(true);
    expect(cocktailRecipes.length).toBeGreaterThan(0);
  });

  test("missing ingredient to be suggested", async () => {
    const missingIngredient: Ingredient = "Vodka";

    const home = new Home();
    home.ingredients = ["Tonic water"];
    home.recipes = [VodkaAndTonicCocktailRecipe];

    const store = new Store();
    store.ingredients = [missingIngredient];

    facade = new Facade(home, store);

    const ingredient: Ingredient | null = facade.ingredientSuggestion();
    expect(ingredient).toBe(missingIngredient);
  });

  test("doableRecipes to not be empty after going to the store", async () => {
    const missingIngredient: Ingredient = "Vodka";

    const home = new Home();
    home.ingredients = ["Tonic water"];
    home.recipes = [VodkaAndTonicCocktailRecipe];

    const store = new Store();
    store.ingredients = [missingIngredient];

    facade = new Facade(home, store);
    const cocktailRecipes = await facade.cocktailRecipes();

    expect(Array.isArray(facade.ingredientsAtHand)).toBe(true);
    expect(facade.ingredientsAtHand).toContain(missingIngredient);

    expect(Array.isArray(cocktailRecipes)).toBe(true);
    expect(cocktailRecipes.length).toBeGreaterThan(0);
  });
});

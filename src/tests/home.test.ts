import { Home } from "../home";
import { ingredientsData } from "./__mocks__/home-ingredients";
import { recipesData } from "./__mocks__/home-recipes";

describe("testing home file", () => {
  const home = new Home();

  test("defines fetchIngredients()", () => {
    expect(typeof home.fetchIngredients).toBe("function");
  });

  test("defines fetchRecipes()", () => {
    expect(typeof home.fetchRecipes).toBe("function");
  });

  test("ingredients to be a list of strings", async () => {
    // Prepare a spy for the given method
    const fetchIngredientsSpy = jest.spyOn(home, "fetchIngredients");

    // mock its returned value
    fetchIngredientsSpy.mockResolvedValue(ingredientsData);

    // call
    await home.fetchIngredients();

    // expect call
    expect(fetchIngredientsSpy).toBeCalledTimes(1);

    // expect it to be an array
    expect(Array.isArray(home.ingredients)).toBe(true);

    // expect every element to match a given type
    Array.from(home.ingredients || []).forEach((ingredient) => {
      expect(typeof ingredient).toBe("string");
    });

    // restore the mock and clear the state
    fetchIngredientsSpy.mockClear();
  });

  test("recipes to be a list of CocktailRecipe", async () => {
    // Prepare a spy for the given method
    const fetchRecipesSpy = jest.spyOn(home, "fetchRecipes");

    // mock its returned value
    fetchRecipesSpy.mockResolvedValue(recipesData);

    // call
    await home.fetchRecipes();

    // expect call
    expect(fetchRecipesSpy).toBeCalledTimes(1);

    // expect it to be an array
    expect(Array.isArray(home.recipes)).toBe(true);

    // expect every element to match a given type
    Array.from(home.recipes || []).forEach((recipe) => {
      expect(recipe).toEqual(
        expect.objectContaining({
          id: expect.any(Number),
          key: expect.any(String),
          title: expect.any(String),
          instructions: expect.any(String),
          modified: expect.any(String),
        })
      );

      Array.from(recipe.ingredients || []).forEach((ingredient) => {
        expect(typeof ingredient).toBe("string");
      });
    });

    // restore the mock and clear the state
    fetchRecipesSpy.mockClear();
  });
});

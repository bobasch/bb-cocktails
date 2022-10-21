import { Store } from "../store";
import { ingredientsData } from "./__mocks__/store-ingredients";

describe("testing store file", () => {
  const store = new Store();

  test("defines fetchIngredients()", () => {
    expect(typeof store.fetchIngredients).toBe("function");
  });

  test("ingredients to be a list of {id: number: name: string}", async () => {
    // Prepare a spy for the given method
    const fetchIngredientsSpy = jest.spyOn(store, "fetchIngredients");

    // mock its returned value
    fetchIngredientsSpy.mockResolvedValue(ingredientsData);

    // call
    await store.fetchIngredients();

    // expect call
    expect(fetchIngredientsSpy).toBeCalledTimes(1);

    // expect it to be an array
    expect(Array.isArray(store.ingredients)).toBe(true);

    // expect every element to match a given type
    Array.from(store.ingredients || []).forEach((ingredient) => {
      expect(ingredient).toEqual(
        expect.objectContaining({
          id: expect.any(Number),
          name: expect.any(String),
        })
      );
    });

    // restore the mock and clear the state
    fetchIngredientsSpy.mockClear();
  });
});

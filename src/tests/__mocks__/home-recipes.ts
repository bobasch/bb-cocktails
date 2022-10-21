import { CocktailRecipe } from "../../api/interface";

export const VodkaAndTonicCocktailRecipe: CocktailRecipe = {
  id: 1,
  key: "12460",
  title: "Vodka And Tonic",
  instructions:
    "Pour vodka into a highball glass over ice cubes. Fill with tonic water, stir, and serve.",
  modified: "2017-09-07T00:00:00.000Z",
  ingredients: ["Vodka", "Tonic water"],
};

export const recipesData: CocktailRecipe[] = [
  VodkaAndTonicCocktailRecipe,
  {
    id: 2,
    key: "16041",
    title: "Mudslinger",
    instructions: "Add all contents to a large jug or punch bowl. Stir well!",
    modified: "2017-09-08T00:00:00.000Z",
    ingredients: ["Southern Comfort", "Orange juice", "Pepsi Cola"],
  },
];

export default function recipes() {
  return new Promise((resolve, reject) => {
    process.nextTick(() => resolve(recipesData));
  });
}

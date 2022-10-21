import { AllIngredientsResponse } from "../../api/interface";

export const ingredientsData: AllIngredientsResponse = [
  {
    id: 1,
    name: "Vodka",
  },
  {
    id: 2,
    name: "Tonic water",
  },
];

export default function ingredients() {
  return new Promise((resolve, reject) => {
    process.nextTick(() => resolve(ingredientsData));
  });
}

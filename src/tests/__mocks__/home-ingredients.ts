import { Ingredient } from "../../api/interface";

export const ingredientsData: Ingredient[] = ["Gin", "Triple sec"];

export default function ingredients() {
  return new Promise((resolve, reject) => {
    process.nextTick(() => resolve(ingredientsData));
  });
}

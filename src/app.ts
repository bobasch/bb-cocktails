import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { Facade } from "./facade";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`B&B cocktails listening on port ${port}`);
});

app.get("/", (req: Request, res: Response) => {
  res.send("B&B cocktails service");
});

app.get("/dingdong", async (req: Request, res: Response) => {
  const facade = new Facade();
  await facade.fetchIngredients();
  await facade.fetchRecipes();

  const cocktailRecipes = await facade.cocktailRecipes();

  console.log(
    "Number of ingredients at hand: ",
    facade.ingredientsAtHand.length
  );
  console.log("Number of recipes: ", facade.recipes.length);
  console.log("Number of doable recipes: ", cocktailRecipes.length);

  res.send([facade.ingredientsAtHand, cocktailRecipes]);
});

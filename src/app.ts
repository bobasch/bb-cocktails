import express, { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`B&B cocktails listening on port ${port}`);
});

app.get("/", (req: Request, res: Response) => {
  res.send("B&B cocktails service");
});

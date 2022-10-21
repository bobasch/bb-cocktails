import express, { Request, Response } from "express";

const app = express();
const port = '3000';

app.listen(port, () => {
  console.log(`B&B cocktails listening on port ${port}`);
});

app.get("/", (req: Request, res: Response) => {
  res.send("B&B cocktails service");
});

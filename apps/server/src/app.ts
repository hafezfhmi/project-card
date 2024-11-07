import express, { Request, Response } from "express";
import morgan from "morgan";
import cors from "cors";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get("/", (_: Request, res: Response) => {
  return res.send("hello world");
});

export default app;

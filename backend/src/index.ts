import express, { type Express, type Response } from "express";
import router from "./routes/router";
import { corsMiddleware } from "./middlewares/cors";

const app: Express = express();

// Middlewares
app.use(corsMiddleware());

app.get("/health", (_, res: Response) => {
  res.json({ status: "ok" });
});
app.get("/", (_, res: Response) => {
  res.json({
    error: "Select a difficulty like easy, medium or hard. eg:/easy",
  });
});

app.use("/", router);
app.listen(3000, () => {
  console.log("Server Started");
});

import express, { type Express, type Response } from "express";
import router from "./routes/router.js";
import { corsMiddleware } from "./middlewares/cors.js";
import "dotenv/config";

const app: Express = express();

const port = process.env.PORT || 3000;

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
app.listen(port, () => {
  console.log("Server Started");
});

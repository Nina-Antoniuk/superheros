import express from "express";
import logger from "morgan";
import cors from "cors";
import heroRouter from "./routes/api";

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

app.use("/", heroRouter);
app.use("/api", heroRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  console.log("req", req); // body: null
  res.status(500).json({ message: err.message });
});

export default app;

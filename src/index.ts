import express from "express";
import authRouter from "./routes/auth-routes.js";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/auth", authRouter);

app.listen(9000, () => console.log("Server running on port 9000"));

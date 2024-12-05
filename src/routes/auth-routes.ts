import { Router } from "express";
import bcrypt from "bcryptjs";

const authRouter = Router();

authRouter.get("/", (req, res) => {
  res.send("Hello auth route!");
});

authRouter.post("/register", async (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = await bcrypt.hashSync(password, 10);

  res.json({
    email,
    password: hashedPassword,
  });
});

export default authRouter;

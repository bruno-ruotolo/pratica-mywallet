import { signInServices } from "../services/signInServices.js";

export async function postSignInUser(req, res) {
  const { email, password } = req.body;

  const token = await signInServices(email, password);

  res.send({ token });
}
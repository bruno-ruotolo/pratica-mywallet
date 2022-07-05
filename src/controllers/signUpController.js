import signUpRepository from "../repositories/signUpRepository.js";
import sigUpServices from "../services/signUpServices.js";

export async function postSignUpUser(req, res) {
  const { name, email, password } = req.body;

  const hashedPassword = sigUpServices(name, email, password);


  await signUpRepository.insertUser(name, email, hashedPassword);

  res.sendStatus(201);
};
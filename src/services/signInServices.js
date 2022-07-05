import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import signInRepository from "../repositories/signInRepository.js";

export async function signInServices(email, password) {
  if (!email || !password) {
    throw { statusCode: 422, message: "Unprocessable Entity" }
  };

  const user = await signInRepository.getUser(email);

  console.log(user);

  if (!user || !bcrypt.compareSync(password, user.password)) {
    throw { statusCode: 401, message: "Unauthorized" }
  };

  const token = jwt.sign(
    {
      id: user.id,
    },
    process.env.JWT_SECRET
  );

  return token;
};
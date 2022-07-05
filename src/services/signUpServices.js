import bcrypt from "bcrypt";

import signUpRepository from "../repositories/signUpRepository.js";

export default function sigUpServices(name, email, password) {
  if (!name || !email || !password) {
    throw { statusCode: 422, message: "Unprocessable Entity" }
  };

  const existingUsers = signUpRepository.existingUsers(email);

  if (existingUsers.rowCount > 0) {
    throw { statusCode: 409, message: "Conflict" }
  };

  const hashedPassword = bcrypt.hashSync(password, 12);

  return hashedPassword;
}
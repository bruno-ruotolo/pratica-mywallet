import jwt from "jsonwebtoken";

export async function tokenMiddleware(req, res, next) {
  const { authorization } = req.headers;
  const token = authorization?.replace("Bearer", "").trim();

  if (!token) {
    throw { statusCode: 401, message: "Unauthorized" }
  }
  let user;

  try {
    user = jwt.verify(token, process.env.JWT_SECRET);
  } catch {
    throw { statusCode: 401, message: "Unauthorized" }
  };

  res.locals.user = user;
  next();
};
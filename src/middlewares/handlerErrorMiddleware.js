export default function handlerError(error, req, res, next) {
  if (error.statusCode === 422) {
    res.status(422).send("Unprocessable Entity");
  };

  if (error.statusCode === 409) {
    res.status(409).send("Conflict");
  };

  if (error.statusCode === 401) {
    res.status(401).send("Unauthorized");
  };

  console.log(error)

  res.sendStatus(500);
}
import connection from "../database.js";

async function getUser(email) {
  const { rows } = await connection.query(
    `SELECT * FROM "users" WHERE "email"=$1`,
    [email]
  );

  return rows[0];
};

const signInRepository = {
  getUser
};

export default signInRepository;
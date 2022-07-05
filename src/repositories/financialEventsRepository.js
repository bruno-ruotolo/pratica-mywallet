import connection from "../database.js";

async function insertFinancialEvent(user, value, type) {
  await connection.query(
    `INSERT INTO "financialEvents" ("userId", "value", "type") VALUES ($1, $2, $3)`,
    [user.id, value, type]
  );
};

async function getEvents(user) {
  return await connection.query(
    `SELECT * FROM "financialEvents" WHERE "userId"=$1 ORDER BY "id" DESC`,
    [user.id])
};

async function getEventsSum(user) {
  return await connection.query(
    `SELECT * FROM "financialEvents" WHERE "userId"=$1 ORDER BY "id" DESC`,
    [user.id]
  );
};

const financialEventsRepository = {
  insertFinancialEvent,
  getEvents,
  getEventsSum
};

export default financialEventsRepository;
import {
  getFinancialEventsService,
  getFinancialEventsSumService,
  postFinancialEventsService
}
  from "../services/financialEventsServices.js";

export async function postFinancialEvents(req, res) {
  const { value, type } = req.body;
  const { user } = res.locals;

  postFinancialEventsService(user, value, type)

  res.sendStatus(201);

};

export async function getFinancialEvents(req, res) {
  const { user } = res.locals;

  const events = await getFinancialEventsService(user);

  res.send(events.rows);

}

export async function getFinancialEventsSum(req, res) {
  const { user } = res.locals;

  const sum = await getFinancialEventsSumService(user);

  res.send({ sum });
}
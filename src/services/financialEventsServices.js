import financialEventsRepository from "../repositories/financialEventsRepository.js";

export function postFinancialEventsService(user, value, type) {
  if (!value || !type) {
    throw { statusCode: 422, message: "Unprocessable Entity" }
  }

  const financialTypes = ["INCOME", "OUTCOME"];
  if (!financialTypes.includes(type)) {
    throw { statusCode: 422, message: "Unprocessable Entity" }
  }

  if (value < 0) {
    throw { statusCode: 422, message: "Unprocessable Entity" }
  }
  financialEventsRepository.insertFinancialEvent(user, value, type);
}

export function getFinancialEventsService(user) {
  return financialEventsRepository.getEvents(user);
};

export async function getFinancialEventsSumService(user) {
  const events = await financialEventsRepository.getEventsSum(user);

  const sum = events.rows.reduce(
    (total, event) =>
      event.type === "INCOME" ? total + event.value : total - event.value,
    0
  );

  return sum;
}


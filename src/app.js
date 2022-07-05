import cors from "cors";
import express from "express";
import "express-async-errors";
import handlerErrorMiddleware from "./middlewares/handlerErrorMiddleware.js";
import router from "./routers/index.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use(router);
app.use(handlerErrorMiddleware);

export default app;

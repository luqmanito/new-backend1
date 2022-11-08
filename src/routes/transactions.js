const express = require("express");

const transactionsRouter = express.Router();
const {
  get,
  add,
  edit,
  drop,
  search,
  sort,
  filter,
} = require("../controllers/transactions");

transactionsRouter.get("/all", get);
transactionsRouter.post("/add", add);
transactionsRouter.patch("/modify/:order_id", edit);
transactionsRouter.delete("/del/:order_id", drop);
transactionsRouter.get("/search", search);
transactionsRouter.get("/sort", sort);
transactionsRouter.get("/filter", filter);

module.exports = transactionsRouter;

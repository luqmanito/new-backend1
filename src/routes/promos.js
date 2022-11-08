const express = require("express");

const promosRouter = express.Router();
const {
  get,
  add,
  edit,
  drop,
  search,
  sort,
  filter,
} = require("../controllers/promos");

promosRouter.get("/all", get);
promosRouter.post("/add", add);
promosRouter.patch("/modify/", edit);
promosRouter.delete("/del/:id", drop);
promosRouter.get("/search", search);
promosRouter.get("/sort", sort);
promosRouter.get("/filter", filter);

module.exports = promosRouter;

const productsRepo = require("../repo/products");
// const sendResponse = require("../helpers/response");

const get = async (req, res) => {
  try {
    const response = await productsRepo.getProducts(req.query);


    if (req.query.page &&  req.query.limit) {
      if (req.query.page < 2) {
        nextPages = req.originalUrl.replace(
          /\=(\d+)\&/,
          function (match, number) {
            return "=" + (parseInt(number, 10) + 1) + "&";
          }
        );
        let nextUrl = req.protocol + "://" + req.get("host") + nextPages;
        res.status(200).json({
          result: response.rows,
          per_page : req.query.limit,
          current_page : req.query.page,
          nextPage: nextUrl,
          // totalData: totalPage
        });
      }

      if (req.query.page > 1) {
        nextPages = req.originalUrl.replace(
          /\=(\d+)\&/,
          function (match, number) {
            return "=" + (parseInt(number, 10) + 1) + "&";
          }
        );

        prevPages = req.originalUrl.replace(
          /\=(\d+)\&/,
          function (match, number) {
            return "=" + (parseInt(number, 10) - 1) + "&";
          }
        );
        let nextUrl = req.protocol + "://" + req.get("host") + nextPages;
        let prevUrl = req.protocol + "://" + req.get("host") + prevPages;

        res.status(200).json({
          result: response.rows,
          per_page : req.query.limit,
          current_page : req.query.page,
          nextPage: nextUrl,
          prevPage: prevUrl,
        });
      }
    }

  } catch (err) {
    console.log(err);
    res.status(500).json({
      msg: "internal server error",
    });
  }
};

const add = async (req, res) => {
  try {
    console.log(req.body);
    const response = await productsRepo.addProducts(req.body, req.file);
    res.status(201).json({
      msg: `${req.body.name} has been added to product list`,
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      msg: `all fields are required`,
    });
  }
};

const edit = async (req, res) => {
  try {
    const response = await productsRepo.editProducts(
      req.body,
      req.params,
      req.file
    );
    res.status(200).json({
      msg: `Data with ID number ${req.params.id} has been edited`,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "internal server error" });
  }
};

const drop = async (req, res) => {
  try {
    const result = await productsRepo.dropProducts(req.params);
    res.status(200).json({
      msg: `Product with ID number ${req.params.id} has been deleted`,
    });
  } catch (err) {
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

const productsController = {
  get,
  add,
  edit,
  drop,
};

module.exports = productsController;

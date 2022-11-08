const postgreDb = require("../config/postgre");
//
const getTransactions = () => {
  return new Promise((resolve, reject) => {
    const query =
      "select order_id, status, quantity_ordered, product_code, order_date from transactions";
    postgreDb.query(query, (err, result) => {
      if (err) {
        console.error(err);
        return reject(err);
      }
      return resolve(result);
    });
  });
};

const addTransactions = (body) => {
  return new Promise((resolve, reject) => {
    const query =
      "insert into transactions (order_id, status, quantity_ordered, product_code, order_date) values ($1,$2,$3,$4,$5)";
    const { order_id, status, quantity_ordered, product_code, order_date } =
      body;
    postgreDb.query(
      query,
      [order_id, status, quantity_ordered, product_code, order_date],
      (err, response) => {
        if (err) {
          console.log(err);
          return reject(err);
        } else {
          resolve(response);
        }
      }
    );
  });
};

const editTransactions = (body, params) => {
  return new Promise((resolve, reject) => {
    const query = "update transactions set status = $1 where order_id = $2";

    postgreDb
      .query(query, [body.status, params.order_id])
      .then((response) => {
        resolve(response);
      })
      .catch((err) => {
        console.error(err);
        reject(err);
      });
  });
};

const dropTransactions = (params) => {
  return new Promise((resolve, reject) => {
    const query = "delete from transactions where order_id = $1";
    postgreDb.query(query, [params.order_id], (err, result) => {
      if (err) {
        console.error(err);
        return reject(err);
      }
      resolve(result);
    });
  });
};

const searchTransactions = (queryParams) => {
  return new Promise((resolve, reject) => {
    const query = `select * from transactions where lower(status) like lower($1)`;
    const values = [`%${queryParams.status}%`];
    postgreDb.query(query, values, (err, result) => {
      if (err) {
        console.error(err);
        return reject(err);
      }
      return resolve(result);
    });
  });
};

const sortTransactions = () => {
  return new Promise((resolve, reject) => {
    const query =
      "select order_id, status, quantity_ordered, product_code, order_date from transactions order by order_date asc";
    postgreDb.query(query, (err, result) => {
      if (err) {
        console.error(err);
        return reject(err);
      }
      return resolve(result);
    });
  });
};

const filterTransactions = () => {
  return new Promise((resolve, reject) => {
    const query = `select * from transactions where "product_code" = 'p01x'`;
    postgreDb.query(query, (err, result) => {
      if (err) {
        console.error(err);
        return reject(err);
      }
      return resolve(result);
    });
  });
};

//
const transactionsRepo = {
  getTransactions,
  addTransactions,
  editTransactions,
  dropTransactions,
  searchTransactions,
  sortTransactions,
  filterTransactions,
};

module.exports = transactionsRepo;

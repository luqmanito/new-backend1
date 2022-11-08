const { response, query } = require("express");
const usersRepo = require("../repo/users");

const get = async (req, res) => {
  try {
    const response = await usersRepo.getUsers();
    res.status(200).json({
      result: response.rows,
    });
  } catch (err) {
    res.status(500).json({
      msg: "internal server error",
    });
  }
};

const getUserById = async (req, res) => {
  try {
    const response = await usersRepo.getUsersId(req.query);
    res.status(200).json({
      result: response.rows
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      msg: "internal server error",
    });
  }
};


const add = async (req, res) => {
  try {
    const result = await usersRepo.addUsers(req.body);
    res.status(200).json({ 
      msg : `Register Succesfully`,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Email or phone already exist" });
  }
};


const edit = async (req, res) => {
  try {
    const response = await usersRepo.editUsers(req.body, req.query);
    res.status(200).json({ 
      msg : `Edit Succesfully`,
    });
  } catch (err) {
    res.status(500).json({ msg: "internal server error" });
  }
};

const drop = async (req, res) => {
  try {
    const result = await usersRepo.dropUsers(req.params);
    res.status(200).json({ 
      msg : `Delete Succesfully`, 
    });
  } catch (err) {
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

const search = async (req, res) => {
  try {
    const response = await usersRepo.searchUsers(req.query);
    res.status(200).json({
      result: response.rows,
    });
  } catch (err) {
    res.status(500).json({
      msg: "internal server error",
    });
  }
};

const sort = async (req, res) => {
  try {
    const response = await usersRepo.sortUsers();
    res.status(200).json({
      result: response.rows,
    });
  } catch (err) {
    res.status(500).json({
      msg: "internal server error",
    });
  }
};

const filter = async (req, res) => {
    try {
      const response = await usersRepo.filterUsers();
      res.status(200).json({
        result: response.rows,
      });
    } catch (err) {
      res.status(500).json({
        msg: "internal server error",
      });
    }
  };

const editPass = (req, res) => {
  const {body} = req
  usersRepo.editPassUsers(body)
  .then((response)=> {
    res.status(200).json({
      msg: "Password has been updated",
      data: null,
    })
  })
  .catch((objErr) => {
    const statusCode = objErr.statusCode || 500
    res.status(statusCode).json({msg: objErr.err.message})
  })
}

const usersController = {
  get,
  add,
  edit,
  drop,
  search,
  sort,
  filter,
  editPass,
  getUserById
};

module.exports = usersController;

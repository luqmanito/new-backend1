const authRepo = require("../repo/auth");

const authCon = (req, res) => {
  authRepo.login(req.body)
    .then((response) => {
        res.status(200).json({
            data: response,
            msg: "Login Succesfully"
        })
    })
    .catch((objErr) => {
      const statusCode = objErr.statusCode || 500;
      res.status(statusCode).json({ msg: objErr.err.message });
    });
};


const authController = {
    authCon,
  };
  
  module.exports = authController;
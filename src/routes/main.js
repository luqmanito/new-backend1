const express = require("express");
const mainRouter = express.Router();
const productsRouter = require("./products");
const promosRouter = require("./promos");
const transactionsRouter = require("./transactions");
const usersRouter = require("./users");
const authRouter = require("./auth");
const {diskUpload, memoryUpload, errorHandler } = require("../middleware/upload");
const cloudinaryUploader = require("../middleware/cloudinary");

const prefix = "/api/show";

mainRouter.use(`${prefix}/products`, productsRouter); 
mainRouter.use(`${prefix}/promos`, promosRouter);
mainRouter.use(`${prefix}/transactions`, transactionsRouter);
mainRouter.use(`${prefix}/users`, usersRouter);
mainRouter.use(`${prefix}/auth`, authRouter);
mainRouter.use(`${prefix}/forgotpassword`, authRouter);
<<<<<<< HEAD
mainRouter.post("/", imgUpload.single("image"), (req, res) => {
  res.json({url: `/images/${req.file.filename}`})
});

=======
>>>>>>> 164572219d63d6b21647cfeb30dd337a9259a97d
mainRouter.get("/", (req, res) => {
  res.json({
    msg: "Welcome",
  });
});

mainRouter.post("/", diskUpload.single("image"), (req, res) => {
  res.json({url: `/images/${req.file.filename}`})
});

mainRouter.post(
  "/",
  (req, res, next) =>
    diskUpload.single("image")(req, res, (err) => {
      errorHandler(err, res, next);
    }),
  (req, res) => {
    res.json({ url: `/images/${req.file.filename}` });
  }
);
// mainRouter.get("/redis/:key", async (req, res) => {
//   try {
//     await redisClient.connect();
//     const value = await redisClient.get(req.params.key);
//     res.status(200).json({ msg: "Success", data: { [req.params.key]: value } });
//   } catch (err) {
//     res.status(500).json({ msg: err.message });
//   }
// });
// mainRouter.post("/redis/:key", async (req, res) => {
//   try {
//     await redisClient.connect();
//     await redisClient.set(req.params.key, JSON.stringify(req.body));
//     res.status(200).json({ msg: "Success" });
//   } catch (err) {
//     res.status(500).json({ msg: err.message });
//   }
// });
// mainRouter.patch("/cors", (req, res) => {
//   console.log(req.query);
//   res.status(200).json({ msg: "Welcome" });
// });


mainRouter.post(
  "/cloud",
  (req, res, next) =>
    memoryUpload.single("image")(req, res, (err) => {
      errorHandler(err, res, next);
    }),
  cloudinaryUploader,
  (req, res) => {
    // console.log(req.file);
    res.status(200).json({
      msg: "Upload Success",
      data: {
        url: req.file.url,
        secure: req.file.secure_url,
      },
    });
  }
   )

module.exports = mainRouter;

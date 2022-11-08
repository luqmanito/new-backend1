require('dotenv').config()
const express = require("express");
const postgreDb = require("./src/config/postgre");
const mainRouter = require("./src/routes/main");
const server = express();
const PORT = 8060;
const morgan = require("morgan")
const cors = require("cors");
server.use(cors());


const corsOptions = {
  origin: "*",
};

postgreDb
  .connect()
  .then(() => {
    console.log("DB is connected");
    server.use(cors(corsOptions));

    server.use(express.static("./uploads"));

    // pasang parser u/ body spy bisa create/post scr dinamis
    server.use(express.json()); //krn kita mau pk json, jd .json, kl urlencode pake .urlencode
    server.use(express.urlencoded({ extended: false }));
  
    //true = parsing pk qs bisa nested object
    //false = parsing pk querystring tdk bs nested object
    server.use(morgan(':method :url :status :res[content-length] - :response-time ms'))
    

    // semua request ke server akan didelegasikan ke mainRouter
    server.use(mainRouter);

    // server siap menerima request, setelah routing sudah disiapkan
    server.listen(PORT, () => {
      console.log(`server is running at port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });

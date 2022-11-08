// ini adalah config postgre
// di pkg json ada depedency pg, yg fungsinya utk connect ke postgre
require("dotenv").config()
const {Pool} = require ("pg")
// console.log(`${process.env.local_port}`);
// krn pg adalah sebuah object maka bisa didestructuring, spt ini  dibawah, atau bisa diatas lansung:
// const {pool} = pg
// pool adalah sbuah class constructor, maka cr buatnya spt dibawah, isinya berbentuk object, diisikan info database kita
// bila lupa datanya bisa liat di dbeaver edit con, 
const db = new Pool({   
    host: "localhost",
    user: "postgres",
    database: "postgres",
    password: "root",
    port: `${process.env.local_port}`
})

module.exports = db // dieksport sesuai nama const db diatas
//kl sudah balik k index.js u/ dikoneksikan
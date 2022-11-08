const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.cloudy_name,
  api_key: process.env.cloudy_apikey,
  api_secret: process.env.cloudy_apisecret,
  secure: true,
});

module.exports = cloudinary;

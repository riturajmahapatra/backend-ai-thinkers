const mongoose = require('mongoose');
const connection = () => {
  mongoose
    .connect(
      'mongodb+srv://riturajmahapatra:QSiVxIyzjbe9L6oX@cluster0.7eazggq.mongodb.net/'
    )
    .then(() => {
      console.log('connection sucessfull');
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = connection;

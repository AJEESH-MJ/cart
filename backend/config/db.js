const mongoose = require('mongoose');

mongoose
  .connect(process.env.MONGO_URI)
  .then((conn) => {
    console.log(
      `MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold
    );
  })
  .catch((error) => {
    console.log(`MongoDB Error: ${error.message}`.bgRed);
    process.exit(1);
  });

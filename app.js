/* 
    Entry point for the server!
    Happy Coding🧑‍💻🥰
*/
console.log("This is the server of our project🥱🥺");

const express = require("express");

const app = express();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`The server is running on port ${port}`);
});

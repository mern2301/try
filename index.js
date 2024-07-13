const express = require("express");
var cors = require('cors')
const dbConnection = require("./config/dbConnection");
const app = express();
const path = require("path");
const route = require("./route");

app.use(express.json());
app.use(cors())
app.use(route);



// const corsOptions = {
//   origin: '*',
// };

// app.use(cors(corsOptions));
const port = 3000;
dbConnection();
app.use("/upload", express.static(path.join(__dirname, "upload")));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

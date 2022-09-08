const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const config = require("./config/db");
const userRoute = require("./routes/user.routes");
const indexRoute = require("./routes/index.routes");
const itemRoute = require("./routes/item.routes");
const cartRoute = require("./routes/cart.routes");
const orderRoute = require("./routes/order.routes");
const contactRoute = require("./routes/contact.route");

const PORT = process.env.PORT || 5000;

mongoose.connect(config.DB).then(
  () => {
    console.log("Database is connected");
  },
  (err) => {
    console.log("Can not connect to the database" + err);
  }
);

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let corsOptions = {
  origin: "http://localhost:4200",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));

app.use("/api/login", indexRoute);
app.use("/api/items_list", itemRoute);
app.use("/api/users", userRoute);
app.use("/api/Cart", cartRoute);
app.use("/api/order", orderRoute);
app.use("/api/messages", contactRoute);

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});

const express = require("express");
const env = require("dotenv");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
app.use(cors());
app.options("*", cors());

const authRoutes = require("./routes/auth");
const DryFruitsController = require("./controller/DryFruits");
const FruitsController = require("./controller/Fruits");
const MangosController = require("./controller/Mangos");
const StaplesController = require("./controller/Staples");
const VegitableController = require("./controller/Vegitable");
const SearchQueryController = require("./controller/AllComponant");

env.config();

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASS}@cluster0.yswkt.mongodb.net/${process.env.MONGO_DB_DATABSASE}`
  )
  .then(() => {
    console.log("Database Conected");
  });

app.use(express.json());
app.use("/api", authRoutes);
app.use("/api/dryfruits", DryFruitsController);
app.use("/api/fruits", FruitsController);
app.use("/api/mangos", MangosController);
app.use("/api/kitchenstaples", StaplesController);
app.use("/api/vegitables", VegitableController);
app.use("/api/search", SearchQueryController);

app.listen(process.env.PORT || 4800, () => {
  console.log("conected to 4800");
});

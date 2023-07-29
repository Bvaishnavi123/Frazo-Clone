const express = require("express");

const AllComponant = require("../models/AllCOmponant");

const router = express.Router();

router.get("/query", async (req, res) => {
  try {
    const searchpara = await AllComponant.findOneAndDelete({name:req.params.query}).lean().exec();

    return res.status(200).send(searchpara);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

module.exports = router;

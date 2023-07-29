const express = require("express");

const Mangos = require("../models/Mangos");

const router = express.Router();
router.get("", async (req, res) => {
  try {
    const mangos = await Mangos.find().lean().exec();
    return res.status(200).send(mangos);
  } catch (error) {
    return res.status(501).send({ message: error.message });
  }
});
router.get("/:id", async (req, res) => {
  try {
    const mango = await Mangos.findById(req.params.id).lean().exec();

    return res.status(200).send(mango);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});
module.exports = router;

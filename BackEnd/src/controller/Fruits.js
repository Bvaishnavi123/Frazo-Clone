const express = require("express");

const Fruits = require("../models/Fruits");

const router = express.Router();
router.get("", async (req, res) => {
  try {
    const frute = await Fruits.find().lean().exec();
    return res.status(200).send(frute);
  } catch (error) {
    return res.status(501).send({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const frute = await Fruits.findById(req.params.id).lean().exec();

    return res.status(200).send(frute);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

module.exports = router;

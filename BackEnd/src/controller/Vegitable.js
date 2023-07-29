const express = require("express");

const Vegitable = require("../models/Vegitable");

const router = express.Router();
router.get("", async (req, res) => {
  try {
    const vegitable = await Vegitable.find().lean().exec();
    return res.status(200).send(vegitable);
  } catch (error) {
    return res.status(501).send({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const vegitable = await Vegitable.findById(req.params.id).lean().exec();

    return res.status(200).send(vegitable);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

module.exports = router;

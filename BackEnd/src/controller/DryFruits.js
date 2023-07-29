const express = require("express");

const DryFruits = require("../models/DryFruits");

const router = express.Router();
router.get("", async (req, res) => {
  try {
    const dryfrute = await DryFruits.find().lean().exec();
    return res.status(200).send(dryfrute);
  } catch (error) {
    return res.status(501).send({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const dryfrute = await DryFruits.findById(req.params.id).lean().exec();

    return res.status(200).send(dryfrute);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

module.exports = router;

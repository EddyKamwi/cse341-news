const health = require("../Models/Health");
const { validationResult } = require("express-validator");

const index = async (req, res) => {
  const list = await health.findAll();
  if (list === null) {
    res.status(404).json("No Post found");
  } else {
    res.status(200).json(list);
  }
};

const show = async (req, res) => {
  try {
    const single_health = await health.findById(req.params.id);
    if (single_health === null) {
      return res.status(404).json("Post not found");
    } else {
      return res.status(200).json(single_health);
    }
  } catch {
    return res.status(500).json("Server Error");
  }
};

const create = async (req, res) => {
  try {
    const err = validationResult(req);
    if (!err.isEmpty()) {
      return res.status(400).json({ status: "failed", errors: err.array() });
    }
    const newhealth = req.body;
    await health
      .create(newhealth)
      .then(() => res.status(200).json("Post created successfully"));
  } catch {
    res.status(500).json("Server Error");
  }
};

const destroy = async (req, res) => {
  try {
    const num = await health.delete(req.params.id);
    if (num === 1) {
      res.status(200).send("Post deleted successfully");
    } else {
      res.status(404).send("Post not found");
    }
  } catch (error) {
    res.status(500).send("Server Error");
  }
};

const update = async (req, res) => {
  try {
    const err = validationResult(req);
    if (!err.isEmpty()) {
      return res.status(400).json({ status: "failed", errors: err.array() });
    }
    const num = await health.update(req.params.id, req.body);
    if (num === 1) {
      res.status(200).json("Post updated successfully");
    } else {
      res.status(404).json("Post not found");
    }
  } catch (error) {
    res.json("Server error");
  }
};

module.exports = { index, show, create, destroy, update };

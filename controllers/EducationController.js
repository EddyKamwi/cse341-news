const education = require("../Models/Education");

const index = async (req, res) => {
  const list = await education.findAll();
  if (list === null) {
    res.status(404).json("Post not found");
  } else {
    res.status(200).json(list);
  }
};

const show = async (req, res) => {
  const single_education = await education.findById(req.params.id);
  if (single_education === null) {
    res.status(404).json("Post not found");
  } else {
    res.status(200).json(single_education);
  }
};

const create = async (req, res) => {
  const neweducation = req.body;
  await education
    .create(neweducation)
    .then(() => res.status(200).json("Post created successfully"))
    .catch(() => res.status(500).json("Server Error"));
};

const destroy = async (req, res) => {
  try {
    const num = await education.delete(req.params.id);
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
    const num = await education.update(req.params.id, req.body);
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

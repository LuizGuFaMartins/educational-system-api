const Subject = require("../models/subjects");
const Login = require("../models/logins");

exports.findAll = async (req, res) => {
  try {
    const list = await Subject.findAll();
    return res.json(list);
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
};

exports.save = () => {
  return {};
};

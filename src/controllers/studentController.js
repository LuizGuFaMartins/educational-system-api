const Student = require("../models/students");
const Login = require("../models/logins");

exports.findAll = async (req, res, next) => {
  try {
    const list = await Student.findAll();
    return res.json(list);
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
};

// exports.create = (student) => {
//   return {};
// };

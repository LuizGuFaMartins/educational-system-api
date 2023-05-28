const Student = require("../models/students");
const Login = require("../models/logins");

exports.findAll = async (req, res) => {
  try {
    const list = await Student.findAll({
      include: [
        {
          model: Login,
        },
      ],
    });
    return res.json(list);
  } catch (error) {
    console.log(error);
  }
};

exports.createStudent = () => {
  return {};
};

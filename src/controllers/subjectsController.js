const Subject = require("../models/subjects");
const Teacher = require("../models/teachers");

exports.findAll = async (req, res) => {
  try {
    const list = await Subject.findAll({
      include: [
        {
          model: Teacher,
          as: "teacher",
        },
      ],
    });
    return res.json(list);
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
};

exports.save = () => {
  return {};
};

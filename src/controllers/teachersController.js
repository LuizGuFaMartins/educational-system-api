const Student = require("../models/students");
const Login = require("../models/logins");
const Teacher = require("../models/teachers");

exports.findAll = async (req, res, next) => {
  try {
    const list = await Teacher.findAll();
    return res.json(list);
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
};

exports.create = async (req, res) => {
  let existentLogin = await Login.findOne({
    where: {
      login_email: req.body.login_email,
    },
  });

  if (!existentLogin) {
    let login = {
      login_email: req.body.login_email,
      login_password: req.body.login_password,
      login_name: req.body.teacher_name,
      login_photo_url: req.body.login_photo_url,
    };

    let savedLogin = await Login.create(login);

    let data = {
      teacher_name: req.body.teacher_name,
      teacher_birthday: req.body.teacher_birthday,
      teacher_phone_number: req.body.teacher_phone_number,
      teacher_specialization: req.body.teacher_specialization,
      login_id: savedLogin.login_id,
    };

    let savedTeacher = await Teacher.create(data);
    return res.status(201).json(savedTeacher);
  } else {
    return res
      .status(400)
      .json({ error: "Já existe um usuário com este e-mail" });
  }
};

exports.findPerLoginId = async (req, res) => {
  try {
    const student = await Student.findAll({
      where: {
        login_id: req.params.loginId,
      },
    });

    return res.json(student);
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
};

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

exports.create = async (req, res) => {
  let existentLogin = await Login.findOne({
    where: {
      login_email: req.body.loginEmail,
    },
  });

  if (!existentLogin) {
    let login = {
      login_email: req.body.login_email,
      login_password: req.body.login_password,
      login_name: req.body.student_name,
      login_photo_url: req.body.login_photo_url,
    };

    let savedLogin = await Login.create(login);

    let data = {
      student_name: req.body.student_name,
      student_birthday: req.body.student_birthday,
      student_phone_number: req.body.student_phone_number,
      login_id: savedLogin.login_id,
    };

    let savedStudent = await Student.create(data);
    return res.status(201).json(savedStudent);
  } else {
    return res
      .status(400)
      .json({ error: "Já existe um usuário com este e-mail" });
  }
};

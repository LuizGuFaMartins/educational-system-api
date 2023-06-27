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
      login_email: req.body.loginEmail,
      login_password: req.body.loginPassword,
      login_name: req.body.studentName,
      login_photo_url: req.body.loginPhotoUrl,
    };

    let savedLogin = await Login.create(login);

    let data = {
      student_name: req.body.studentName,
      student_birthday: req.body.studentBirthday,
      student_phone_number: req.body.studentPhoneNumber,
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

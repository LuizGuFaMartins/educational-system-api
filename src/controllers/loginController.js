const Login = require("../models/logins");
const jwt = require("jsonwebtoken");

exports.findAll = async (req, res) => {
  try {
    const list = await Login.findAll();
    return res.json(list);
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
};

exports.save = () => {
  return {};
};

exports.login = async (req, res) => {
  const { usuario, senha } = req.body;
  console.log("foi")
  if (usuario != "" && senha == "teste") {
    //Permissao = Criar token
    const token = jwt.sign({ user: usuario }, "A1B2C3D4", {
      expiresIn: "1 hr",
    });
    res.json({ status: true, token: token, usuario: usuario });
  } else {
    //Sem permissao = sem token
    res.status(403).json({ status: false });
  }
};

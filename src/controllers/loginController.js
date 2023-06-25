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
  const { loginEmail, loginPassword } = req.body;
  let response;

  Login.findOne({
    where: {
      login_email: loginEmail,
    },
  })
    .then((login) => {
      if (login) {
        if (loginPassword === login.login_password) {
          const token = jwt.sign({ user: loginEmail }, process.env.JWT_KEY, {
            expiresIn: 10000,
          });
          response = res.status(200).json({
            loginId: login.login_id,
            loginName: login.login_name,
            loginEmail: loginEmail,
            accessToken: token,
          });
        } else {
          response = res.status(400).json({ error: "Invalid credentials" });
        }
      } else {
        response = res.status(400).json({ error: "User not found" });
      }
    })
    .catch((err) => {
      console.log("\n ERROR: ", err, "\n");
      response = res.status(500).json({ error: "Login query error" });
    });

  return response;
};

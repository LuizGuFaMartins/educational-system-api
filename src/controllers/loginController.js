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
  const { login_email, password } = req.body;
  let response;

  Login.findOne({
    where: {
      login_email: login_email,
    },
  })
    .then((login) => {
      if (login) {
        if (password === login.password) {
          const token = jwt.sign({ user: login_email }, process.env.JWT_KEY, {
            expiresIn: 10000,
          });
          response = res.status(200).json({
            login_id: login.login_id,
            login_name: login.login_name,
            login_email: login_email,
            access_token: token,
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

exports.auth = async (req, res) => {
  const { usuario, senha } = req.body;

  const token = jwt.sign({ user: usuario }, "my_secret_key", {
    expiresIn: 10000,
  });

  return res.status(201).json({ user: usuario, accessToken: token });
};

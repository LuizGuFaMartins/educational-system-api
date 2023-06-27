const Joi = require("joi");

const StudentSchema = Joi.object({
  student_id: Joi.number().integer().positive().optional(),
  student_name: Joi.string().optional(),
  student_birthday: Joi.date().allow(null).optional(),
  student_phone_number: Joi.string().optional(),
  login_id: Joi.number().integer().positive().optional(),
  login_email: Joi.string().optional(),
  login_password: Joi.string().optional(),
});

module.exports = {
  validateLoginId: function (req, res, next) {
    const { error, value } = Joi.number()
      .integer()
      .greater(0)
      .validate(req.body.loginId);

    if (error) {
      return res.status(500).json({ status: false, msg: error });
    }

    req.params.id = value;
    return next();
  },
  validateStudent: function (req, res, next) {
    const { error, value } = StudentSchema.validate(req.body);
    if (error) {
      return res.json({ status: false, msg: error });
    }
    req.body = value;
    return next();
  },
};

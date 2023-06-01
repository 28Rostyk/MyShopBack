const HttpError  = require("../../Helpers/HttpError");
const { User } = require("../../models");

const findUser = async (req, res) => {
  const { email } = req.query;
  console.log(email);
  const user = await User.findOne({ email });

  if (!user) {
    throw HttpError(404, "Not found user");
  }

  if (user.password) {
    throw HttpError(401);
  }

  res.status(201).json({
    email: user.email,
    name: user.name,
    phone: user.phone,
  });
};

module.exports = findUser;

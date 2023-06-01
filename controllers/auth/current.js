const current = async (req, res) => {
  const {
    _id,
    email,
    name,
    phone,
  } = req.user;
  const token = req.token;

  res.status(200).json({
    token,
    user: {
      _id,
      email,
      name,
      phone,
    },
  });
};

module.exports = current;

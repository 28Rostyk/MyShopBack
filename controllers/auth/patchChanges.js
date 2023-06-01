const { User } = require("../../models");

const patchChanges = async (req, res) => {
  const { _id, myDiskonts: oldDiskonts } = req.user;

  const { myDiskonts } = req.body;
  if (myDiskonts) {
    if (oldDiskonts.includes(myDiskonts)) {
      oldDiskonts.splice(oldDiskonts.indexOf(myDiskonts), 1)
    } else {
      oldDiskonts.splice(1, 0, myDiskonts);
    }    
    await User.findByIdAndUpdate(_id, { myDiskonts: oldDiskonts });
    res.json(myDiskonts);
  } else {
    await User.findByIdAndUpdate(_id, req.body);
    const result = await User.find(_id);

    res.json(result);
  }
};

module.exports = patchChanges;

const validateData = {};

validateData.sanitize = (req, res, next) => {
  console.log(req.body);
  Object.keys(req.body).map((input) => {
    req.check(`${input}`).trim().escape();
  });

  let errors = req.validationErrors();

  if (!errors) {
    next();
  } else {
    res.send({ msg: errors });
  }
};

validateData.register = (req, res, next) => {
  const { cafeName } = req.body;

  req.check("firstName", "firstName").isAlpha();

  req.check("lastName", "lastName").isAlpha();

  if (cafeName) {
    req.check("cafeName", "cafeName").isAlpha();
  }

  req.check("city", "city").isAlpha();

  req.check("email", "email").isEmail();

  req.check("password", "password length").isLength({ min: 8 });

  req
    .check(
      "passwordConfirm",
      "confirmation of password does not correspond to the original one"
    )
    .custom((password) => {
      if (password !== req.body.password) {
        return false;
      }
      return true;
    });

  let errors = req.validationErrors();

  if (!errors) {
    next();
  } else {
    res.send({ msg: errors });
  }
};

module.exports = validateData;

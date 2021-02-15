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
  console.log(req.body);

  const { cafeName, number, zip, street } = req.body;

  req.check("firstName", "firstName").isAlpha();

  req.check("lastName", "lastName").isAlpha();

  if (req.body.userType === "cafe") {
    req.check("cafeName", "cafeName").isAlpha();
    req.check("street", "street").isAlpha();
    req.check("number", "number").isAlphanumeric();
    req.check("zip", "zip").isNumeric();
  }

  req.check("email", "email").isEmail();

  req.check("password", "password length").isLength({ min: 8 });

  req
    .check(
      "passwordConfirm",
      "confirmation of password does not correspond to the original one"
    )
    .custom((password) => {
      console.log(password, req.body.password);
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

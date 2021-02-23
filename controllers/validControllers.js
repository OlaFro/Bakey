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

  req.check("firstName", "firstName").isAlpha();

  req.check("lastName", "lastName").isAlpha();

  if (req.body.userType === "cafe") {
    req.check("cafeName", "cafeName").isLength({ min: 1 });
    req.check("cafeStreet", "street").isLength({ min: 2 });
    req.check("cafeStreetNr", "number").isAlphanumeric();
    req.check("cafeZip", "zip").isNumeric();
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

validateData.updateProfile = (req, res, next) => {
  req.check("firstName", "firstName").isAlpha();

  req.check("lastName", "lastName").isAlpha();

  if (req.body.userType === "cafe") {
    req.check("cafeName", "cafeName").isLength({ min: 1 });
    req.check("cafeStreet", "street").isLength({ min: 2 });
    req.check("cafeStreetNr", "number").isAlphanumeric();
    req.check("cafeZip", "zip").isNumeric();
  }

  if (req.body.cafeURL) {
    req.check("cafeURL", "cafeURL").isURL();
  }

  if (!errors) {
    next();
  } else {
    res.send({ msg: errors });
  }
};

validateData.newListing = (req, res, next) => {
  console.log(req.body);
  req.check("listingName", "listingName").isLength({ min: 1 });
  req
    .check("totalPieces", "totalPieces")
    .isNumeric()
    .custom((value) => {
      if (value > 0) {
        return true;
      } else {
        return false;
      }
    });
  req
    .check("piecePrice", "piecePrice")
    .isNumeric()
    .custom((value) => {
      if (value > 0) {
        return true;
      } else {
        return false;
      }
    });
  req.check("pickUpDate", "pickUpDate").isAfter();

  let errors = req.validationErrors();

  if (!errors) {
    next();
  } else {
    res.send({ msg: errors });
  }
};

module.exports = validateData;

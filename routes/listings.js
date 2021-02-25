var express = require("express");
var router = express.Router();
const ListingModel = require("../models/ListingModel");
const UserModel = require("../models/UserModel");
const uploadFile = require("../controllers/multerController");
const { authenticateToken } = require("../controllers/authControllers");
const { sanitize, newListing } = require("../controllers/validControllers");
/* 

*/

//registering, authenticating & validating newListing

router.post(
  "/add-listing",
  authenticateToken,
  uploadFile,
  sanitize,
  newListing,
  (req, res, next) => {
    const addListing = req.body;
    const user = req.user;
    console.log(user);
    console.log(addListing);
    ListingModel.estimatedDocumentCount({}, (err, result) => {
      if (err) {
        res.send(err);
      } else {
        addListing.id = result + 1;

        UserModel.findById(user.id)
          .then((cafe) => {
            if (cafe.userType === "cafe") {
              let addedListing = new ListingModel({
                id: addListing.id,
                cafeId: user.id,
                cafeName: cafe.cafeName,
                listingName: addListing.listingName,
                listingTags: addListing.listingTags.split(","),
                listingAllergenes: addListing.listingAllergenes.split(","),
                totalPieces: +addListing.totalPieces,
                availablePieces: +addListing.totalPieces,
                piecePrice: +addListing.piecePrice,
                listingPicture: req.files[0]
                  ? req.files[0].path
                  : "../uploads/images/listingplaceholder.png",
                pickUpDate: addListing.pickUpDate,
                listingStatus: "active",
              });
              console.log(addedListing);
              addedListing
                .save()
                .then((result) => {
                  console.log("result", result);
                  console.log(cafe);
                  UserModel.findByIdAndUpdate(user.id, {
                    $push: { cafeListings: result._id },
                  })
                    .then((foundUser) => {
                      console.log(foundUser);
                      res.send("added listing");
                    })
                    .catch((err) => {
                      res.send(err);
                    });
                })
                .catch((err) => {
                  res.send(err);
                });
            } else {
              res.send("listings can be created just by users with role cafe");
            }
          })
          .catch((err) => {
            res.send(err);
          });
      }
    });
  }
);

router.put("/checkout", authenticateToken, (req, res, next) => {
  const purchase = req.body;
  const listing = purchase.listingId;
  const pcs = purchase.pcs;
  const buyer = req.user.id;
  const availablePieces = purchase.availablePieces;

  let pcsLeft = availablePieces - pcs;
  let modification = {};
  if (pcsLeft > 0) {
    modification.availablePieces = pcsLeft;
  } else if (pcsLeft === 0) {
    modification.availablePieces = 0;
    modification.listingStatus = "sold";
  }
  ListingModel.findByIdAndUpdate(listing, {
    $set: modification,
    $push: {buyers: {_id: buyer, pcs: pcs}}
  })
    .then((result) => {
      res.send("listing updated");
    })
    .catch((err) => {
      res.send(err);
    });
});

/* 
router.put("/update", (req, res, next) => {
  const ListingId = req.body.id;
  const updatedListing = req.body;
  ListingModel.findByIdAndUpdate(ListingId, {
    listingName: updatedListing.listingName,
    listingTags: updatedListing.listingTags,
    listingAllergenes: updatedListing.listingAllergenes,
    totalPieces: updatedListing.totalPieces,
    availablePieces: updatedListing.availablePieces,
    piecePrice: updatedListing.piecePrice,
  })
    .then((update) => {
      console.log(update);
      res.send({ updated: true });
    })
    .catch((err) => {
      res.send(err);
    });
});


router.put("/updatepic", (req, res, next) => {
  const ListingId = req.body.id;
  ListingModel.findByIdAndUpdate(
    ListingId,
    {
      listingPicture: req.file.path,
    },
    { useFindAndModify: false }
  )
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.delete("/delete", (req, res, next) => {
  const ListingId = req.body.id;
  ListingModel.deleteOne(ListingId)
  .then((result) => {
    console.log(result);
  })
  .catch((err)=>{
      console.log(err)
  });
});
 */

module.exports = router;

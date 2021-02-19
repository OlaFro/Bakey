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
  sanitize,
  newListing,
  uploadFile,
  (req, res, next) => {
    const addListing = req.body;
    const user = req.user;
    console.log(user);
    console.log(addListing);
    ListingModel.estimatedDocumentCount({}, (err, result) => {
      if (err) {
        res.send(err);
      } else {
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
                    listingTags: addListing.listingTags,
                    listingAllergenes: addListing.listingAllergenes,
                    totalPieces: addListing.totalPieces,
                    availablePieces: addListing.totalPieces,
                    piecePrice: addListing.piecePrice,
                    listingPicture: req.file
                      ? req.file.path
                      : "../uploads/images/listingplaceholder.png",
                    pickUpDate: addListing.pickUpDate,
                    listingStatus: "active",
                  });
                  addedListing
                    .save()
                    .then((result) => {
                      res.send("added listing");
                    })
                    .catch((err) => {
                      res.send(err);
                    });
                } else {
                  res.send(
                    "listings can be created just by users with role cafe"
                  );
                }
              })
              .catch((err) => {
                res.send(err);
              });
          }
        });
      }
    });
  }
);

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

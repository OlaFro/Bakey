var express = require("express");
var router = express.Router();
const ListingModel = require("../models/ListingModel");
const UserModel = require("../models/UserModel");
const uploadFile = require("../controllers/multerController");
const {
  authenticateToken,
  authorizeCafe,
} = require("../controllers/authControllers");
const {
  sanitize,
  newListing,
  reactivateListing,
} = require("../controllers/validControllers");
const listingAction = require("../controllers/listingControllers");
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
    ListingModel.find()
      .sort({ _id: -1 })
      .limit(1)
      .then((newest) => {
        console.log("newest", newest);
        console.log(newest[0].id);
        addListing.id = +newest[0].id + 1;

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
                listingPicture: req.files["file"]
                  ? req.files["file"][0].path
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
      })
      .catch((err) => {
        res.send(err);
      });
  }
);

router.put("/checkout", authenticateToken, (req, res, next) => {
  const purchase = req.body;
  const listingId = purchase.listingId;
  let pcs = purchase.pcs;
  const buyer = req.user.id;
  console.log(listingId, pcs, buyer);
  ListingModel.findById(listingId)
    .then((listing) => {
      if (listing.availablePieces === 0) {
        res.send({ boughtPieces: 0 });
      } else {
        let pcsLeft = listing.availablePieces - pcs;
        let modification = {};
        if (pcsLeft < 0) {
          modification.availablePieces = 0;
          pcs = listing.availablePieces;
          console.log(pcsLeft, modification);
          modification.listingStatus = "sold";
          console.log(modification, pcs, pcsLeft);
        } else {
          modification.availablePieces = pcsLeft;
          if (pcsLeft === 0) {
            modification.listingStatus = "sold";
          }
        }
        ListingModel.findByIdAndUpdate(listing, {
          $set: modification,
          $push: { buyers: buyer, boughtPieces: pcs },
        })
          .then((result) => {
            UserModel.findByIdAndUpdate(buyer, { $push: { orders: listingId } })
              .then((result) => {
                res.send({ boughtPieces: pcs });
              })
              .catch((err) => {
                res.send(err);
              });
          })
          .catch((err) => {
            res.send(err);
          });
      }
    })
    .catch((err) => {
      res.send(err);
    });
});

router.get("/cafe", authenticateToken, (req, res, next) => {
  const user = req.user;
  ListingModel.find({ cafeId: user.id })
    .populate({
      path: "buyers",
      select: "email",
    })
    .then((listings) => {
      res.send(listings);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.post(
  "/archive",
  authenticateToken,
  authorizeCafe,
  listingAction.inactivate,
  (req, res, next) => {
    const today = req.date;
    const listingID = req.body.listingID;
    ListingModel.findOneAndUpdate(
      {
        _id: listingID,
        $or: [{ listingStatus: "sold" }, { pickUpDate: { $lte: today } }],
      },
      {
        listingStatus: "inactive",
        buyers: [],
        boughtPieces: [],
      },
      { new: true }
    )
      .then((listing) => {
        if (listing) {
          res.send({
            status: "changed",
            listing: listing,
          });
        } else {
          res.send({ status: "not changed" });
        }
      })
      .catch((err) => {
        res.send(err);
      });
  }
);

router.get("/end-soon", listingAction.inactivate, (req, res, next) => {
  const today = req.date;
  ListingModel.find({ listingStatus: "active", pickUpDate: { $gte: today } })
    .sort({ pickUpDate: 1 })
    .limit(3)
    .then((listings) => {
      res.send(listings);
    })
    .catch((err) => {
      res.send(err);
    });
});

module.exports = router;

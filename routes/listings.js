var express = require("express");
var router = express.Router();
const ListingModel = require("../models/ListingModel");
let multer = require("multer");
const { v4: uuidv4 } = require("uuid");
const { authenticateToken } = require("../controllers/authControllers");
const { sanitize } = require("../controllers/validControllers");
/* 

*/



let storage = multer.diskStorage({
  destination: "../uploads/images",
  filename: function (req, file, cb) {
    cb(null, uuidv4() + "." + file.mimetype.split("/")[1]);
  }
});

//max file size should be 2MB
let uploads = multer({ storage: storage, limits: { fileSize: 1*1024*1024 } }).single('file');

//registering, authenticating & validating newListing

router.post(
  "/addlisting",
  authenticateToken,
  sanitize,
  (req, res, next) => {
    //this should handle the error if files are bigger than 2 MB
    uploads(req,res, (err)=>{
      if(err){
        return res.json({error:err})
      } 
    });
    const addListing = req.body;
    const user = req.user;
    ListingModel.estimatedDocumentCount({}, (err, result) => {
      if (err) {
        res.send(err);
      } else {
        addListing.id = result + 1;

        let addedListing = new ListingModel({
          id: addListing.id,
          //from the authentication:
          cafeId: user.id,
          //cafename should come from FE as it is stored in context
          cafeName: addListing.cafeName,
          listingName: addListing.listingName,
          listingTags: addListing.listingTags,
          listingAllergenes: addListing.listingAllergenes,
          totalPieces: addListing.totalPieces,
          availablePieces: addListing.totalPieces,
          piecePrice: addListing.piecePrice,
          //there should be a condition to send the path from a placeholder image if the file is empty.
          listingPicture: req.file
            ? req.file.path
            : "../uploads/images/listingplaceholder.png",
          pickUpDate: addListing.pickUpDate,
        });
        if (!err) {
          addedListing
            .save()
            .then((result) => res.send("added listing"))
            .catch((err) => {
              res.send(err);
            });
        } else {
          res.send("error adding listing");
        }
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

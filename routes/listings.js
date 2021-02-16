var express = require("express");
var router = express.Router();
const ListingModel = require("../models/ListingModel");

router.post("/newListing", (req, res, next) => {
  const newListing = req.body;
  ListingModel.estimatedDocumentCount({}, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      newListing.id = result + 1;

      let addedListing = new ListingModel({
        id: newListing.id,
        //from the authentication:
        cafeId: newListing.cafeId,
        cafeName: newListing.cafeName,
        //from the form:
        listingName: newListing.listingName,
        listingTags: newListing.listingTags,
        listingAllergenes: newListing.listingAllergenes,
        totalPieces: newListing.totalPieces,
        //at the beginning same as totalPieces
        availablePieces: newListing.totalPieces,
        piecePrice: newListing.piecePrice,
        listingPicture: newListing.listingPicture,
      });
    }
  });
});

router.put("/update", (req, res, next) => {
  //not sure about where to get the id of the listing... see line 57 too
  const ListingId = req.body.id;
  const updatedListing = req.body;
  ListingModel.findByIdAndUpdate(ListingId, {
    listingName: updatedListing.listingName,
    listingTags: updatedListing.listingTags,
    listingAllergenes: updatedListing.listingAllergenes,
    totalPieces: updatedListing.totalPieces,
    //guess we can calculate how many pieces are left and also use this to just update the available pieces?
    availablePieces: updatedListing.availablePieces,
    piecePrice: updatedListing.piecePrice,
    //will leave the updating the photo for another put method
  })
    .then((update) => {
      console.log(update);
      res.send({ updated: true });
    })
    .catch((err) => {
      res.send(err);
    });
});

//for the listing pictures

router.put("/updatepic", (req, res, next) => {
  //not sure about where to get the id of the listing
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


module.exports = router;

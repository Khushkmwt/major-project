const express = require("express");
const router = express.Router();
const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");
const { isLoggedIn, Isowner, validateListing } = require("../middleware.js");
const listingController = require("../controller/listing.js");
const multer  = require('multer');
const {storage} = require("../cloudconfi.js");
const upload = multer({ storage });


//index route
router
 .route("/")
     .get(wrapAsync (listingController.index))
     .post( isLoggedIn, upload.single('listing[image]'), validateListing, wrapAsync(listingController.createListing));
    // .post( upload.single('listing[image]'), (req,res) =>{
    //     res.send(req.file);
    // })
//new route 
router.get("/new", isLoggedIn ,
 listingController.renderNewform);

//show route
router
 .route("/:id")
     .get( wrapAsync (listingController.showListing))
     .put( isLoggedIn, Isowner, upload.single('listing[image]'), validateListing, wrapAsync (listingController.updateListing))
     .delete( isLoggedIn, Isowner, wrapAsync(listingController.deleteListing));

//edit route
router.get("/:id/edit", isLoggedIn, Isowner,wrapAsync (listingController.renderEditform));

router

module.exports = router ;
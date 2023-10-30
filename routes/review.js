const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync.js");
const { validatereview, isLoggedIn, IsreviewAuthor } = require("../middleware.js");
const reviewController = require("../controller/review.js");

//review route
//post review route

router.post("/", validatereview, isLoggedIn, wrapAsync (reviewController.postReview));

// delete review route
 
router.delete("/:reviewId", IsreviewAuthor, wrapAsync (reviewController.deleteReview));

module.exports = router ;
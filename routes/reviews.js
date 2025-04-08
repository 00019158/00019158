const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const dataPath = path.join(__dirname, '../data/reviews.json');

// all reviews
function getReviews() {
  const data = fs.readFileSync(dataPath);
  return JSON.parse(data);
}

// save all reviews
function saveReviews(reviews) {
  fs.writeFileSync(dataPath, JSON.stringify(reviews, null, 2));
}

// Main page
router.get('/', (req, res) => {
  const reviews = getReviews();
  res.render('index', { reviews });
});

// add page
router.get('/add', (req, res) => {
  res.render('form', { review: null });  //  null to the new review 
});

// Add the new Review 
router.post('/add', (req, res) => {
  const reviews = getReviews();
  const newReview = {
    id: Date.now().toString(),
    title: req.body.title,
    author: req.body.author,
    genre: req.body.genre,
    review: req.body.review,
    rating: req.body.rating
  };
  reviews.push(newReview);
  saveReviews(reviews);
  res.redirect('/');
});

// Delete review
router.post('/delete/:id', (req, res) => {
  let reviews = getReviews();
  const id = req.params.id;
  reviews = reviews.filter(review => review.id !== id);
  saveReviews(reviews);
  res.redirect('/');
});

// Show the form fr editing 
router.get('/edit/:id', (req, res) => {
  const reviewId = req.params.id;
  const reviews = getReviews();  // get all reviews 
  const review = reviews.find(r => r.id === reviewId);  // find required review

  if (!review) {
    return res.status(404).send('Review not found ');
  }

  res.render('form', { review });  // send obj review to the template
});

// Prcessinf editing
router.post('/edit/:id', (req, res) => {
  const reviewId = req.params.id;
  const reviews = getReviews();
  const index = reviews.findIndex(r => r.id === reviewId);

  if (index === -1) {
    return res.status(404).send('Review not found');
  }

  // Updating fields 
  reviews[index] = {
    id: reviewId,
    title: req.body.title,
    author: req.body.author,
    genre: req.body.genre,
    review: req.body.review,
    rating: req.body.rating
  };

  saveReviews(reviews); // save new review
  res.redirect('/'); // back to main page
});

module.exports = router;

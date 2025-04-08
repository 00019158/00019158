const express = require('express');
const bodyParser = require('body-parser');
const reviewsRouter = require('./routes/reviews');
const path = require('path');

const app = express();
const PORT = 3000;

// Express for static files
app.use(express.static(path.join(__dirname, 'public')));

// Middleware for form data 
app.use(bodyParser.urlencoded({ extended: true }));

//  EJS settings
app.set('view engine', 'ejs');
app.set('views', 'views');

// Connecting routes
app.use('/reviews', reviewsRouter);

// Main Page
app.get('/', (req, res) => {
  res.redirect('/reviews');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

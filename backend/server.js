const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
const userRoutes = require('./routes/user');
const newsRoutes = require('./routes/news');

app.use('/user', userRoutes);
app.use('/news', newsRoutes);
app.use('/categories', newsRoutes);
app.use('/channels', newsRoutes);
app.use('/tags', newsRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
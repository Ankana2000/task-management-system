const mongoose = require('mongoose');

// Connection string from environment variable
const mongodbUrl = process.env.MONGODB_URL;

mongoose.connect(mongodbUrl, {
    // No need for useNewUrlParser and useUnifiedTopology options anymore
    // Other options can be added here if needed
})
.then(() => console.log('Connected to MongoDB successfully'))
.catch((error) => console.error('Error connecting to MongoDB:', error));

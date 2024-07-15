const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const contactRoutes = require('./routes/contacts');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

const mongoUri = process.env.MONGODB_URI;
if (!mongoUri) {
  console.error("Error: MONGODB_URI is not defined in .env file");
  process.exit(1);
}

mongoose.connect(mongoUri, {
  tlsAllowInvalidCertificates: true,
}).then(() => {
  console.log("Connected to MongoDB");
}).catch((error) => {
  console.error("Error connecting to MongoDB", error);
});

app.use('/api/auth', authRoutes);
app.use('/api/contacts', contactRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

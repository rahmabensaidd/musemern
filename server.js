const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config();
const cors = require('cors');
const app = express();
const PORT = 5000;
const MailRoute = require("./routes/MailerRoute")
const UploadRoute = require("./routes/UploadRoute");
const corsOptions = {
  origin: 'http://localhost:3000', 
  credentials: true
};
app.use(cors(corsOptions)); 

// Middleware
app.use(express.json());
app.use(express.static("public"));

// Routes
app.use(UploadRoute);
app.use(MailRoute);

// Connexion à MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB Connected...");
    // Démarrage du serveur Express après la connexion à MongoDB
    app.listen(PORT, () => {
      console.log(`Server started at port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
  });











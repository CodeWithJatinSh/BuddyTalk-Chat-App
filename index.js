/**
 * index.js
 * Main entry point for the Express server application.
 */
// Import required modules
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const mongoose = require('mongoose');
const Chat = require('./models/chat.js');

// Set up EJS as the templating engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine","ejs");

// Connect to MongoDB
main()
    .then(()=>{
     console.log('Connected to MongoDB')})
    .catch(err => console.log(err));

    async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/WhatsApp');
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
    }

// Define a simple route
app.get('/', (req, res) => {
  res.send('Root is Working');
});

//Index route to display chat messages
app.get('/chats', async(req, res) => {
    const chats =  await Chat.find({});
    console.log(chats);
    res.render("home.ejs", {chats: chats});
  });

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
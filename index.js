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

// Serve static files from the "styles" directory
app.use(express.static(path.join(__dirname, 'styles')));

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));


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

  // Route to display the form for creating a new chat message
app.get('/chats/create', (req, res) => {
    res.render("create.ejs");
  });

  // Route to handle new chat message creation
app.post('/chats/create', async (req, res) => {
    const { from, to, message } = req.body;
    const newChat = new Chat({
      from,
      to,
      message,
      timestamp: new Date()
    });
    await newChat.save();
    res.redirect('/chats');
  });

// Route to handle chat message deletion
app.get('/chats/delete/:id', async (req, res) => {
    const { id } = req.params;
    await Chat.findByIdAndDelete(id);
    res.redirect('/chats');
  });

// Route to display the form for editing a chat message
app.get('/chats/edit/:id', async (req, res) => {
    const { id } = req.params;
    const chat = await Chat.findById(id);
    res.render("edit.ejs", { chat });
  });

// Route to handle chat message editing
app.post('/chats/edit/:id', async (req, res) => {
    const { id } = req.params;
    const { from, to, message } = req.body;
    await Chat.findByIdAndUpdate(id, { from, to, message });
    res.redirect('/chats');
  });




// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
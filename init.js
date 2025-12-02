const mongoose = require('mongoose');
const Chat = require('./models/chat.js');

// Connect to MongoDB
main()
    .then(()=>{
     console.log('Connected to MongoDB')})
    .catch(err => console.log(err));

    async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/WhatsApp');
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
    }
let chatMessages = [
    {
        from: "Alice", 
        to: "Bob",
        message: "Hello, Bob!",
        timestamp: new Date()
    },
    {
        from: "Bob", 
        to: "Alice",    
        message: "Hi, Alice! How are you?",
        timestamp: new Date()
    },
    {
    from: "Charlie",
    to: "Alice",
    message: "Hey Alice, are we still meeting today?",
    timestamp: new Date()
},
{
    from: "Alice",
    to: "Charlie",
    message: "Yes, just finishing something. Will be there soon!",
    timestamp: new Date()
},
{
    from: "Bob",
    to: "Charlie",
    message: "Guys, don’t forget we have a deadline tomorrow!",
    timestamp: new Date()
}

];
// demo data
Chat.insertMany(chatMessages).then((res) => {
    console.log('Demo chat messages inserted:', res);
}).catch((err) => {
    console.log('Error inserting demo chat messages:', err);
});

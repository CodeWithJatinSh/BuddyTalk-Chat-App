# 📌 BuddyTalk (Chat-App)

A simple backend for a chat-style application built using **Node.js**, **Express**, **MongoDB**, and **EJS** for rendering views. This project allows users to create, view, edit, and manage chat messages with a clean UI.

---

## 🚀 Features

- Create new chat messages  
- View all saved chats  
- Edit existing messages  
- Delete messages  
- MongoDB integration using **Mongoose**
- Server-side rendering with **EJS**
- Custom CSS styling

---

## 📂 Project Structure

```
Chat-App-Backend-
│
├── models
│   └── chat.js            # Mongoose schema & model
│
├── styles
│   └── home.css           # Main stylesheet
│
├── views
│   ├── create.ejs         # Form to create chat
│   ├── edit.ejs           # Form to edit chat
│   └── home.ejs           # Homepage displaying all chats
│
├── index.js               # Main Express application entry point
├── init.js                # DB initialization script (optional)
│
├── package.json
└── package-lock.json
```

---

## 🛠️ Tech Stack

| Tool / Library | Purpose |
|----------------|---------|
| **Node.js** | Backend runtime |
| **Express.js** | Web framework |
| **MongoDB** | Database |
| **Mongoose** | MongoDB ODM |
| **EJS** | Templating engine |
| **CSS** | Styling |

---

## 📦 Installation & Setup

1. **Clone the repository**
```bash
git clone https://github.com/CodeWithJatinSh/Chat-App-Backend-.git
cd Chat-App-Backend-
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure MongoDB**  
Update your MongoDB URL inside `index.js` or use a `.env` file.

4. **Start the server**
```bash
npm start
```

5. **Visit the app**
👉 `http://localhost:3000/`

---

## ✨ Future Improvements

- User authentication (login/sign-up)
- Real-time chat with Socket.io
- Improved UI/UX
- Deployment & production setup

---

## 🤝 Contributing

Pull requests are welcome!  
Feel free to open issues for suggestions or bugs.

---

## 📬 Author

Made by **Jatin Sohanvi (CodeWithJatinSh)**  
💻 Learning. Building. Growing.

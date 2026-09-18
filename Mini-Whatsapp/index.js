const express = require("express");
const mongoose = require("mongoose");
const Chat = require("./models/chats");
const path = require("path");
const methodOverride = require("method-override");
const ExpressError = require("./ExpressError");

const app = express();
const port = 8080;

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

main()
  .then(() => {
    console.log("MongoDB Connected Successfully");
  })
  .catch((err) => {
    console.log(err);
  });

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.listen(port, () => {
  console.log(`Server started at ${port}`);
});

app.get("/", (req, res) => {
  res.redirect("/chats");
});

app.get("/chats", async (req, res, next) => {
  try {
    let allChats = await Chat.find({});
    res.render("home.ejs", { allChats });
  } catch (error) {
    next(error);
  }
});

app.get("/chats/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/chats", async (req, res, next) => {
  try {
    let { message, from, to } = req.body;
    const newChat = new Chat({
      from: from,
      to: to,
      message: message,
      created_at: new Date(),
    });
    await newChat.save();
    res.redirect("/chats");
  } catch (err) {
    next(err);
  }
});

app.get("/chats/:id", async (req, res, next) => {
  try {
    let { id } = req.params;
    let chat = await Chat.findById(id);
    if (!chat) {
      next(new ExpressError(404, "Chat not Found"));
    }
    res.render("show.ejs", { chat });
  } catch (err) {
    next(err);
  }
});

app.get("/chats/:id/edit", async (req, res, next) => {
  try {
    let { id } = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs", { chat });
  } catch (err) {
    next(err);
  }
});

app.patch("/chats/:id", async (req, res, next) => {
  try {
    let { id } = req.params;
    let { message } = req.body;
    await Chat.findByIdAndUpdate(id, { message });
    res.redirect("/chats");
  } catch (err) {
    next(err);
  }
});

app.delete("/chats/:id", async (req, res, next) => {
  try {
    let { id } = req.params;
    await Chat.findByIdAndDelete(id);
    res.redirect("/chats");
  } catch (err) {
    next(err);
  }
});

app.use((err, req, res, next) => {
  let { status = 500, message = "Some Error Occured" } = err;
  res.status(status).send(message);
});

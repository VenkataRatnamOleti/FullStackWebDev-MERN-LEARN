const mongoose = require("mongoose");

let main =  async () => {
    await mongoose.connect("mongodb://localhost:27017/amazon");
}

main()
.then(()=>{
    console.log("MongoDB Connected Successfully!");
})
.catch((err)=>{
    console.log(err);
});

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author : {
        type: String,
    },
    price : {
        type: Number,
    },
    discount : {
        type: Number,
        default : 0
    }
});

const Book = new mongoose.model("Book",bookSchema);

Book.find().then(data => {console.log(data.length)});

// Book.insertMany([
//     {
//         title: "Mathematics X",
//         author : "RD Sharma",
//         price: 500,
//     },
//         {
//         title: "I'm gonna Kill You",
//         author : "Piyush Gupta",
//         price: 200,
//     },
//         {
//         title: "How to outlearn Everybody?",
//         author : "Yaswanth Kumar",
//         price: 1500,
//     },
// ]).then(res => console.log(res));

// let book1 = new Book({
//     title : "Mathematics XII",
//     author : "RD Sharma",
//     price: 1200,
//     discount: 250
// });

// book1.save();



// let userSchema = new mongoose.Schema({
//     name: String,
//     email: String,
//     age: Number
// });

// const User = mongoose.model("User",userSchema);

// let user1 = new User({
//     name: "Venkat",
//     email: "abc@gmail.com",
//     age: 21
// });

// user1.save()
// .then(res => console.log(res))
// .catch(err => console.log(err));
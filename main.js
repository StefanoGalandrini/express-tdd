const Model = require("./Model");

// Create a new instance of Model
const postsModel = new Model("db/posts.json");

// reads the json file and returns the array of posts
const posts = postsModel.read();
console.log("Posts:", posts);

// Adds a new post to the array and writes it to the json file
const newPost = { titolo: "Nuovo Post", autore: "Autore" };
const updatedPosts = postsModel.add(newPost);
console.log("Updated Posts:", updatedPosts);

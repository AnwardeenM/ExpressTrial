const { json } = require("express");
const express = require("express");

const app = express();

// app.use(logger);

app.get("/books",(req,res)=>{
    console.log("Fetching all books ");
    return res.status(201).send("finding all the books");
});


app.get("/books/:name",(req,res)=>{
    req.name = req.params.name;
    console.log(req.name);
    return res.json({bookName:req.name});
});
// function allBooks(req,res,next){

//     if(req.path === "/books"){
//         req.bookName = "/books";
//         console.log("Fetching all the Books");
//         next();
//     }
//     return res.send("no books are here")
    
// }

app.listen(3000,()=>{
    console.log("listening on port 3000");
})
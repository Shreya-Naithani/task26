const express = require('express');
const app = express();

const port = 3000;
app.use(express.json());

app.get("/home", async(req,res)=>{
    try {
        res.status(200).send("<h1>Welcome to home page</h1>")
    } catch (error) {
        res.status(500).send(error);
    }
  
});
app.get("/about", async(req,res)=>{
    try {
        res.status(200).send("<h1>Welcome to About page</h1>")
    } catch (error) {
        res.status(500).send(error);
    }
  
});

app.get("/contact", async(req,res)=>{
    try {
        res.status(200).send("<h1>Welcome to Contact page</h1>")
    } catch (error) {
        res.status(500).send(error);
    }
  
})
app.get("/*", async(req,res)=>{
    try {
        res.status(400).send("<h1>404 error</h1>")
    } catch (error) {
        res.status(500).send(error);
    }
  
})
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})
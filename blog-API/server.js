/********************************************************************************* 
*  BTI425 – Assignment 04 
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  No part of this 
*  assignment has been copied manually or electronically from any other source (including web sites) or  
*  distributed to other students. 
*  
*  Name: Armen Merzaian Student ID: 060207024 Date: Arpil 9, 2022
*  Heroku Link:
*  https://intense-basin-84450.herokuapp.com/api/
* 
********************************************************************************/ 

const mongoDBConnectionString = "mongodb+srv://dbUser:pass123@blog-amerzanian.hsy2p.mongodb.net/blog-amerzanian?retryWrites=true&w=majority";
const HTTP_PORT = process.env.PORT || 8080;

const express = require("express");
const bodyParser = require('body-parser');

const cors = require("cors");
const dataService = require("./modules/data-service.js");

const data = dataService(mongoDBConnectionString);
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.post("/api/posts", (req,res)=>{
    data.addNewPost(req.body).then((msg)=>{
        res.json({message: msg});
    }).catch((err)=>{
        res.json({message: `an error occurred: ${err}`});
    });
});

// IMPORTANT NOTE: ?tag=#funny wll not function, but ?tag=funny will
app.get("/api/posts", (req,res) => {
    data.getAllPosts(req.query.page, req.query.perPage, req.query.category, req.query.tag).then((data)=>{
        res.json(data);
    })
    .catch((err)=>{
        res.json({message: `an error occurred: ${err}`});
    })
});

app.get("/api/categories", (req,res)=>{
    data.getCategories().then((data)=>{
        res.json(data);
    })
    .catch((err)=>{
        res.json({message: `an error occurred: ${err}`});
    })
});

app.get("/api/tags", (req,res)=>{
    data.getTags().then((data)=>{
        res.json(data);
    })
    .catch((err)=>{
        res.json({message: `an error occurred: ${err}`});
    })
});

app.get("/api/posts/:id",(req,res)=>{
    data.getPostById(req.params.id).then(data=>{
        res.json(data);
    }).catch((err)=>{
        res.json({message: `an error occurred: ${err}`});
    });
});

app.put("/api/posts/:id", (req,res)=>{
    data.updatePostById(req.body,req.params.id).then((msg)=>{
        res.json({message: msg});
    }).catch((err)=>{
        res.json({message: `an error occurred: ${err}`});
    });
});

app.delete("/api/posts/:id", (req,res)=>{
    data.deletePostById(req.params.id).then((msg)=>{
        res.json({message: msg});
    }).catch((err)=>{
        res.json({message: `an error occurred: ${err}`});
    });
});

// Connect to the DB and start the server

data.connect().then(()=>{
    app.listen(HTTP_PORT, ()=>{console.log("API listening on: " + HTTP_PORT)});
})
.catch((err)=>{
    console.log("unable to start the server: " + err);
    process.exit();
});

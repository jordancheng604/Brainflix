// const axios = require('axios');
const express = require('express');
const app = express();
const data = require('./Data/data.json');

//FUNCTIONAL  REQUIREMENTS: API SERVER.
//1. The end-points and response structure of your API server must match that of the mock API server.
//2. The API must have the following end-points:
//  2.A) GET /videos that responds with an array of videos
//  2.B) GET /videos/:id that responds with an object containing the details of the video with id of :id.
//  2.C) POST /videos that will add a new video to the video list. A unique id must be generated for each video added.
//========--UUID might be needed.
//3. Submitting a new video from the form must POST to the API. The user must provide the hard-coded image path for the video thumbnail on the front-end during the form submission.

//You need error codes.
//Error 404: json{"message": "There is no video with that id."}
//TeaPot error:

//Routes:
// /get`/videos`

app.get('/', (req,res)=>{
    res.send("Hi there and Welcome to BF-Sprint 3")
})

app.listen(8080, ()=> console.info('You are running on Port:8080 with BrainFlix Sprint3.'));

app.get('/videos', (req,res)=>{
    //console.log(data.json);
    //res.send(data.json);
    res.json(data)
})//data.json file to send. test and see if it works.
//so when a call is made to "/videos"; return should only be: ***id, title, channel, and image***.






app.get('/videos/:id', (req,res)=>{
    res.json(data)
    //.channel.image.description.views.likes.timestamp.comments
})
//When someone calls with an "":id"; return is the entire package for that one video: ***id, title, channel, image, descriptin, views, likes, timestamp, comments, 
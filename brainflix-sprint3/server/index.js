// const axios = require('axios');
const express = require('express');
const app = express();
const data = require('./Data/data.json');
const cors = require('cors');

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
//What about status codes? 200??
app.use(cors())

//Routes:
// /get`/videos`

app.get('/', (req,res)=>{
    res.send("Hi there and Welcome to BrainFlix Sprint3")
})

app.listen(8080, ()=> console.info('You are running on Port:8080 with BrainFlix Sprint3 by Jordan Cheng.'));



app.get('/videos', (_req,res)=>{
    //console.log(data.json);
res.json(data.smallVideoList)

})
//This is for sending the single video and its data when using the MainVideoPlayer. MUST BE AN OBJECT!!!
// function hopefullMiddleware(req, res, next){
//     getVideoData(req.params.id)
//     .then(function(data){
//         req.videoData = data
//         next()
//     })
//     .catch(function (error) {
//         res.status(400).end()
//     })
// }
    
// app.get('/videos/`${video.id}`', [hopefullMiddleware])


app.get('/videos/:id', (req,res)=>{
res.send(data.bigVideoList.filter(singleVideo=>(singleVideo.id === req.params.id)))
    //res.send(data.bigVideoList.slice(videoData=>{videoData.id}))
   
    //(vidData=()=>{vidData.id})
    //res.send(data.slice(`data.${data.id}`,1))
    //.channel.image.description.views.likes.timestamp.comments

    })


//When someone calls with an "":id"; return is the entire "package" for that one video: ***id, title, channel, image, descriptin, views, likes, timestamp, comments, 





//For receiving a POST, a UPLOAD VIDEO.
//will take the thumbnail image; from the frontend

//uploadcomponent --image something seomthing. rec.body data
//image

app.post('/upload', (req,res)=>{
    upload.push(data)
    return res.status(201);
})
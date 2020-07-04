// const axios = require('axios');
const express = require('express');
const uuid = require('uuid');
const app = express();
const data = require('./Data/data.json');
const cors = require('cors');
const uploadImage = ('./assets/Upload-video-preview.jpg');

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


//Get Side Videos List:
app.get('/videos', (_req,res)=>{
    //console.log(data.json);
     res.json(data.smallVideoList)
    // const sideVideoList= data.bigVideoList.map(sideVids=(sideVid)=>{
        
    //         sideVid.id
    //         // bigVideoList.title,
    //         // bigVideoList.channel,
    //         // bigVideoList.image
        
    

    // })
    // res.json(sideVideoList);
    // console.log(sideVideoList);
    //res.send(data.bigVideoList.filter(singleVideo=>{singleVideo.id === req.params.id}));
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
const findVideo = data.bigVideoList(singleVideo=>{singleVideo.id === req.params.id});

if (findVideo){
    res.send(data.bigVideoList.filter(singleVideo=>{singleVideo.id === req.params.id}));
}else{
    res.status(400).json({message: 'Nothing found, please double check your inputs(Video ID).'});
}
    //res.send(data.bigVideoList.slice(videoData=>{videoData.id}))
   
    //(vidData=()=>{vidData.id})
    //res.send(data.slice(`data.${data.id}`,1))
    //.channel.image.description.views.likes.timestamp.comments

    });


//When someone calls with an "":id"; return is the entire "package" for that one video: ***id, title, channel, image, descriptin, views, likes, timestamp, comments, 





//For receiving a POST, a UPLOAD VIDEO.
//will take the thumbnail image; from the frontend

//uploadcomponent --image something seomthing. rec.body data
//image

app.post('/upload', (req,res)=>{
    const newVideo = {
        id: uuid(),
        title: req.body.name,
        channel: "BrainStation Mohan",
        image: uploadImage,
        description: req.body.description,
        views: "0",
        likes: "0",
        duration: "5:11",
        video: "https://project-2-api.herokuapp.com/stream",
        timestamp: 1537003624009,
        comments: [
            {
                "name": "Micheal Lyons",
                "comment": "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of acconcert I have EVER witnessed.",
                "id": "1ab6d9f6-da38-456e-9b09-ab0acd9ce818",
                "likes": 0,
                "timestamp": 1545162149000,
            },
            {
                "name": "Gary Wong",
                "comment": "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
                "id": "cc6f173d-9e9d-4501-918d-bc11f15a8e14",
                "likes": 0,
                "timestamp": 1544595784046,
            },
            {
                "name": "Theodore Duncan",
                "comment": "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
                "id": "993f950f-df99-48e7-bd1e-d95003cc98f1",
                "likes": 0,
                "timestamp": 1542262984046,
            },
        ]}
    if(!newVideo.title || !newVideo.description){
        return res.status(400).json({message:'Please include a Title and Description.'});
    }
    
    // upload.push(data)
    // return res.status(201);

})
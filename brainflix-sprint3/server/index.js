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
//What about status codes? 200??


//Routes:
// /get`/videos`

app.get('/', (req,res)=>{
    res.send("Hi there and Welcome to BrainFlix Sprint3")
})

app.listen(8080, ()=> console.info('You are running on Port:8080 with BrainFlix Sprint3 by Jordan Cheng.'));


//Hoping to return a list of videos for the SIDE VIDEO LIST call-request. MUST BE AN ARRAY OF THE VIDEOS!!!
app.get('/videos', (req,res)=>{
    //console.log(data.json);

let hopefullVideoList = (data)=>{
    data.map().foreach((data)=>{
        return(
            hopefullVideoList(data.id)
        )
    })
}
    res.json(hopefullVideoList)
    //res.send(data);
    //(data)=>{
        //data.id
        //data.id;
        //data.title;
        //}
// data.forEach((showTheData)=>{TheData(showTheData)});
// TheData=(showTheData)=>{
//     res.json(showTheData.id)

// }
// const videoArray = (data)=>{
//     data.slice().forEach(()=>{
//         data.id
//     })
// }
// res.send(videoArray)

// res.json(data.slice())
//     res.json(data.slice().forEach(()=>{
//         return(
//             data.id
            
//         )
//     }))
    // res.json(data.slice().forEach( (data)=> {
    //     ()=>{data.id}
    // }));
})//data.json file to send. test and see if it works.
//so when a call is made to "/videos"; return should only be consisting of: ***id, title, channel, and image***.
//(()=>{})



//THIS one will slice out 1 piece of data from the data.json array.
// app.get('/videos', (req,res)=>{
//     //console.log(data.json);
//     //res.send(data.json);
//     res.json(data.slice(0,1))
// })



//This is for sending the single video and its data when using the MainVideoPlayer. MUST BE AN OBJECT!!!
app.get('/videos/`${id}`', (req,res)=>{
    res.send(data.slice(()=>{data.id,1}))
    //res.send(data.slice(`data.${data.id}`,1))
    //.channel.image.description.views.likes.timestamp.comments
})
//When someone calls with an "":id"; return is the entire "package" for that one video: ***id, title, channel, image, descriptin, views, likes, timestamp, comments, 





//For receiving a POST, a UPLOAD VIDEO.
app.post('/upload', (req,res)=>{
    upload.push(data)
    return res.status(201);
})
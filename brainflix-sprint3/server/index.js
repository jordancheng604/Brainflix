// const axios = require('axios');
const express = require('express');
const uuid = require('uuid');
const app = express();
const data = require('./Data/data.json');
const cors = require('cors');


app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.get('/', (req,res,next)=>{
    res.send("Hi there and Welcome to BrainFlix Sprint3")
    next()
})

app.listen(8080, ()=> console.info('You are running on Port:8080 with BrainFlix Sprint3 by Jordan Cheng.'));


//Get Side Videos List:
app.get('/videos', (_req,res,next)=>{
    const sideList = data.map(sideVids=>{
        const varObject = {}
         varObject.id = sideVids.id, 
         varObject.title = sideVids.title,
         varObject.channel = sideVids.channel,
         varObject.image = sideVids.image
         return varObject 

      }  
     
      )
    
      res.send(sideList)

    next()
    
}

)
   
//Get single video by ID.
app.get('/videos/:id', (req,res,next)=>{
    res.send(data.find(oneVideo=>(oneVideo.id === req.params.id)));
    //iption.views.likes.timestamp.comments
    next()
    }
    
    );



//For receiving a POST, a UPLOAD VIDEO.
//will take the thumbnail image; from the frontend

//uploadcomponent --image something seomthing. rec.body data
//image

//Receive and Post.
app.post('/videos', (req,res)=>{
   //res.send(req.body);

   const newVideo = {
        id: uuid.v4(),
        title: req.body.title,
        channel: "BrainStation Mohan",
        image: req.body.image,
        description: req.body.description,
        views: "2,345,870",
        likes: "1,435,630",
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
                ]
   }
   
   if(!newVideo.title || ! newVideo.description){
       return res.status(400).json({msg: 'Please check that you have filled in a Title and Description.'})

   }

   data.unshift(newVideo);
   //data.smallVideoList.unshift(newVideo);
   console.log(data);
   res.json(data);
    // const newVideo = {
    //     id: uuid(),
    //     title: req.body.name,
    //     channel: "BrainStation Mohan",
    //     image: uploadImage,
    //     description: req.body.description,
    //     views: "2,345,870",
    //     likes: "1,435,630",
    //     duration: "5:11",
    //     video: "https://project-2-api.herokuapp.com/stream",
    //     timestamp: 1537003624009,
    //     comments: [
    //         {
    //             "name": "Micheal Lyons",
    //             "comment": "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of acconcert I have EVER witnessed.",
    //             "id": "1ab6d9f6-da38-456e-9b09-ab0acd9ce818",
    //             "likes": 0,
    //             "timestamp": 1545162149000,
    //         },
    //         {
    //             "name": "Gary Wong",
    //             "comment": "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
    //             "id": "cc6f173d-9e9d-4501-918d-bc11f15a8e14",
    //             "likes": 0,
    //             "timestamp": 1544595784046,
    //         },
    //         {
    //             "name": "Theodore Duncan",
    //             "comment": "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
    //             "id": "993f950f-df99-48e7-bd1e-d95003cc98f1",
    //             "likes": 0,
    //             "timestamp": 1542262984046,
    //         },
    //     ]}
    // if(!newVideo.title || !newVideo.description){
    //     return res.status(400).json({message:'Please include a Title and Description.'});
    // }
    
    // upload.push(data)
    // return res.status(201);

})
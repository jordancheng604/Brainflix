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
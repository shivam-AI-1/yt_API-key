const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

const videos = [
  {
    thumbnail: "https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/main/02.youtube-clone/assets/Thumbnail-8.png",
    playButton: "https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/main/02.youtube-clone/assets/Ellipse%201%20(1).png",
    title: "Title of the Video",
    views: "12,000,000 views",
    channel: "Channel Name",
    date: "Date",
  },
  {
    thumbnail: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-9.png?raw=true",
    playButton: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(4).png?raw=true",
    title: "Title of the Video",
    views: "12,000,000 views",
    channel: "Channel Name",
    date: "Date",
},
{
    thumbnail: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-10.png?raw=true",
    playButton: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(3).png?raw=true",
    title: "Title of the Video",
    views: "12,000,000 views",
    channel: "Channel Name",
    date: "Date",
},
{   
    thumbnail: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-11.png?raw=true" ,
    playButton: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(3).png?raw=true",
    title: "Title of the Video",
    views: "12,000,000 views",
    channel: "Channel Name",
    cover: "https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/live.png",
    date: "Date",
},
{
    thumbnail: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-4.png?raw=true" ,
    playButton: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(1).png?raw=true",
    title: "Title of the Video",
    views: "12,000,000 views",
    channel: "Channel Name",
    date: "Date",
},
{
    thumbnail: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-5.png?raw=true",
    playButton: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(4).png?raw=true",
    title: "Title of the Video",
    views: "12,000,000 views",
    channel: "Channel Name",
    date: "Date",
},
{
    thumbnail: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-6.png?raw=true",
    playButton: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(3).png?raw=true",
    title: "Title of the Video",
    views: "12,000,000 views",
    channel: "Channel Name",
    date: "Date",
},
{
    thumbnail: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-7.png?raw=true",
    playButton: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(3).png?raw=true",
    title: "Title of the Video",
    views: "12,000,000 views",
    channel: "Channel Name",
    date: "Date",
},
{
    thumbnail: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail.png?raw=true",
    playButton: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(1).png?raw=true",
    title: "Title of the Video",
    views: "12,000,000 views",
    channel: "Channel Name",
    date: "Date",
},
{
    thumbnail: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-1.png?raw=true",
    playButton: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(4).png?raw=true",
    title: "Title of the Video",
    views: "12,000,000 views",
    channel: "Channel Name",
    date: "Date",
},
{
    thumbnail: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-2.png?raw=true",
    playButton: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(3).png?raw=true",
    title: "Title of the Video",
    views: "12,000,000 views",
    channel: "Channel Name",
    date: "Date",
},
{
    thumbnail: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-3.png?raw=true",
    playButton: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(3).png?raw=true",
    title: "Title of the Video",
    views: "12,000,000 views",
    channel: "Channel Name",
    date: "Date",
},

];


app.get("/videos", (req, res) => {
    if (videos.length > 0) {
      console.log("Videos fetched successfully.");
      res.status(200).json(videos);
    } else {
      console.error("No videos found.");
      res.status(404).send("Videos not found");
    }
  });
  
  // Start Server
  const PORT = process.env.PORT || 3000; // Render sets PORT in the environment variables
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
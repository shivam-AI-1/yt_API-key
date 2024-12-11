import express from 'express'
import cors from 'cors'

const app = express()
const port = 3000

app.use(cors());
app.use('/assets', express.static('./public/assets'));

const alldata = [
    {id:1,image1:'/assets/Thumbnail-1.png',image2:'/assets/Ellipse 4 (1).png',txt1:"Bulbuli|Coke Studio Bangla| Season One|Ritu Raj X Nandita",txt2:"Coke Studio Bangla",image3:'/assets/verified.png',txt3:"1.5M views • 2 days ago"},
    {id:2,image1:'/assets/Thumbnail-2.png',image2:'/assets/Ellipse 4 (2).png',txt1:"Bulbuli|Coke Studio Bangla| Season One|Ritu Raj X Nandita",txt2:"Coke Studio Bangla",image3:'/assets/verified.png',txt3:"1.5M views • 2 days ago"},
    {id:3,image1:'/assets/Thumbnail-3.png',image2:'/assets/Ellipse 4 (3).png',txt1:"Bulbuli|Coke Studio Bangla| Season One|Ritu Raj X Nandita",txt2:"Coke Studio Bangla",image3:'/assets/verified.png',txt3:"1.5M views • 2 days ago"},
    {id:4,image1:'/assets/Thumbnail-4.png',image2:'/assets/Ellipse 4 (4).png',txt1:"Bulbuli|Coke Studio Bangla| Season One|Ritu Raj X Nandita",txt2:"Coke Studio Bangla",image3:'/assets/verified.png',txt3:"1.5M views • 2 days ago"},
    {id:5,image1:'/assets/Thumbnail-5.png',image2:'/assets/Ellipse 4 (5).png',txt1:"Bulbuli|Coke Studio Bangla| Season One|Ritu Raj X Nandita",txt2:"Coke Studio Bangla",image3:'/assets/verified.png',txt3:"1.5M views • 2 days ago"},
    {id:6,image1:'/assets/Thumbnail-6.png',image2:'/assets/Ellipse 4 (6).png',txt1:"Bulbuli|Coke Studio Bangla| Season One|Ritu Raj X Nandita",txt2:"Coke Studio Bangla",image3:'/assets/verified.png',txt3:"1.5M views • 2 days ago"},
    {id:7,image1:'/assets/Thumbnail-7.png',image2:'/assets/Ellipse 4 (2).png',txt1:"Bulbuli|Coke Studio Bangla| Season One|Ritu Raj X Nandita",txt2:"Coke Studio Bangla",image3:'/assets/verified.png',txt3:"1.5M views • 2 days ago"},
    {id:8,image1:'/assets/Thumbnail-8.png',image2:'/assets/Ellipse 4 (2).png',txt1:"Bulbuli|Coke Studio Bangla| Season One|Ritu Raj X Nandita",txt2:"Coke Studio Bangla",image3:'/assets/verified.png',txt3:"1.5M views • 2 days ago"},
    {id:9,image1:'/assets/Thumbnail-9.png',image2:'/assets/Ellipse 4 (2).png',txt1:"Bulbuli|Coke Studio Bangla| Season One|Ritu Raj X Nandita",txt2:"Coke Studio Bangla",image3:'/assets/verified.png',txt3:"1.5M views • 2 days ago"},
    {id:10,image1:'/assets/Thumbnail-10.png',image2:'/assets/Ellipse 4 (2).png',txt1:"Bulbuli|Coke Studio Bangla| Season One|Ritu Raj X Nandita",txt2:"Coke Studio Bangla",image3:'/assets/verified.png',txt3:"1.5M views • 2 days ago"},
    {id:11,image1:'/assets/Thumbnail-11.png',image2:'/assets/Ellipse 4 (2).png',txt1:"Bulbuli|Coke Studio Bangla| Season One|Ritu Raj X Nandita",txt2:"Coke Studio Bangla",image3:'/assets/verified.png',txt3:"1.5M views • 2 days ago"},
    {id:12,image1:'/assets/Thumbnail.png',image2:'/assets/Ellipse 4 (2).png',txt1:"Bulbuli|Coke Studio Bangla| Season One|Ritu Raj X Nandita",txt2:"Coke Studio Bangla",image3:'/assets/verified.png',txt3:"1.5M views • 2 days ago"}
]

app.get('/alldata',(req,res)=>{
    res.json(alldata)
})

app.listen(port,() => {
    console.log("server is runing go ahead")
})
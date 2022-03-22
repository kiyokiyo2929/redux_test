import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import Restaurant from "./models/restaurant";
import path from "path"

require('dotenv').config()


const app = express();
const port = process.env.PORT || 3001
const dbUrl = process.env.MONGODB_URI

app.use(express.static(path.join(__dirname, "client/build")))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

mongoose.connect(dbUrl, dbErr =>{
    if(dbErr) throw new Error(dbErr)
    else console.log("db connected")

    app.post("/api/restaurant", (request, response) => {
      const {name} = request.body;

      new Restaurant({
          name
      }).save (err =>{
          if (err) response.status(500);
          else {
              Restaurant.find({}, (err, data)=>{
                  if(err) response.status(500).send()
                  else response.status(200).send(data)
              })
          }
      })
    })

    app.get("/api/restaurant", (request, response)=>{
        Restaurant.find({}, (err, restaurantArray)=>{
            if(err) response.status(500).send()
            else response.status(200).send(restaurantArray)
        })
    })

    app.get("*", (req, res, next) => {
        res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'));
      });

    app.listen(port, err=>{
        if(err) throw new Error(err)
        else console.log(`listeing on port ${port}`)
    })
})

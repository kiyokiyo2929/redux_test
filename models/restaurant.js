import mongoose from "mongoose";
mongoose.Promise = global.Promise;

const RestaurantSchema = new mongoose.Schema({
    name:String,
})

const Restaurant = mongoose.model("Restaurant", RestaurantSchema);

export default Restaurant;
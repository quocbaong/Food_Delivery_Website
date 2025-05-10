import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://lexuansang14042004:14042004S%40ng@fooddeliverywebsite.2syhmzd.mongodb.net/FOOD-DEL')
        .then(() => console.log("DataBase Connected"));
};

import mongoose from "mongoose";

export const connectDB = async () => {
    const mongoURI = process.env.MONGODB_URI;
    
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Database Connected");
    } catch (error) {
        console.error("Database connection error:", error);
        process.exit(1); // Dừng server nếu không thể kết nối DB
    }
};

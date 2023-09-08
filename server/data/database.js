import mongoose from "mongoose";

export const connectDB = () => {
    mongoose
        .connect(process.env.MONGO_URI, {
            dbName: "Project",
        })
        .then((c) => console.log(`Connected to -> ${c.connection.host}`))
        .catch((e) => console.log(e));
};

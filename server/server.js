import { app } from "./app.js";
import { connectDB } from "./data/database.js";

connectDB();

app.listen(process.env.PORT, () => {
    console.log(
        `Port working on ${process.env.PORT} on ${process.env.NODE_ENV} mode`
    );
});

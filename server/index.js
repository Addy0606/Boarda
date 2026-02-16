//import dotenv from "dotenv";
import 'dotenv/config';
import { app } from "./src/app.js";

/*dotenv.config({
    path: './.env'
});*/

import connectDB from "./src/db/index.js";

const port = process.env.PORT || 8000;
import path from 'path';
console.log("Looking for .env at:", path.resolve(process.cwd(), '.env'));
connectDB()
    .then(() => {
        app.listen(port, () => {
            console.log(`Server is running at port : ${port}`);
        })
    })
    .catch((err) => {
        console.log("MONGO db connection failed !!! ", err);
    })

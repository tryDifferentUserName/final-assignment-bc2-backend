import express from 'express';
import dotenv from 'dotenv';
import reviewRoutes from './routes/reviews.js';
import bodyParser from 'body-Parser';
import mongoose from 'mongoose';
import cors from "cors";

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use('/reviews', reviewRoutes);

mongoose.connect(
    process.env.MONGOOSE_CONNECTION_URL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
        if (err) {
            console.log('There is an error', err);
        }
        else {
            console.log('Connection successful!');
        }
    });

app.listen(process.env.PORT, () => {
    console.log(`App is ready and listening on port ${process.env.PORT}`);
}); 
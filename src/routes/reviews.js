import express from "express";
import Review from "../models/Review.js"

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const query = Review.find({});
        const reviews = await query.exec();
        res.json(reviews);
    } catch (err) {
        res.json({ message: err });
    }
});
router.post('/', async (req, res) => {

    const review = new Review({
        email: req.body.email,
        message: req.body.message,
    });

    try {
        const data = await review.save();
        res.json(data);
    } catch (err) {
        res.json({ message: err });
    }

})

export default router;
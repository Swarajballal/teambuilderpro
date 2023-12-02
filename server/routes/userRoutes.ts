import express from 'express';
import { User } from '../db';
import { Request, Response } from 'express';

const router = express.Router();

// Get all users

router.get('/', async (req: Request, res: Response) => {
    const page = typeof req.query.page === 'string' ? parseInt(req.query.page) : 1;
    const limit = typeof req.query.limit === 'string' ? parseInt(req.query.limit) : 20;
    const skip = (page - 1) * limit;

    try {
        const users = await User.find().skip(skip).limit(limit);
        console.log(users);
        res.json(users);
    } catch (err) {
        if (err instanceof Error) {
        res.status(500).json({ message: err.message});
        }else {
            res.status(500).json({ message: 'An unknown error occurred.'});
        }
    }

});




export default router;
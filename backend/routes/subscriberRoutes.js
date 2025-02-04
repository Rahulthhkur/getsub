// routes/subscriberRoutes.js
import express from 'express';
import { subscribeNewsletter } from '../controllers/subscriberController.js';

const router = express.Router();

// Route for subscribing to the newsletter
router.post('/subscribe', subscribeNewsletter);

export default router;

// controllers/subscriberController.js
import Subscriber from '../models/Subscriber.js';

export const subscribeNewsletter = async (req, res) => {
  try {
    const { email } = req.body;

    // Check if the email is already subscribed
    const existingSubscriber = await Subscriber.findOne({ email });
    if (existingSubscriber) {
      return res.status(400).json({
        message: 'Email already subscribed',
      });
    }

    // Create new subscriber
    const newSubscriber = new Subscriber({ email });
    await newSubscriber.save();

    res.status(201).json({
      message: 'Subscription successful!',
    });
  } catch (error) {
    console.error('Subscription Error:', error);
    res.status(500).json({
      message: 'Subscription failed',
      error: error.message,
    });
  }
};

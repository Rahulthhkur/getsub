import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { AlertCircle, Check } from 'lucide-react';

const NewsletterBox = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
     
    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    const handleSubscribe = async (event) => {
        event.preventDefault();
        setLoading(true);

        try {
            const response = await axios.post(`${backendUrl}/api/subscribe/subscribe`, { email });

            toast.success(response.data.message || 'Successfully subscribed! Check your email for confirmation.', {
                icon: <Check className="h-4 w-4 text-green-600" />,
            });
            setEmail('');
        } catch (error) {
            toast.error(error.response?.data?.message || 'Failed to subscribe', {
                icon: <AlertCircle className="h-4 w-4 text-red-600" />,
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='text-center p-6'>
            <p className='text-2xl font-medium text-gray-800'>Join Our Style Community & Save 20%</p>
            <p className='text-gray-400 mt-3'>
                Be first to know about new arrivals from local artisans and trending Instagram sellers.
            </p>

            <form onSubmit={handleSubscribe} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
                <input
                    className='w-full sm:flex-1 outline-none p-2'
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Enter Your Email'
                    required
                />
                <button
                    type='submit'
                    className='bg-black text-white text-xs px-10 py-4 disabled:opacity-50'
                    disabled={loading}
                >
                    {loading ? 'Subscribing...' : 'Subscribe'}
                </button>
            </form>
        </div>
    );
};

export default NewsletterBox;
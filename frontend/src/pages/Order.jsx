import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import axios from 'axios';

const Order = () => {
  const { backendUrl, token, currency } = useContext(ShopContext);

  const [orderData, setOrderData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [buttonLoading, setButtonLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadOrderData = async () => {
    try {
      if (!token) return;
      setLoading(true);
      setError(null);

      const response = await axios.post(`${backendUrl}/api/order/userorders`, {}, { headers: { token } });

      if (response.data.success) {
        let allOrderItem = [];
        response.data.orders.forEach((order) => {
          order.items.forEach((item) => {
            allOrderItem.push({
              ...item,
              status: order.status,
              payment: order.payment,
              paymentMethod: order.paymentMethod,
              date: order.date,
            });
          });
        });
        setOrderData(allOrderItem.reverse());
      }
    } catch (error) {
      setError('Failed to load orders. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadOrderData();
  }, [token]);

  const handleTrackOrder = async () => {
    setButtonLoading(true);
    await loadOrderData();
    setButtonLoading(false);
  };

  return (
    <div className="border-t pt-16">
      <div className="text-2xl">
        <Title text1="MY" text2="ORDERS" />
      </div>

      {loading ? (
        <p className="text-center text-gray-500 mt-6">Loading orders...</p>
      ) : error ? (
        <p className="text-center text-red-500 mt-6">{error}</p>
      ) : orderData.length > 0 ? (
        orderData.map((item, index) => (
          <div key={index} className="py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-start gap-6 text-sm">
              <img src={item.image?.[0] || '/placeholder.png'} alt="Order Item" className="w-16 sm:w-20" />
              <div>
                <p className="sm:text-base font-medium">{item.name}</p>
                <div className="flex items-center gap-3 mt-1 text-base text-gray-700">
                  <p>{currency}{item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Color: {item.size}</p>
                </div>
                <p className="mt-1">Date: <span className="text-gray-400">{new Date(item.date).toDateString()}</span></p>
                <p className="mt-1">Payment: <span className="text-gray-400">{item.paymentMethod}</span></p>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-between">
              <div className="flex items-center gap-2">
                <p className="w-2 h-2 rounded-full bg-green-500"></p>
                <p className="text-sm md:text-base">{item.status}</p>
              </div>
              <button
                onClick={handleTrackOrder}
                className="border px-4 py-2 text-sm font-medium rounded-sm flex items-center gap-2"
                disabled={buttonLoading}
              >
                {buttonLoading ? (
                  <div className="w-5 h-5 border-2 border-gray-500 border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  "Track Order"
                )}
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500 mt-6">No orders found.</p>
      )}
    </div>
  );
};

export default Order;

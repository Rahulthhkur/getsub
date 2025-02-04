import React from 'react';

const ShippingPolicy = () => {
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-lg shadow-md">
        <div className="py-8">
          {/* Header Section */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Shipping Policy</h1>
            <p className="text-gray-600">Last Updated: February 4, 2025</p>
          </div>

          {/* Introduction */}
          <div className="mb-8">
            <p className="text-gray-800">
              At <span className="font-semibold">GetSub</span>, we strive to provide reliable and efficient shipping services. 
              This policy outlines our shipping procedures, delivery timeframes, and related information.
            </p>
          </div>

          {/* Policy Sections */}
          <div className="space-y-8">
            {/* Processing Time */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">1. Order Processing Time</h2>
              <div className="text-gray-800 space-y-2">
                <p>- All orders are processed within <span className="font-semibold">24-48 hours</span> of payment confirmation</p>
                <p>- Orders placed on weekends or holidays will be processed the next business day</p>
                <p>- You will receive a confirmation email with tracking details once your order ships</p>
                <p>- Processing time may be extended during peak seasons or sale periods</p>
              </div>
            </section>

            {/* Shipping Methods */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">2. Shipping Methods</h2>
              <div className="text-gray-800 space-y-2">
                <h3 className="font-semibold">Standard Shipping:</h3>
                <p>- Delivery within 5-7 business days</p>
                <p>- Free shipping on orders above ₹2999</p>
                <p>- Standard shipping fee of ₹49 for orders below ₹2999</p>

                <h3 className="font-semibold mt-4">Express Shipping:</h3>
                <p>- Delivery within 2-3 business days</p>
                <p>- Available at additional cost of ₹199</p>
                <p>- Limited to select pin codes</p>
              </div>
            </section>

            {/* Delivery Areas */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">3. Delivery Areas</h2>
              <div className="text-gray-800 space-y-2">
                <p>We currently deliver to:</p>
                <p>- All major cities across India</p>
                <p>- Most Tier 2 and Tier 3 cities</p>
                <p>- Remote locations may have extended delivery times</p>
                <p>- Check pin code availability during checkout</p>
              </div>
            </section>

            {/* Tracking Orders */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">4. Tracking Orders</h2>
              <div className="text-gray-800 space-y-2">
                <p>- Tracking information will be sent via email and SMS</p>
                <p>- Track orders through your account dashboard</p>
                <p>- Contact customer support if tracking is not updated for 48 hours</p>
              </div>
            </section>

            {/* Shipping Issues */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">5. Shipping Issues</h2>
              <div className="text-gray-800 space-y-2">
                <h3 className="font-semibold">Delayed Deliveries:</h3>
                <p>- Contact customer support if delivery exceeds estimated timeframe</p>
                <p>- Delays may occur due to weather, holidays, or other external factors</p>

                <h3 className="font-semibold mt-4">Lost Packages:</h3>
                <p>- Investigation will be initiated after 7 days of last tracking update</p>
                <p>- Refund or replacement will be provided for lost shipments</p>
              </div>
            </section>

            {/* International Shipping */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">6. International Shipping</h2>
              <div className="text-gray-800 space-y-2">
                <p>- Currently, we only ship within India</p>
                <p>- International shipping options coming soon</p>
                <p>- Sign up for our newsletter to stay updated</p>
              </div>
            </section>

            {/* Special Items */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">7. Special Items</h2>
              <div className="text-gray-800 space-y-2">
                <p>- Fragile items are packed with extra care</p>
                <p>- Some items may require signature upon delivery</p>
                <p>- Special handling fees may apply for certain products</p>
              </div>
            </section>

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingPolicy;
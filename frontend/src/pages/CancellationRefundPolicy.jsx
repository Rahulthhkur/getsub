import React from 'react';

const CancellationRefundPolicy = () => {
  return (
    <div className="min-h-screen  py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-lg shadow-md">
        <div className="py-8">
          {/* Header Section */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Cancellation & Refund Policy</h1>
            <p className="text-gray-600">Last Updated: February 4, 2025</p>
          </div>

          {/* Introduction */}
          <div className="mb-8">
            <p className="text-gray-800">
              At <span className="font-semibold">GetSub</span>, we want to ensure your shopping experience is satisfactory. 
              This policy outlines our procedures for order cancellations, returns, and refunds.
            </p>
          </div>

          {/* Mandatory Video Verification Section */}
          <section className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-red-900 mb-4">📹 Mandatory Video Verification Process</h2>
            <div className="text-red-800 space-y-4">
              <p className="font-semibold">Important: All Return and Replacement Requests Require Video Documentation</p>
              
              <div>
                <h3 className="font-semibold mb-2">Video Requirements:</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Single continuous shot (no editing or cuts)</li>
                  <li>Record entire unboxing process from sealed package</li>
                  <li>Show delivery package from all angles before opening</li>
                  <li>Clearly display order number and delivery date</li>
                  <li>Capture product condition immediately after unboxing</li>
                  <li>Ensure good lighting and clear visibility</li>
                  <li>Video must be minimum 3-5 minutes long</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Verification Process:</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Upload video during return/replacement request</li>
                  <li>Our team will review within 24-48 hours</li>
                  <li>Approval required before processing return</li>
                  <li>Incomplete or edited videos will be rejected</li>
                </ul>
              </div>

              <p className="font-bold text-red-700">
                ⚠️ Returns/Replacements WILL NOT be processed without proper video documentation.
              </p>
            </div>
          </section>

          {/* Existing Return Sections */}
          <div className="space-y-8">
            {/* Order Cancellation */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">1. Order Cancellation</h2>
              <div className="text-gray-800 space-y-2">
                <h3 className="font-semibold">Before Shipping:</h3>
                <p>- Orders can be cancelled within 24 hours of placement</p>
                <p>- Full refund will be processed for cancelled orders</p>
                <p>- Cancel through your account dashboard or contact support</p>

                <h3 className="font-semibold mt-4">After Shipping:</h3>
                <p>- Orders cannot be cancelled once shipped</p>
                <p>- You may return the item after delivery as per return policy</p>
                <p>- Tracking details can be found in your order confirmation email</p>
              </div>
            </section>

            {/* Returns */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">2. Returns</h2>
              <div className="text-gray-800 space-y-2">
                <h3 className="font-semibold">Return Eligibility:</h3>
                <p>- Items must be returned within 7 days of delivery</p>
                <p>- Products should be unused and in original packaging</p>
                <p>- Mandatory video documentation required</p>
                <p>- All tags and labels must be intact</p>
                <p>- Original invoice must be included</p>
              </div>
            </section>

            {/* Remaining sections like Refund Process, Return Shipping, etc. remain the same */}
              {/* Refund Process */}
              <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">3. Refund Process</h2>
              <div className="text-gray-800 space-y-2">
                <h3 className="font-semibold">Refund Timeline:</h3>
                <p>- Quality check completed within 24-48 hours of return receipt</p>
                <p>- Refund initiated within 1-2 business days after quality check</p>
                <p>- Credit/debit card refunds: 5-7 business days</p>
                <p>- UPI/Bank transfer: 3-5 business days</p>

                <h3 className="font-semibold mt-4">Refund Amount:</h3>
                <p>- Full product cost refunded for eligible returns</p>
                <p>- Original shipping charges non-refundable</p>
                <p>- Return shipping costs borne by customer except for defective items</p>
              </div>
            </section>

            {/* Return Shipping */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">4. Return Shipping</h2>
              <div className="text-gray-800 space-y-2">
                <p>- Pack the item securely in appropriate packaging</p>
                <p>- Include return form with order details</p>
                <p>- Ship to the address provided in return confirmation</p>
                <p>- Keep return tracking number for reference</p>
                <p>- Free return shipping for defective/wrong items</p>
              </div>
            </section>

            {/* Damaged/Defective Items */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">5. Damaged or Defective Items</h2>
              <div className="text-gray-800 space-y-2">
                <p>- Report within 48 hours of delivery</p>
                <p>- Share clear photos of damage/defect</p>
                <p>- Replacement or refund as per customer preference</p>
                <p>- Free return shipping provided</p>
              </div>
            </section>

            {/* Exchange Policy */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">6. Exchange Policy</h2>
              <div className="text-gray-800 space-y-2">
                <p>- Size/color exchange available within 7 days</p>
                <p>- Subject to product availability</p>
                <p>- One exchange per order allowed</p>
                <p>- Shipping charges may apply</p>
              </div>
            </section>

            {/* How to Initiate */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">7. How to Initiate Return/Refund</h2>
              <div className="text-gray-800 space-y-2">
                <p>1. Log in to your account and visit the Orders section</p>
                <p>2. Select the order and click on 'Return/Refund'</p>
                <p>3. Choose reason and upload images if required</p>
                <p>4. Follow the instructions for return shipping</p>
                <p>5. Track return status in your account</p>
              </div>
            </section>

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default CancellationRefundPolicy;
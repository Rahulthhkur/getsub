import React, { useEffect } from 'react';

const TermsAndConditions = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-lg shadow-md">
        <div className="py-8">
          {/* Header Section */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Terms & Conditions</h1>
            <p className="text-gray-600">Last Updated: February 4, 2025</p>
          </div>

          {/* Welcome Section */}
          <div className="mb-8">
            <p className="text-gray-800">
              Welcome to <span className="font-semibold">GetSub</span>! By accessing or using our website 
              (<span className="font-semibold">getsub.in</span>) and purchasing our products, you agree 
              to be bound by the following terms and conditions. Please read them carefully.
            </p>
          </div>

          {/* Terms Sections */}
          <div className="space-y-8">
            {/* General Information */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">1. General Information</h2>
              <div className="text-gray-800 space-y-2">
                <p>GetSub operates as an online marketplace for smartwatches, sunglasses, shoes, and accessories.</p>
                <p>By using our website, you confirm that you are at least 18 years old or have parental consent.</p>
                <p>We reserve the right to modify these terms at any time, and the updated terms will be posted on this page.</p>
              </div>
            </section>

            {/* Account & Security */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">2. Account & Security</h2>
              <div className="text-gray-800 space-y-2">
                <p>You may be required to create an account to access certain features of our website.</p>
                <p>You are responsible for maintaining the confidentiality of your account details.</p>
                <p>GetSub reserves the right to suspend or terminate accounts that violate our policies.</p>
              </div>
            </section>

            {/* Orders & Payments */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">3. Orders & Payments</h2>
              <div className="text-gray-800 space-y-2">
                <p>All orders are subject to availability and confirmation of payment.</p>
                <p>We accept various payment methods, including credit/debit cards, UPI, and net banking.</p>
                <p>Prices listed on our website are subject to change without prior notice.</p>
              </div>
            </section>

            {/* Shipping & Delivery */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">4. Shipping & Delivery</h2>
              <div className="text-gray-800 space-y-2">
                <p>We aim to dispatch orders within <span className="font-semibold">24-48 hours</span> of purchase.</p>
                <p>Delivery times may vary based on location and external factors beyond our control.</p>
                <p>Shipping charges, if applicable, will be displayed at checkout.</p>
              </div>
            </section>

            {/* Returns & Refunds */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">5. Returns & Refunds</h2>
              <div className="text-gray-800 space-y-2">
                <p>You can request a return within <span className="font-semibold">7 days</span> of delivery if the product is defective or incorrect.</p>
                <p>To initiate a return, contact our support team at <span className="font-semibold">support@getsub.com</span> with your order details.</p>
                <p>Refunds will be processed within <span className="font-semibold">5-7 business days</span> after approval.</p>
              </div>
            </section>

            {/* Product Warranty */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">6. Product Warranty</h2>
              <div className="text-gray-800 space-y-2">
                <p>Some products may come with a manufacturer's warranty; details will be mentioned on the product page.</p>
                <p>Warranty claims must be raised directly with the manufacturer, where applicable.</p>
              </div>
            </section>

            {/* User Conduct */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">7. User Conduct</h2>
              <div className="text-gray-800 space-y-2">
                <p>You agree not to misuse our website for fraudulent activities.</p>
                <p>Any attempt to hack, disrupt, or manipulate our services will result in legal action.</p>
              </div>
            </section>

            {/* Intellectual Property */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">8. Intellectual Property</h2>
              <div className="text-gray-800 space-y-2">
                <p>All content on GetSub, including logos, text, images, and product designs, is owned by or licensed to us.</p>
                <p>Unauthorized use of our content is strictly prohibited.</p>
              </div>
            </section>

            {/* Limitation of Liability */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">9. Limitation of Liability</h2>
              <div className="text-gray-800 space-y-2">
                <p>GetSub is not liable for any indirect or incidental damages caused by product usage.</p>
                <p>We do not guarantee that our website will be error-free or uninterrupted at all times.</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
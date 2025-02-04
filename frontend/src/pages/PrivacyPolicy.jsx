import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-lg shadow-md">
        <div className="py-8">
          {/* Header Section */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
            <p className="text-gray-600">Last Updated: February 4, 2025</p>
          </div>

          {/* Introduction */}
          <div className="mb-8">
            <p className="text-gray-800">
              At <span className="font-semibold">GetSub</span>, we take your privacy seriously. This Privacy Policy explains how we collect, use, 
              disclose, and safeguard your information when you visit our website (<span className="font-semibold">getsub.in</span>) 
              or make a purchase. Please read this privacy policy carefully.
            </p>
          </div>

          {/* Policy Sections */}
          <div className="space-y-8">
            {/* Information We Collect */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
              <div className="text-gray-800 space-y-2">
                <h3 className="font-semibold">Personal Information:</h3>
                <p>- Name, email address, phone number, and billing/shipping address</p>
                <p>- Payment information (processed securely through our payment partners)</p>
                <p>- Account credentials</p>
                
                <h3 className="font-semibold mt-4">Automatically Collected Information:</h3>
                <p>- Device information (browser type, IP address, device type)</p>
                <p>- Usage data (pages visited, time spent, interactions)</p>
                <p>- Cookies and similar tracking technologies</p>
              </div>
            </section>

            {/* How We Use Your Information */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
              <div className="text-gray-800 space-y-2">
                <p>We use the collected information to:</p>
                <p>- Process and fulfill your orders</p>
                <p>- Communicate with you about orders and updates</p>
                <p>- Improve our website and services</p>
                <p>- Send promotional emails (with your consent)</p>
                <p>- Protect against fraudulent activities</p>
                <p>- Comply with legal obligations</p>
              </div>
            </section>

            {/* Information Sharing */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">3. Information Sharing</h2>
              <div className="text-gray-800 space-y-2">
                <p>We may share your information with:</p>
                <p>- Shipping partners to deliver your orders</p>
                <p>- Payment processors to handle transactions</p>
                <p>- Service providers who assist our operations</p>
                <p>- Law enforcement when required by law</p>
                <p>We do not sell your personal information to third parties.</p>
              </div>
            </section>

            {/* Data Security */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">4. Data Security</h2>
              <div className="text-gray-800 space-y-2">
                <p>We implement appropriate security measures to protect your information, including:</p>
                <p>- Encryption of sensitive data</p>
                <p>- Regular security assessments</p>
                <p>- Secure data storage systems</p>
                <p>- Limited access to personal information</p>
              </div>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">5. Your Rights</h2>
              <div className="text-gray-800 space-y-2">
                <p>You have the right to:</p>
                <p>- Access your personal information</p>
                <p>- Correct inaccurate information</p>
                <p>- Request deletion of your information</p>
                <p>- Opt-out of marketing communications</p>
                <p>- Lodge a complaint with relevant authorities</p>
              </div>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">6. Cookies</h2>
              <div className="text-gray-800 space-y-2">
                <p>We use cookies to:</p>
                <p>- Remember your preferences</p>
                <p>- Analyze website traffic</p>
                <p>- Improve user experience</p>
                <p>You can control cookies through your browser settings.</p>
              </div>
            </section>

            {/* Children's Privacy */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">7. Children's Privacy</h2>
              <div className="text-gray-800 space-y-2">
                <p>Our website is not intended for children under 13 years of age.</p>
                <p>We do not knowingly collect information from children under 13.</p>
              </div>
            </section>

            {/* Updates to Privacy Policy */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">8. Updates to Privacy Policy</h2>
              <div className="text-gray-800 space-y-2">
                <p>We may update this policy periodically.</p>
                <p>Changes will be posted on this page with an updated date.</p>
                <p>Continued use of our website constitutes acceptance of changes.</p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
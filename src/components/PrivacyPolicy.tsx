import React from 'react';

// Define the component using React.FC (Function Component)
const PrivacyPolicy: React.FC = () => {
  return (
    <section id="privacy" className="max-w-4xl mx-auto p-8 text-gray-200">
      <h2 className="text-3xl font-bold mb-6 text-white text-center">PRIVACY POLICY</h2>
      <p className="text-sm text-gray-300 text-center mb-8">Effective Since: 2023</p>

      {/* Intro */}
      <div className="space-y-6 bg-gray-800/50 p-6 rounded-lg">
        <p className="text-lg font-semibold mb-2 text-white">At Real Shahzaib Agency, your privacy matters.</p>
        <p>We collect limited information such as your name, email, phone number, and project details **only when you contact us or request our services.**</p>
      </div>

      {/* Analytics and Cookies */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-3 text-white">Tools and Data Usage</h3>
        <p>We use trusted tools like **Meta Pixel and Google Analytics** to understand user behavior and improve performance. Some cookies may be used for analytics or advertising, which you can disable anytime in your browser.</p>
      </div>

      {/* Data Storage and Security */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-3 text-white">Data Security and Retention</h3>
        <p>Your data is stored securely and kept **only as long as needed for service purposes.** As we work globally, we align with **GDPR and CCPA standards** for transparency and protection.</p>
      </div>

      {/* User Rights and Updates */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-3 text-white">Your Rights</h3>
        <p>You can request to view or delete your data anytime by emailing **contact@realshahzaib.com.**</p>
        <p className="mt-2">For updates, please revisit this page periodically.</p>
      </div>

      {/* Contact Info */}
      <div className="mt-10 pt-4 border-t border-gray-700">
        <h3 className="text-xl font-semibold mb-3 text-white">Contact Information</h3>
        <ul className="list-none space-y-2">
          <li>📧 contact@realshahzaib.com</li>
          <li>🌐 realshahzaib.com</li>
          <li>📍 Based in Pakistan | Operating Globally</li>
        </ul>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
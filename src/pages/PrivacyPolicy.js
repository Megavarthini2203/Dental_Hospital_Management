import React from 'react';
import './PrivacyPolicy.css';

function PrivacyPolicy() {
  return (
    <div className="privacy-container">
      <h2 className="privacy-title">Privacy Policy</h2>
      <div className="privacy-content">
        <p>
          At Dental Management System, we are committed to protecting your privacy. This Privacy Policy outlines the types
          of personal information we collect, how it is used, and the steps we take to ensure it is protected.
        </p>

        <h4>1. Information We Collect</h4>
        <p>
          We may collect the following types of personal information:
          <ul>
            <li>Name, email address, and contact details</li>
            <li>Login credentials and account information</li>
            <li>Appointment history and treatment preferences</li>
          </ul>
        </p>

        <h4>2. How We Use Your Information</h4>
        <p>
          The information we collect is used to:
          <ul>
            <li>Manage your appointments and treatment records</li>
            <li>Send you important updates and service notifications</li>
            <li>Improve our services based on your feedback</li>
          </ul>
        </p>

        <h4>3. Information Sharing</h4>
        <p>
          We do not sell, rent, or share your personal information with third parties, except when:
          <ul>
            <li>Required by law or regulation</li>
            <li>Necessary to deliver our services with trusted partners (under strict confidentiality agreements)</li>
          </ul>
        </p>

        <h4>4. Security</h4>
        <p>
          We implement security measures such as encryption, access controls, and regular audits to safeguard your data.
        </p>

        <h4>5. Your Rights</h4>
        <p>
          You have the right to:
          <ul>
            <li>Access the information we hold about you</li>
            <li>Request corrections or deletions of inaccurate data</li>
            <li>Withdraw your consent at any time</li>
          </ul>
        </p>

        <h4>6. Updates to This Policy</h4>
        <p>
          This policy may be updated from time to time. We will notify you of any significant changes by posting the updated policy on our website.
        </p>

        <h4>7. Contact Us</h4>
        <p>
          If you have any questions or concerns about this Privacy Policy, please contact us at support@dentalcare.com.
        </p>
      </div>
    </div>
  );
}

export default PrivacyPolicy;

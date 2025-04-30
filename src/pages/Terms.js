import React from 'react';
import './Terms.css';

function TermsAndConditions() {
  return (
    <div className="terms-container">
      <div className="terms-box">
        <h2 className="terms-heading">Terms & Conditions</h2>

        <p>
          By accessing and using <strong>DentalMS</strong>, you acknowledge and agree to be bound by the terms outlined below. If you do not agree with these terms, please discontinue use of the platform.
        </p>

        <h3>1. Use of the Platform</h3>
        <p>
          DentalMS is designed for dental clinics and professionals to manage appointments and patient records. You agree to use this platform only for lawful purposes and in a way that does not violate the rights of others.
        </p>

        <h3>2. Account Responsibility</h3>
        <p>
          You are responsible for maintaining the confidentiality of your account credentials. Any activity under your account will be considered your responsibility.
        </p>

        <h3>3. Data Accuracy</h3>
        <p>
          You agree to provide accurate and complete information when using our system. Falsifying data may lead to termination of access.
        </p>

        <h3>4. Privacy</h3>
        <p>
          Your personal and patient data are governed by our <a href="/privacy-policy">Privacy Policy</a>. By using DentalMS, you consent to the collection and use of data as described.
        </p>

        <h3>5. Limitation of Liability</h3>
        <p>
          DentalMS will not be held liable for any direct or indirect damages resulting from the use or inability to use the platform.
        </p>

        <h3>6. Changes to Terms</h3>
        <p>
          We reserve the right to update or modify these terms at any time. Continued use of the platform after changes implies acceptance of the revised terms.
        </p>

        <p className="terms-footer">
          If you have questions regarding these terms, contact us at <a href="mailto:support@dentalms.com">support@dentalms.com</a>.
        </p>
      </div>
    </div>
  );
}

export default TermsAndConditions;

import React, { useState } from 'react';
import './FAQ.css';

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: 'What is DentalCare?',
      answer: 'DentalMS is a digital platform that simplifies dental office management, appointments, and patient data handling.',
    },
    {
      question: 'Is my data secure?',
      answer: 'Yes! We use modern encryption and privacy protocols to ensure your data is safe.',
    },
  ];

  return (
    <div className="faq-container">
      <h2 className="faq-heading">Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqData.map((faq, index) => (
          <div className={`faq-item ${openIndex === index ? 'open' : ''}`} key={index}>
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}
              <span className="faq-icon">{openIndex === index ? '-' : '+'}</span>
            </div>
            <div className="faq-answer">
              {openIndex === index && <p>{faq.answer}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;

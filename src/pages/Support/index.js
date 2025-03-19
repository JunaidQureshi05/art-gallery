import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faQuestionCircle,
  faClipboardList,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import s from "./ContactSupport.module.scss"; // Import SCSS file

const ContactSupport = () => {
  // State for FAQ dropdowns
  const [openFAQ, setOpenFAQ] = useState(null);

  // FAQ Data
  const faqs = [
    {
      question: "How can I purchase a painting?",
      answer: "Simply add a painting to your cart and proceed to checkout.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept credit cards, PayPal, and Google Pay.",
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we ship worldwide with tracking available.",
    },
    {
      question: "Can I return a painting?",
      answer: "Returns are only accepted for damaged items within 7 days.",
    },
  ];

  // Toggle dropdown
  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className={s.container}>
      {/* Contact Info Section */}
      <section className={s.contactSection}>
        <h1>Contact Us</h1>
        <p>We're here to help! Reach out to us anytime.</p>

        <div className={s.contactInfo}>
          <div className={s.infoItem}>
            <FontAwesomeIcon icon={faEnvelope} className={s.icon} />
            <span>support@artgallery.com</span>
          </div>
          <div className={s.infoItem}>
            <FontAwesomeIcon icon={faPhone} className={s.icon} />
            <span>+1 234 567 890</span>
          </div>
          <div className={s.infoItem}>
            <FontAwesomeIcon icon={faMapMarkerAlt} className={s.icon} />
            <span>123 Art Street, NY, USA</span>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={s.faqSection}>
        <h2>
          <FontAwesomeIcon icon={faQuestionCircle} /> Frequently Asked Questions
        </h2>
        <div className={s.faqList}>
          {faqs.map((faq, index) => (
            <div key={index} className={s.faqItem}>
              <div className={s.faqQuestion} onClick={() => toggleFAQ(index)}>
                <span>{faq.question}</span>
                <FontAwesomeIcon
                  icon={openFAQ === index ? faChevronUp : faChevronDown}
                  className={s.dropdownIcon}
                />
              </div>
              {openFAQ === index && <p className={s.faqAnswer}>{faq.answer}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* Terms & Conditions */}
      <section className={s.termsSection}>
        <h2>
          <FontAwesomeIcon icon={faClipboardList} /> Terms & Conditions
        </h2>
        <p>
          By using our website, you agree to our terms of service. Art purchases
          are final, and returns are accepted only for damaged items within 7
          days.
        </p>
      </section>
    </div>
  );
};

export default ContactSupport;

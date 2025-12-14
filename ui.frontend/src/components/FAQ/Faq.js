import { useState } from "react";
import "./Faq.css";
import Plus from "../../fonts/GT-Eesti/Plus.svg";
import Minus from "../../fonts/GT-Eesti/Minus.svg";

export default function Faq(props) {
  const [openIndex, setOpenIndex] = useState(null);

  // Fetch model data passed from AEM
  // Supports cqModel (from SPA Editor) or direct data
  const model = props.cqModel || props.data || props.componentProperties || {};
  const faqs = model.faqs || [];
  const faqTitle = model.faqTitle || "FAQs";

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!faqs.length) {
    return null; // Render nothing if there are no FAQs
  }

  return (
    <section className={model.containerProps?.className || ""}>
      <div className="faq-container">
        <div className="faq-main">
          {faqTitle && <h2 className="faq-heading">{faqTitle}</h2>}

          <div className="faq-list">
            {faqs.map((item, index) => (
              <div className="faq-child" key={index}>
                <div className="faq-list-container">

                  {/* CLICKABLE QUESTION */}
                  <div className="faq-list-que" onClick={() => toggleFAQ(index)}>
                    <div className="faq-list-que-container">
                      <p>{item.question}</p>
                    </div>

                    <div className="faq-list-symbol">
                      {openIndex === index ? (
                        <img
                          src={Minus}
                          alt="collapse"
                        />
                      ) : (
                        <img
                          src={Plus}
                          alt="expand"
                        />
                      )}
                    </div>
                  </div>

                  {/* ANSWER (SHOW ONLY WHEN OPEN) */}
                  {openIndex === index && (
                    <div
                      className="faq-answer"
                      dangerouslySetInnerHTML={{ __html: item.answer }}
                    ></div>
                  )}

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

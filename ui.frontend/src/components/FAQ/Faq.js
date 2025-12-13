import { useState } from "react";
import "./Faq.css";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "How long would it take to swap my SIM to a plus SIM card?",
      a: "Swapping your Lyca Mobile SIM card to a new SIM Card is very simple. Please contact our customer service line at 866 277 3221 and one of our agents will assist you."
    },
    {
      q: "Do I have to sign a contract?",
      a: `At Lyca Mobile, we believe in giving you the freedom & flexibility to use our services without any contracts and commitments. Therefore, you do not have to sign a contract to use our prepaid service. However, we suggest you read our <a href="#">terms and conditions</a>`
    },
    {
      q: "Does Lyca Mobile offer group porting/multi subscription?",
      a: "Yes, just call Customer Service at and one of our advisors will help you get started."
    },
    {
      q: "How to activate my SIM card?",
      a: "Acitivating your Lyca Mobile SIM card is easy. Just dial 622 and enter your Zip code from your cell phone when prompted."
    },
    {
      q: "How can I deactivate my voicemail service?",
      a: "To deactivate your Lyca Mobile Voicemail service: Call Customer Service at 1-866-277-3221 and one of our advisors will help you."
    },
    {
      q: "I have forgotten my PIN / PUK code. Where can I find it?",
      a: "Your PUK code is displayed on the SIM card holder that came in your starter pack. If you have already registered and have a My Lyca Mobile account, you can find your PUK code displayed there – click here to register if you haven’t registered yet.Alternatively, you can call our Customer Service at 1-866-277-3221 and they will be happy to help you."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section>
      <div className="faq-container">
        <div className="faq-main">
          <h2 className="faq-heading">FAQs</h2>

          <div className="faq-list">
            {faqs.map((item, index) => (
              <div className="faq-child" key={index}>
                <div className="faq-list-container">

                  {/* CLICKABLE QUESTION */}
                  <div className="faq-list-que" onClick={() => toggleFAQ(index)}>
                    <div className="faq-list-que-container">
                      <p>{item.q}</p>
                    </div>

                    <div className="faq-list-symbol">
                      {openIndex === index ? (
                        <img
                          src="https://www.lycamobile.us/_next/static/media/minusFAQIcon.6abd0d3e.svg"
                          alt="collapse"
                        />
                      ) : (
                        <img
                          src="https://www.lycamobile.us/_next/static/media/expandFAQIcon.6abd0d3e.svg"
                          alt="expand"
                        />
                      )}
                    </div>
                  </div>

                  {/* ANSWER (SHOW ONLY WHEN OPEN) */}
                  {openIndex === index && (
                    <div
  className="faq-answer"
  dangerouslySetInnerHTML={{ __html: item.a }}
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

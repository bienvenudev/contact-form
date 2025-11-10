import { useState, useRef } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [formType, setFormType] = useState("say-hi");
  const formRef = useRef(null);

  const handleRadioChange = (e) => {
    setFormType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData.entries());
    console.log("Form submitted:", data);
  };

  return (
    <div className="bg-img">
      <div className="bg-overlay">
        <div className="form-wrapper">
          <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
            <h1>Contact Us</h1>

            <div className="radio-wrapper">
              <div>
                <input
                  type="radio"
                  name="choice"
                  id="say-hi"
                  value="say-hi"
                  defaultChecked
                  onChange={handleRadioChange}
                />
                <label htmlFor="say-hi">Say Hi</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="choice"
                  id="get-quote"
                  value="get-quote"
                  onChange={handleRadioChange}
                />
                <label htmlFor="get-quote">Get a Quote</label>
              </div>
            </div>

            <div>
              <div className="form-input-wrapper">
                <input
                  className="form-input"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Name"
                />
              </div>

              <div className="form-input-wrapper">
                <input
                  className="form-input"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                />
              </div>

              <div
                className={`form-input-wrapper show-quote ${
                  formType === "get-quote" ? "visible" : ""
                }`}
              >
                <select name="service" id="service" className="form-input">
                  <option value="">-- Needed Services --</option>
                  <option value="ecommerce-business">eCommerce Business</option>
                  <option value="ui-design">UI/UX Design</option>
                  <option value="online-services">Online Services</option>
                </select>
              </div>

              <div
                className={`form-input-wrapper show-quote ${
                  formType === "get-quote" ? "visible" : ""
                }`}
              >
                <select name="budget" id="budget" className="form-input">
                  <option value="">-- Budget --</option>
                  <option value="1500">$1500</option>
                  <option value="2000">$2000</option>
                  <option value="3000">$3000</option>
                </select>
              </div>

              <div className="form-input-wrapper">
                <textarea
                  className="form-input"
                  name="message"
                  id="message"
                  placeholder="Your message"
                />
              </div>
            </div>

            <div className="button-wrapper">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import "./Contact.css";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const sendEmail = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage("");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current!,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )

      .then(
        () => {
          setLoading(false);
          setStatusMessage("The message has been sent! 🎉");
          formRef.current!.reset();
        },
        (error) => {
          setLoading(false);
          setStatusMessage("Ahh, something went wrong! Please try again. 🤕");
          console.error("FAILED...", error.text);
        },
      );
  };

  return (
    <section id="contact">
      <div className="container contact">
        <div className="sectionHeader">
          <h3>Contact</h3>
          <h1>
            Get In <span>Touch</span>
          </h1>
          <p>
            If you have any questions or inquiries, please don't hesitate to
            contact me.
          </p>
        </div>

        <div className="contactContent">
          <div className="infoBoxes">
            <div className="infoBox">
              <div className="icon">📞</div>
              <div>
                <h3>Phone</h3>
                <p>+963 935447842</p>
              </div>
            </div>

            <div className="infoBox">
              <div className="icon">✉️</div>
              <div>
                <h3>Email</h3>
                <p>mohamadtahakasir@gmail.com</p>
              </div>
            </div>

            <div className="infoBox">
              <div className="icon">📍</div>
              <div>
                <h3>Address</h3>
                <p>Aleppo, Syria</p>
              </div>
            </div>
          </div>
          <form ref={formRef} onSubmit={sendEmail} className="contactForm">
            <input required type="text" placeholder="Your Name" />

            <input required type="email" placeholder="Your Email" />

            <textarea required placeholder="Your Message"></textarea>

            <button type="submit" className="primaryBtn" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>

            {statusMessage && <p className="statusNote">{statusMessage}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

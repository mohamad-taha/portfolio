import React, { useContext } from "react";
import { Context } from "../../context/Context";
import "./Contact.css";

const Contact = () => {
  const { theme } = useContext(Context);

  return (
    <section id="contact" className="mt">
      <div className="container">
        <div className="contact">
          <div>
            <span>Contact</span>
            <p>
              Let’s Discuss Your <span>Project</span>
            </p>
          </div>
          <div>
            <div className="myInfo">
              <div
                style={
                  theme === "light"
                    ? {
                        boxShadow:
                          " 0 30px 116px -16px rgba(211, 211, 211, 0.2)",
                      }
                    : {}
                }
              >
                <div>
                  <img src="./assets/imgs/phone.svg" alt="phone" />
                </div>
                <div>
                  <p>Call me</p>
                  <span>+963 935447842</span>
                </div>
              </div>
              <div>
                <div>
                  <img src="./assets/imgs/mail.svg" alt="mail" />
                </div>
                <div>
                  <p>Email me</p>
                  <span>mohamadtahakasir@gmail.com</span>
                </div>
              </div>
              <div>
                <div>
                  <img src="./assets/imgs/address.svg" alt="address" />
                </div>
                <div>
                  <p>Address</p>
                  <span>Aleppo, Syria</span>
                </div>
              </div>
            </div>
            <form>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Full name"
              />
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Your email"
              />
              <input
                type="text"
                name="phoneNumber"
                id="phoneNumber"
                placeholder="Phone number"
              />
              <textarea
                name="message"
                id="message"
                placeholder="Message"
              ></textarea>
              <button type="submit" className="primaryBtn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

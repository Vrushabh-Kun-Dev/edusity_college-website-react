import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'

const Contact = () => {
    return (
      <>
        <div className="contact">
          <div className="contact-col">
            <h3>
              Send us a message <img src={msg_icon} alt="msg_icon" />
            </h3>
            <p>
              Feel free to reach out through contact form or find our contact
              information below. Your feedback, questions, and suggestion are
              important to us as we strive to provide exceptional services to
              our university community.
            </p>
            <ul>
              <li>
                {" "}
                <img src={mail_icon} alt="mail_icon" />
                contact@vrudhsbh.kun.dev
              </li>
              <li>
                {" "}
                <img src={phone_icon} alt="phone_icon" />
                +91 8668202529
              </li>
              <li>
                <img src={location_icon} alt="location_icon" />
                77 Massachusetts Ave, Cambridge <br /> MA 02133, United States
              </li>
            </ul>
          </div>
          <div className="contact-col">
            <form>
              <label>Your Name</label>
              <input
                type="text"
                name="name"
                id=""
                placeholder="Enter Your Name"
                required
              />
              <label>Phone Number</label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter Your Phone Number"
                required
              />
              <label>Write your message here</label>
              <textarea
                name="message"
                id=""
                placeholder="Enter Your Message "
                required
              ></textarea>
              <button type="submit" className="btn dark-btn">
                Submit Now
              </button>
            </form>
            {/* <span>Sending</span> */}
          </div>
        </div>
      </>
    );
}


export default Contact;
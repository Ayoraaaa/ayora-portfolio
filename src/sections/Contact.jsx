import { useState } from "react";
import "../styles/contact.css"; // ✅ normal CSS import (no styles object)

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    setTimeout(() => {
      setStatus("sent");
      e.target.reset();
    }, 1000);
  }

  return (
    <section className="contactSection" id="contact">
      <div className="contactContainer">
        {/* Header */}
        <div className="contactHeader">
          <span className="contactTag">GET IN TOUCH</span>

          <h2 className="contactTitle">
            Contact Me
            <span className="contactUnderline"></span>
          </h2>

          <p className="contactSubtitle">
            Have a project in mind or just want to say hi?
            <br />
            I'll get back to you as soon as possible.
          </p>
        </div>

        {/* Card */}
        <div className="contactCard">
          <form onSubmit={handleSubmit}>
            <div className="formRow">
              <div className="field">
                <label>Name</label>
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="field">
                <label>Email</label>
                <input
                  type="email"
                  name="user_email"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>

            <div className="field">
              <label>Subject</label>
              <input type="text" name="subject" placeholder="What's this about?" />
            </div>

            <div className="field">
              <label>Message</label>
              <textarea
                name="message"
                rows={5}
                placeholder="Tell me more…"
                required
              />
            </div>

            <button
              type="submit"
              className="submitBtn"
              disabled={status === "sending" || status === "sent"}
            >
              {status === "idle" && "Send Message"}
              {status === "sending" && "Sending…"}
              {status === "sent" && "✓ Sent!"}
            </button>

            {status === "sent" && (
              <p className="success">✓ Message sent! I'll get back to you soon.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
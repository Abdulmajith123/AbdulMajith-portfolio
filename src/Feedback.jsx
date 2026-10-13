import React, { useState } from "react";

function Feedback() {
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFeedbackSubmit = async (event) => {
    event.preventDefault();

    setIsSubmitting(true);
    setStatus("");

    const formData = new FormData(event.target);

    try {
      const response = await fetch("https://formspree.io/f/xnpjgdlk", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("Thank you! Your feedback has been sent.");
        event.target.reset();
      } else {
        setStatus("Unable to send feedback. Please try again.");
      }
    } catch (error) {
      setStatus("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="feedback" className="container">
      <div className="text-center">
        <h2 className="section-title">Share Your Feedback</h2>
        <p className="feedback-description">
          Your feedback helps me to improve myself.
        </p>
      </div>

      <form
        className="feedback-card"
        onSubmit={handleFeedbackSubmit}
      >
        <div className="mb-3">
          <label className="form-label">Your Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Your Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Rating</label>
          <select
            name="rating"
            className="form-select"
            defaultValue=""
            required
          >
            <option value="" disabled>
              Select a rating
            </option>
            <option value="5 - Excellent">5 - Excellent</option>
            <option value="4 - Very Good">4 - Very Good</option>
            <option value="3 - Good">3 - Good</option>
            <option value="2 - Fair">2 - Fair</option>
            <option value="1 - Poor">1 - Poor</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Your Feedback</label>
          <textarea
            name="message"
            className="form-control"
            rows="4"
            placeholder="Write your feedback..."
            required
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Submit Feedback"}
        </button>

        {status && (
          <p className="mt-3 mb-0" role="status">
            {status}
          </p>
        )}
      </form>
    </section>
  );
}

export default Feedback;
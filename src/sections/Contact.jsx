import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    loading: false,
  });

  const handleChange = (e) => {
    console.log(e.target);
    const value = e.target.value;
    const label = e.target.name;
    setForm((prevForm) => ({ ...prevForm, [label]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setForm((prevForm) => ({ ...prevForm, loading: true }));

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          form_subject: "New Contact Form Submission",
          sender_name: form.name,
          message: form.message,
          from_email: form.email,
          to_email: "abood211957@outlook.com",
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setForm({ name: "", email: "", message: "", loading: false });
      alert("Thank you. I will get back to you as soon as possible.");
    } catch (error) {
      setForm((prevForm) => ({ ...prevForm, loading: false }));
      alert("Somthing went wrong.");
    }
  };

  return (
    <section className="c-space my-20">
      <div className="relative min-h-[80vh] flex items-center justify-center flex-col">
        <img
          src="/assets/terminal.png"
          alt="terminal-background"
          className="absolute inset-0 min-h-[80vh]"
        />
        <div className="contact-container">
          <h3 className="head-text">Let's Talk</h3>
          <p className="text-gl text-white-600 mt-3">Whether you're looking to hire me for a project, discuss potential opportunities, or just want to connect, I'd love to hear from you!</p>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7"
          >
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                disabled={form.loading}
                className="field-input"
                placeholder="What's your good name?"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                disabled={form.loading}
                className="field-input"
                placeholder="Type your email address"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Youe Message</span>
              <textarea
                rows={6}
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                disabled={form.loading}
                className="field-input"
                placeholder="And how can I serve you today?"
              />
            </label>
            <button className="field-btn" type="submit" disabled={form.loading}>
              {form?.loading ? "Sending" : "Send Message"}
              <img src="/assets/arrow-up.png" alt=">" />
            </button>
          </form>
        </div>
      </div>
      <h3 className="head-text">Contact me</h3>
    </section>
  );
};

export default Contact;

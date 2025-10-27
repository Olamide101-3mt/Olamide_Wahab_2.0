import React, { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    // Basic validation
    if (!form.name || !form.email || !form.message) {
      setStatus({ type: "error", msg: "Please complete all fields." });
      return;
    }
    setStatus({ type: "loading", msg: "Sending..." });
    try {
      // Example: send to serverless function or email service
      // await fetch("/api/contact", { method: "POST", body: JSON.stringify(form) });
      // For demo, emulate delay:
      await new Promise((r) => setTimeout(r, 900));
      setStatus({ type: "success", msg: "Message sent — I will reply soon." });
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus({ type: "error", msg: "Something went wrong." });
    }
  }

  return (
    <section id="contact" className="py-20">
      <h2 className="text-2xl font-semibold mb-4">Contact</h2>
      <form onSubmit={handleSubmit} className="max-w-2xl" action="https://formspree.io/f/mnndyavq" method="post">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input name="name" value={form.name} onChange={handleChange} placeholder="Name" className="p-3 border rounded" />
          <input name="email" value={form.email} onChange={handleChange} placeholder="Email" className="p-3 border rounded" />
        </div>
        <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message" className="w-full mt-4 p-3 border rounded h-36" />
        <div className="mt-4">
          <button type="submit" className="px-5 py-3 bg-purple-600 text-white rounded">Send</button>
          {status && <span className={`ml-4 ${status.type==="error" ? "text-red-600" : "text-green-600"}`}>{status.msg}</span>}
        </div>
      </form>
    </section>
  );
}
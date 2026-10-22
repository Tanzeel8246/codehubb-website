"use client";

import { useState } from "react";
import { SERVICES, SITE } from "@/lib/site";

/**
 * Backend-free contact form: composes a WhatsApp message from the form
 * contents and opens it. No server, no database — works on static hosting.
 */
export default function ContactForm() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [service, setService] = useState(SERVICES[0].title);
  const [message, setMessage] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const text =
      `Hi CodeHubb! I'm ${name || "interested in a project"}.\n` +
      `Service: ${service}\n` +
      `My contact: ${contact || "—"}\n` +
      `Details: ${message || "—"}`;
    window.open(
      `${SITE.whatsappUrl}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener"
    );
  };

  const inputProps = { required: true } as const;

  return (
    <form className="form" onSubmit={submit}>
      <div className="field">
        <label htmlFor="cf-name">Your name</label>
        <input
          id="cf-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. Ahmed Khan"
          {...inputProps}
        />
      </div>
      <div className="field">
        <label htmlFor="cf-contact">Phone or email</label>
        <input
          id="cf-contact"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          placeholder="How should we reach you?"
          {...inputProps}
        />
      </div>
      <div className="field">
        <label htmlFor="cf-service">What do you need?</label>
        <select
          id="cf-service"
          value={service}
          onChange={(e) => setService(e.target.value)}
        >
          {SERVICES.map((s) => (
            <option key={s.slug}>{s.title}</option>
          ))}
          <option>Something else</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="cf-msg">Project details</label>
        <textarea
          id="cf-msg"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us briefly about your project…"
        />
      </div>
      <button type="submit" className="btn btn-whatsapp btn-lg">
        Send via WhatsApp
      </button>
      <p style={{ color: "var(--muted-2)", fontSize: "0.88rem", textAlign: "center" }}>
        This opens WhatsApp with your message ready to send — no account needed.
      </p>
    </form>
  );
}

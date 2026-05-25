"use client";

import { useState } from "react";
import Image from "next/image";
import { contactContent, siteConfig } from "@/lib/content";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Business Enquiry — ${formData.service || "General"} — ${formData.company || formData.name}`;
    const body = [
      `Name: ${formData.name}`,
      `Company: ${formData.company}`,
      `Service Interest: ${formData.service}`,
      ``,
      `Message:`,
      formData.message,
    ].join("\n");

    window.location.href = `mailto:${contactContent.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  const inputClass =
    "w-full bg-[#161D27] border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-gold/60 focus:bg-[#1a2232] transition-all duration-200";

  return (
    <section id="contact" className="bg-gray-900 py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-gold text-xs font-bold uppercase tracking-[0.3em] mb-4">
            {contactContent.sectionLabel}
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6">
            {contactContent.headline}
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto mb-6" />
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            {contactContent.subheadline}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20">
          {/* Left: Contact Details */}
          <div className="flex flex-col justify-center">
            <h3 className="font-serif text-2xl font-bold text-white mb-8">
              Reach Us Directly
            </h3>

            {/* Email */}
            <a
              href={`mailto:${contactContent.email}`}
              className="group flex items-center gap-5 bg-[#161D27] border border-gold/20 rounded-xl p-6 mb-4 hover:border-gold hover:bg-gold/5 transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="w-14 h-14 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors duration-300">
                <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <div className="text-slate-400 text-xs uppercase tracking-widest mb-1">
                  Email
                </div>
                <div className="text-white font-bold text-lg group-hover:text-gold transition-colors duration-200">
                  {contactContent.email}
                </div>
              </div>
            </a>

            {/* Phone */}
            <a
              href={`tel:${contactContent.phoneRaw}`}
              className="group flex items-center gap-5 bg-[#161D27] border border-gold/20 rounded-xl p-6 mb-8 hover:border-gold hover:bg-gold/5 transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="w-14 h-14 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors duration-300">
                <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <div className="text-slate-400 text-xs uppercase tracking-widest mb-1">
                  Phone
                </div>
                <div className="text-white font-bold text-lg group-hover:text-gold transition-colors duration-200">
                  {contactContent.phone}
                </div>
              </div>
            </a>

            {/* Instructions */}
            <div className="bg-[#161D27] border border-gold/10 rounded-xl p-6">
              <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-3">
                When Reaching Out
              </h4>
              <p className="text-slate-400 text-sm mb-4">{contactContent.instructions}</p>
              <ul className="space-y-2">
                {["Project details & location", "Required services", "Timeline & urgency"].map(
                  (item) => (
                    <li key={item} className="flex items-center gap-2 text-slate-400 text-sm">
                      <span className="text-gold text-xs">▸</span>
                      {item}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div>
            {submitted ? (
              <div className="h-full flex items-center justify-center">
                <div className="text-center px-8 py-16 bg-[#161D27] border border-gold/30 rounded-2xl">
                  <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-white mb-3">
                    Thank You!
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed max-w-xs mx-auto">
                    Your email client should have opened with your message. We&apos;ll get back to you promptly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-gold text-sm underline underline-offset-4 hover:text-gold-light transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-[#161D27] border border-gold/10 rounded-2xl p-8 lg:p-10 space-y-5"
              >
                <h3 className="font-serif text-xl font-bold text-white mb-2">
                  Send a Message
                </h3>
                <div className="w-8 h-0.5 bg-gold mb-6" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-slate-400 text-xs uppercase tracking-widest mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 text-xs uppercase tracking-widest mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Mining Co Pty Ltd"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-400 text-xs uppercase tracking-widest mb-2">
                    Service Interest *
                  </label>
                  <select
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className={`${inputClass} cursor-pointer`}
                  >
                    <option value="" disabled>
                      Select a service...
                    </option>
                    {contactContent.serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-slate-400 text-xs uppercase tracking-widest mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project, location, and timeline..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gold text-[#0D1117] font-bold text-sm tracking-widest uppercase rounded-lg hover:bg-gold-light transition-all duration-200 shadow-lg shadow-gold/20 hover:shadow-gold/40 hover:-translate-y-0.5"
                >
                  Send Enquiry
                </button>

                <p className="text-slate-600 text-xs text-center">
                  This will open your email client with your message pre-filled.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mt-24 pt-8 border-t border-white/5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo + Name */}
          <div className="flex items-center gap-3">
            <div className="relative w-8 h-8 flex-shrink-0">
              <Image src="/logo.png" alt="KNA Aust Pty Ltd" fill className="object-contain" />
            </div>
            <span className="text-slate-400 text-sm">{siteConfig.company}</span>
          </div>

          {/* Copyright */}
          <p className="text-slate-600 text-xs text-center">
            &copy; {new Date().getFullYear()} {siteConfig.company}. All rights reserved.
          </p>

          {/* Contact summary */}
          <div className="flex items-center gap-4 text-slate-600 text-xs">
            <a
              href={`mailto:${siteConfig.email}`}
              className="hover:text-gold transition-colors duration-200"
            >
              {siteConfig.email}
            </a>
            <span className="text-white/10">|</span>
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="hover:text-gold transition-colors duration-200"
            >
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

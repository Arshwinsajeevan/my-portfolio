import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaFileDownload, FaCopy, FaCheck, FaPaperPlane, FaArrowLeft } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

const ContactPage = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <div className="pt-28 pb-24 bg-[var(--bg-color)]">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        {/* Header Breadcrumb */}
        <div className="mb-10">
          <Link
            to="/"
            className="text-xs font-mono text-[var(--accent-color)] hover:underline inline-flex items-center gap-1.5 mb-3"
          >
            <FaArrowLeft size={10} />
            <span>Back to Overview</span>
          </Link>
          <h1 className="text-4xl sm:text-6xl font-heading font-extrabold text-[var(--text-color)] tracking-tight">
            CONTACT & CONNECT
          </h1>
          <p className="text-lg text-[var(--text-muted)] mt-2 font-light">
            I'm open to full-time Software Development and Full-Stack engineering opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct channels */}
          <div className="lg:col-span-5 space-y-5">
            {/* Email Card with Copy button */}
            <div className="p-5 sm:p-6 rounded-3xl bg-[var(--card-bg)] border border-[var(--border-color)] hover:border-[var(--accent-color)] transition-all">
              <span className="text-xs font-mono text-[var(--text-muted-light)] uppercase tracking-wider font-semibold block mb-2">
                Primary Contact Email
              </span>

              <div className="flex items-center justify-between gap-3 flex-wrap">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-sm sm:text-base md:text-lg font-heading font-bold text-[var(--text-color)] hover:text-[var(--accent-color)] transition-colors flex items-center gap-2 truncate"
                >
                  <FaEnvelope size={15} className="text-[var(--accent-color)] shrink-0" />
                  <span className="truncate">{personalInfo.email}</span>
                </a>

                <button
                  onClick={copyEmail}
                  type="button"
                  aria-label="Copy Email Address"
                  className="px-3 py-1.5 rounded-lg bg-[var(--bg-color)] border border-[var(--border-color)] hover:border-[var(--accent-color)] text-xs font-mono text-[var(--text-color)] transition-all flex items-center gap-1.5 shrink-0"
                >
                  {copied ? (
                    <>
                      <FaCheck size={11} className="text-emerald-500" />
                      <span className="text-emerald-500">Copied!</span>
                    </>
                  ) : (
                    <>
                      <FaCopy size={11} />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Direct Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                className="p-5 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)] hover:border-[var(--accent-color)] transition-all flex flex-col justify-between"
              >
                <span className="text-xs font-mono text-[var(--text-muted-light)] uppercase tracking-wider mb-2">
                  Telephone
                </span>
                <div className="flex items-center gap-2 text-sm font-semibold text-[var(--text-color)]">
                  <FaPhone size={13} className="text-[var(--accent-color)] shrink-0" />
                  <span>{personalInfo.phone}</span>
                </div>
              </a>

              <div className="p-5 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)] flex flex-col justify-between">
                <span className="text-xs font-mono text-[var(--text-muted-light)] uppercase tracking-wider mb-2">
                  Location
                </span>
                <div>
                  <div className="flex items-center gap-2 text-sm font-semibold text-[var(--text-color)]">
                    <FaMapMarkerAlt size={13} className="text-[var(--accent-color)] shrink-0" />
                    <span>{personalInfo.location}</span>
                  </div>
                  <p className="text-xs text-[var(--text-muted)] mt-1 pl-5">
                    Ready to relocate
                  </p>
                </div>
              </div>
            </div>

            {/* Social & Resume Links */}
            <div className="p-5 sm:p-6 rounded-3xl bg-[var(--card-bg)] border border-[var(--border-color)] space-y-4">
              <span className="text-xs font-mono text-[var(--text-muted-light)] uppercase tracking-wider font-semibold block">
                Professional Channels
              </span>

              <div className="flex flex-wrap gap-2.5">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-[var(--bg-color)] border border-[var(--border-color)] text-xs font-mono text-[var(--text-color)] hover:border-[var(--accent-color)] transition-all flex items-center gap-2"
                >
                  <FaGithub size={14} />
                  <span>GitHub</span>
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-[var(--bg-color)] border border-[var(--border-color)] text-xs font-mono text-[var(--text-color)] hover:border-[var(--accent-color)] transition-all flex items-center gap-2"
                >
                  <FaLinkedin size={14} />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={personalInfo.resumeUrl}
                  download="Arshwin_Sajeevan_Resume.pdf"
                  className="px-4 py-2.5 rounded-xl bg-[var(--text-color)] text-[var(--bg-color)] text-xs font-mono font-semibold hover:opacity-90 transition-all flex items-center gap-2 shadow-xs"
                >
                  <FaFileDownload size={12} />
                  <span>Download Resume</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Working Contact Form */}
          <div className="lg:col-span-7 p-5 sm:p-8 rounded-3xl bg-[var(--card-bg)] border border-[var(--border-color)]">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-[var(--text-color)] mb-1">
              Send a Direct Message
            </h2>
            <p className="text-xs text-[var(--text-muted)] mb-6">
              Fill out this form to prepare and send your inquiry directly to <span className="font-mono text-[var(--text-color)]">{personalInfo.email}</span>.
            </p>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-[var(--text-muted)] mb-1">
                    Your Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full px-4 py-3 rounded-xl bg-[var(--bg-color)] border border-[var(--border-color)] text-base sm:text-sm text-[var(--text-color)] placeholder:text-[var(--text-muted-light)] focus:outline-none focus:border-[var(--accent-color)]"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-[var(--text-muted)] mb-1">
                    Your Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-[var(--bg-color)] border border-[var(--border-color)] text-base sm:text-sm text-[var(--text-color)] placeholder:text-[var(--text-muted-light)] focus:outline-none focus:border-[var(--accent-color)]"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-mono text-[var(--text-muted)] mb-1">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Full-Stack Developer Opportunity"
                  className="w-full px-4 py-3 rounded-xl bg-[var(--bg-color)] border border-[var(--border-color)] text-base sm:text-sm text-[var(--text-color)] placeholder:text-[var(--text-muted-light)] focus:outline-none focus:border-[var(--accent-color)]"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-mono text-[var(--text-muted)] mb-1">
                  Message *
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your team, tech stack, and what you're building..."
                  className="w-full px-4 py-3 rounded-xl bg-[var(--bg-color)] border border-[var(--border-color)] text-base sm:text-sm text-[var(--text-color)] placeholder:text-[var(--text-muted-light)] focus:outline-none focus:border-[var(--accent-color)] resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[var(--text-color)] text-[var(--bg-color)] font-semibold text-xs font-mono uppercase tracking-wider hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <FaPaperPlane size={11} />
                <span>Send Message</span>
              </button>

              {submitted && (
                <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-mono">
                  Thank you! Your mail client has been opened with your message. You can also reach me directly at {personalInfo.email}.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

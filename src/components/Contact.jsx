// src/components/Contact.jsx

import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="mt-16">
      <h2 className="text-3xl font-bold mb-4">Contact</h2>

      <p className="text-gray-600 dark:text-gray-400 mb-8">
        I'm always open to discussing new opportunities and interesting
        projects.
      </p>

      <div className="flex gap-6">
        <a
          href="mailto:kuvengaprince@gmail.com"
          aria-label="Email"
          className="rounded-full border p-4 transition hover:scale-110 hover:bg-gray-100 dark:hover:bg-neutral-800"
        >
          <FaEnvelope size={28} />
        </a>

        <a
          href="https://github.com/princekrazy"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="rounded-full border p-4 transition hover:scale-110 hover:bg-gray-100 dark:hover:bg-neutral-800"
        >
          <FaGithub size={28} />
        </a>

        <a
          href="https://www.linkedin.com/in/prince-kuvenga"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="rounded-full border p-4 transition hover:scale-110 hover:bg-gray-100 dark:hover:bg-neutral-800"
        >
          <FaLinkedin size={28} />
        </a>
      </div>
    </section>
  );
}

import React from "react";
import { motion } from "framer-motion";
import { FaTwitter, FaGithub, FaLinkedin, FaDribbble } from "react-icons/fa";

export default function Footer() {
  const linkClass = "text-sm text-gray-600 hover:text-purple-600 transition";
  const iconClass = "w-5 h-5 text-gray-500 hover:text-purple-600 transition";

  return (
    <footer className="border-t mt-16 pt-10 pb-6 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {/* Branding & CTA */}
          <div className="space-y-4">
            <a href="/" className="text-xl font-bold inline-block text-purple-700">
              Olamide Wahab
            </a>
            <p className="text-gray-600 text-sm max-w-sm">
              I design and build web products with attention to motion,
              accessibility, and performance. Want to work together?
            </p>

            <a
              href="#contact"
              className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700 transition text-sm"
            >
              Get in touch
            </a>
          </div>

          {/* Quick nav */}
          <div className="flex justify-between md:justify-center">
            <div>
              <h4 className="text-sm font-medium text-gray-900 mb-3">Explore</h4>
              <ul className="space-y-2">
                <li>
                  <a className={linkClass} href="#projects">
                    Projects
                  </a>
                </li>
                <li>
                  <a className={linkClass} href="#about">
                    About
                  </a>
                </li>
                <li>
                  <a className={linkClass} href="#contact">
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    className={linkClass}
                    href="/src/assets/resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </div>
{/* 
            <div className="ml-8 md:ml-12">
              <h4 className="text-sm font-medium text-gray-900 mb-3">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <a className={linkClass} href="#">
                    Blog
                  </a>
                </li>
                <li>
                  <a className={linkClass} href="#">
                    Design system
                  </a>
                </li>
                <li>
                  <a className={linkClass} href="#">
                    Open source
                  </a>
                </li>
                <li>
                  <a className={linkClass} href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div> */}
          </div>

          {/* Social & newsletter */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-gray-900">Stay connected</h4>

            <div className="flex items-center gap-3">
              <a
                className="p-2 rounded-md hover:bg-gray-100 transition"
                href="https://twitter.com/wahabolamide14"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
              >
                <FaTwitter className={iconClass} />
              </a>
              <a
                className="p-2 rounded-md hover:bg-gray-100 transition"
                href="https://github.com/Olamide101-3mt"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <FaGithub className={iconClass} />
              </a>
              <a
                className="p-2 rounded-md hover:bg-gray-100 transition"
                href="https://linkedin.com/in/olamidewahab"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin className={iconClass} />
              </a>
              {/* <a
                className="p-2 rounded-md hover:bg-gray-100 transition"
                href="https://dribbble.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Dribbble"
              >
                <FaDribbble className={iconClass} />
              </a> */}
            </div>

            <form className="mt-4">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <div className="flex items-center bg-gray-100 rounded-lg overflow-hidden">
                <input
                  id="email"
                  type="email"
                  placeholder="Join newsletter"
                  className="px-3 py-2 w-full bg-transparent text-sm text-gray-700 outline-none"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-purple-600 text-white text-sm font-medium hover:bg-purple-700 transition"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Olamide Wahab. All rights reserved</p>
          <p>Back to top</p>
        </div>
      </div>
    </footer>
  );
}

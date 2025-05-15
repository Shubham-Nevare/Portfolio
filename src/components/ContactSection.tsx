// import React from 'react'

import { Linkedin, Mail } from "lucide-react";

function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
          <div className="max-w-xl mx-auto text-center">
            <p className="text-gray-300 mb-8 text-lg">
              Thank you for your interest! While I'm currently engaged in an exciting internship opportunity, I'm always open to connecting with fellow developers and discussing technology, coding practices, or potential future collaborations.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <a 
                href="mailto:shubhamnevare25@gmail.com"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-1"
              >
                <Mail size={20} />
                Send Email
              </a>
              <a 
                href="https://www.linkedin.com/in/shubham-nevare-a607a0243"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 transform hover:-translate-y-1"
              >
                <Linkedin size={20} />
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
  );
}

export default ContactSection;

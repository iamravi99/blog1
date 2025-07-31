import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 md:px-20 bg-gray-100">
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-2xl shadow-xl">
        <h2 className="text-4xl font-bold mb-10 text-center text-gray-800">Contact Us</h2>

        <form className="grid grid-cols-1 gap-6">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Message</label>
            <textarea
              rows="5"
              placeholder="Your message"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
          >
            Send Message
          </button>
        </form>

        {/* Optional Contact Info */}
        <div className="mt-10 text-center text-sm text-gray-500">
          You can also reach us at: <br />
          <span className="font-medium text-gray-700">contact@example.com</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;

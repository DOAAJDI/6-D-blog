import React from 'react';

const Contact = () => {
  return (
    <div className="py-16 px-6 text-center">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">Contact Us</h2>
      <form className="max-w-xl mx-auto flex flex-col gap-2">
        <input type="text" placeholder="Full Name" className="p-3 rounded border" />
        <input type="email" placeholder="Email Address" className="p-3 rounded border" />
        <textarea rows="4" placeholder="Message" className="p-3 rounded border"></textarea>
        <button className="bg-blue-600 text-white py-3 px-6 rounded hover:bg-blue-700 transition">Send</button>
      </form>
    </div>
  );
};

export default Contact;

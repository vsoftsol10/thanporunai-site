import React, { useState } from 'react';

const NeedUsForm = () => {
  const [form, setForm] = useState({ name: '', number: '', message: '' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    // Validation fallback (extra safety)
    if (!form.name.trim() || !form.number.trim() || !form.message.trim()) {
      alert('Please fill in all fields');
      return;
    }

    try {
      await fetch('https://thanporunai-site.onrender.com/api/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
      alert('✅ Submitted');
      setForm({ name: '', number: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Need Us</h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-orange-600 mb-6">
              Message from Thanporunai Arakattalai
            </h2>

            <div className="text-gray-700 space-y-4">
              <p className="text-lg leading-relaxed">
                Thanporunai Arakattalai is ready to assist you with social and environmental concerns.
                Whether it's cleaning riversides, managing waste, or improving your local surroundings,
                we're just a request away. Fill out your details, and our team will visit your area to help!
              </p>
            </div>
          </div>

          {/* Right Form Section */}
          <div className="bg-[#f5f5f5] rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500 rounded-full opacity-20 -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-orange-500 rounded-full opacity-20 translate-y-12 translate-x-12"></div>

            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-2">"Need Help? We're Here for You!"</h3>
              <p className="text-green-100 mb-6">
                Raise a request with Thanporunai Arakkattalai for social support—be it cleanliness drives, tree planting, or community welfare.
              </p>

              {/* ✅ Wrap in a <form> tag */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-transparent border border-[#4A4A4A] text-black placeholder-[#4A4A4A] focus:outline-none focus:ring-2 focus:ring-[#4A4A4A] focus:border-transparent"
                />
                <input
                  name="number"
                  type="tel"
                  value={form.number}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-transparent border border-[#4A4A4A] text-black placeholder-[#4A4A4A] focus:outline-none focus:ring-2 focus:ring-[#4A4A4A] focus:border-transparent"
                />
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your concerns or requirements..."
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-transparent border border-[#4A4A4A] text-black placeholder-[#4A4A4A] focus:outline-none focus:ring-2 focus:ring-[#4A4A4A] focus:border-transparent resize-none"
                />
                <button
                  type="submit"
                  className="w-full text-green-700 font-semibold text-xl py-4 px-6 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-white/30 cursor-pointer"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeedUsForm;

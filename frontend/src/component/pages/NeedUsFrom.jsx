import React, { useState } from 'react';

const NeedUsForm = () => {
  const [form, setForm] = useState({ name: '', number: '', message: '' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    // Using fetch instead of axios for API call
    try {
      await fetch('http://localhost:5000/api/contacts', {
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
          <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-8 text-white relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500 rounded-full opacity-20 -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-orange-500 rounded-full opacity-20 translate-y-12 translate-x-12"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-2">"Need Help? We're Here for You!"</h3>
              <p className="text-green-100 mb-6">Raise a request with Thanporunai Arakkattalai for social support-be it cleanliness drives, tree planting, or community welfare.</p>
              
              <div onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <input
                    name="number"
                    type="tel"
                    value={form.number}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your concerns or requirements..."
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent resize-none"
                  />
                </div>
                
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="w-full bg-white text-green-700 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/30"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeedUsForm;
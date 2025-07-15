import React, { useState } from 'react';
import axios from 'axios';

const NeedUsFrom = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/contacts', form);
    alert('✅ Submitted');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required /><br />
      <input name="email" value={form.email} onChange={handleChange} placeholder="Email" required /><br />
      <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message" required></textarea><br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default NeedUsFrom;

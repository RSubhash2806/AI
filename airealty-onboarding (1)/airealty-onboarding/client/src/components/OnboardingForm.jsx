import React, { useState } from "react";
import axios from "axios";

const OnboardingForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    city: "",
    propertyType: "",
    budget: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const validate = () => {
    const { fullName, mobile, email, city, propertyType, budget, message } = formData;
    const mobileRegex = /^[6-9]\d{9}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return (
      fullName &&
      mobileRegex.test(mobile) &&
      emailRegex.test(email) &&
      city &&
      propertyType &&
      budget &&
      message
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return alert("Please fill all fields correctly!");

    try {
      await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/form`, formData);
      alert("Thank you! We’ll reach out soon.");
      window.location.href = "/thank-you";
    } catch (err) {
      alert("Error submitting form.");
    }
  };

  return (
    <form className="max-w-xl mx-auto p-6 bg-white rounded shadow-md space-y-4" onSubmit={handleSubmit}>
      <input name="fullName" placeholder="Full Name" className="w-full p-2 border rounded" onChange={handleChange} />
      <input name="mobile" placeholder="Mobile" className="w-full p-2 border rounded" onChange={handleChange} />
      <input name="email" placeholder="Email" className="w-full p-2 border rounded" onChange={handleChange} />
      <input name="city" placeholder="City of Interest" className="w-full p-2 border rounded" onChange={handleChange} />
      <select name="propertyType" className="w-full p-2 border rounded" onChange={handleChange}>
        <option value="">Select Type</option>
        <option>Apartment</option>
        <option>Plot</option>
        <option>Commercial</option>
        <option>Villa</option>
        <option>Farmhouse</option>
      </select>
      <input name="budget" placeholder="Budget Range (in ₹)" className="w-full p-2 border rounded" onChange={handleChange} />
      <textarea name="message" placeholder="Message" className="w-full p-2 border rounded" onChange={handleChange}></textarea>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
    </form>
  );
};

export default OnboardingForm;

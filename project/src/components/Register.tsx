import React, { useState } from "react";

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    village: "",
    crops: "",
    topic: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("https://auth-db1333.hstgr.io", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
      } else {
        alert("Error: " + result.message);
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-green-50 px-4 py-12 text-gray-800">
      <div className="max-w-4xl mx-auto bg-white p-6 sm:p-10 rounded-lg shadow-md">
        <h1 className="text-2xl sm:text-3xl font-bold text-green-800 mb-4 text-center">
          Farmer Training Registration
        </h1>
        <p className="text-gray-600 text-sm sm:text-base mb-6 text-center">
          Sign up for our farmer training program and get hands-on knowledge in sustainable farming.
        </p>

        {submitted ? (
          <div className="text-green-700 font-semibold text-lg text-center">
            ✅ Thank you for registering! We will contact you soon.
          </div>
        ) : (
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-4" onSubmit={handleSubmit}>
            <div className="col-span-1">
              <label className="block mb-1 font-medium">Full Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full border border-gray-300 px-4 py-2 rounded"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="col-span-1">
              <label className="block mb-1 font-medium">Phone Number</label>
              <input
                type="tel"
                name="phone"
                required
                className="w-full border border-gray-300 px-4 py-2 rounded"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="col-span-1">
              <label className="block mb-1 font-medium">Village</label>
              <input
                type="text"
                name="village"
                required
                className="w-full border border-gray-300 px-4 py-2 rounded"
                value={formData.village}
                onChange={handleChange}
              />
            </div>
            <div className="col-span-1">
              <label className="block mb-1 font-medium">Crops You Grow</label>
              <input
                type="text"
                name="crops"
                required
                className="w-full border border-gray-300 px-4 py-2 rounded"
                value={formData.crops}
                onChange={handleChange}
              />
            </div>
            <div className="col-span-1 sm:col-span-2">
              <label className="block mb-1 font-medium">Preferred Training Topic</label>
              <select
                name="topic"
                required
                className="w-full border border-gray-300 px-4 py-2 rounded"
                value={formData.topic}
                onChange={handleChange}
              >
                <option value="">-- Select Topic --</option>
                <option value="Organic Farming">Organic Farming</option>
                <option value="Irrigation Techniques">Irrigation Techniques</option>
                <option value="Soil Health & Crop Rotation">Soil Health & Crop Rotation</option>
                <option value="Market Access">Market Access</option>
              </select>
            </div>
            <div className="col-span-1 sm:col-span-2 text-center mt-4">
              <button
                type="submit"
                className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
              >
                Submit
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Register;

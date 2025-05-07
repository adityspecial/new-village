import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Link } from 'react-router-dom';

type FormData = {
  companyName: string;
  contactPerson: string;
  role: string;
  email: string;
  phone: string;
  website: string;
  focusAreas: string[];
  otherFocus: string;
  supportTypes: string[];
  otherSupport: string;
  duration: string;
  vision: string;
  comments: string;
};

const CSRForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    companyName: '',
    contactPerson: '',
    role: '',
    email: '',
    phone: '',
    website: '',
    focusAreas: [],
    otherFocus: '',
    supportTypes: [],
    otherSupport: '',
    duration: '',
    vision: '',
    comments: '',
  });

  const focusOptions = [
    'Education',
    'Sustainability',
    'Women Empowerment',
    'Health & Wellness',
    'Infrastructure',
    'Renewable Energy sources',
  ];

  const supportOptions = [
    'Monetary Contribution',
    'Employee Volunteering',
    'In-kind Donations',
    'Event Sponsorship',
  ];

  const durationOptions = [
    'Short-term (3-6 months)',
    'Medium-term (6-12 months)',
    'Long-term (1 year or more)',
    'One-time Contribution',
  ];

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
  
    if (type === 'checkbox') {
      const target = e.target as HTMLInputElement; // Explicitly narrow the type
      const checked = target.checked;
      const prev = formData[name as keyof FormData] as string[];
      const updated = checked
        ? [...prev, value]
        : prev.filter((item) => item !== value);
      setFormData({ ...formData, [name]: updated });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Submitted:', formData);
    alert('Form submitted! (Mock submission)');
  };

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-xl p-20 mt-10 mb-10 space-y-8">
    {/* <div className="max-w-4xl mx-auto px-10 pt-16 pb-6 bg-white shadow-md rounded-lg my-10"> */}

      <h2 className="text-3xl font-semibold text-blue-700 text-center">
        CSR Partnership Form
      </h2>
      <p className="text-center text-gray-700">
        Thank you for your interest in partnering with KIF. Please fill out the form below, and we’ll get in touch with you to explore how we can work together to make a difference in rural communities.
      </p>

      <form onSubmit={handleSubmit} className="space-y-8 text-gray-700">
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-blue-600">
            1. Company Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input className="input" name="companyName" placeholder="Company Name" onChange={handleChange} />
            <input className="input" name="contactPerson" placeholder="Primary Contact Person" onChange={handleChange} />
            <input className="input" name="role" placeholder="Designation/Role" onChange={handleChange} />
            <input className="input" name="email" placeholder="Email Address" type="email" onChange={handleChange} />
            <input className="input" name="phone" placeholder="Phone Number" type="tel" onChange={handleChange} />
            <input className="input" name="website" placeholder="Company Website" type="url" onChange={handleChange} />
          </div>
        </div>

        {/* Focus Areas */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-blue-600">
            2. CSR Focus Areas
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {focusOptions.map((area) => (
              <label key={area} className="flex items-center space-x-2">
                <input type="checkbox" name="focusAreas" value={area} onChange={handleChange} />
                <span>{area}</span>
              </label>
            ))}
            <input
              className="input col-span-1 md:col-span-2"
              name="otherFocus"
              placeholder="Other (Please specify)"
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Support Types */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-blue-600">
            3. Type of Support
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {supportOptions.map((type) => (
              <label key={type} className="flex items-center space-x-2">
                <input type="checkbox" name="supportTypes" value={type} onChange={handleChange} />
                <span>{type}</span>
              </label>
            ))}
            <input
              className="input col-span-1 md:col-span-2"
              name="otherSupport"
              placeholder="Other (Please specify)"
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Duration */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-blue-600">
            4. Proposed Partnership Duration
          </h3>
          <div className="space-y-2">
            {durationOptions.map((duration) => (
              <label key={duration} className="flex items-center space-x-2">
                <input type="radio" name="duration" value={duration} onChange={handleChange} />
                <span>{duration}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Vision */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-blue-600">
            5. How Do You Envision the Partnership?
          </h3>
          <textarea
            className="input w-full"
            rows={4}
            name="vision"
            placeholder="Please provide a brief overview..."
            onChange={handleChange}
          />
        </div>

        {/* Additional Comments */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-blue-600">
            6. Additional Comments or Questions
          </h3>
          <textarea
            className="input w-full"
            rows={3}
            name="comments"
            placeholder="Any specific requirements, questions, or ideas..."
            onChange={handleChange}
          />
        </div>

        {/* Submit */}
        <div className="flex justify-between mt-6">
        <Link to="/get-involved/csr">
          <button
            type="button"
            className="bg-gray-300 text-gray-800 px-6 py-2 rounded hover:bg-gray-400 transition"
          >
            Back
          </button>
        </Link>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </div>
      </form>
    </div>
  );
};

export default CSRForm;

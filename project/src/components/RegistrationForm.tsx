import React from 'react';

const RegistrationForm: React.FC = () => {
  return (
    <form className="space-y-4 text-left text-black">
      {[
        { label: 'Full Name', type: 'text', name: 'name' },
        { label: 'Age', type: 'number', name: 'age' },
        { label: 'Gender', type: 'text', name: 'gender' },
        { label: 'Mobile Number', type: 'tel', name: 'mobile' },
        { label: 'Email Address', type: 'email', name: 'email' },
        { label: 'Residential Address', type: 'text', name: 'address' },
        { label: 'Education Qualification', type: 'text', name: 'education' },
        { label: 'Occupation / Profession', type: 'text', name: 'occupation' },
      ].map((field, idx) => (
        <div key={idx}>
          <label className="block mb-1 font-medium text-gray-700">{field.label}</label>
          <input
            required
            type={field.type}
            name={field.name}
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>
      ))}

      <div>
        <label className="block mb-1 font-medium text-gray-700">Languages Known</label>
        <div className="flex gap-4 text-black">
          {['Kannada', 'English', 'Hindi'].map((lang, i) => (
            <label key={lang} className="inline-flex items-center">
              <input
                type="checkbox"
                name="languages"
                className="mr-2"
                required={i === 0} // Ensures at least one checkbox is validated
              />{' '}
              {lang}
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block mb-1 font-medium text-gray-700">Preferred Volunteering Area(s)</label>
        <div className="grid grid-cols-2 gap-2 text-black">
          {[
            'Teaching & Mentoring',
            'Event Support',
            'Social Media & Outreach',
            'Project Assistance',
            'Translation & Content Writing',
            'Research & Documentation',
            'Other',
          ].map((role, i) => (
            <label key={role} className="inline-flex items-center">
              <input
                type="checkbox"
                name="volunteeringAreas"
                className="mr-2"
                required={i === 0} // Same trick to require at least one
              />{' '}
              {role}
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block mb-1 font-medium text-gray-700">Why do you want to volunteer?</label>
        <textarea
          required
          className="w-full border border-gray-300 rounded px-4 py-2 text-black"
          rows={3}
        ></textarea>
      </div>

      <div>
        <label className="block mb-1 font-medium text-gray-700">Previous Volunteering Experience</label>
        <textarea
          required
          className="w-full border border-gray-300 rounded px-4 py-2"
          rows={3}
        ></textarea>
      </div>

      <div>
        <label className="block mb-1 font-medium text-gray-700">How did you hear about KIF?</label>
        <div className="flex flex-wrap gap-4">
          {['Social Media', 'Friend/Volunteer', 'Event', 'Other'].map((source, i) => (
            <label key={source} className="inline-flex items-center">
              <input
                type="radio"
                name="ref"
                className="mr-2"
                required={i === 0} // Ensures one radio must be selected
              />{' '}
              {source}
            </label>
          ))}
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-amber-500 text-white py-2 px-4 rounded hover:bg-amber-600 transition"
      >
        Submit
      </button>
    </form>
  );
};

export default RegistrationForm;
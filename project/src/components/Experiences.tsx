import { useState } from 'react';

const ShareExperiences = () => {
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !feedback) {
      alert('Please fill in both fields.');
      return;
    }

    // Here, you can send the feedback to your backend / Firebase / API
    console.log('Email:', email);
    console.log('Feedback:', feedback);

    setSubmitted(true);
    setEmail('');
    setFeedback('');
  };

  return (
    <div className="min-h-screen pattern-bg-yellow flex items-center justify-center px-4 py-12 bg-amber-100">
    <div className="max-w-3xl mx-auto mt-12 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-amber-900 mb-6 text-center">Share Your Experience</h2>
      {submitted && (
        <div className="mb-4 text-green-600 text-center">
          Thank you for sharing your experience!
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium mb-2">Email Address</label>
          <input
            type="email"
            className="w-full p-3 border border-gray-300 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="yourname@example.com"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">Your Feedback / Experience</label>
          <textarea
            className="w-full p-3 border border-gray-300 rounded-md"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            rows={5}
            placeholder="Write your experience or feedback here..."
            required
          />
        </div>
        <button
          type="submit"
          className="bg-amber-600 text-white py-2 px-6 rounded-md hover:bg-amber-700 transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
    </div>
  );
};

export default ShareExperiences;
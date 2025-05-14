import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CSRPartnership = () => {
  return (
    <div className="bg-gradient-to-br from-amber-100 via-white to-amber-100 py-12 px-6 lg:px-20 text-gray-800 font-sans space-y-20">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold text-center mb-8 text-amber-700"
      >
        CSR Partnerships with KIF
      </motion.h1>

      {/* Section 1: Intro */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg"
        >
          <strong>Partner with KIF to Make a Real Difference in Rural Communities</strong>
        </motion.p>
        <p>
          At Karnataka Incubation Foundation (KIF), we collaborate with organizations that are committed to creating positive change in rural communities. By partnering with us, your company can support initiatives that improve education, provide livelihoods, promote sustainability, and strengthen local economies in these areas.
        </p>
      </section>

      {/* Section 2: Why Partner with KIF */}
      <section className="flex flex-col lg:flex-row items-start gap-10">
        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold text-amber-600 mb-4">Why Partner with KIF?</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Direct Impact:</strong> Your support will directly benefit programs like Akshar Prabhavam, organic farming workshops, and livelihood programs for rural women.
            </li>
            <li>
              <strong>Employee Involvement:</strong> Corporate volunteering allows your team to actively participate in impactful projects, working directly with rural communities and fostering teamwork and engagement.
            </li>
            <li>
              <strong>Boost Your Brand:</strong> Align your brand with positive social impact and make a real difference in the lives of people in rural areas.
            </li>
            <li>
              <strong>Transparency & Reporting:</strong> We offer clear, detailed reports on how your contributions are making a difference, ensuring complete transparency in rural development efforts.
            </li>
          </ul>
        </motion.div>
        <motion.img
          src="/images/CSR/1.jpg"
          alt="Why Partner"
          className="lg:w-1/2 w-full rounded-xl shadow-md"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        />
      </section>

      {/* Section 3: How to Partner */}
      <section className="flex flex-col-reverse lg:flex-row items-start gap-10">
        <motion.img
          src="/images/CSR/2.jpg"
          alt="How to Partner"
          className="lg:w-1/2 w-full rounded-xl shadow-md"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        />
        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold text-amber-600 mb-4">How to Partner</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Initial Discussion:</strong> Contact us to discuss your CSR goals and how we can work together to support rural communities.</li>
            <li><strong>Tailored Plan:</strong> We’ll create a CSR program that aligns with your company’s interests and objectives, focused on rural development.</li>
            <li><strong>Implementation & Tracking:</strong> We’ll keep you updated on the progress of the partnership and the positive impact your support is having on rural areas.</li>
            <li><strong>Recognition:</strong> Your company will be acknowledged on our website, social media, and at events as a valued partner in rural development.</li>
          </ul>
        </motion.div>
      </section>

      {/* Section 4: CSR Form CTA */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow-lg rounded-xl p-10 text-center max-w-3xl mx-auto"
      >
        <h3 className="text-2xl font-semibold text-amber-700 mb-4">CSR Partnership Form</h3>
        <p className="mb-6">
          Thank you for your interest in partnering with KIF. Please fill out the form below, and we’ll get in touch with you to explore how we can work together to make a difference in rural communities.
        </p>
        <Link to="/csr-form">
        <button className="bg-amber-600 text-white px-6 py-3 rounded-md hover:bg-amber-700 transition">
          Fill out the CSR Partnership Form
        </button>
      </Link>
      </motion.section>
    </div>
  );
};

export default CSRPartnership;

import { motion } from 'framer-motion';

const RuralEmpowerment = () => {
  return (
    <div className="bg-gradient-to-br from-green-100 via-teal-100 to-cyan-100 py-12 px-6 lg:px-20 text-gray-800 font-sans space-y-20 ">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-4 text-green-600"
      >
        Empowering Rural Communities
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-xl font-medium text-center text-gray-700"
      >
        Building Sustainable Livelihoods through Financial Independence
      </motion.h2>

      {/* Why This Matters */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { number: '25-30%', title: 'Below Poverty Line', text: 'Rural households struggling with basic needs (NFHS-5 2019-2021)' },
          { number: '40%', title: 'Migration Rate', text: 'Driven by lack of rural employment (Migration in India 2020-21)' },
          { number: '25-30%', title: 'Elderly Isolation', text: 'Facing loneliness due to migration (NSSO 2018)' },
          { number: '8M', title: 'Out-of-School Children', text: 'Due to financial barriers (UDISE 2019-20)' },
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <h3 className="text-3xl font-bold text-green-600 mb-2">{stat.number}</h3>
            <h4 className="text-lg font-semibold mb-2">{stat.title}</h4>
            <p className="text-gray-600 text-sm">{stat.text}</p>
          </motion.div>
        ))}
      </section>

      {/* How We Do It */}
      <section className="flex flex-col-reverse lg:flex-row items-center gap-10">
        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-semibold mb-4 text-green-600">Our Approach</h3>
          <ul className="list-disc pl-6 space-y-4 text-gray-700">
            <li>Connect BPL families to government welfare schemes</li>
            <li>Skill development programs (tailoring, handicrafts, business management)</li>
            <li>Training in poultry farming, livestock rearing, and sustainable agriculture</li>
            <li>Creating local employment opportunities to reduce migration</li>
          </ul>
        </motion.div>
        <motion.img
          src="/images/Livlihood/WhatsApp Image 2025-04-22 at 16,16,55_b1c4a283-Picsart-AiImageEnhancer.jpg"
          alt="Rural Training"
          className="w-full lg:w-1/2 rounded-2xl shadow-xl"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        />
      </section>

      {/* Impact Section */}
      <section className="flex flex-col lg:flex-row items-center gap-10">
        <motion.img
          src="/images/Livlihood/1.jpg"
          alt="Community Impact"
          className="w-full lg:w-1/2 rounded-2xl shadow-xl"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        />
        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-semibold mb-4 text-green-600">Our Impact</h3>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h4 className="text-xl font-bold text-green-600 mb-2">450+ Women Empowered</h4>
              <p className="text-gray-600">Trained in tailoring and sustainable farming practices</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h4 className="text-xl font-bold text-green-600 mb-2">70+ Villages Reached</h4>
              <p className="text-gray-600">Across rural Karnataka with livelihood programs</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h4 className="text-xl font-bold text-green-600 mb-2">1000+ Families Supported</h4>
              <p className="text-gray-600">Connected to government schemes and resources</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Quote */}
      <motion.div
        className="text-center text-lg text-teal-700 font-medium italic mt-12 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        "True empowerment comes from creating sustainable opportunities that break the cycle of poverty and migration."
      </motion.div>
    </div>
  );
};

export default RuralEmpowerment;
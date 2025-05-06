import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Heart, Users, Trees, MapPin } from 'lucide-react';

const Statistics = () => {
  return (
    <section className="py-16 bg-[#f7f7f7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Education Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center text-amber-900 mb-4">
            Education Impact
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center border p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <GraduationCap className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                className="text-4xl font-bold text-gray-900 mb-2"
              >
                2,800+
              </motion.div>
              <p className="text-gray-600">Children Educated</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center border p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <MapPin className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <p className="text-lg font-bold text-gray-900">Villages Reached:</p>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                className="text-4xl font-bold text-gray-900 mb-2"
              >
                70
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Health Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center text-amber-900 mb-4">
            Health Impact
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center border p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <Heart className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                className="text-4xl font-bold text-gray-900 mb-2"
              >
                7,000+
              </motion.div>
              <p className="text-gray-600">Health Beneficiaries</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center border p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <MapPin className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <p className="text-lg font-bold text-gray-900">Villages Reached:</p>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                className="text-4xl font-bold text-gray-900 mb-2"
              >
                45
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Agriculture Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center text-amber-900 mb-4">
            Agriculture Impact
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center border p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                className="text-4xl font-bold text-gray-900 mb-2"
              >
                850+
              </motion.div>
              <p className="text-gray-600">Farmers Impacted</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center border p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <MapPin className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <p className="text-lg font-bold text-gray-900">Villages Reached:</p>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                className="text-4xl font-bold text-gray-900 mb-2"
              >
                250
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Environment Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center text-amber-900 mb-4">
            Environment Impact
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center border p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <Trees className="w-12 h-12 text-green-700 mx-auto mb-4" />
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                className="text-4xl font-bold text-gray-900 mb-2"
              >
                5,000+
              </motion.div>
              <p className="text-gray-600">Saplings Planted</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center border p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <MapPin className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <p className="text-lg font-bold text-gray-900">Villages Reached:</p>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                className="text-4xl font-bold text-gray-900 mb-2"
              >
                11
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center border p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <p className="text-lg font-bold text-gray-900">CO₂ Emission Reduced:</p>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                className="text-4xl font-bold text-gray-900 mb-2"
              >
                11.25 tons
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Heart, Users, Trees, MapPin } from 'lucide-react';

const Statistics = () => {
  return (
    <section className="py-16 bg-[#f7f7f7]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Education */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-amber-900 mb-8">Education Impact</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-center">
            {[{
              Icon: GraduationCap,
              iconColor: 'text-blue-600',
              value: '2,800+',
              label: 'Children Educated',
              bg: 'hover:bg-blue-600',
            }, {
              Icon: MapPin,
              iconColor: 'text-amber-600',
              value: '70+',
              label: 'Villages Reached',
              bg: 'hover:bg-orange-500',
            }].map((item, index) => (
              <motion.div
                key={index}
                className={`group border p-6 rounded-lg shadow text-center bg-white transform hover:scale-105 transition duration-300 ease-in-out shadow-md hover:shadow-lg text-gray-900 hover:text-white cursor-pointer ${item.bg}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <item.Icon className={`w-12 h-12 mx-auto mb-4 ${item.iconColor} group-hover:text-white`} />
                <div className="text-4xl font-bold mb-2">{item.value}</div>
                <p>{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Health */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-amber-900 mb-8">Health Impact</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-center">
            {[{
              Icon: Heart,
              iconColor: 'text-red-600',
              value: '7,000+',
              label: 'Total Beneficiaries',
              bg: 'hover:bg-red-600',
            }, {
              Icon: MapPin,
              iconColor: 'text-amber-600',
              value: '45+',
              label: 'Villages Reached',
              bg: 'hover:bg-orange-500',
            }].map((item, index) => (
              <motion.div
                key={index}
                className={`group border p-6 rounded-lg shadow text-center bg-white transform hover:scale-105 transition duration-300 ease-in-out shadow-md hover:shadow-lg text-gray-900 hover:text-white cursor-pointer ${item.bg}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <item.Icon className={`w-12 h-12 mx-auto mb-4 ${item.iconColor} group-hover:text-white`} />
                <div className="text-4xl font-bold mb-2">{item.value}</div>
                <p>{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Agriculture */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-amber-900 mb-8">Agriculture Impact</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-center">
            {[{
              Icon: Users,
              iconColor: 'text-green-600',
              value: '850+',
              label: 'Farmers Reached',
              bg: 'hover:bg-green-400',
            }, {
              Icon: MapPin,
              iconColor: 'text-amber-600',
              value: '250+',
              label: 'Villages Reached',
              bg: 'hover:bg-orange-500',
            }].map((item, index) => (
              <motion.div
                key={index}
                className={`group border p-6 rounded-lg shadow text-center bg-white transform hover:scale-105 transition duration-300 ease-in-out shadow-md hover:shadow-lg text-gray-900 hover:text-white cursor-pointer ${item.bg}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <item.Icon className={`w-12 h-12 mx-auto mb-4 ${item.iconColor} group-hover:text-white`} />
                <div className="text-4xl font-bold mb-2">{item.value}</div>
                <p>{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Environment */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-amber-900 mb-8">Environment Impact</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-center">
            {[{
              Icon: Trees,
              iconColor: 'text-green-700',
              value: '5,000+',
              label: 'Saplings Planted',
              bg: 'hover:bg-green-800',
            }, {
              Icon: MapPin,
              iconColor: 'text-amber-600',
              value: '11+',
              label: 'Villages Reached',
              bg: 'hover:bg-orange-500',
            }].map((item, index) => (
              <motion.div
                key={index}
                className={`group border p-6 rounded-lg shadow text-center bg-white transform hover:scale-105 transition duration-300 ease-in-out shadow-md hover:shadow-lg text-gray-900 hover:text-white cursor-pointer ${item.bg}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <item.Icon className={`w-12 h-12 mx-auto mb-4 ${item.iconColor} group-hover:text-white`} />
                <div className="text-4xl font-bold mb-2">{item.value}</div>
                <p>{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Statistics;

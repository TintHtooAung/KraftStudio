import { motion } from 'framer-motion'

// TODO: Replace with actual services from Kraft Studio website
const services = [
  {
    title: 'Architecture Design',
    description: 'Replace with actual service description from Kraft Studio website',
    icon: '🏗️'
  },
  {
    title: 'Interior Design',
    description: 'Replace with actual service description from Kraft Studio website',
    icon: '🎨'
  },
  {
    title: '3D Visualization',
    description: 'Replace with actual service description from Kraft Studio website',
    icon: '📐'
  },
  {
    title: 'Project Management',
    description: 'Replace with actual service description from Kraft Studio website',
    icon: '📋'
  },
]

export default function ServicesSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-black/5 text-black text-xs tracking-[0.3em] uppercase mb-6">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
            What We Do
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {/* Replace with actual text from Kraft Studio website */}
            Comprehensive architectural and design services
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-8 hover:bg-gray-50 transition-colors"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-light mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'

// TODO: Replace with actual client logos from Kraft Studio website
const clients = [
  'Client Logo 1',
  'Client Logo 2',
  'Client Logo 3',
  'Client Logo 4',
  'Client Logo 5',
  'Client Logo 6',
]

export default function ClientsSection() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-black/5 text-black text-xs tracking-[0.3em] uppercase mb-6">
            Our Clients
          </span>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
            Trusted By
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {/* Replace with actual text from Kraft Studio website */}
            We're proud to work with leading organizations
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-center p-6 bg-white hover:shadow-lg transition-shadow"
            >
              {/* Replace with actual client logo image */}
              <div className="text-gray-400 text-sm text-center">
                {client}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

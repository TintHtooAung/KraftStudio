import { motion } from 'framer-motion'
import { useParams, Link } from 'react-router-dom'
import Footer from '../components/Footer'
import { projects } from '../data/projects'

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>()
  const project = projects.find(p => p.id === Number(id)) || projects[0]

  if (!project) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-light mb-4">Project Not Found</h1>
          <Link to="/projects" className="text-blue-600 hover:underline">
            Back to Projects
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
        </div>

        <div className="relative z-10 h-full flex items-end">
          <div className="max-w-7xl mx-auto px-6 pb-20 w-full">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm tracking-wider mb-8 transition-colors"
            >
              <span>←</span> BACK TO PROJECTS
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs tracking-[0.3em] uppercase mb-4">
                {project.discipline}
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-4">
                {project.title}
              </h1>
              <div className="flex flex-wrap gap-6 text-white/80 text-sm tracking-wider">
                <span>{project.location}</span>
                <span>•</span>
                <span>{project.year}</span>
                {project.area && (
                  <>
                    <span>•</span>
                    <span>{project.area}</span>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-light mb-6">Project Overview</h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-8">
                {project.description}
              </p>
              {project.concept && (
                <p className="text-gray-600 leading-relaxed text-lg">
                  {project.concept}
                </p>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-2 gap-6">
                {project.client && (
                  <div className="border-l-2 border-black pl-4">
                    <div className="text-xs tracking-widest uppercase text-gray-500 mb-2">Client</div>
                    <div className="text-lg">{project.client}</div>
                  </div>
                )}
                {project.area && (
                  <div className="border-l-2 border-black pl-4">
                    <div className="text-xs tracking-widest uppercase text-gray-500 mb-2">Area</div>
                    <div className="text-lg">{project.area}</div>
                  </div>
                )}
                {project.status && (
                  <div className="border-l-2 border-black pl-4">
                    <div className="text-xs tracking-widest uppercase text-gray-500 mb-2">Status</div>
                    <div className="text-lg">{project.status}</div>
                  </div>
                )}
                {project.completionDate && (
                  <div className="border-l-2 border-black pl-4">
                    <div className="text-xs tracking-widest uppercase text-gray-500 mb-2">Completed</div>
                    <div className="text-lg">{project.completionDate}</div>
                  </div>
                )}
              </div>

              {(project.bedrooms || project.bathrooms) && (
                <div className="grid grid-cols-2 gap-6 pt-6 border-t">
                  {project.bedrooms && (
                    <div className="border-l-2 border-black pl-4">
                      <div className="text-xs tracking-widest uppercase text-gray-500 mb-2">Bedrooms</div>
                      <div className="text-lg">{project.bedrooms}</div>
                    </div>
                  )}
                  {project.bathrooms && (
                    <div className="border-l-2 border-black pl-4">
                      <div className="text-xs tracking-widest uppercase text-gray-500 mb-2">Bathrooms</div>
                      <div className="text-lg">{project.bathrooms}</div>
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      {project.galleryImages && project.galleryImages.length > 0 && (
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-light mb-12 text-center"
            >
              Project Gallery
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.galleryImages.map((image: string, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="aspect-[4/3] overflow-hidden"
                >
                  <img
                    src={image}
                    alt={`${project.title} ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Features */}
      {project.features && project.features.length > 0 && (
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-light mb-12 text-center"
            >
              Key Features
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.features.map((feature: string, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3 p-6 bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <div className="w-2 h-2 bg-black mt-2 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Next Project CTA */}
      <section className="py-20 px-6 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-light mb-8">
              Explore More Projects
            </h2>
            <Link
              to="/projects"
              className="inline-block px-10 py-4 border-2 border-[#c4df34] text-white text-sm tracking-widest hover:bg-white hover:text-black transition-all duration-300"
            >
              VIEW ALL PROJECTS
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

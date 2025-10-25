import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const TrustSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const companies = [
    'Fidelity National Title',
    'First American Title',
    'Stewart Title',
    'Old Republic Title',
    'Chicago Title',
    'Commonwealth Land Title',
    'WFG National Title',
    'Title Resources Group',
    'Residential Title',
    'Title Partners',
    'Premier Title',
    'Metro Title'
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="trust" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
          >
            Hundreds of Title Companies Already Run on Title Voice
          </motion.h2>
        </motion.div>

        {/* Logo Carousel */}
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-8 animate-scroll"
            animate={{
              x: [0, -50 * companies.length]
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear"
              }
            }}
          >
            {[...companies, ...companies].map((company, index) => (
              <motion.div
                key={`${company}-${index}`}
                variants={itemVariants}
                className="flex-shrink-0"
                whileHover={{ 
                  scale: 1.1,
                  filter: "grayscale(0%)",
                  transition: { duration: 0.2 }
                }}
              >
                <div className="bg-white border-2 border-gray-200 rounded-lg px-6 py-4 text-center hover:border-navy-300 transition-all duration-300 group">
                  <div className="w-8 h-8 bg-gradient-to-br from-navy-100 to-navy-200 rounded-full mx-auto mb-2 flex items-center justify-center group-hover:from-navy-200 group-hover:to-navy-300 transition-all duration-300">
                    <span className="text-navy-600 font-bold text-xs">
                      {company.split(' ').map(word => word[0]).join('')}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-gray-600 group-hover:text-navy-600 transition-colors duration-200">
                    {company}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Second Row - Reverse Direction */}
        <div className="overflow-hidden mt-4">
          <motion.div
            className="flex gap-8 animate-scroll-reverse"
            animate={{
              x: [-50 * companies.length, 0]
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear"
              }
            }}
          >
            {[...companies, ...companies].map((company, index) => (
              <motion.div
                key={`reverse-${company}-${index}`}
                variants={itemVariants}
                className="flex-shrink-0"
                whileHover={{ 
                  scale: 1.1,
                  filter: "grayscale(0%)",
                  transition: { duration: 0.2 }
                }}
              >
                <div className="bg-white border-2 border-gray-200 rounded-lg px-6 py-4 text-center hover:border-navy-300 transition-all duration-300 group">
                  <div className="w-8 h-8 bg-gradient-to-br from-navy-100 to-navy-200 rounded-full mx-auto mb-2 flex items-center justify-center group-hover:from-navy-200 group-hover:to-navy-300 transition-all duration-300">
                    <span className="text-navy-600 font-bold text-xs">
                      {company.split(' ').map(word => word[0]).join('')}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-gray-600 group-hover:text-navy-600 transition-colors duration-200">
                    {company}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default TrustSection


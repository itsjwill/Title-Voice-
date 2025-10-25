import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const IntegrationSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const integrations = [
    'SoftPro',
    'RamQuest', 
    'Qualia',
    'TitlePoint',
    'ResWare',
    'TitleWorks',
    'ClosingCorp'
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="integration" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12"
          >
            Connected With the Systems Title Companies Rely On
          </motion.h2>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {integrations.map((integration, index) => (
              <motion.div
                key={integration}
                variants={itemVariants}
                className="group"
                whileHover={{ 
                  y: -5,
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="bg-white border-2 border-gray-200 rounded-xl p-6 text-center hover:border-navy-300 hover:shadow-lg transition-all duration-300 group-hover:shadow-navy-200">
                  <div className="w-12 h-12 bg-gradient-to-br from-navy-100 to-navy-200 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <span className="text-navy-600 font-bold text-sm">
                      {integration.charAt(0)}
                    </span>
                  </div>
                  <h3 className="font-semibold text-gray-800 group-hover:text-navy-600 transition-colors duration-200">
                    {integration}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default IntegrationSection


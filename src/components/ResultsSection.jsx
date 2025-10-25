import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { TrendingUp, Users, DollarSign, Clock, Globe, Settings } from 'lucide-react'

const ResultsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const results = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      value: "10×",
      label: "Average return on investment",
      description: "Title companies see significant ROI within the first month"
    },
    {
      icon: <Users className="w-8 h-8" />,
      value: "50+",
      label: "Title companies trust us",
      description: "Growing community of successful title companies nationwide"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      value: "$100M+",
      label: "Closings coordinated",
      description: "Total transaction value processed through our platform"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      value: "Multilingual",
      label: "English and Spanish support",
      description: "Serve diverse communities with native language support"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      value: "Customizable",
      label: "Tailored scripts and workflows",
      description: "Adapt to your specific business processes and requirements"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      value: "2-Day",
      label: "Quick implementation",
      description: "Get up and running quickly with our streamlined setup process"
    }
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
    <section id="results" ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
          >
            Title Voice Delivers Real Results
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            See how Title Voice is transforming title operations with AI-powered efficiency
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {results.map((result, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
              whileHover={{ 
                y: -5,
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 text-center hover:border-navy-200 hover:shadow-lg transition-all duration-300 group-hover:shadow-navy-100">
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-navy-100 to-navy-200 text-navy-600 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:from-navy-200 group-hover:to-navy-300 transition-all duration-300"
                  whileHover={{ 
                    rotate: 5,
                    scale: 1.1,
                    transition: { duration: 0.2 }
                  }}
                >
                  {result.icon}
                </motion.div>

                <motion.div
                  className="text-4xl lg:text-5xl font-bold text-navy-600 mb-3"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    delay: index * 0.1,
                    duration: 0.6,
                    ease: "easeOut"
                  }}
                >
                  {result.value}
                </motion.div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-navy-600 transition-colors duration-200">
                  {result.label}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {result.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-16"
        >
          <motion.div
            className="bg-gradient-to-r from-navy-50 to-blue-50 rounded-2xl p-8 md:p-12"
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
          >
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Title Operations?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join hundreds of title companies already using Title Voice to streamline their operations and improve client satisfaction.
            </p>
            <motion.a
              href="#demo"
              className="inline-block gradient-bg text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-200"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(30, 58, 138, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Today
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ResultsSection


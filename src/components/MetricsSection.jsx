import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const MetricsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [counters, setCounters] = useState({
    revenue: 0,
    roi: 0,
    hours: 0,
    closings: 0
  })

  const metrics = [
    {
      value: '$100M+',
      label: 'Closings coordinated',
      key: 'revenue',
      target: 100
    },
    {
      value: '10X',
      label: 'ROI for title companies',
      key: 'roi',
      target: 10
    },
    {
      value: '50+',
      label: 'Title companies served',
      key: 'hours',
      target: 50
    },
    {
      value: '24/7',
      label: 'Virtual closing support',
      key: 'closings',
      target: 24
    }
  ]

  useEffect(() => {
    if (inView) {
      const duration = 2000 // 2 seconds
      const steps = 60 // 60 steps for smooth animation
      const stepDuration = duration / steps

      metrics.forEach((metric, index) => {
        const stepSize = metric.target / steps
        let currentStep = 0

        const timer = setInterval(() => {
          currentStep++
          const currentValue = Math.min(stepSize * currentStep, metric.target)
          
          setCounters(prev => ({
            ...prev,
            [metric.key]: Math.floor(currentValue)
          }))

          if (currentStep >= steps) {
            clearInterval(timer)
          }
        }, stepDuration)
      })
    }
  }, [inView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="metrics" className="py-20 bg-gradient-to-br from-[#1B262C] to-[#0F4C75] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-[#3282B8]/20 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl lg:text-4xl font-bold mb-12"
          >
            Title Voice delivers real results for title companies nationwide.
          </motion.h2>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.key}
                variants={itemVariants}
                className="text-center"
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                <motion.div
                  className="text-4xl lg:text-5xl font-bold mb-2"
                  style={{ background: 'linear-gradient(to right, #3282B8, #BBE1FA)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    delay: index * 0.2,
                    duration: 0.6,
                    ease: "easeOut"
                  }}
                >
                  {metric.key === 'revenue' && `$${counters.revenue}K+`}
                  {metric.key === 'roi' && `${counters.roi}X`}
                  {metric.key === 'hours' && counters.hours}
                  {metric.key === 'closings' && `${counters.closings}+`}
                </motion.div>
                <p className="text-gray-300 text-sm lg:text-base">
                  {metric.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default MetricsSection


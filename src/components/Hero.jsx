import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Pause } from 'lucide-react'

const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentBubble, setCurrentBubble] = useState(0)

  const chatMessages = [
    {
      user: "Hey Title Voice, I need to schedule a closing for next week.",
      ai: "Great! What date and time would you like to schedule your closing, Sarah?"
    },
    {
      user: "That would be 571 696 3430",
      ai: "Certainly, can I please have the property address for this closing?"
    },
    {
      user: "123 Main Street, Nashville",
      ai: "Perfect! I have you scheduled for Wednesday at 2 PM. You'll receive a confirmation email shortly."
    }
  ]

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentBubble(prev => (prev + 1) % chatMessages.length)
      }, 3000)
      return () => clearInterval(interval)
    }
  }, [isPlaying, chatMessages.length])

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
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const chatVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="hero" className="pt-20 pb-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.h1
              variants={itemVariants}
              className="text-5xl lg:text-6xl font-bold leading-tight"
            >
              <span className="gradient-text">
                AI Virtual Assistant for Title Companies
              </span>
              <br />
              <span className="text-gray-700">
                Never Miss a Call Again
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 leading-relaxed"
            >
              Title Voice AI virtual assistant handles calls 24/7, schedules closings, and manages customer inquiries. Our title company virtual assistant integrates with ResWare, RamQuest, and all major title software to keep your business running smoothly.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="#demo"
                className="gradient-bg text-white px-8 py-4 rounded-lg font-semibold text-center hover:shadow-lg transition-all duration-200"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(15, 76, 117, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Demo
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Content - Chat Interface */}
          <motion.div
            variants={chatVariants}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            <div className="bg-gray-50 rounded-2xl p-6 shadow-xl">
              {/* Chat Messages */}
              <div className="space-y-4 mb-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentBubble}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-4"
                  >
                    {/* User Message */}
                    <motion.div
                      className="flex justify-end"
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <div className="bg-[#0F4C75] text-white px-4 py-3 rounded-2xl rounded-br-md max-w-xs">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-6 h-6 bg-[#3282B8] rounded-full flex items-center justify-center text-xs font-bold">
                            SK
                          </div>
                          <span className="text-xs opacity-80">Sarah K.</span>
                        </div>
                        <p className="text-sm">{chatMessages[currentBubble].user}</p>
                      </div>
                    </motion.div>

                    {/* AI Message */}
                    <motion.div
                      className="flex justify-start"
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      <div className="bg-white text-gray-800 px-4 py-3 rounded-2xl rounded-bl-md max-w-xs shadow-sm border">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-xs font-bold text-white">
                            TV
                          </div>
                          <span className="text-xs text-gray-500">Title Voice</span>
                        </div>
                        <p className="text-sm">{chatMessages[currentBubble].ai}</p>
                      </div>
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Audio Controls */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-sm border"
              >
                <motion.button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-12 h-12 bg-[#0F4C75] text-white rounded-full flex items-center justify-center hover:bg-[#1B262C] transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                </motion.button>

                <div className="flex-1 flex items-center gap-2">
                  <div className="flex gap-1">
                    {[...Array(7)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-1 bg-[#0F4C75] rounded-full"
                        style={{ height: `${8 + i * 4}px` }}
                        animate={isPlaying ? {
                          scaleY: [0.5, 1, 0.5],
                          opacity: [0.7, 1, 0.7]
                        } : {}}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: i * 0.1,
                          ease: "easeInOut"
                        }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero


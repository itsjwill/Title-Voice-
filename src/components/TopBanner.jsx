import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

const TopBanner = () => {
  const [isVisible, setIsVisible] = useState(true)

  const handleClose = () => {
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.3 }}
          className="gradient-bg text-white text-center py-3 relative z-50"
        >
          <div className="container mx-auto px-4 flex items-center justify-center gap-4">
            <p className="text-sm font-medium">
              Strategic partnership announcement with{' '}
              <a 
                href="#" 
                className="underline hover:no-underline transition-all duration-200"
              >
                Title Software Company
              </a>
            </p>
            <button
              onClick={handleClose}
              className="ml-4 p-1 hover:bg-white/20 rounded-full transition-colors duration-200"
              aria-label="Close banner"
            >
              <X size={16} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default TopBanner


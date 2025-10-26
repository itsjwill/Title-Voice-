import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const DemoSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  useEffect(() => {
    console.log('DemoSection component mounted')
    
    // Load Cal.com script
    const script = document.createElement('script')
    script.src = 'https://app.cal.com/embed/embed.js'
    script.async = true
    script.onload = () => {
      console.log('Cal.com script loaded')
      
      // Initialize Cal.com
      if (window.Cal) {
        try {
          window.Cal("init", "30min", {origin:"https://app.cal.com"})
          
          setTimeout(() => {
            window.Cal.ns["30min"]("inline", {
              elementOrSelector:"#my-cal-inline-30min",
              config: {"layout":"month_view"},
              calLink: "title-voice-ai-tsigyx/30min",
            })
            
            window.Cal.ns["30min"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"})
            console.log('Cal.com widget initialized')
          }, 1000)
        } catch (error) {
          console.error('Error initializing Cal.com:', error)
        }
      }
    }
    
    document.head.appendChild(script)
    
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script)
      }
    }
  }, [])



  return (
    <section id="demo" ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Schedule Your Demo
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose a time that works for you
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            {/* Cal.com Widget Container */}
            <div 
              id="my-cal-inline-30min"
              style={{ 
                width: '100%', 
                height: '600px',
                border: '2px solid #e5e5e5',
                borderRadius: '8px',
                backgroundColor: '#f9f9f9',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <p style={{ fontSize: '18px', color: '#666' }}>
                Loading Cal.com widget...
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default DemoSection


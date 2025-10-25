import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const TestimonialsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const testimonials = [
    {
      id: 1,
      quote: "Title Voice has transformed our operations. We never miss a call anymore, and our clients love the instant responses. It's like having a dedicated receptionist that never sleeps.",
      author: "Sarah Johnson",
      title: "Operations Manager",
      company: "Premier Title Services",
      avatar: "SJ",
      rating: 5
    },
    {
      id: 2,
      quote: "The scheduling integration is incredible. Title Voice books appointments automatically and sends confirmations. Our staff can focus on closings instead of phone calls.",
      author: "Michael Chen",
      title: "Title Officer",
      company: "Metro Title Group",
      avatar: "MC",
      rating: 5
    },
    {
      id: 3,
      quote: "We've seen a 40% increase in appointment bookings since implementing Title Voice. The AI understands our business and handles complex inquiries perfectly.",
      author: "Jennifer Davis",
      title: "VP of Operations",
      company: "Heritage Title",
      avatar: "JD",
      rating: 5
    },
    {
      id: 4,
      quote: "Title Voice integrates seamlessly with our existing systems. The setup was quick and our team was up and running in just a few days.",
      author: "Robert Martinez",
      title: "IT Director",
      company: "Capital Title",
      avatar: "RM",
      rating: 5
    }
  ]

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [isAutoPlaying, testimonials.length])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const goToTestimonial = (index) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

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
    <section id="testimonials" ref={ref} className="py-20 bg-gray-50">
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
            What Our Customers Are Saying
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600"
          >
            See how Title Voice is transforming title company operations
          </motion.p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="max-w-4xl mx-auto"
        >
          <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                {/* Rating */}
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-8">
                  "{testimonials[currentIndex].quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center justify-center gap-4">
                  <div className="w-12 h-12 bg-navy-600 text-white rounded-full flex items-center justify-center font-bold">
                    {testimonials[currentIndex].avatar}
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-gray-900">
                      {testimonials[currentIndex].author}
                    </div>
                    <div className="text-gray-600">
                      {testimonials[currentIndex].title}
                    </div>
                    <div className="text-navy-600 font-medium">
                      {testimonials[currentIndex].company}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Controls */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <motion.button
                onClick={prevTestimonial}
                className="w-10 h-10 bg-gray-100 hover:bg-navy-100 text-gray-600 hover:text-navy-600 rounded-full flex items-center justify-center transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft size={20} />
              </motion.button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentIndex
                        ? 'bg-navy-600 scale-125'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </div>

              <motion.button
                onClick={nextTestimonial}
                className="w-10 h-10 bg-gray-100 hover:bg-navy-100 text-gray-600 hover:text-navy-600 rounded-full flex items-center justify-center transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight size={20} />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsSection


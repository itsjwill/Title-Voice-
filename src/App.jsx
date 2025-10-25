import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { motion, AnimatePresence } from 'framer-motion'

// Components
import Navigation from './components/Navigation'
import Footer from './components/Footer'

// Pages
import Home from './pages/Home'
import Solutions from './pages/Solutions'
import Workflows from './pages/Workflows'
import Pricing from './pages/Pricing'

// Animation variants
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 }
}

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5
}

function App() {
  return (
    <Router>
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="min-h-screen bg-black"
      >
        <Navigation />
        
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/workflows" element={<Workflows />} />
            <Route path="/pricing" element={<Pricing />} />
          </Routes>
        </AnimatePresence>
        
        <Footer />
        <Toaster 
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#1e3a8a',
              color: '#fff',
            },
          }}
        />
      </motion.div>
    </Router>
  )
}

export default App


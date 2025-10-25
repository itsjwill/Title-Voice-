import { motion } from "framer-motion";

export default function AnimatedOrb() {
  return (
    <div className="absolute inset-0 flex justify-center items-center">
      <motion.div
        className="relative"
        animate={{
          rotateY: [0, 360],
          rotateX: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          ease: "linear",
          repeat: Infinity,
        }}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* Sphere Motion - Multiple rotating rings */}
        {Array.from({ length: 8 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-[300px] h-[300px] rounded-full border border-[#8B5CF6]/30"
            style={{
              transform: `rotateX(${i * 45}deg) rotateY(${i * 30}deg)`,
              transformStyle: "preserve-3d",
            }}
            animate={{
              rotateZ: [0, 360],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 8 + i * 2,
              ease: "linear",
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
        
        {/* Central Core */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#00F6FF]"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            boxShadow: "0 0 50px rgba(139, 92, 246, 0.8), 0 0 100px rgba(0, 246, 255, 0.6)",
          }}
        />
        
        {/* Orbiting Elements */}
        {Array.from({ length: 6 }, (_, i) => (
          <motion.div
            key={`orbit-${i}`}
            className="absolute w-4 h-4 rounded-full bg-[#00F6FF]"
            style={{
              transformOrigin: "150px 150px",
              transform: `rotate(${i * 60}deg) translateX(150px)`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [0.5, 1.2, 0.5],
              opacity: [0.4, 0.9, 0.4],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.3,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}

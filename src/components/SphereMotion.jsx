import { motion } from "framer-motion";

export default function SphereMotion() {
  return (
    <div className="absolute inset-0 flex justify-center items-center">
      <motion.div
        className="relative"
        animate={{
          rotateY: [0, 360],
          rotateX: [0, 360],
        }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        }}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* Sphere Wireframe Rings */}
        {Array.from({ length: 6 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-[400px] h-[400px] rounded-full border border-[#8B5CF6]/40"
            style={{
              transform: `rotateX(${i * 30}deg) rotateY(${i * 45}deg)`,
              transformStyle: "preserve-3d",
            }}
            animate={{
              rotateZ: [0, 360],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 10 + i * 2,
              ease: "linear",
              repeat: Infinity,
              delay: i * 0.8,
            }}
          />
        ))}
        
        {/* Central Core */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#00F6FF]"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            boxShadow: "0 0 60px rgba(139, 92, 246, 0.8), 0 0 120px rgba(0, 246, 255, 0.6)",
          }}
        />
        
        {/* Orbiting Particles */}
        {Array.from({ length: 8 }, (_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-3 h-3 rounded-full bg-[#00F6FF]"
            style={{
              transformOrigin: "200px 200px",
              transform: `rotate(${i * 45}deg) translateX(200px)`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [0.5, 1.5, 0.5],
              opacity: [0.3, 0.9, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.2,
            }}
          />
        ))}
        
        {/* Inner Glow */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-[#8B5CF6]/20 to-[#00F6FF]/20"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            filter: "blur(40px)",
          }}
        />
      </motion.div>
    </div>
  );
}

// components/HeroSection.jsx
'use client';

import React from 'react'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'

export default function HeroSection() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 20, stiffness: 100 }
  const x = useSpring(useTransform(mouseX, [-100, 100], [-20, 20]), springConfig)
  const y = useSpring(useTransform(mouseY, [-100, 100], [-20, 20]), springConfig)

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect()
    const x = clientX - (left + width / 2)
    const y = clientY - (top + height / 2)
    mouseX.set(x)
    mouseY.set(y)
  }

  return (
    <section 
      className="relative h-screen w-full overflow-hidden text-white"
      onMouseMove={handleMouseMove}
    >
      {/* Background image */}
      <img
        src="images/hero.jpeg" // 🔁 Replace with actual hero background
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#00000058]  bg-opacity-60 z-10" />

      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-6 text-center">
        {/* Title */}
        <motion.h1

          transition={{ 
            duration: 0.8,
            textShadow: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          className="text-6xl md:text-8xl font-extrabold text-white drop-shadow-lg"
        >
          <motion.span
          
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            MEME
          </motion.span>
          <motion.span 
            className="text-gray-300"
          
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            GANG
          </motion.span>
        </motion.h1>

        {/* Meme labels */}
        <motion.div 
          className="absolute top-1/4 left-10 text-green-400 font-bold text-3xl rotate-12"
          animate={{ 
            textShadow: [
              "0 0 0px rgba(74, 222, 128, 0.2)",
              "0 0 20px rgba(74, 222, 128, 0.8)",
              "0 0 0px rgba(74, 222, 128, 0.2)"
            ],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          $PEPE
        </motion.div>
        <motion.div 
          className="absolute top-1/2 left-16 text-green-400 font-bold text-2xl -rotate-6"
          animate={{ 
            textShadow: [
              "0 0 0px rgba(74, 222, 128, 0.2)",
              "0 0 20px rgba(74, 222, 128, 0.8)",
              "0 0 0px rgba(74, 222, 128, 0.2)"
            ],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.3
          }}
        >
          $SHIB
        </motion.div>
        <motion.div 
          className="absolute bottom-1/4 right-10 text-green-400 font-bold text-3xl rotate-6"
          animate={{ 
            textShadow: [
              "0 0 0px rgba(74, 222, 128, 0.2)",
              "0 0 20px rgba(74, 222, 128, 0.8)",
              "0 0 0px rgba(74, 222, 128, 0.2)"
            ],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.6
          }}
        >
          $POPCA
        </motion.div>

        {/* Rewards Box */}
        {/* <motion.div
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          dragElastic={0.1}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ y: 100, opacity: 0 }}
          animate={{ 
            y: 0, 
            opacity: 1,
            boxShadow: [
              "0 0 0px rgba(255,255,255,0.2)",
              "0 0 20px rgba(255,255,255,0.4)",
              "0 0 0px rgba(255,255,255,0.2)"
            ]
          }}
          transition={{ 
            delay: 1, 
            duration: 0.8,
            boxShadow: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          style={{ x, y }}
          className="mt-10 bg-[#0d0d0d] border-2 border-white p-6 rounded-md w-full max-w-md shadow-xl cursor-grab active:cursor-grabbing"
        >
          <motion.h2 
            className="text-xl font-bold text-white mb-2"
            animate={{ 
              color: ["#ffffff", "#4ade80", "#ffffff"]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            REWARDS!!!
          </motion.h2>
          <div className="text-green-400 text-4xl font-bold">
            5% <span className="text-white text-lg">REWARDS IN TOP MEMECOINS</span>
          </div>
        </motion.div> */}
      </div>

      {/* Floating Characters (Dummy placeholders) */}
      {/* <img src="/images/doge.png" className="absolute left-0 top-0 w-36 md:w-48" alt="doge" />
      <img src="/images/pepe-center.png" className="absolute bottom-0 left-1/3 w-48 md:w-72" alt="pepe" />
      <img src="/images/blue-pepe.png" className="absolute top-0 right-32 w-36 md:w-48" alt="blue-pepe" />
      <img src="/images/popcat.png" className="absolute right-10 bottom-20 w-32 md:w-44" alt="popcat" />
   */}
    </section>
  );
}
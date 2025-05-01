import { motion } from 'framer-motion'

export default function AboutSection() {
  return (
    <section className="bg-[#00000058] bg-opacity-60 text-white py-20 px-6 h-screen relative z-20 overflow-hidden">
      <div className="container mx-auto h-full flex items-center">
        {/* Image Side */}
        <motion.div 
          className="w-1/2 h-full flex items-center justify-center"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.img
            src="/images/about.png"
            alt="About"
            className="w-full max-w-lg object-contain"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* Text Side */}
        <motion.div 
          className="w-1/2 pl-12"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Title */}
          <motion.h2 
            className="text-3xl md:text-5xl font-mono text-white tracking-widest mb-10 font-vina"
            animate={{
              textShadow: [
                "0 0 0px rgba(74, 222, 128, 0.2)",
                "0 0 20px rgba(74, 222, 128, 0.8)",
                "0 0 0px rgba(74, 222, 128, 0.2)"
              ]
            }}
          >
            ABOUT MEMEGANG
          </motion.h2>

          {/* Paragraph */}
          <motion.p className="text-xl md:text-2xl font-extrabold leading-relaxed">
            <motion.span 
              className="text-white"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              MEMEGANG is Wall Street taken over by memes — buy{' '}
            </motion.span>
            <motion.span 
              className="text-green-400 px-2 inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              $MEMEG
            </motion.span>
            <motion.span 
              className="text-white"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              {' '}and earn rewards in top meme coins like{' '}
            </motion.span>
            <motion.span 
              className="text-green-400 px-2 inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              $POPCAᵀ
            </motion.span>
            <motion.span 
              className="text-white"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              {' '}and{' '}
            </motion.span>
            <motion.span 
              className="text-green-400 px-2 inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              $WIF
            </motion.span>
            <motion.span 
              className="text-white"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              . It's degen indexing meets animated anarchy.
            </motion.span>
          </motion.p>
          
          {/* Floating Meme Tokens */}
          <motion.div 
            className="absolute bottom-10 left-1/4 text-green-400 font-bold text-xl rotate-12"
            animate={{ 
              y: [0, -20, 0],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            $PEPE
          </motion.div>
          <motion.div 
            className="absolute bottom-20 right-1/4 text-green-400 font-bold text-xl -rotate-12"
            animate={{ 
              y: [0, -20, 0],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          >
            $SHIB
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
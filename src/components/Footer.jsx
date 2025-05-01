import { motion } from 'framer-motion'
import { FaTelegramPlane, FaTwitter, FaDiscord } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="relative bg-[#00000058] bg-opacity-60 text-white py-12 overflow-hidden">
      {/* Background Elements */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo Section */}
          <motion.div 
            className="flex flex-col items-center md:items-start"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="text-2xl font-extrabold tracking-wide mb-4"
              animate={{
                textShadow: [
                  "0 0 0px rgba(255,255,255,0.2)",
                  "0 0 20px rgba(255,255,255,0.8)",
                  "0 0 0px rgba(255,255,255,0.2)"
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <span className="text-white">MEME</span>
              <span className="text-gray-300">GANG</span>
            </motion.div>
            <p className="text-gray-400 text-sm">The Ultimate Meme Token Index</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            className="flex flex-col items-center"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-lg font-bold mb-4 text-green-400">Quick Links</h3>
            <ul className="space-y-2 flex gap-4 text-center">
              {['About', 'Tokenomics',].map((link, index) => (
                <motion.li 
                  key={link}
                  whileHover={{ scale: 1.05, color: '#4ade80' }}
                  transition={{ duration: 0.2 }}
                  className="cursor-pointer"
                >
                  {link}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex flex-col items-center md:items-end"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-lg font-bold mb-4 text-green-400">Join Our Community</h3>
            <div className="flex space-x-4">
              {[
                { icon: <FaTelegramPlane size={24} />, color: '#0088cc' },
                { icon: <FaTwitter size={24} />, color: '#1DA1F2' },
                { icon: <FaDiscord size={24} />, color: '#7289DA' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="p-2 rounded-full bg-black/30 hover:bg-black/50 transition"
                  whileHover={{ 
                    scale: 1.1,
                    backgroundColor: social.color,
                    rotate: 360
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div 
          className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-400"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p>© 2024 MEMEGANG. All rights reserved.</p>
        </motion.div>

        {/* Floating Elements */}
        <motion.div 
          className="absolute bottom-20 left-1/4 text-green-400 font-bold text-xl rotate-12"
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
          className="absolute bottom-10 right-1/4 text-green-400 font-bold text-xl -rotate-12"
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
      </div>
    </footer>
  )
}

export default Footer
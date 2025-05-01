/* eslint-disable no-unused-vars */
// components/Navbar.jsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTelegramPlane } from 'react-icons/fa';

import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';

const links = ['About Us', 'How to Buy', 'Tokenomics'];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="flex justify-between items-center px-6 py-4  text-white fixed top-0 w-full z-50 shadow-md backdrop-blur-lg">
        {/* Logo */}
        <motion.div 
          className="text-2xl font-extrabold flex gap-2 items-center tracking-wide"
          animate={{ 
            textShadow: [
              "0 0 0px rgba(255,255,255,0.2)",
              "0 0 20px rgba(255,255,255,0.8)",
              "0 0 0px rgba(255,255,255,0.2)"
            ]
          }}
          transition={{ 
            textShadow: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        >
          <img src="images/done.png" alt="logo" className="w-20 h-20" />
          
 
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10 font-bold text-white">
          {links.map(link => (
            <a key={link} href="#" className="hover:text-green-400 transition">{link}</a>
          ))}
          <div className="flex space-x-4 text-xl">
            <a href="#"><FaTelegramPlane /></a>
          
   
          </div>
          <a
            href="#"
            className="ml-4 px-4 py-2 border border-green-500 text-green-500 hover:bg-green-500 hover:text-black transition rounded"
          >
            BUY NOW
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(true)}>
            <GiHamburgerMenu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Side Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 w-3/4 h-full bg-black text-white z-50 p-6 flex flex-col space-y-6 shadow-lg"
          >
            <div className="flex justify-between items-center">
              <div className="text-2xl font-extrabold tracking-wide">
                MEME<span className="text-gray-300">INDEX</span>
              </div>
              <button onClick={() => setIsOpen(false)}>
                <IoMdClose size={28} />
              </button>
            </div>

            <div className="flex flex-col space-y-6 mt-10 text-lg font-semibold">
              {links.map(link => (
                <a key={link} href="#" className="hover:text-green-400 transition">{link}</a>
              ))}
              <div className="flex space-x-4 text-2xl">
                <a href="#"><FaTelegramPlane /></a>
          
              </div>
              <a
                href="#"
                className="mt-4 w-fit px-4 py-2 border border-green-500 text-green-500 hover:bg-green-500 hover:text-black transition rounded"
              >
                BUY NOW
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
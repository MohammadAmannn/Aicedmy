"use client";
import React from 'react';
import _Footer from "./Footer";
import Image from 'next/image';
import { motion } from 'framer-motion';

function _Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-xl"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              y: [0, 100, 0],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl py-28">
        {/* Increase grid gap for more breathing room */}
        <div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 gap-x-24">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            // Ensure the text stays on top and has right padding on large screens.
            className="relative z-20 lg:pr-12"
          >
            <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 sm:text-6xl lg:text-6xl xl:text-6xl leading-tight">
              Revolutionizing
              <span className="block mt-4 bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                Smart Education
              </span>
            </h1>

            <p className="mt-8 text-xl font-light text-gray-200 sm:mt-12 sm:text-2xl">
              Discover a new era of personalized learning powered by AI.
              Our adaptive platform creates custom learning paths that evolve with you.
            </p>

            <div className="mt-12 space-y-6 sm:space-y-0 sm:space-x-6 sm:flex">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-8 py-4 text-lg font-semibold text-white transition-all duration-300 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl sm:w-auto hover:shadow-xl hover:shadow-purple-500/30"
              >
                Start Free Trial
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-8 py-4 text-lg font-semibold text-gray-200 transition-all duration-300 border-2 border-gray-400 rounded-xl sm:w-auto hover:border-white hover:text-white"
              >
                Explore Features
              </motion.button>
            </div>

            <div className="mt-12 sm:mt-16">
              <p className="text-lg font-medium text-gray-300">Trusted by leading institutions</p>
              <div className="flex mt-6 space-x-8 opacity-80">
                {/* Add your institution logos here */}
                <div className="h-12 w-28 bg-gray-400/20 backdrop-blur-sm rounded-lg" />
                <div className="h-12 w-28 bg-gray-400/20 backdrop-blur-sm rounded-lg" />
                <div className="h-12 w-28 bg-gray-400/20 backdrop-blur-sm rounded-lg" />
              </div>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            // Add left padding on large screens
            className="relative flex justify-center lg:justify-end lg:pl-12"
          >
            <div className="relative z-10 w-full max-w-xl transform perspective-1000">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl transform rotate-x-6 rotate-y-6 hover:rotate-x-12 hover:rotate-y-12 transition-all duration-500">
                <Image
                  src="/stu.jpg"
                  alt="Students learning"
                  width={600}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Decorative gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-purple-500/20 mix-blend-overlay" />

              {/* Adjusted Floating elements so they stay away from the text */}
              <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-2xl opacity-30" />
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-2xl opacity-30" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Animated scroll indicator */}
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-8 h-12 border-4 border-gray-300 rounded-3xl">
          <motion.div
            className="w-2 h-2 mt-2 bg-gray-300 rounded-full mx-auto"
            animate={{ y: [0, 16] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
        </div>
      </motion.div>

      <_Footer />
    </section>
  );
}

export default _Hero;

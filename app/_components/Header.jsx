"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

function _Header() {
  const [expanded, setExpanded] = useState(false);

  const navItems = [
    { name: "Features", href: "#features" },
    { name: "About", href: "#about" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ];

  const menuVariants = {
    open: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
    closed: { opacity: 0, y: "-100%" },
  };

  const itemVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -20 },
  };

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring" }}
      className="fixed top-0 w-full z-50 bg-gradient-to-b from-black/80 to-black/20 backdrop-blur-xl border-b border-white/10"
    >
      <header className="py-4 sm:py-6">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div whileHover={{ scale: 1.05 }} className="shrink-0">
              <Link href="/" className="flex items-center gap-2">
                <img
                  className="w-auto h-9"
                  src="https://landingfoliocom.imgix.net/store/collection/dusk/images/logo.svg"
                  alt="Logo"
                />
                <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  EduAI
                </span>
              </Link>
            </motion.div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative text-gray-300 hover:text-white transition-colors text-sm font-medium group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-cyan-400 to-blue-500 transition-all group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="md:hidden p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all"
              onClick={() => setExpanded(!expanded)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {expanded ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </motion.button>

            {/* Desktop CTA Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="hidden md:flex relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
              <Link
                href="/dashboard"
                className="relative px-6 py-2 text-sm font-medium text-white bg-black rounded-full transition-all duration-200 hover:bg-black/80"
              >
                Get Started
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {expanded && (
              <motion.nav
                initial="closed"
                animate="open"
                exit="closed"
                variants={menuVariants}
                className="md:hidden pt-8 pb-4"
              >
                <motion.div className="flex flex-col gap-6">
                  {navItems.map((item) => (
                    <motion.div key={item.name} variants={itemVariants}>
                      <Link
                        href={item.href}
                        className="text-xl text-gray-300 hover:text-white transition-colors font-medium"
                        onClick={() => setExpanded(false)}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                  <motion.div variants={itemVariants} className="mt-4">
                    <Link
                      href="/dashboard"
                      className="inline-block w-full px-6 py-3 text-center font-medium text-white bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full transition-all hover:shadow-lg hover:shadow-cyan-500/30"
                      onClick={() => setExpanded(false)}
                    >
                      Get Started
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </header>
    </motion.div>
  );
}

export default _Header;
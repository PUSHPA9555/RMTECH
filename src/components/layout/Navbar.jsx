import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiChevronRight } from 'react-icons/fi'
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'
import { logo1 } from '../../utils/images'

const links = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Products', path: '/product' },
  { name: 'Factory', path: '/factory' },
  { name: 'News', path: '/news' },
  { name: 'R&D', path: '/rd-center' }
]

export default function Navbar () {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setIsOpen(false)
  }, [location.pathname])

  return (
    <>
      <header
        className={`fixed w-full top-0 left-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white shadow-[0_2px_20px_rgba(0,0,0,0.1)] border-b border-gray-200 py-2'
            : 'bg-white/95 backdrop-blur-sm border-b border-gray-100 py-4'
        }`}
      >
        {/* Top micro bar */}
        <div
          className={`transition-all duration-500 overflow-hidden ${
            scrolled ? 'h-0 opacity-0' : 'h-0'
          }`}
        />

        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-14'>
            {/* ---- Logo ---- */}
            <Link to='/' className='flex-shrink-0 flex items-center group'>
              <img
                src={logo1}
                alt='RM Tech Engineering'
                className='h-10 w-auto  group-hover:shadow-blue-500/30 transition-shadow duration-300'
              />
            </Link>

            {/* ---- Desktop Nav ---- */}
            <nav className='hidden md:flex items-center gap-1'>
              {links.map(link => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `relative px-4 py-2 text-sm font-bold tracking-wide transition-all duration-200 group ${
                      isActive
                        ? 'text-blue-600'
                        : 'text-gray-600 hover:text-blue-600'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.name}
                      {/* Active underline */}
                      <span
                        className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all duration-300 ${
                          isActive ? 'w-4/5' : 'w-0 group-hover:w-1/2'
                        }`}
                      />
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* ---- Right Actions ---- */}
            <div className='hidden md:flex items-center gap-3'>
              {/* Phone */}
              <a
                href='tel:+916395764942'
                className='flex items-center gap-2 text-xs font-bold text-gray-500 hover:text-blue-600 transition-colors duration-200'
              >
                <FaPhoneAlt className='text-blue-400 text-xs' />
                +91-63957 64942
              </a>

              {/* Divider */}
              <span className='w-px h-4 bg-gray-300' />

              {/* Contact CTA */}
              <Link
                to='/contact'
                className='group relative inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-red-600 to-red-500 text-white font-black text-xs uppercase tracking-widest overflow-hidden shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_35px_rgba(220,38,38,0.6)] transition-all duration-300 hover:-translate-y-0.5 border-b-2 border-red-900'
              >
                <span className='relative z-10'>Get Quote</span>
                <FiChevronRight className='relative z-10 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform duration-300' />
                <div className='absolute inset-0 bg-gradient-to-r from-red-500 to-red-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300' />
              </Link>

              {/* WhatsApp */}
              <a
                href='https://api.whatsapp.com/send?phone=916395764942'
                target='_blank'
                rel='noreferrer'
                className='w-9 h-9 flex items-center justify-center bg-green-600/10 border border-green-600/30 text-green-400 hover:bg-green-600 hover:text-white hover:border-green-600 transition-all duration-300'
              >
                <FaWhatsapp className='text-base' />
              </a>
            </div>

            {/* ---- Mobile Toggle ---- */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='md:hidden w-10 h-10 flex items-center justify-center border border-gray-300 text-gray-600 hover:text-blue-600 hover:border-blue-500 transition-all duration-200'
            >
              {isOpen ? (
                <FiX className='h-5 w-5' />
              ) : (
                <FiMenu className='h-5 w-5' />
              )}
            </button>
          </div>
        </div>

        {/* Bottom glow line when scrolled */}
        {scrolled && (
          <div className='absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent' />
        )}
      </header>

      {/* ---- Mobile Menu ---- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className='fixed inset-0 z-40 bg-[#060b18]/98 backdrop-blur-xl pt-20 pb-8 px-4 md:hidden overflow-y-auto'
          >
            {/* Blueprint grid */}
            <div className='absolute inset-0 blueprint-grid opacity-100 pointer-events-none' />

            <div className='relative z-10 flex flex-col gap-1 mb-8'>
              {links.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `flex items-center justify-between px-5 py-4 border-b border-slate-800/60 text-base font-bold tracking-wide transition-all duration-200 ${
                        isActive
                          ? 'text-white border-l-2 border-l-blue-500 pl-4 bg-blue-500/5'
                          : 'text-slate-400 hover:text-white hover:pl-6'
                      }`
                    }
                  >
                    {link.name}
                    <FiChevronRight className='text-slate-600 text-sm' />
                  </NavLink>
                </motion.div>
              ))}
            </div>

            {/* Mobile contact actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className='relative z-10 flex flex-col gap-3 px-1'
            >
              <Link
                to='/contact'
                className='flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-red-600 to-red-500 text-white font-black text-sm uppercase tracking-widest border-b-4 border-red-900 shadow-[0_0_30px_rgba(220,38,38,0.3)]'
              >
                Get a Free Quote
                <FiChevronRight className='h-4 w-4' />
              </Link>

              <div className='grid grid-cols-2 gap-3'>
                <a
                  href='tel:+916395764942'
                  className='flex items-center justify-center gap-2 py-3.5 bg-blue-600/10 border border-blue-600/30 text-blue-400 text-sm font-bold hover:bg-blue-600 hover:text-white transition-all duration-300'
                >
                  <FaPhoneAlt className='text-sm' />
                  Call Now
                </a>
                <a
                  href='https://api.whatsapp.com/send?phone=916395764942'
                  target='_blank'
                  rel='noreferrer'
                  className='flex items-center justify-center gap-2 py-3.5 bg-green-600/10 border border-green-600/30 text-green-400 text-sm font-bold hover:bg-green-600 hover:text-white transition-all duration-300'
                >
                  <FaWhatsapp className='text-base' />
                  WhatsApp
                </a>
              </div>

              <div className='text-center pt-4'>
                <p className='text-xs text-slate-600 uppercase tracking-widest'>
                  RM Tech Engineering
                </p>
                <p className='text-xs text-slate-700 mt-1'>
                  Greater Noida, India • ISO 9001 Certified
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

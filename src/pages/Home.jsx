import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiChevronRight } from 'react-icons/fi'
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaIndustry,
  FaGlobe,
  FaCogs,
  FaAward,
  FaTools,
  FaHandshake
} from 'react-icons/fa'
import { slider } from '../utils/images'
import homeBg from '../assets/images/Home .png'
import QuickSupportModal from '../components/QuickSupportModal'

export default function Home () {
  return (
    <div className='w-full flex flex-col font-sans overflow-hidden bg-white text-slate-800'>
      {/* Quick Support Modal */}
      <QuickSupportModal />

      <section className='relative w-full bg-black min-h-[500px] md:min-h-[600px] lg:min-h-screen'>
        <img src={homeBg} alt='Home Hero' className='absolute inset-0 w-full h-full object-cover object-center' />

        {/* Overlays */}
        <div className='absolute inset-0 bg-gradient-to-r from-black/20 via-black/10 to-black/10' />
        <div className='absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/35' />

        {/* Blueprint grid */}
        <div
          className='absolute inset-0 opacity-[0.04]'
          style={{
            backgroundImage:
              'linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)',
            backgroundSize: '65px 65px'
          }}
        />

        {/* Sparks */}
        {/* <div className='absolute inset-0 pointer-events-none overflow-hidden'>
          {[...Array(14)].map((_, i) => (
            <motion.div
              key={i}
              className='absolute rounded-full'
              style={{
                left: `${4 + i * 6.8}%`,
                top: '-8px',
                width: `${1 + (i % 2)}px`,
                height: `${30 + (i % 4) * 15}px`,
                background:
                  i % 3 === 0
                    ? 'linear-gradient(to bottom,#f97316,transparent)'
                    : i % 3 === 1
                    ? 'linear-gradient(to bottom,#fbbf24,transparent)'
                    : 'linear-gradient(to bottom,#60a5fa,transparent)'
              }}
              animate={{ y: ['0vh', '110vh'], opacity: [0, 0.8, 0] }}
              transition={{
                duration: 2 + (i % 4) * 0.5,
                repeat: Infinity,
                delay: i * 0.4,
                ease: 'linear'
              }}
            />
          ))}
        </div> */}

        {/* Scan line */}
        <motion.div
          animate={{ x: ['-100%', '100%'] }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'linear',
            repeatDelay: 5
          }}
          className='absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/25 to-transparent pointer-events-none'
        />

        {/* Left accent */}
        <div className='absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-transparent via-red-500/70 to-transparent' />

        {/* Main Content */}
        <div className='absolute inset-0 z-20 flex items-center'>
          <div className='max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full'>
          <div className='max-w-2xl'>
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className='flex items-center gap-2 mb-5'
            >
              <span className='w-5 h-[2px] bg-red-500' />
              <span className='w-2 h-[2px] bg-red-400/50' />
              <span className='text-[10px] font-black tracking-[0.45em] text-red-400 uppercase'>
                RM Tech Engineering — India
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-white leading-[1.1] uppercase mb-3 md:mb-4'
            >
              Engineering the{' '}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500'>
                Future of Steel
              </span>{' '}
              Manufacturing
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className='text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed mb-5 md:mb-7 font-light'
            >
              Complete rolling mill machinery, fabrication, automation, and
              turnkey industrial solutions — engineered for global steel plants.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className='flex flex-wrap gap-3 mb-8'
            >
              <Link
                to='/contact'
                className='group relative inline-flex items-center gap-2 px-4 py-2.5 md:px-6 md:py-3 bg-gradient-to-r from-red-600 to-red-500 text-white font-black text-[10px] md:text-xs uppercase tracking-widest overflow-hidden shadow-[0_0_25px_rgba(220,38,38,0.4)] hover:shadow-[0_0_45px_rgba(220,38,38,0.7)] transition-all duration-300 hover:-translate-y-0.5 border-b-2 border-red-900'
              >
                <span className='relative z-10'>Get Quote</span>
                <FiChevronRight className='relative z-10 h-4 w-4 group-hover:translate-x-1 transition-transform' />
                <div className='absolute inset-0 bg-gradient-to-r from-red-500 to-red-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300' />
              </Link>

              <Link
                to='/factory'
                className='inline-flex items-center gap-2 px-4 py-2.5 md:px-6 md:py-3 bg-blue-500/10 backdrop-blur-sm text-white font-bold text-[10px] md:text-xs uppercase tracking-widest border border-blue-500/40 hover:border-blue-400 hover:bg-blue-500/20 hover:text-blue-300 transition-all duration-300 hover:-translate-y-0.5'
              >
                View Factory
                <FiChevronRight className='h-4 w-4' />
              </Link>

              <a
                href='tel:+916395764942'
                className='inline-flex items-center gap-2 px-3 py-2.5 md:px-5 md:py-3 bg-white/5 border border-white/10 text-slate-300 text-[10px] md:text-xs font-bold hover:bg-white/10 hover:text-white transition-all duration-300'
              >
                <FaPhoneAlt className='text-blue-400 text-[10px] md:text-xs' />
                <span className='hidden sm:inline'>+91-63957 64942</span>
                <span className='sm:hidden'>Call</span>
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className='flex flex-wrap items-center gap-4'
            >
              {[
                { label: 'ISO 9001', dot: 'bg-green-400' },
                { label: '20+ Years', dot: 'bg-blue-400' },
                { label: 'Pan India & Export', dot: 'bg-red-400' },
                { label: '24/7 Support', dot: 'bg-cyan-400' }
              ].map((b, i) => (
                <div key={i} className='flex items-center gap-1.5'>
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${b.dot} animate-pulse`}
                  />
                  <span className='text-[10px] font-bold text-slate-400 uppercase tracking-wider'>
                    {b.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
          </div>
        </div>

        {/* Right vertical text */}
        <div className='absolute right-6 top-1/2 -translate-y-1/2 z-20 hidden xl:flex flex-col items-center gap-3'>
          <div className='w-px h-16 bg-gradient-to-b from-transparent to-slate-600' />
          <span
            className='text-[9px] font-black tracking-[0.4em] text-slate-600 uppercase'
            style={{ writingMode: 'vertical-rl' }}
          >
            Steel Plant Machinery
          </span>
          <div className='w-px h-16 bg-gradient-to-b from-slate-600 to-transparent' />
        </div>

        {/* Bottom fade */}
        <div className='absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent' />
      </section>

      {/* ===================== STATS BAR ===================== */}
      <section className='relative bg-gray-50 border-y border-gray-200 py-0 z-20'>
        {/* Top accent line */}
        <div className='absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent' />

        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-800/60'>
            {[
              {
                value: '2001',
                label: 'Year Established',
                detail: '20+ Years Excellence',
                icon: <FaCogs className='text-blue-400' />
              },
              {
                value: '150+',
                label: 'Steel Plants Served',
                detail: 'Global Reach',
                icon: <FaIndustry className='text-red-400' />
              },
              {
                value: '200+',
                label: 'Production Lines',
                detail: 'Turnkey Solutions',
                icon: <FaGlobe className='text-cyan-400' />
              },
              {
                value: '45+',
                label: 'Countries',
                detail: 'International Presence',
                icon: <FaGlobe className='text-blue-400' />
              }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className='flex flex-col items-center md:items-start text-center md:text-left px-5 py-7 group hover:bg-blue-50 transition-colors duration-300'
              >
                <div className='flex items-center gap-2 mb-3'>
                  <span className='text-lg md:text-xl'>{stat.icon}</span>
                  <span className='text-[10px] md:text-xs font-bold tracking-[0.2em] text-slate-500 uppercase'>
                    {stat.detail}
                  </span>
                </div>
                <div className='text-2xl md:text-3xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-b from-slate-900 to-slate-600 mb-1'>
                  {stat.value}
                </div>
                <div className='text-xs md:text-sm font-bold text-slate-500 uppercase tracking-wider'>
                  {stat.label}
                </div>
                <div className='mt-3 h-[2px] w-0 group-hover:w-12 bg-gradient-to-r from-blue-500 to-transparent transition-all duration-500' />
              </motion.div>
            ))}
          </div>
        </div>

        <div className='absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gray-300 to-transparent' />
      </section>

      {/* ===================== PRODUCTS SECTION ===================== */}
      <section className='py-24 bg-white relative overflow-hidden'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='text-center mb-16'
          >
            <div className='inline-flex items-center gap-2 px-5 py-2 bg-blue-50 border border-blue-100 rounded-full mb-6'>
              <span className='w-2 h-2 rounded-full bg-blue-500 animate-pulse' />
              <span className='text-xs font-black tracking-[0.35em] text-blue-600 uppercase'>Our Products</span>
            </div>
            <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-4'>
              Industrial{' '}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500'>
                Product Solutions
              </span>
            </h2>
            <p className='text-slate-600 max-w-2xl mx-auto text-sm md:text-base lg:text-lg'>
              Precision-engineered machinery for steel plants and rolling mills
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {[
              {
                name: 'Rolling Mill Equipment',
                desc: 'Complete hot & cold rolling mill lines for steel production',
                icon: <FaCogs className='text-3xl' />,
                color: 'from-blue-600 to-blue-500',
                accent: '#3b82f6',
                specs: ['Hot Strip Mill', 'Cold Rolling Line', 'Section Mill', 'Bar & Rod Mill']
              },
              {
                name: 'Shearing Machines',
                desc: 'High-speed flying shears and crop shears for precise cutting',
                icon: <FaTools className='text-3xl' />,
                color: 'from-red-600 to-red-500',
                accent: '#ef4444',
                specs: ['Flying Shears', 'Crop Shears', 'Dividing Shears', 'Cold Saws']
              },
              {
                name: 'Cooling Beds',
                desc: 'Controlled cooling systems for optimal metallurgical properties',
                icon: <FaIndustry className='text-3xl' />,
                color: 'from-cyan-600 to-cyan-500',
                accent: '#06b6d4',
                specs: ['Walking Beam', 'Rake Type', 'Chain Transfer', 'Turnover Device']
              },
              {
                name: 'Hydraulic Systems',
                desc: 'High-pressure hydraulic power units and cylinder assemblies',
                icon: <FaCogs className='text-3xl' />,
                color: 'from-indigo-600 to-indigo-500',
                accent: '#6366f1',
                specs: ['Power Packs', 'Servo Systems', 'Lubrication Units', 'Cylinders']
              },
              {
                name: 'Automation Panels',
                desc: 'Smart PLC-based control systems and automation solutions',
                icon: <FaTools className='text-3xl' />,
                color: 'from-yellow-600 to-yellow-500',
                accent: '#eab308',
                specs: ['PLC Systems', 'SCADA Control', 'HMI Panels', 'Drive Systems']
              },
              {
                name: 'Heavy Fabrication',
                desc: 'Large-scale structural fabrication and engineering assemblies',
                icon: <FaIndustry className='text-3xl' />,
                color: 'from-orange-600 to-orange-500',
                accent: '#f97316',
                specs: ['Mill Housings', 'Gear Boxes', 'Pinion Stands', 'Structural Steel']
              }
            ].map((product, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -8, boxShadow: `0 20px 40px -10px ${product.accent}40` }}
                className='group bg-white border border-gray-200 rounded-2xl p-6 md:p-8 cursor-pointer transition-all duration-300 hover:border-gray-300'
              >
                <div className={`w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br ${product.color} flex items-center justify-center text-white mb-5 md:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {product.icon}
                </div>
                <h3 className='text-base md:text-lg font-black text-slate-900 mb-3 uppercase tracking-wide'>
                  {product.name}
                </h3>
                <div className='h-[2px] w-12 bg-gradient-to-r mb-4 transition-all duration-500 group-hover:w-full' style={{ backgroundImage: `linear-gradient(to right, ${product.accent}, transparent)` }} />
                <p className='text-slate-600 text-sm leading-relaxed mb-5'>
                  {product.desc}
                </p>
                <div className='flex flex-wrap gap-2'>
                  {product.specs.map((spec, si) => (
                    <span key={si} className='px-2 py-1 text-[10px] font-bold uppercase tracking-wider bg-gray-50 text-slate-500 rounded border border-gray-200 group-hover:border-gray-300 transition-colors'>
                      {spec}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className='text-center mt-12'
          >
            <Link
              to='/product'
              className='group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-black text-sm uppercase tracking-widest rounded-sm shadow-[0_0_40px_rgba(59,130,246,0.4)] hover:shadow-[0_0_60px_rgba(59,130,246,0.6)] transition-all duration-300 hover:-translate-y-1'
            >
              View All Products
              <FiChevronRight className='h-5 w-5 group-hover:translate-x-2 transition-transform' />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ===================== WHY CHOOSE US ===================== */}
      <section className='py-28 bg-gray-50 relative overflow-hidden'>
        {/* Blueprint grid */}
        <div
          className='absolute inset-0 opacity-[0.035]'
          style={{
            backgroundImage:
              'linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}
        />

        {/* Glow orbs */}
        <motion.div
          animate={{ scale: [1, 1.4, 1], opacity: [0.06, 0.15, 0.06] }}
          transition={{ duration: 7, repeat: Infinity }}
          className='absolute -top-40 left-1/4 w-[600px] h-[600px] bg-blue-600 rounded-full blur-[140px] pointer-events-none'
        />
        <motion.div
          animate={{ scale: [1.3, 1, 1.3], opacity: [0.05, 0.12, 0.05] }}
          transition={{ duration: 9, repeat: Infinity, delay: 3 }}
          className='absolute -bottom-40 right-1/4 w-[500px] h-[500px] bg-red-600 rounded-full blur-[140px] pointer-events-none'
        />

        {/* Top + bottom accent lines */}
        <div className='absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/60 to-transparent' />
        <div className='absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-slate-700/60 to-transparent' />

        {/* Floating dots */}
        <div className='absolute inset-0 pointer-events-none'>
          {[...Array(16)].map((_, i) => (
            <motion.div
              key={i}
              className='absolute rounded-full bg-blue-400'
              style={{
                width: '2px',
                height: '2px',
                left: `${6 + i * 5.8}%`,
                top: `${12 + (i % 5) * 17}%`
              }}
              animate={{ y: [0, -35, 0], opacity: [0.15, 0.7, 0.15] }}
              transition={{
                duration: 3 + (i % 4),
                repeat: Infinity,
                delay: i * 0.35
              }}
            />
          ))}
        </div>

        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          {/* ---- Section Header ---- */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className='text-center mb-20'
          >
            {/* Label pill */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className='inline-flex items-center gap-2 px-5 py-2 bg-blue-500/10 border border-blue-500/25 rounded-full mb-7'
            >
              <span className='w-2 h-2 rounded-full bg-blue-400 animate-pulse' />
              <span className='text-xs font-black tracking-[0.35em] uppercase'>
                Trusted By Industry Leaders
              </span>
            </motion.div>

            {/* Heading */}
            <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-black tracking-tight leading-[1.1] mb-5'>
              Why Global Steel Plants{' '}
              <span className='relative inline-block'>
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500'>
                  Choose RM Tech
                </span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className='absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-500 to-cyan-400 origin-left block'
                />
              </span>
            </h2>

            <p className='text-slate-600 text-sm md:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed'>
              Precision engineering, large-scale manufacturing, and trusted
              industrial performance worldwide.
            </p>
          </motion.div>

          {/* ---- Cards Grid ---- */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16'>
            {[
              {
                icon: <FaAward className='text-2xl' />,
                num: '20+',
                numLabel: 'Years',
                title: 'Years Expertise',
                text: 'Trusted engineering excellence in steel rolling mill machinery and industrial systems since 2001.',
                accent: '#3b82f6',
                iconBg: 'from-blue-600 to-blue-500',
                glowColor: 'rgba(59,130,246,0.35)',
                borderHover: 'group-hover:border-blue-500/50',
                topLine: 'from-blue-600 via-blue-400 to-transparent',
                numColor: 'from-blue-400 to-cyan-300'
              },
              {
                icon: <FaIndustry className='text-2xl' />,
                num: '200+',
                numLabel: 'Lines',
                title: 'Production Lines Installed',
                text: 'High-capacity rolling mill systems delivered across domestic and international markets.',
                accent: '#06b6d4',
                iconBg: 'from-cyan-600 to-cyan-500',
                glowColor: 'rgba(6,182,212,0.35)',
                borderHover: 'group-hover:border-cyan-500/50',
                topLine: 'from-cyan-600 via-cyan-400 to-transparent',
                numColor: 'from-cyan-400 to-blue-300'
              },
              {
                icon: <FaTools className='text-2xl' />,
                num: '300K+',
                numLabel: 'Sq Ft',
                title: 'Advanced Manufacturing Facility',
                text: 'Modern fabrication, CNC machining, assembly, and testing infrastructure under one roof.',
                accent: '#6366f1',
                iconBg: 'from-indigo-600 to-indigo-500',
                glowColor: 'rgba(99,102,241,0.35)',
                borderHover: 'group-hover:border-indigo-500/50',
                topLine: 'from-indigo-600 via-indigo-400 to-transparent',
                numColor: 'from-indigo-400 to-blue-300'
              },
              {
                icon: <FaHandshake className='text-2xl' />,
                num: '45+',
                numLabel: 'Countries',
                title: 'Global Client Trust',
                text: 'Reliable engineering solutions for steel plants and industrial clients across multiple countries.',
                accent: '#ef4444',
                iconBg: 'from-red-600 to-red-500',
                glowColor: 'rgba(239,68,68,0.35)',
                borderHover: 'group-hover:border-red-500/50',
                topLine: 'from-red-600 via-red-400 to-transparent',
                numColor: 'from-red-400 to-orange-300'
              }
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: i * 0.13 }}
                whileHover={{
                  y: -14,
                  boxShadow: `0 32px 64px -12px ${card.glowColor}, 0 0 0 1px ${card.accent}40`
                }}
                className={`group relative bg-white border border-gray-200 ${card.borderHover} rounded-2xl p-6 md:p-8 overflow-hidden cursor-pointer transition-all duration-500 shadow-sm`}
              >
                {/* Top glow line — appears on hover */}
                <div
                  className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${card.topLine} opacity-0 group-hover:opacity-100 transition-opacity duration-400`}
                />

                {/* Corner accent */}
                <div className='absolute top-0 right-0 w-16 h-16 overflow-hidden'>
                  <div
                    className={`absolute top-0 right-0 w-[2px] h-8 bg-gradient-to-b ${card.topLine} opacity-0 group-hover:opacity-60 transition-opacity duration-500`}
                  />
                  <div
                    className={`absolute top-0 right-0 h-[2px] w-8 bg-gradient-to-l ${card.topLine} opacity-0 group-hover:opacity-60 transition-opacity duration-500`}
                  />
                </div>

                {/* Watermark number */}
                <div className='absolute -bottom-3 -right-1 text-[7rem] font-black leading-none text-white/[0.025] select-none pointer-events-none'>
                  {i + 1}
                </div>

                {/* Icon box */}
                <motion.div
                  whileHover={{ rotate: [0, -8, 8, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className={`w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br ${card.iconBg} flex items-center justify-center text-white mb-6 md:mb-7 shadow-lg`}
                  style={{ boxShadow: `0 8px 24px -4px ${card.glowColor}` }}
                >
                  {card.icon}
                </motion.div>

                {/* Number */}
                <div className='flex items-end gap-1 mb-1'>
                  <span
                    className={`text-2xl md:text-3xl font-black leading-none text-transparent bg-clip-text bg-gradient-to-r ${card.numColor}`}
                  >
                    {card.num}
                  </span>
                  <span className='text-sm font-bold text-slate-500 mb-1 uppercase tracking-wider'>
                    {card.numLabel}
                  </span>
                </div>

                {/* Title */}
                <h3 className='text-sm md:text-base font-black text-white uppercase tracking-wide leading-snug mb-3 mt-2'>
                  {card.title}
                </h3>

                {/* Divider */}
                <div
                  className={`h-[1px] w-10 bg-gradient-to-r ${card.topLine} mb-4 group-hover:w-full transition-all duration-700`}
                />

                {/* Text */}
                <p className='text-slate-600 text-sm leading-relaxed'>
                  {card.text}
                </p>

                {/* Bottom glow line */}
                <div
                  className='absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-700'
                  style={{
                    background: `linear-gradient(to right, ${card.accent}, transparent)`
                  }}
                />
              </motion.div>
            ))}
          </div>

          {/* ---- CTA Row ---- */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className='flex flex-col sm:flex-row items-center justify-center gap-4'
          >
            <Link
              to='/contact'
              className='group relative inline-flex items-center gap-3 px-6 py-3 md:px-10 md:py-5 bg-gradient-to-r from-red-600 to-red-500 text-white font-black text-xs md:text-sm uppercase tracking-widest overflow-hidden shadow-[0_0_40px_rgba(220,38,38,0.35)] hover:shadow-[0_0_70px_rgba(220,38,38,0.65)] transition-all duration-300 hover:-translate-y-1 border-b-4 border-red-900'
            >
              <span className='relative z-10'>
                Request Factory Consultation
              </span>
              <FiChevronRight className='relative z-10 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300' />
              <div className='absolute inset-0 bg-gradient-to-r from-red-500 to-red-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300' />
            </Link>

            <Link
              to='/about'
              className='inline-flex items-center gap-3 px-6 py-3 md:px-10 md:py-5 bg-transparent text-slate-700 font-bold text-xs md:text-sm uppercase tracking-widest border border-gray-300 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 hover:-translate-y-1'
            >
              Learn About Us
              <FiChevronRight className='h-4 w-4' />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* PREMIUM CTA BANNER */}
      <section className='relative py-24 bg-white overflow-hidden border-t border-gray-200'>
        {/* Steel sparks effect */}
        <div className='absolute inset-0 pointer-events-none'>
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className='absolute w-[1px] h-[60px] bg-gradient-to-b from-orange-400/80 to-transparent'
              style={{ left: `${6 + i * 6.5}%`, top: '-60px' }}
              animate={{ y: [0, '110vh'], opacity: [0, 1, 0] }}
              transition={{
                duration: 1.5 + (i % 3) * 0.5,
                repeat: Infinity,
                delay: i * 0.4,
                ease: 'linear'
              }}
            />
          ))}
        </div>

        {/* Glow lines */}
        <div className='absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent' />
        <div className='absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-red-500/50 to-transparent' />

        <motion.div
          animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className='absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-red-900/10 bg-[length:200%_200%]'
        />

        <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10'>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='bg-gradient-to-b from-gray-50 to-white backdrop-blur-xl border border-gray-200 rounded-2xl p-12 md:p-20 relative overflow-hidden shadow-lg'
          >
            <div
              className='absolute inset-0 opacity-[0.03]'
              style={{
                backgroundImage:
                  'linear-gradient(#60a5fa 1px, transparent 1px), linear-gradient(90deg, #60a5fa 1px, transparent 1px)',
                backgroundSize: '40px 40px'
              }}
            />
            <div className='absolute -inset-full w-full h-full bg-gradient-to-r from-transparent via-white/[0.03] to-transparent skew-x-12 translate-x-[-150%] animate-[shine_8s_infinite]' />

            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className='inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold tracking-[0.3em] uppercase rounded-full mb-8'
            >
              <span className='w-2 h-2 bg-red-400 rounded-full animate-pulse' />
              INDUSTRIAL SOLUTIONS
            </motion.span>

            <h2 className='text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 tracking-tight leading-tight relative z-10'>
              Ready to Upgrade Your{' '}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300'>
                Production
              </span>{' '}
              Capabilities?
            </h2>

            <p className='text-slate-600 text-xs sm:text-sm mb-6 md:mb-8 max-w-2xl mx-auto relative z-10'>
              Partner with RM Tech Engineering for world-class steel plant
              machinery, rolling mill solutions, and turnkey industrial
              projects.
            </p>

            <div className='flex flex-wrap justify-center gap-4 relative z-10'>
              <Link
                to='/contact'
                className='group inline-flex items-center gap-3 px-6 py-3 md:px-10 md:py-5 bg-gradient-to-r from-red-600 to-red-500 text-white font-black text-xs md:text-base lg:text-lg uppercase tracking-widest rounded-sm shadow-[0_0_40px_rgba(220,38,38,0.4)] hover:shadow-[0_0_60px_rgba(220,38,38,0.7)] transition-all duration-300 hover:-translate-y-1 border-b-4 border-red-900'
              >
                Contact Global Sales
                <FiChevronRight className='h-5 w-5 group-hover:translate-x-2 transition-transform' />
              </Link>
              <Link
                to='/product'
                className='inline-flex items-center gap-3 px-6 py-3 md:px-10 md:py-5 bg-transparent text-slate-700 font-bold text-xs md:text-base lg:text-lg uppercase tracking-widest rounded-sm border-2 border-gray-300 hover:border-blue-500 hover:text-blue-600 transition-all duration-300 hover:-translate-y-1'
              >
                View Products
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <style>{`
        @keyframes shine {
          0% { transform: translateX(-150%) skewX(12deg); }
          20% { transform: translateX(150%) skewX(12deg); }
          100% { transform: translateX(150%) skewX(12deg); }
        }
      `}</style>
    </div>
  )
}

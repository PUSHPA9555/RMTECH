import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import productBg from '../assets/images/moter2.png'
import {
  FaCogs, FaCut, FaThermometerHalf, FaTint,
  FaBolt, FaIndustry, FaChartLine, FaGlobe,
  FaShieldAlt, FaRocket, FaArrowRight, FaPhoneAlt, FaWhatsapp
} from 'react-icons/fa'
import { FiChevronRight } from 'react-icons/fi'

const products = [
  {
    id: 1,
    name: 'Rolling Mill Equipment',
    shortDesc: 'High-performance hot & cold rolling mill lines for steel production.',
    fullDesc: 'Complete hot rolled strip mills, section mills, cold rolling lines, and bar mills engineered for maximum output and precision.',
    icon: <FaCogs />,
    image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?q=80&w=800&auto=format&fit=crop',
    tag: 'Core Product',
    tagColor: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    accent: '#3b82f6',
    accentGlow: 'rgba(59,130,246,0.4)',
    iconBg: 'from-blue-600 to-blue-500',
    specs: ['Hot Strip Mill', 'Cold Rolling Line', 'Section Mill', 'Bar & Rod Mill']
  },
  {
    id: 2,
    name: 'Shearing Machines',
    shortDesc: 'High-speed flying shears and crop shears for precise steel cutting.',
    fullDesc: 'Industrial-grade flying shears, crop shears, and dividing shears designed for high-speed, high-accuracy steel bar and strip cutting.',
    icon: <FaCut />,
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop',
    tag: 'Cutting Systems',
    tagColor: 'bg-red-500/20 text-red-400 border-red-500/30',
    accent: '#ef4444',
    accentGlow: 'rgba(239,68,68,0.4)',
    iconBg: 'from-red-600 to-red-500',
    specs: ['Flying Shears', 'Crop Shears', 'Dividing Shears', 'Cold Saws']
  },
  {
    id: 3,
    name: 'Cooling Beds',
    shortDesc: 'Controlled cooling systems for optimal metallurgical properties.',
    fullDesc: 'Walking beam and rake-type cooling beds with precision temperature control for bars, sections, and structural steel products.',
    icon: <FaThermometerHalf />,
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop',
    tag: 'Thermal Systems',
    tagColor: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
    accent: '#06b6d4',
    accentGlow: 'rgba(6,182,212,0.4)',
    iconBg: 'from-cyan-600 to-cyan-500',
    specs: ['Walking Beam', 'Rake Type', 'Chain Transfer', 'Turnover Device']
  },
  {
    id: 4,
    name: 'Hydraulic Systems',
    shortDesc: 'High-pressure hydraulic power units and cylinder assemblies.',
    fullDesc: 'Complete hydraulic power packs, servo hydraulic systems, lubrication units, and high-pressure cylinders for rolling mill applications.',
    icon: <FaTint />,
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop',
    tag: 'Fluid Power',
    tagColor: 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30',
    accent: '#6366f1',
    accentGlow: 'rgba(99,102,241,0.4)',
    iconBg: 'from-indigo-600 to-indigo-500',
    specs: ['Power Packs', 'Servo Systems', 'Lubrication Units', 'Hydraulic Cylinders']
  },
  {
    id: 5,
    name: 'Automation Panels',
    shortDesc: 'Smart PLC-based control systems and industrial automation solutions.',
    fullDesc: 'Advanced PLC/SCADA control panels, electric drive systems, HMI interfaces, and complete automation solutions for steel plant operations.',
    icon: <FaBolt />,
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=800&auto=format&fit=crop',
    tag: 'Automation',
    tagColor: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    accent: '#eab308',
    accentGlow: 'rgba(234,179,8,0.4)',
    iconBg: 'from-yellow-600 to-yellow-500',
    specs: ['PLC Systems', 'SCADA Control', 'HMI Panels', 'Drive Systems']
  },
  {
    id: 6,
    name: 'Heavy Fabrication Systems',
    shortDesc: 'Large-scale structural fabrication and heavy engineering assemblies.',
    fullDesc: 'Custom heavy fabrication including mill housings, gear boxes, pinion stands, coilers, and complete structural steel assemblies for industrial plants.',
    icon: <FaIndustry />,
    image: 'https://images.unsplash.com/photo-1518625066929-e58eb3dcb6cf?q=80&w=800&auto=format&fit=crop',
    tag: 'Fabrication',
    tagColor: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
    accent: '#f97316',
    accentGlow: 'rgba(249,115,22,0.4)',
    iconBg: 'from-orange-600 to-orange-500',
    specs: ['Mill Housings', 'Gear Boxes', 'Pinion Stands', 'Structural Steel']
  }
]

const stats = [
  { icon: <FaChartLine />, value: '500+', label: 'Projects Delivered', color: 'text-blue-400' },
  { icon: <FaGlobe />, value: '45+', label: 'Countries Served', color: 'text-cyan-400' },
  { icon: <FaShieldAlt />, value: '99.5%', label: 'Quality Assurance', color: 'text-green-400' },
  { icon: <FaRocket />, value: '24/7', label: 'Technical Support', color: 'text-red-400' }
]

export default function Product () {
  const [hoveredCard, setHoveredCard] = useState(null)

  return (
    <div className='min-h-screen bg-white text-slate-800 font-sans'>

      {/* ── HERO: full 16:9 image, no crop ── */}
      <section className='relative w-full bg-black min-h-[500px] md:min-h-[600px] lg:min-h-screen'>

        {/* Background image — full 16:9, no crop */}
        <img
          src={productBg}
          alt='Product Hero'
          className='absolute inset-0 w-full h-full object-cover object-center'
        />

        {/* Overlays */}
        <div className='absolute inset-0 bg-gradient-to-r from-black/20 via-black/10 to-black/10' />
        <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30' />

        {/* Blueprint grid */}
        <div className='absolute inset-0 opacity-[0.04]' style={{ backgroundImage: 'linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)', backgroundSize: '65px 65px' }} />

        {/* Left accent */}
        <div className='absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-transparent via-red-500/70 to-transparent' />

        {/* Content */}
        <div className='absolute inset-0 z-10 flex items-center py-20 md:py-0'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full'>
            <div className='max-w-2xl'>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
                className='inline-flex items-center gap-2 px-4 py-1.5 bg-blue-500/15 border border-blue-400/30 rounded-full mb-5'
              >
                <span className='w-2 h-2 rounded-full bg-blue-400 animate-pulse' />
                <span className='text-xs font-black tracking-[0.35em] text-blue-300 uppercase'>Industrial Product Solutions</span>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
                className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-white leading-[1.05] uppercase mb-3 md:mb-4'
              >
                Our Industrial{' '}
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500'>
                  Product Solutions
                </span>
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }}
                className='text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed mb-6 md:mb-8'
              >
                Precision-engineered steel plant machinery, rolling mill equipment, and turnkey industrial systems — built for global performance standards.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
                className='flex flex-wrap gap-4'
              >
                <Link to='/contact'
                  className='group inline-flex items-center gap-3 px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-red-600 to-red-500 text-white font-black text-xs md:text-sm uppercase tracking-widest shadow-[0_0_30px_rgba(220,38,38,0.4)] hover:shadow-[0_0_60px_rgba(220,38,38,0.7)] transition-all duration-300 hover:-translate-y-1 border-b-4 border-red-900'
                >
                  Get a Quote
                  <FiChevronRight className='h-5 w-5 group-hover:translate-x-2 transition-transform' />
                </Link>
                <a href='https://api.whatsapp.com/send?phone=916395764942' target='_blank' rel='noreferrer'
                  className='inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs md:text-sm font-bold uppercase tracking-widest hover:bg-white/20 transition-all duration-300'
                >
                  <FaWhatsapp className='text-lg' /> WhatsApp
                </a>
              </motion.div>

            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className='absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent' />

      </section>

      {/* ── STATS BAR ── */}
      <section className='relative border-y border-gray-200'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-200'>
            {stats.map((stat, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className='flex flex-col items-center md:items-start px-5 py-7 group hover:bg-blue-50 transition-colors duration-300'
              >
                <span className={`text-xl md:text-2xl mb-3 ${stat.color}`}>{stat.icon}</span>
                <div className='text-2xl md:text-3xl font-black text-slate-800 mb-1'>{stat.value}</div>
                <div className='text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-widest'>{stat.label}</div>
                <div className='mt-3 h-[2px] w-0 group-hover:w-10 bg-gradient-to-r from-blue-500 to-transparent transition-all duration-500' />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCTS GRID ── */}
      <section className='py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className='text-center mb-12'
          >
            <div className='inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 border border-blue-100 rounded-full mb-4'>
              <span className='w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse' />
              <span className='text-[10px] font-black tracking-[0.35em] text-blue-600 uppercase'>6 Product Categories</span>
            </div>
            <h2 className='text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-3'>
              Explore Our{' '}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500'>
                Product Range
              </span>
            </h2>
            <p className='text-slate-500 max-w-xl mx-auto text-xs md:text-sm'>
              Every product is engineered to international standards for steel plants, rolling mills, and heavy industrial applications.
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {products.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                onHoverStart={() => setHoveredCard(product.id)}
                onHoverEnd={() => setHoveredCard(null)}
                className='group relative bg-white border border-gray-200 rounded-2xl overflow-hidden cursor-pointer transition-all duration-400'
                style={{
                  boxShadow: hoveredCard === product.id
                    ? `0 20px 40px -10px ${product.accentGlow}`
                    : '0 2px 12px -2px rgba(0,0,0,0.08)'
                }}
              >
                {/* Top accent line */}
                <div className='absolute top-0 left-0 right-0 h-[2px] transition-opacity duration-300'
                  style={{ background: `linear-gradient(to right, ${product.accent}, transparent)`, opacity: hoveredCard === product.id ? 1 : 0 }}
                />

                {/* Image */}
                <div className='relative h-48 overflow-hidden'>
                  <motion.div
                    animate={{ scale: hoveredCard === product.id ? 1.08 : 1 }}
                    transition={{ duration: 0.5 }}
                    className='w-full h-full bg-cover bg-center'
                    style={{ backgroundImage: `url(${product.image})` }}
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-white/80 to-transparent' />
                  <span className={`absolute top-3 left-3 px-3 py-1 text-xs font-black uppercase tracking-widest border rounded-full ${product.tagColor}`}>
                    {product.tag}
                  </span>
                  <div className={`absolute top-3 right-3 w-9 h-9 rounded-xl bg-gradient-to-br ${product.iconBg} flex items-center justify-center text-white text-base shadow-md`}>
                    {product.icon}
                  </div>
                </div>

                {/* Content */}
                <div className='p-5'>
                  <h3 className='text-xs md:text-sm font-black uppercase tracking-wide mb-2 transition-colors duration-300'
                    style={{ color: hoveredCard === product.id ? product.accent : '#0f172a' }}
                  >
                    {product.name}
                  </h3>

                  <div className='h-[2px] mb-3 transition-all duration-500 rounded-full'
                    style={{ width: hoveredCard === product.id ? '100%' : '32px', background: `linear-gradient(to right, ${product.accent}, transparent)` }}
                  />

                  <p className='text-slate-500 text-xs leading-relaxed mb-4'>
                    {hoveredCard === product.id ? product.fullDesc : product.shortDesc}
                  </p>

                  <div className='flex flex-wrap gap-1.5 mb-4'>
                    {product.specs.map((spec, si) => (
                      <span key={si} className='px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded border transition-all duration-300'
                        style={{
                          borderColor: hoveredCard === product.id ? `${product.accent}40` : '#e2e8f0',
                          color: hoveredCard === product.id ? product.accent : '#94a3b8',
                          background: hoveredCard === product.id ? `${product.accent}08` : 'transparent'
                        }}
                      >{spec}</span>
                    ))}
                  </div>

                  <div className='flex items-center justify-between'>
                    <Link to='/contact' className='inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider transition-colors duration-300'
                      style={{ color: hoveredCard === product.id ? product.accent : '#94a3b8' }}
                    >
                      Get Quote <FaArrowRight className='text-[10px]' />
                    </Link>
                    <a href='https://api.whatsapp.com/send?phone=916395764942' target='_blank' rel='noreferrer'
                      className='flex items-center gap-1 text-xs font-bold text-green-500/60 hover:text-green-500 transition-colors'
                    >
                      <FaWhatsapp /> Enquire
                    </a>
                  </div>
                </div>

                {/* Bottom line */}
                <div className='absolute bottom-0 left-0 h-[2px] transition-all duration-500'
                  style={{ width: hoveredCard === product.id ? '100%' : '0%', background: `linear-gradient(to right, ${product.accent}, transparent)` }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className='py-14 bg-gray-50 border-t border-gray-200'>
        <div className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className='bg-white border border-gray-200 rounded-2xl p-8 md:p-12 shadow-sm'
          >
            <div className='inline-flex items-center gap-2 px-4 py-1.5 bg-red-50 border border-red-100 rounded-full mb-5'>
              <span className='w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse' />
              <span className='text-[10px] font-black tracking-[0.3em] text-red-500 uppercase'>Custom Engineering Solutions</span>
            </div>
            <h2 className='text-lg md:text-xl lg:text-2xl font-black text-slate-900 mb-3 tracking-tight'>
              Need a <span className='text-blue-600'>Custom Solution</span> for Your Steel Plant?
            </h2>
            <p className='text-slate-500 text-xs md:text-sm mb-6 md:mb-7 max-w-lg mx-auto'>
              Our engineering team designs and manufactures tailored machinery for your specific production requirements.
            </p>
            <div className='flex flex-wrap justify-center gap-3'>
              <Link to='/contact'
                className='group inline-flex items-center gap-2 px-5 py-2.5 md:px-6 md:py-3 bg-gradient-to-r from-red-600 to-red-500 text-white font-black text-[10px] md:text-xs uppercase tracking-widest shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_40px_rgba(220,38,38,0.6)] transition-all duration-300 hover:-translate-y-0.5 border-b-2 border-red-900'
              >
                Request a Quote <FiChevronRight className='h-4 w-4 group-hover:translate-x-1 transition-transform' />
              </Link>
              <a href='tel:+916395764942'
                className='inline-flex items-center gap-2 px-5 py-2.5 md:px-6 md:py-3 bg-gray-100 border border-gray-300 text-slate-700 font-bold text-[10px] md:text-xs uppercase tracking-widest hover:border-blue-500 hover:text-blue-600 transition-all duration-300'
              >
                <FaPhoneAlt className='text-blue-400 text-xs' /> Call Now
              </a>
              <a href='https://api.whatsapp.com/send?phone=916395764942' target='_blank' rel='noreferrer'
                className='inline-flex items-center gap-2 px-5 py-2.5 md:px-6 md:py-3 bg-green-50 border border-green-200 text-green-600 font-bold text-[10px] md:text-xs uppercase tracking-widest hover:bg-green-600 hover:text-white hover:border-green-600 transition-all duration-300'
              >
                <FaWhatsapp /> WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  )
}

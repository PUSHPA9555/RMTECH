import { motion, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import factoryBg from '../assets/images/slider.png'
import { FaIndustry, FaCogs, FaTools, FaWarehouse, FaTruck, FaShieldAlt, FaAward, FaCertificate, FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight, FaHandshake, FaUsers, FaClock } from 'react-icons/fa'
import { FiChevronRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const factoryStats = [
  { icon: <FaIndustry />, value: '300,000', unit: 'm²', label: 'Total Area', color: 'text-blue-400' },
  { icon: <FaCogs />, value: '400+', unit: '', label: 'CNC Machines', color: 'text-red-400' },
  { icon: <FaTools />, value: '400t', unit: '', label: 'Max Lifting', color: 'text-green-400' },
  { icon: <FaWarehouse />, value: '3', unit: '', label: 'Mfg Bases', color: 'text-purple-400' },
  { icon: <FaTruck />, value: '24/7', unit: '', label: 'Operations', color: 'text-yellow-400' },
  { icon: <FaShieldAlt />, value: 'ISO', unit: '', label: 'Certified', color: 'text-cyan-400' }
]

const facilities = [
  {
    title: 'CNC Machining Workshop',
    description: 'Large-scale CNC boring mills, turning centers, and milling machines for processing massive metallurgical components with micron-level precision.',
    specs: ['5-axis CNC', '20m turning dia', '±0.01mm precision'],
    icon: <FaCogs />,
    image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800',
    accent: '#3b82f6'
  },
  {
    title: 'Fabrication Unit',
    description: 'Heavy structural fabrication with advanced welding systems, plasma cutting, and large-scale assembly for mill housings and structural components.',
    specs: ['Heavy welding', 'Plasma cutting', 'Large assembly'],
    icon: <FaTools />,
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800',
    accent: '#ef4444'
  },
  {
    title: 'Welding Shop',
    description: 'Automated and manual welding bays with certified welders for high-integrity joints in pressure vessels, frames, and structural steel.',
    specs: ['MIG/TIG/SAW', 'Certified welders', 'NDT testing'],
    icon: <FaIndustry />,
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800',
    accent: '#f97316'
  },
  {
    title: 'Assembly Area',
    description: 'Dedicated assembly bays with overhead cranes up to 400 tons for complete rolling mill line assembly, testing, and pre-commissioning.',
    specs: ['400t cranes', 'Pre-commissioning', 'Full line assembly'],
    icon: <FaWarehouse />,
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800',
    accent: '#6366f1'
  },
  {
    title: 'Quality Testing Lab',
    description: 'Comprehensive CMM inspection, spectroscopy analysis, non-destructive testing, and load testing for all critical components.',
    specs: ['CMM inspection', 'Spectroscopy', 'NDT & load test'],
    icon: <FaShieldAlt />,
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800',
    accent: '#06b6d4'
  },
  {
    title: 'Dispatch Area',
    description: 'Organized dispatch zone with proper packaging, preservation, and logistics coordination for safe delivery to global destinations.',
    specs: ['Export packing', 'Global logistics', 'Safe delivery'],
    icon: <FaTruck />,
    image: 'https://images.unsplash.com/photo-1518625066929-e58eb3dcb6cf?w=800',
    accent: '#eab308'
  }
]

const certifications = [
  { name: 'ISO 9001:2015', desc: 'Quality Management', icon: <FaCertificate /> },
  { name: 'ISO 14001', desc: 'Environment', icon: <FaCertificate /> },
  { name: 'OHSAS 18001', desc: 'Health & Safety', icon: <FaAward /> },
  { name: 'CE Marking', desc: 'European Standard', icon: <FaAward /> },
  { name: 'ASME', desc: 'Mechanical Eng.', icon: <FaCertificate /> },
  { name: 'API', desc: 'Petroleum Inst.', icon: <FaAward /> }
]

const process = [
  { step: 1, title: 'Design & Engineering', desc: 'CAD/CAM design with 3D modeling', icon: <FaCogs />, time: '2–4 weeks' },
  { step: 2, title: 'Material Sourcing', desc: 'Premium certified raw materials', icon: <FaWarehouse />, time: '1–2 weeks' },
  { step: 3, title: 'Precision Machining', desc: '5-axis CNC with micron accuracy', icon: <FaTools />, time: '3–6 weeks' },
  { step: 4, title: 'Assembly & Testing', desc: 'Full assembly and quality testing', icon: <FaShieldAlt />, time: '2–4 weeks' },
  { step: 5, title: 'Delivery & Support', desc: 'Global logistics + installation', icon: <FaTruck />, time: '1–2 weeks' }
]

const galleryImages = [
  { url: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800', title: 'CNC Machining Center' },
  { url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800', title: 'Assembly Line' },
  { url: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800', title: 'Welding Shop' },
  { url: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800', title: 'Quality Control' },
  { url: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800', title: 'Fabrication Unit' },
  { url: 'https://images.unsplash.com/photo-1518625066929-e58eb3dcb6cf?w=800', title: 'Dispatch Area' }
]

const SectionHeader = ({ label, title, highlight, sub }) => (
  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
    className='text-center mb-10'
  >
    <div className='inline-flex items-center gap-2 px-4 py-1.5 bg-blue-500/10 border border-blue-500/25 rounded-full mb-4'>
      <span className='w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse' />
      <span className='text-[10px] font-black tracking-[0.3em] text-blue-400 uppercase'>{label}</span>
    </div>
    <h2 className='text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-2'>
      {title} <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300'>{highlight}</span>
    </h2>
    {sub && <p className='text-slate-600 text-sm max-w-xl mx-auto'>{sub}</p>}
    <div className='h-[2px] w-12 bg-gradient-to-r from-blue-500 to-red-500 rounded-full mx-auto mt-4' />
  </motion.div>
)

export default function Factory () {
  const [currentImg, setCurrentImg] = useState(0)

  return (
    <div className='min-h-screen bg-white text-slate-800'>

      {/* ── HERO ── */}
      <section className='relative w-full bg-black' style={{ paddingTop: '56.25%' }}>
        <img src={factoryBg} alt='Factory Hero' className='absolute inset-0 w-full h-full' style={{ objectFit: 'fill' }} />
        <div className='absolute inset-0 bg-gradient-to-r from-black/20 via-black/10 to-black/10' />
        <div className='absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/35' />
        <div className='absolute inset-0 opacity-[0.04]' style={{ backgroundImage: 'linear-gradient(#3b82f6 1px,transparent 1px),linear-gradient(90deg,#3b82f6 1px,transparent 1px)', backgroundSize: '65px 65px' }} />
        <div className='absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-transparent via-red-500/70 to-transparent' />
        <div className='absolute inset-0 z-10 flex items-center'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full'>
            <div className='max-w-2xl'>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className='inline-flex items-center gap-2 px-4 py-1.5 bg-blue-500/15 border border-blue-400/30 rounded-full mb-5'
            >
              <span className='w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse' />
              <span className='text-[10px] font-black tracking-[0.35em] text-blue-300 uppercase'>World-Class Manufacturing • India</span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
              className='text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-[1.1] uppercase mb-4'
            >
              Built for Heavy{' '}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500'>
                Industrial Performance
              </span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }}
              className='text-sm text-slate-300 max-w-xl leading-relaxed mb-8'
            >
              State-of-the-art manufacturing facility with 400+ CNC machines, heavy fabrication, welding, assembly, and quality testing — all under one roof.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}
              className='flex flex-wrap gap-3'
            >
              <Link to='/contact'
                className='group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 to-red-500 text-white font-black text-xs uppercase tracking-widest shadow-[0_0_25px_rgba(220,38,38,0.4)] hover:shadow-[0_0_45px_rgba(220,38,38,0.7)] transition-all duration-300 hover:-translate-y-0.5 border-b-2 border-red-900'
              >
                Schedule Factory Tour
                <FiChevronRight className='h-4 w-4 group-hover:translate-x-1 transition-transform' />
              </Link>
              <Link to='/product'
                className='inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold text-xs uppercase tracking-widest hover:bg-white/20 transition-all duration-300'
              >
                View Products
              </Link>
            </motion.div>
            </div>
          </div>
        </div>
        <div className='absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent' />
      </section>

      {/* ── STATS BAR ── */}
      <section className='relative border-y border-gray-200'>
        <div className='absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent' />
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-3 md:grid-cols-6 divide-x divide-gray-200'>
            {factoryStats.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}
                className='flex flex-col items-center px-3 py-6 group hover:bg-blue-50 transition-colors duration-300'
              >
                <span className={`text-lg mb-1.5 ${s.color}`}>{s.icon}</span>
                <div className='text-xl font-black text-slate-900 leading-none'>{s.value}{s.unit}</div>
                <div className='text-[10px] font-bold text-slate-500 uppercase tracking-wider mt-1'>{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FACILITIES GRID ── */}
      <section className='py-16 relative bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          <SectionHeader label='Our Infrastructure' title='Factory' highlight='Capabilities' sub='6 specialized zones engineered for precision manufacturing and heavy industrial production.' />

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {facilities.map((f, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.08 }}
                whileHover={{ y: -6, boxShadow: `0 20px 40px -10px ${f.accent}40` }}
                className='group bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-400 shadow-sm'
              >
                {/* Image */}
                <div className='relative h-40 overflow-hidden'>
                  <motion.div animate={{ scale: 1 }} whileHover={{ scale: 1.08 }} transition={{ duration: 0.5 }}
                    className='w-full h-full bg-cover bg-center'
                    style={{ backgroundImage: `url(${f.image})` }}
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent' />
                  <div className='absolute top-3 left-3 w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm'
                    style={{ background: `linear-gradient(135deg, ${f.accent}cc, ${f.accent}88)` }}
                  >
                    {f.icon}
                  </div>
                </div>

                {/* Content */}
                <div className='p-5'>
                  <div className='h-[2px] w-8 rounded-full mb-3 group-hover:w-full transition-all duration-500'
                    style={{ background: `linear-gradient(to right, ${f.accent}, transparent)` }}
                  />
                  <h3 className='text-sm font-black text-slate-900 uppercase tracking-wide mb-2'>{f.title}</h3>
                  <p className='text-slate-600 text-xs leading-relaxed mb-3'>{f.description}</p>
                  <div className='flex flex-wrap gap-1.5'>
                    {f.specs.map((sp, si) => (
                      <span key={si} className='px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded border border-slate-700/50 text-slate-500 group-hover:border-opacity-60 transition-colors'
                        style={{ borderColor: `${f.accent}30` }}
                      >{sp}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section className='py-14 relative border-t border-gray-200 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <SectionHeader label='Visual Tour' title='Factory' highlight='Gallery' sub='A glimpse inside our world-class manufacturing facility.' />

          <div className='relative rounded-xl overflow-hidden h-72 md:h-96 mb-4'>
            <AnimatePresence mode='wait'>
              <motion.img key={currentImg} src={galleryImages[currentImg].url} alt={galleryImages[currentImg].title}
                initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}
                className='w-full h-full object-cover'
              />
            </AnimatePresence>
            <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent' />
            <div className='absolute bottom-4 left-5'>
              <span className='text-sm font-bold text-white'>{galleryImages[currentImg].title}</span>
            </div>
            <button onClick={() => setCurrentImg(p => (p - 1 + galleryImages.length) % galleryImages.length)}
              className='absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-black/40 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-black/60 transition-all'
            ><FaChevronLeft className='text-xs' /></button>
            <button onClick={() => setCurrentImg(p => (p + 1) % galleryImages.length)}
              className='absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-black/40 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-black/60 transition-all'
            ><FaChevronRight className='text-xs' /></button>
          </div>

          <div className='flex justify-center gap-2'>
            {galleryImages.map((img, i) => (
              <button key={i} onClick={() => setCurrentImg(i)}
                className={`w-14 h-10 rounded overflow-hidden border-2 transition-all ${i === currentImg ? 'border-blue-500 opacity-100' : 'border-transparent opacity-40 hover:opacity-70'}`}
              >
                <img src={img.url} alt={img.title} className='w-full h-full object-cover' />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS TIMELINE ── */}
      <section className='py-14 relative border-t border-gray-200 bg-white'>
        <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
          <SectionHeader label='How We Work' title='Manufacturing' highlight='Process' sub='From design to delivery — our streamlined 5-step production workflow.' />

          <div className='relative'>
            <div className='absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-red-500 to-blue-500 md:-translate-x-1/2' />
            <div className='space-y-6'>
              {process.map((p, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
                  className={`flex items-center gap-6 md:gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} pl-14 md:pl-0`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className='bg-white border border-gray-200 rounded-xl p-4 inline-block hover:border-blue-400 transition-colors duration-300 shadow-sm'>
                      <div className='flex items-center gap-3 mb-2'>
                        <div className='w-8 h-8 bg-blue-500/15 rounded-lg flex items-center justify-center text-blue-400 text-sm'>{p.icon}</div>
                        <div>
                          <div className='text-[10px] text-blue-400 font-black uppercase tracking-wider'>Step {p.step}</div>
                          <h3 className='text-sm font-black text-slate-900'>{p.title}</h3>
                        </div>
                      </div>
                      <p className='text-slate-600 text-xs mb-2'>{p.desc}</p>
                      <div className='flex items-center gap-1 text-[10px] text-slate-500'>
                        <FaClock className='text-[9px]' /><span>{p.time}</span>
                      </div>
                    </div>
                  </div>
                  <div className='hidden md:flex w-8 h-8 bg-gradient-to-br from-blue-500 to-red-500 rounded-full items-center justify-center text-white text-xs font-black shadow-lg z-10 flex-shrink-0'>{p.step}</div>
                  <div className='flex-1 hidden md:block' />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS ── */}
      <section className='py-14 relative border-t border-gray-200 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <SectionHeader label='Quality Standards' title='Certifications &' highlight='Awards' />
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4'>
            {certifications.map((c, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}
                whileHover={{ y: -4, boxShadow: '0 12px 30px -8px rgba(59,130,246,0.3)' }}
                className='bg-white border border-gray-200 rounded-xl p-4 text-center hover:border-blue-400 transition-all duration-300 shadow-sm'
              >
                <div className='text-blue-400 text-2xl mb-2 mx-auto w-fit'>{c.icon}</div>
                <div className='text-xs font-black text-slate-900 mb-1'>{c.name}</div>
                <div className='text-[10px] text-slate-500'>{c.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className='py-14 relative border-t border-gray-200 bg-white'>
        <div className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className='bg-gray-50 border border-gray-200 rounded-2xl p-8 md:p-12 relative overflow-hidden shadow-sm'
          >
            <div className='absolute inset-0 opacity-[0.03]' style={{ backgroundImage: 'linear-gradient(#60a5fa 1px,transparent 1px),linear-gradient(90deg,#60a5fa 1px,transparent 1px)', backgroundSize: '40px 40px' }} />
            <div className='inline-flex items-center gap-2 px-3 py-1.5 bg-red-500/10 border border-red-500/30 rounded-full mb-5'>
              <span className='w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse' />
              <span className='text-[10px] font-black tracking-[0.3em] text-red-400 uppercase'>Visit Our Facility</span>
            </div>
            <h2 className='text-xl md:text-2xl font-black text-slate-900 mb-3 tracking-tight'>
              Ready to <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300'>Visit</span> Our Factory?
            </h2>
            <p className='text-slate-600 text-sm mb-7 max-w-lg mx-auto'>
              Schedule a factory tour and see our manufacturing capabilities firsthand. Our team will walk you through every facility.
            </p>
            <div className='flex flex-wrap justify-center gap-3'>
              <Link to='/contact'
                className='group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 to-red-500 text-white font-black text-xs uppercase tracking-widest shadow-[0_0_25px_rgba(220,38,38,0.4)] hover:shadow-[0_0_45px_rgba(220,38,38,0.7)] transition-all duration-300 hover:-translate-y-0.5 border-b-2 border-red-900'
              >
                <FaHandshake /> Schedule a Tour
              </Link>
              <Link to='/contact'
                className='inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 text-slate-700 font-bold text-xs uppercase tracking-widest hover:border-blue-500 hover:text-blue-600 transition-all duration-300'
              >
                <FaUsers className='text-xs' /> Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  )
}

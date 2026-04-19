import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import rdBg from '../assets/images/R&D.png'
import { FaFlask, FaLaptopCode, FaChartLine, FaGlobe, FaRocket, FaHandshake, FaBook, FaLightbulb, FaCertificate, FaUsers } from 'react-icons/fa'
import { FiChevronRight } from 'react-icons/fi'

const researchAreas = [
  { title: 'Advanced Metallurgy', desc: 'Pioneering research in steel composition, heat treatment processes, and material properties optimization for next-generation steel products.', icon: <FaFlask />, stats: '50+ Research Projects', color: 'bg-blue-50 text-blue-600', border: 'border-blue-100' },
  { title: 'Automation & AI', desc: 'Developing intelligent control systems, machine learning algorithms, and predictive maintenance solutions for steel manufacturing.', icon: <FaLaptopCode />, stats: '30+ Patents Filed', color: 'bg-purple-50 text-purple-600', border: 'border-purple-100' },
  { title: 'Process Optimization', desc: 'Continuous improvement of manufacturing processes through simulation, modeling, and data-driven optimization techniques.', icon: <FaChartLine />, stats: '40% Efficiency Gain', color: 'bg-green-50 text-green-600', border: 'border-green-100' },
  { title: 'Sustainable Manufacturing', desc: 'Research into eco-friendly production methods, energy efficiency, and circular economy principles in steel manufacturing.', icon: <FaGlobe />, stats: '25% Carbon Reduction', color: 'bg-orange-50 text-orange-600', border: 'border-orange-100' }
]

const innovations = [
  { year: '2024', title: 'AI-Powered Quality Control System', desc: 'Revolutionary machine vision system that detects defects with 99.9% accuracy in real-time.', impact: 'Reduced quality issues by 85%', color: 'border-blue-500' },
  { year: '2023', title: 'Energy-Efficient Furnace Design', desc: 'Breakthrough furnace technology that reduces energy consumption by 30%.', impact: 'Annual savings of $2M per unit', color: 'border-cyan-500' },
  { year: '2022', title: 'Smart Rolling Mill Technology', desc: 'IoT-enabled rolling mills with predictive maintenance capabilities.', impact: '99.5% uptime achieved', color: 'border-indigo-500' },
  { year: '2021', title: 'Green Steel Production Process', desc: 'Innovative hydrogen-based steelmaking process reducing carbon emissions.', impact: '50% reduction in CO2 emissions', color: 'border-green-500' }
]

const teamMembers = [
  { name: 'Dr. Rajesh Kumar', position: 'Chief Research Officer', expertise: 'Metallurgical Engineering, 25+ years', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200' },
  { name: 'Dr. Priya Sharma', position: 'Head of Automation', expertise: 'AI/ML, Industrial Automation, 20+ years', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200' },
  { name: 'Dr. Chen Wei', position: 'Materials Science Lead', expertise: 'Advanced Materials, Heat Treatment, 18+ years', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200' },
  { name: 'Dr. Sarah Johnson', position: 'Process Engineering Head', expertise: 'Manufacturing Processes, Optimization, 22+ years', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200' }
]

const patents = [
  { title: 'Intelligent Steel Quality Prediction System', number: 'US Patent 11,234,567', year: '2024' },
  { title: 'Energy-Efficient Continuous Casting Method', number: 'US Patent 10,987,654', year: '2023' },
  { title: 'Smart Rolling Mill Control Algorithm', number: 'US Patent 10,543,210', year: '2022' },
  { title: 'Green Steel Production Process', number: 'US Patent 10,123,456', year: '2021' }
]

const collaborations = [
  { name: 'MIT Steel Research Lab', country: 'USA', focus: 'Advanced Materials' },
  { name: 'Technical University of Munich', country: 'Germany', focus: 'Automation' },
  { name: 'IIT Bombay', country: 'India', focus: 'Process Engineering' },
  { name: 'University of Tokyo', country: 'Japan', focus: 'AI & Machine Learning' }
]

const SectionHeader = ({ label, title, highlight, sub }) => (
  <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.5 }}
    className='text-center mb-10'
  >
    <div className='inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 border border-blue-100 rounded-full mb-4'>
      <span className='w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse' />
      <span className='text-[10px] font-black tracking-[0.3em] text-blue-600 uppercase'>{label}</span>
    </div>
    <h2 className='text-2xl sm:text-3xl font-black text-gray-800 tracking-tight mb-2'>
      {title} <span className='text-blue-600'>{highlight}</span>
    </h2>
    {sub && <p className='text-gray-500 text-sm max-w-xl mx-auto'>{sub}</p>}
    <div className='h-[3px] w-10 bg-gradient-to-r from-blue-500 to-red-500 rounded-full mx-auto mt-4' />
  </motion.div>
)

export default function RDCenter () {
  return (
    <div className='min-h-screen bg-gray-50 text-gray-800'>

      {/* ── HERO ── */}
      <section className='relative w-full bg-black' style={{ paddingTop: '56.25%' }}>
        <img src={rdBg} alt='R&D Hero' className='absolute inset-0 w-full h-full' style={{ objectFit: 'fill' }} />
        <div className='absolute inset-0 bg-gradient-to-r from-black/20 via-black/10 to-black/10' />
        <div className='absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/35' />
        <div className='absolute inset-0 opacity-[0.04]' style={{ backgroundImage: 'linear-gradient(#3b82f6 1px,transparent 1px),linear-gradient(90deg,#3b82f6 1px,transparent 1px)', backgroundSize: '55px 55px' }} />
        <div className='absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-transparent via-red-500/70 to-transparent' />
        <div className='absolute inset-0 z-10 flex items-center'>
          <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full'>
            <div className='max-w-2xl'>
              <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.5 }}
                className='inline-flex items-center gap-2 px-4 py-1.5 bg-blue-500/15 border border-blue-400/30 rounded-full mb-5'
              >
                <span className='w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse' />
                <span className='text-[10px] font-black tracking-[0.35em] text-blue-300 uppercase'>Innovation • Research • Excellence</span>
              </motion.div>
              <motion.h1 initial={{ opacity:0, y:25 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.7, delay:0.1 }}
                className='text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight mb-4'
              >
                R&D <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300'>Center</span>
              </motion.h1>
              <motion.p initial={{ opacity:0, y:15 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.25 }}
                className='text-sm text-slate-300 max-w-xl mb-8'
              >
                Pioneering the future of steel manufacturing through cutting-edge research, innovative technologies, and continuous improvement.
              </motion.p>
              <motion.div initial={{ opacity:0, y:15 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.5, delay:0.4 }}
                className='flex flex-wrap gap-6'
              >
                {[{ v:'150+', l:'Research Projects' }, { v:'50+', l:'Patents Filed' }, { v:'200+', l:'Publications' }, { v:'30+', l:'Global Partners' }].map((s,i) => (
                  <div key={i} className='text-center'>
                    <div className='text-2xl font-black text-white'>{s.v}</div>
                    <div className='text-xs text-slate-400 uppercase tracking-wider'>{s.l}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
        <div className='absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent' />
      </section>

      {/* ── RESEARCH AREAS ── */}
      <section className='py-14 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <SectionHeader label='Our Focus' title='Research' highlight='Areas' sub='Exploring new frontiers in steel manufacturing technology' />
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
            {researchAreas.map((area, i) => (
              <motion.div key={i}
                initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.5, delay:i*0.1 }}
                whileHover={{ y:-5, boxShadow:'0 12px 30px -8px rgba(0,0,0,0.1)' }}
                className={`bg-white border ${area.border} rounded-2xl p-6 transition-all duration-300`}
              >
                <div className={`w-12 h-12 ${area.color} rounded-xl flex items-center justify-center text-xl mb-4`}>{area.icon}</div>
                <h3 className='text-sm font-black text-gray-800 mb-2'>{area.title}</h3>
                <p className='text-gray-500 text-xs leading-relaxed mb-3'>{area.desc}</p>
                <span className='text-xs font-bold text-blue-600'>{area.stats}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INNOVATION TIMELINE ── */}
      <section className='py-14 bg-gray-50 border-y border-gray-100'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <SectionHeader label='Key Breakthroughs' title='Innovation' highlight='Timeline' sub='Milestones that have shaped the steel industry' />
          <div className='relative'>
            <div className='absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-400 via-red-400 to-blue-400 md:-translate-x-1/2' />
            <div className='space-y-6'>
              {innovations.map((item, i) => (
                <motion.div key={i}
                  initial={{ opacity:0, x: i%2===0 ? -30 : 30 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:0.5, delay:i*0.1 }}
                  className={`flex items-center gap-6 ${i%2===0 ? 'md:flex-row' : 'md:flex-row-reverse'} pl-14 md:pl-0`}
                >
                  <div className={`flex-1 ${i%2===0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className={`bg-white border-l-4 ${item.color} rounded-xl p-5 inline-block shadow-sm hover:shadow-md transition-shadow`}>
                      <span className='text-xs font-black text-red-500 uppercase tracking-wider'>{item.year}</span>
                      <h3 className='text-sm font-black text-gray-800 mt-1 mb-1'>{item.title}</h3>
                      <p className='text-gray-500 text-xs mb-2'>{item.desc}</p>
                      <span className='text-xs font-bold text-green-600'>{item.impact}</span>
                    </div>
                  </div>
                  <div className='hidden md:flex w-8 h-8 bg-gradient-to-br from-blue-500 to-red-500 rounded-full items-center justify-center text-white z-10 flex-shrink-0'>
                    <FaRocket className='text-xs' />
                  </div>
                  <div className='flex-1 hidden md:block' />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className='py-14 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <SectionHeader label='Our Experts' title='Research' highlight='Team' sub='World-class experts driving innovation in steel manufacturing' />
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5'>
            {teamMembers.map((m, i) => (
              <motion.div key={i}
                initial={{ opacity:0, y:25 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.5, delay:i*0.1 }}
                whileHover={{ y:-4 }}
                className='bg-white border border-gray-200 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300'
              >
                <div className='relative mb-4'>
                  <img src={m.image} alt={m.name} className='w-20 h-20 rounded-full mx-auto object-cover border-3 border-blue-100' />
                  <div className='absolute -bottom-1 left-1/2 -translate-x-1/2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white'>
                    <FaUsers className='text-[9px]' />
                  </div>
                </div>
                <h3 className='text-sm font-black text-gray-800 mb-1'>{m.name}</h3>
                <p className='text-blue-600 text-xs font-semibold mb-2'>{m.position}</p>
                <p className='text-gray-400 text-xs'>{m.expertise}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PATENTS ── */}
      <section className='py-14 bg-gray-50 border-y border-gray-100'>
        <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
          <SectionHeader label='Intellectual Property' title='Patents &' highlight='Publications' sub='Driving industry advancement through innovation' />
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {patents.map((p, i) => (
              <motion.div key={i}
                initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.4, delay:i*0.1 }}
                className='bg-white border border-gray-200 rounded-xl p-5 flex items-start gap-4 hover:shadow-md transition-all duration-300 group'
              >
                <div className='w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-500 flex-shrink-0'><FaCertificate /></div>
                <div>
                  <span className='px-2 py-0.5 bg-red-50 text-red-500 text-[10px] font-bold rounded-full'>{p.year}</span>
                  <h3 className='text-sm font-bold text-gray-800 mt-1 mb-1 group-hover:text-blue-600 transition-colors'>{p.title}</h3>
                  <p className='text-gray-400 text-xs'>{p.number}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COLLABORATIONS ── */}
      <section className='py-14 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <SectionHeader label='Global Network' title='Research' highlight='Collaborations' sub='Partnering with leading institutions worldwide' />
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5'>
            {collaborations.map((c, i) => (
              <motion.div key={i}
                initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.4, delay:i*0.1 }}
                whileHover={{ y:-4 }}
                className='bg-white border border-gray-200 rounded-2xl p-6 text-center hover:shadow-lg hover:border-blue-200 transition-all duration-300'
              >
                <div className='w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-4 text-blue-500 text-xl'><FaHandshake /></div>
                <h3 className='text-sm font-black text-gray-800 mb-1'>{c.name}</h3>
                <p className='text-gray-400 text-xs mb-2'>{c.country}</p>
                <span className='px-3 py-1 bg-blue-50 text-blue-600 text-xs rounded-full border border-blue-100'>{c.focus}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className='py-14 bg-gray-50 border-t border-gray-100'>
        <div className='max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <div className='w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-5 text-blue-500 text-xl'><FaLightbulb /></div>
          <h2 className='text-xl font-black text-gray-800 mb-3'>Collaborate with <span className='text-red-500'>Our R&D Team</span></h2>
          <p className='text-gray-500 text-sm mb-7 max-w-md mx-auto'>Partner with us to develop next-generation steel manufacturing technologies</p>
          <div className='flex flex-wrap justify-center gap-3'>
            <Link to='/contact'
              className='group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 to-red-500 text-white font-black text-xs uppercase tracking-widest shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_35px_rgba(220,38,38,0.6)] transition-all duration-300 hover:-translate-y-0.5 border-b-2 border-red-900'
            >
              <FaHandshake /> Start Collaboration
              <FiChevronRight className='h-3.5 w-3.5 group-hover:translate-x-1 transition-transform' />
            </Link>
            <button className='inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 text-gray-700 font-bold text-xs uppercase tracking-widest hover:border-blue-500 hover:text-blue-600 transition-all duration-300'>
              <FaBook /> View Publications
            </button>
          </div>
        </div>
      </section>

    </div>
  )
}

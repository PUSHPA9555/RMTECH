import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import aboutImg from '../assets/images/about.png'
import storyImg from '../assets/images/slider.png'
import {
  FaIndustry,
  FaGlobe,
  FaUsers,
  FaAward,
  FaRocket,
  FaChartLine,
  FaShieldAlt,
  FaCogs,
  FaLightbulb,
  FaHandshake
} from 'react-icons/fa'

const stats = [
  {
    icon: <FaIndustry />,
    value: '2001',
    label: 'Year Established',
    detail: 'Over 2 Decades of Excellence'
  },
  {
    icon: <FaUsers />,
    value: '700+',
    label: 'Expert Team',
    detail: '150+ R&D Engineers'
  },
  {
    icon: <FaGlobe />,
    value: '45+',
    label: 'Countries',
    detail: 'Global Presence'
  },
  {
    icon: <FaAward />,
    value: '500+',
    label: 'Projects',
    detail: 'Delivered Successfully'
  },
  {
    icon: <FaChartLine />,
    value: 'CNY 450M',
    label: 'Registered Capital',
    detail: 'Strong Financial Base'
  },
  {
    icon: <FaRocket />,
    value: '200+',
    label: 'Production Lines',
    detail: 'Turnkey Solutions'
  }
]

const milestones = [
  {
    year: '2001',
    title: 'Foundation',
    desc: 'RM Tech & Engineering established inIndia'
  },
  {
    year: '2005',
    title: 'First Major Project',
    desc: 'Completed first complete rolling mill production line'
  },
  {
    year: '2010',
    title: 'Global Expansion',
    desc: 'Expanded operations to 20+ countries worldwide'
  },
  {
    year: '2015',
    title: 'R&D Excellence',
    desc: 'Established national-level enterprise technology center'
  },
  {
    year: '2020',
    title: 'Industry Leader',
    desc: 'Became trusted partner for 45% of global top 100 steel enterprises'
  },
  {
    year: '2026',
    title: 'Innovation Continues',
    desc: 'Pioneering smart manufacturing and Industry 4.0 solutions'
  }
]

const capabilities = [
  {
    icon: <FaCogs />,
    title: 'Advanced Manufacturing',
    desc: '300,000 m² facility with 400+ CNC machines'
  },
  {
    icon: <FaLightbulb />,
    title: 'Innovation Hub',
    desc: 'State-of-the-art R&D with academician workstations'
  },
  {
    icon: <FaShieldAlt />,
    title: 'Quality Assurance',
    desc: 'ISO certified with rigorous testing protocols'
  },
  {
    icon: <FaHandshake />,
    title: 'Global Support',
    desc: '24/7 technical assistance worldwide'
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
}

const cardVariants = {
  hidden: { opacity: 0, rotateY: -90 },
  visible: {
    opacity: 1,
    rotateY: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut'
    }
  }
}

export default function AboutUs () {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

  return (
    <div
      ref={containerRef}
      className='min-h-screen bg-white overflow-hidden'
    >
      {/* Animated Background Particles */}
      <div className='fixed inset-0 overflow-hidden pointer-events-none'>
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className='absolute w-1 h-1 bg-blue-500/30 rounded-full'
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      {/* Hero Section with Parallax */}
      <section className='relative w-full bg-black min-h-[500px] md:min-h-[600px] lg:min-h-screen'>
        <img src={aboutImg} alt='About Hero' className='absolute inset-0 w-full h-full object-cover object-center' />
        <div className='absolute inset-0 bg-gradient-to-r from-black/20 via-black/10 to-black/10' />
        <div className='absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/35' />
        <div className='absolute inset-0 opacity-[0.04]' style={{ backgroundImage: 'linear-gradient(#3b82f6 1px,transparent 1px),linear-gradient(90deg,#3b82f6 1px,transparent 1px)', backgroundSize: '65px 65px' }} />
        <div className='absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-transparent via-red-500/70 to-transparent' />
        <div className='absolute inset-0 z-10 flex items-center py-20 md:py-0'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full'>
            <div className='max-w-2xl'>
              <motion.span className='inline-block px-5 py-2 bg-blue-500/15 border border-blue-400/30 text-white rounded-full text-xs font-bold mb-6'>
                ESTABLISHED 2001 • India
              </motion.span>
              <motion.h1 initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.7, delay:0.1 }}
                className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-4 leading-tight uppercase'
              >
                About <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500'>RM Tech</span>
              </motion.h1>
              <motion.p initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.7, delay:0.3 }}
                className='text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed mb-6 md:mb-8'
              >
                Pioneering the future of metallurgical equipment manufacturing with cutting-edge technology and a relentless commitment to excellence.
              </motion.p>
              <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.5 }}
                className='flex flex-wrap gap-4'
              >
                {stats.slice(0,3).map((stat,i) => (
                  <div key={i} className='bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 md:p-4 min-w-[90px] md:min-w-[110px]'>
                    <div className='text-blue-400 text-lg md:text-xl mb-1'>{stat.icon}</div>
                    <div className='text-lg md:text-xl font-black text-white'>{stat.value}</div>
                    <div className='text-slate-400 text-[10px] md:text-xs'>{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
        <div className='absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent' />
      </section>

      {/* Company Story Section */}
      <section className='py-24 relative bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, margin: '-100px' }}
            className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'
          >
            {/* Left: Image with 3D Effect */}
            <motion.div variants={itemVariants} className='relative'>
              <motion.div
                whileHover={{ rotateY: 10, rotateX: -10 }}
                transition={{ duration: 0.5 }}
                className='relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/30'
                style={{ perspective: '1000px' }}
              >
                <img
                  src={storyImg}
                  alt='RM Tech & Engineering Facility'
                  className='w-full h-[500px] object-cover'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent' />

                {/* Floating Badge */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className='absolute top-6 right-6 bg-red-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg'
                >
                  ISO 9001 Certified
                </motion.div>
              </motion.div>

              {/* Decorative Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className='absolute -top-10 -left-10 w-32 h-32 border-2 border-blue-500/30 rounded-full'
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                className='absolute -bottom-10 -right-10 w-40 h-40 border-2 border-red-500/30 rounded-full'
              />
            </motion.div>

            {/* Right: Content */}
            <motion.div variants={itemVariants} className='space-y-8'>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '100px' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className='h-1 bg-gradient-to-r from-blue-500 to-red-500 rounded-full'
              />

            <h2 className='text-2xl md:text-3xl font-black text-slate-900'>
                Our <span className='text-blue-500'>Story</span>
            </h2>

              <motion.p
                variants={itemVariants}
                className='text-base text-slate-600 leading-relaxed'
              >
                With over 700 employees, including 150 R&D personnel, we have
                established national-level enterprise technology centers,
                provincial and ministerial level enterprise key laboratories,
                and academician workstations.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className='flex flex-wrap gap-4'
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className='bg-blue-500/20 border border-blue-500/50 rounded-xl px-6 py-4'
                >
                  <div className='text-3xl font-black text-blue-600'>700+</div>
                  <div className='text-slate-600'>Employees</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className='bg-red-500/20 border border-red-500/50 rounded-xl px-6 py-4'
                >
                  <div className='text-3xl font-black text-red-600'>150+</div>
                  <div className='text-slate-600'>R&D Experts</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className='bg-green-500/20 border border-green-500/50 rounded-xl px-6 py-4'
                >
                  <div className='text-3xl font-black text-green-600'>
                    603135
                  </div>
                  <div className='text-slate-600'>Stock Code</div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section with Animated Counters */}
      <section className='py-24 relative overflow-hidden bg-gray-50'>
        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <h2 className='text-2xl md:text-3xl font-black text-slate-900 mb-3'>
              Our <span className='text-red-500'>Achievements</span>
            </h2>
            <p className='text-slate-600 text-lg max-w-2xl mx-auto'>
              Numbers that speak volumes about our commitment to excellence
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6'
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.1,
                  rotateY: 10,
                  boxShadow: '0 25px 50px -12px rgba(59, 130, 246, 0.5)'
                }}
                className='bg-white border border-gray-200 rounded-2xl p-6 text-center cursor-pointer transition-all duration-300 shadow-sm'
                style={{ perspective: '1000px' }}
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: 'linear'
                  }}
                  className='text-blue-400 text-4xl mb-4 mx-auto w-fit'
                >
                  {stat.icon}
                </motion.div>
                <div className='text-2xl md:text-3xl font-black text-slate-900 mb-1'>
                  {stat.value}
                </div>
                <div className='text-blue-400 font-bold text-sm mb-1'>
                  {stat.label}
                </div>
                <div className='text-slate-500 text-xs'>{stat.detail}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className='py-24 relative bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <h2 className='text-2xl md:text-3xl font-black text-slate-900 mb-3'>
              Our <span className='text-blue-500'>Journey</span>
            </h2>
            <p className='text-slate-600 text-lg max-w-2xl mx-auto'>
              Two decades of innovation, growth, and global impact
            </p>
          </motion.div>

          <div className='relative'>
            {/* Timeline Line */}
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 2 }}
              className='absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 via-red-500 to-blue-500'
            />

            {/* Timeline Items */}
            <div className='space-y-16'>
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div
                    className={`w-1/2 ${
                      index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'
                    }`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className='bg-white border border-gray-200 rounded-2xl p-6 inline-block shadow-sm'
                    >
                      <div className='text-red-500 font-black text-lg mb-1'>
                        {milestone.year}
                      </div>
                      <div className='text-slate-800 font-bold text-base mb-1'>
                        {milestone.title}
                      </div>
                      <div className='text-slate-500'>{milestone.desc}</div>
                    </motion.div>
                  </div>

                  {/* Timeline Dot */}
                  <motion.div
                    whileHover={{ scale: 1.5 }}
                    className='relative z-10 w-6 h-6 bg-red-500 rounded-full border-4 border-white shadow-lg shadow-red-500/50'
                  />

                  <div className='w-1/2' />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className='py-24 relative overflow-hidden bg-gray-50'>
        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <h2 className='text-2xl md:text-3xl font-black text-slate-900 mb-3'>
              Our <span className='text-red-500'>Capabilities</span>
            </h2>
            <p className='text-slate-600 text-lg max-w-2xl mx-auto'>
              World-class infrastructure and expertise at your service
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'
          >
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  scale: 1.05,
                  rotateY: 10,
                  boxShadow: '0 30px 60px -15px rgba(59, 130, 246, 0.4)'
                }}
                className='bg-white border border-gray-200 rounded-3xl p-8 text-center cursor-pointer transition-all duration-500 group shadow-sm'
                style={{ perspective: '1000px' }}
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className='w-20 h-20 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-blue-400 text-4xl group-hover:bg-blue-500/30 transition-colors'
                >
                  {capability.icon}
                </motion.div>
                <h3 className='text-lg font-bold text-slate-900 mb-3'>
                  {capability.title}
                </h3>
                <p className='text-slate-600 leading-relaxed'>
                  {capability.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-24 relative overflow-hidden bg-white'>
        <div className='relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='bg-gray-50 border border-gray-200 rounded-3xl p-12 md:p-16 shadow-lg'
          >
            <h2 className='text-2xl md:text-3xl font-black text-slate-900 mb-4'>
              Ready to <span className='text-red-500'>Transform</span> Your Production?
            </h2>

            <p className='text-base text-slate-600 mb-8 max-w-2xl mx-auto'>
              Partner with RM Tech & Engineering for cutting-edge metallurgical
              solutions
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className='flex flex-wrap justify-center gap-4'
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 40px rgba(220, 38, 38, 0.6)'
                }}
                whileTap={{ scale: 0.95 }}
                className='px-10 py-5 bg-red-500 hover:bg-red-600 text-white font-black text-lg rounded-xl shadow-lg shadow-red-500/50 transition-all'
              >
                Contact Us Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg rounded-xl border border-blue-500 transition-all'
              >
                View Our Products
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

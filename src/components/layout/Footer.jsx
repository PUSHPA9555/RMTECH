import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  FaPhoneAlt, FaEnvelope, FaWhatsapp, FaMapMarkerAlt,
  FaLinkedin, FaTwitter, FaFacebook, FaYoutube,
  FaArrowRight, FaShieldAlt, FaCertificate, FaAward,
  FaIndustry, FaCogs, FaGlobe
} from 'react-icons/fa'
import { FiChevronRight, FiMail } from 'react-icons/fi'
import { logo1 } from '../../utils/images'

const quickLinks = [
  { label: 'Home',            to: '/' },
  { label: 'About Us',        to: '/about' },
  { label: 'Products',        to: '/product' },
  { label: 'Factory Overview',to: '/factory' },
  { label: 'R&D Center',      to: '/rd-center' },
  { label: 'News & Updates',  to: '/news' },
  { label: 'Contact Us',      to: '/contact' },
]

const products = [
  'Rolling Mill Equipment',
  'Shearing Machines',
  'Cooling Beds',
  'Hydraulic Systems',
  'Automation Panels',
  'Heavy Fabrication',
  'Spare Parts & Components',
]

const certifications = [
  { icon: <FaCertificate />, label: 'ISO 9001:2015', sub: 'Quality Management' },
  { icon: <FaShieldAlt />,   label: 'ISO 14001',     sub: 'Environment' },
  { icon: <FaAward />,       label: 'CE Certified',  sub: 'European Standard' },
]

const socials = [
  { icon: <FaLinkedin />, href: '#', label: 'LinkedIn',  bg: 'hover:bg-[#0077b5] hover:border-[#0077b5]' },
  { icon: <FaTwitter />,  href: '#', label: 'Twitter',   bg: 'hover:bg-[#1da1f2] hover:border-[#1da1f2]' },
  { icon: <FaFacebook />, href: '#', label: 'Facebook',  bg: 'hover:bg-[#1877f2] hover:border-[#1877f2]' },
  { icon: <FaYoutube />,  href: '#', label: 'YouTube',   bg: 'hover:bg-[#ff0000] hover:border-[#ff0000]' },
]

const globalPresence = [
  { region: 'South Asia',   flag: '🇮🇳', countries: 'India, Bangladesh, Sri Lanka' },
  { region: 'Middle East',  flag: '🇦🇪', countries: 'UAE, Saudi Arabia, Qatar' },
  { region: 'Africa',       flag: '🌍', countries: 'Nigeria, Egypt, South Africa' },
  { region: 'South East Asia', flag: '🌏', countries: 'Vietnam, Indonesia, Thailand' },
]

export default function Footer () {
  return (
    <footer className='relative overflow-hidden text-slate-700' style={{ background: 'linear-gradient(180deg, #f8fafc 0%, #f1f5f9 60%, #e2e8f0 100%)' }}>

      {/* ── World map SVG watermark ── */}
      <div className='absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden'>
        <svg viewBox='0 0 1000 500' className='w-full max-w-5xl opacity-[0.028]' fill='none' xmlns='http://www.w3.org/2000/svg'>
          {/* Simplified world map dots / continents outline */}
          <ellipse cx='200' cy='200' rx='120' ry='90' stroke='#3b82f6' strokeWidth='1.5' fill='none' />
          <ellipse cx='420' cy='180' rx='80' ry='100' stroke='#3b82f6' strokeWidth='1.5' fill='none' />
          <ellipse cx='420' cy='310' rx='60' ry='70' stroke='#3b82f6' strokeWidth='1.5' fill='none' />
          <ellipse cx='600' cy='160' rx='100' ry='80' stroke='#3b82f6' strokeWidth='1.5' fill='none' />
          <ellipse cx='720' cy='200' rx='60' ry='50' stroke='#3b82f6' strokeWidth='1.5' fill='none' />
          <ellipse cx='820' cy='180' rx='80' ry='60' stroke='#3b82f6' strokeWidth='1.5' fill='none' />
          <ellipse cx='880' cy='280' rx='40' ry='55' stroke='#3b82f6' strokeWidth='1.5' fill='none' />
          {/* Grid lines */}
          {[100,200,300,400].map(y => <line key={y} x1='0' y1={y} x2='1000' y2={y} stroke='#3b82f6' strokeWidth='0.4' strokeDasharray='4 8' />)}
          {[100,200,300,400,500,600,700,800,900].map(x => <line key={x} x1={x} y1='0' x2={x} y2='500' stroke='#3b82f6' strokeWidth='0.4' strokeDasharray='4 8' />)}
          {/* Dots for major cities */}
          {[[200,200],[420,180],[600,160],[820,180],[720,200],[880,280],[420,310]].map(([cx,cy],i) => (
            <circle key={i} cx={cx} cy={cy} r='4' fill='#3b82f6' opacity='0.6' />
          ))}
          {/* Connection lines */}
          <line x1='200' y1='200' x2='420' y2='180' stroke='#3b82f6' strokeWidth='0.6' strokeDasharray='6 6' />
          <line x1='420' y1='180' x2='600' y2='160' stroke='#3b82f6' strokeWidth='0.6' strokeDasharray='6 6' />
          <line x1='600' y1='160' x2='820' y2='180' stroke='#3b82f6' strokeWidth='0.6' strokeDasharray='6 6' />
          <line x1='420' y1='180' x2='420' y2='310' stroke='#3b82f6' strokeWidth='0.6' strokeDasharray='6 6' />
          <line x1='820' y1='180' x2='880' y2='280' stroke='#3b82f6' strokeWidth='0.6' strokeDasharray='6 6' />
        </svg>
      </div>

      {/* ── Blueprint grid overlay ── */}
      <div className='absolute inset-0 pointer-events-none'
        style={{ backgroundImage: 'linear-gradient(rgba(59,130,246,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.04) 1px, transparent 1px)', backgroundSize: '55px 55px' }}
      />

      {/* ── Glow orbs ── */}
      <div className='absolute -bottom-20 -left-20 w-[500px] h-[400px] bg-blue-700/8 rounded-full blur-[120px] pointer-events-none' />
      <div className='absolute -top-10 right-0 w-[400px] h-[350px] bg-red-700/6 rounded-full blur-[120px] pointer-events-none' />

      {/* ── Top accent line ── */}
      <div className='absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent' />

      {/* ════════════════════════════════════
          CTA BANNER
      ════════════════════════════════════ */}
      <div className='relative border-b border-gray-200'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
          <div className='flex flex-col lg:flex-row items-center justify-between gap-8'>

            {/* Left text */}
            <div className='text-center lg:text-left'>
              <div className='flex items-center justify-center lg:justify-start gap-2 mb-3'>
                <span className='w-6 h-[2px] bg-red-500' />
                <span className='text-xs font-black tracking-[0.35em] text-red-400 uppercase'>Global Industrial Partner</span>
              </div>
              <h3 className='text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 leading-tight'>
                Ready to Scale Your{' '}
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300'>
                  Steel Plant?
                </span>
              </h3>
              <p className='text-slate-500 mt-2 text-sm max-w-xl'>
                Talk to our engineers today. Free consultation for rolling mill projects, fabrication, and turnkey solutions.
              </p>
            </div>

            {/* Right buttons */}
            <div className='flex flex-col sm:flex-row gap-3 flex-shrink-0'>
              <Link to='/contact'
                className='group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 text-white font-black text-sm uppercase tracking-widest border-b-4 border-red-900 shadow-[0_0_35px_rgba(220,38,38,0.45)] hover:shadow-[0_0_60px_rgba(220,38,38,0.75)] transition-all duration-300 hover:-translate-y-1'
              >
                Get Free Consultation
                <FiChevronRight className='h-4 w-4 group-hover:translate-x-2 transition-transform duration-300' />
              </Link>
              <a href='https://api.whatsapp.com/send?phone=916395764942' target='_blank' rel='noreferrer'
                className='inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-600/15 border-2 border-green-600/40 text-green-400 font-black text-sm uppercase tracking-widest hover:bg-green-600 hover:text-white hover:border-green-600 transition-all duration-300 hover:-translate-y-1'
              >
                <FaWhatsapp className='text-lg' />
                WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════
          MAIN FOOTER GRID
      ════════════════════════════════════ */}
      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-10 xl:gap-8'>

          {/* ── Col 1+2: Brand (wider) ── */}
          <div className='xl:col-span-2 space-y-7'>

            {/* Logo + name */}
            <Link to='/' className='inline-flex items-center gap-4 group'>
              <img src={logo1} alt='RM Tech Engineering'
                className='h-14 w-auto object-contain  rounded-lg p-1.5  group-hover:shadow-blue-500/25 transition-shadow duration-300'
              />
              {/* <div>
                <div className='text-lg font-black text-slate-900 tracking-wide leading-none'>RM Tech</div>
                <div className='text-xs text-slate-500 tracking-[0.2em] uppercase mt-1'>Engineering Pvt. Ltd.</div>
              </div> */}
            </Link>

            {/* About text */}
            <p className='text-sm text-slate-600 leading-relaxed max-w-sm'>
              A premier manufacturer of steel rolling mill machinery, heavy fabrication systems, and industrial automation solutions. Delivering precision-engineered turnkey projects to global steel plants since 2001.
            </p>

            {/* Stats row */}
            {/* <div className='grid grid-cols-3 gap-3'>
              {[
                { val: '20+',  lbl: 'Years',     icon: <FaCogs className='text-blue-400' /> },
                { val: '200+', lbl: 'Projects',  icon: <FaIndustry className='text-red-400' /> },
                { val: '45+',  lbl: 'Countries', icon: <FaGlobe className='text-cyan-400' /> },
              ].map((s, i) => (
                <div key={i} className='bg-white border border-gray-200 rounded-xl p-3 text-center hover:border-blue-400 transition-colors duration-300 shadow-sm'>
                  <div className='text-lg mb-1'>{s.icon}</div>
                  <div className='text-xl font-black text-slate-900 leading-none'>{s.val}</div>
                  <div className='text-[10px] text-slate-500 uppercase tracking-wider mt-1'>{s.lbl}</div>
                </div>
              ))}
            </div> */}

            {/* Certifications */}
            <div>
              <p className='text-[10px] font-black tracking-[0.3em] text-slate-500 uppercase mb-3'>Certifications</p>
              <div className='flex flex-wrap gap-2'>
                {certifications.map((c, i) => (
                  <div key={i} className='flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-xs text-slate-700 hover:border-blue-400 hover:text-slate-900 transition-all duration-200'>
                    <span className='text-blue-400 text-xs'>{c.icon}</span>
                    <span className='font-bold'>{c.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social icons */}
            <div>
              <p className='text-[10px] font-black tracking-[0.3em] text-slate-500 uppercase mb-3'>Follow Us</p>
              <div className='flex gap-2'>
                {socials.map((s, i) => (
                  <motion.a key={i} href={s.href} target='_blank' rel='noreferrer'
                    whileHover={{ y: -4, scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                    aria-label={s.label}
                    className={`w-9 h-9 flex items-center justify-center border border-gray-300 rounded-lg text-slate-500 hover:text-white transition-all duration-300 ${s.bg}`}
                  >
                    {s.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* ── Col 3: Quick Links ── */}
          <div className='space-y-5'>
            <div>
              <h4 className='text-slate-900 text-xs font-black tracking-[0.25em] uppercase'>Quick Links</h4>
              <div className='h-[2px] w-8 bg-gradient-to-r from-blue-500 to-transparent mt-2 rounded-full' />
            </div>
            <ul className='space-y-2.5'>
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <Link to={link.to}
                    className='group flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 transition-all duration-200'
                  >
                    <FaArrowRight className='text-[10px] text-blue-500 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200 flex-shrink-0' />
                    <span className='group-hover:translate-x-1 transition-transform duration-200'>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 4: Products ── */}
          <div className='space-y-5'>
            <div>
              <h4 className='text-slate-900 text-xs font-black tracking-[0.25em] uppercase'>Our Products</h4>
              <div className='h-[2px] w-8 bg-gradient-to-r from-red-500 to-transparent mt-2 rounded-full' />
            </div>
            <ul className='space-y-2.5'>
              {products.map((item, i) => (
                <li key={i}>
                  <Link to='/product'
                    className='group flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 transition-all duration-200'
                  >
                    <FaArrowRight className='text-[10px] text-red-500 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200 flex-shrink-0' />
                    <span className='group-hover:translate-x-1 transition-transform duration-200'>{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 5: Contact ── */}
          <div className='space-y-5'>
            <div>
              <h4 className='text-slate-900 text-xs font-black tracking-[0.25em] uppercase'>Contact Us</h4>
              <div className='h-[2px] w-8 bg-gradient-to-r from-blue-500 to-transparent mt-2 rounded-full' />
            </div>

            {/* Contact details */}
            <div className='space-y-4'>
              <div className='flex items-start gap-3 group'>
                <div className='w-8 h-8 flex-shrink-0 flex items-center justify-center bg-blue-500/10 border border-blue-500/20 rounded-lg group-hover:bg-blue-500/20 transition-colors duration-200'>
                  <FaMapMarkerAlt className='text-blue-400 text-xs' />
                </div>
                <p className='text-sm text-slate-600 leading-relaxed group-hover:text-slate-800 transition-colors duration-200'>
                  B-1914, 16 Park View, Sec 19,<br />
                  Gaur Yamuna City,<br />
                  Greater Noida — 203209
                </p>
              </div>

              <div className='flex items-center gap-3 group'>
                <div className='w-8 h-8 flex-shrink-0 flex items-center justify-center bg-blue-500/10 border border-blue-500/20 rounded-lg group-hover:bg-blue-500/20 transition-colors duration-200'>
                  <FaPhoneAlt className='text-blue-400 text-xs' />
                </div>
                <div className='text-sm text-slate-600'>
                  <a href='tel:+916395764942' className='block hover:text-slate-900 transition-colors duration-200'>+91-6395764942</a>
                  <a href='tel:+917389841471' className='block hover:text-slate-900 transition-colors duration-200'>+91-7389841471</a>
                </div>
              </div>

              <div className='flex items-center gap-3 group'>
                <div className='w-8 h-8 flex-shrink-0 flex items-center justify-center bg-blue-500/10 border border-blue-500/20 rounded-lg group-hover:bg-blue-500/20 transition-colors duration-200'>
                  <FaEnvelope className='text-blue-400 text-xs' />
                </div>
                <a href='mailto:contact@rmtechengineering.com'
                  className='text-sm text-slate-600 hover:text-slate-900 transition-colors duration-200 break-all'
                >
                  contact@rmtechengineering.com
                </a>
              </div>
            </div>

            {/* Action buttons */}
            <div className='flex flex-col gap-2.5 pt-1'>
              <a href='https://api.whatsapp.com/send?phone=916395764942' target='_blank' rel='noreferrer'
                className='flex items-center justify-center gap-2 py-3 bg-green-600/10 border border-green-600/30 text-green-400 text-xs font-black uppercase tracking-widest hover:bg-green-600 hover:text-white hover:border-green-600 transition-all duration-300 rounded-lg'
              >
                <FaWhatsapp className='text-base' />
                WhatsApp Us
              </a>
              <a href='mailto:contact@rmtechengineering.com'
                className='flex items-center justify-center gap-2 py-3 bg-blue-600/10 border border-blue-600/30 text-blue-400 text-xs font-black uppercase tracking-widest hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 rounded-lg'
              >
                <FiMail className='text-base' />
                Send Email
              </a>
            </div>
          </div>
        </div>

        {/* ── Global Presence Strip ── */}
        <div className='mt-14 pt-8 border-t border-gray-200'>
          <div className='flex items-center gap-3 mb-5'>
            <FaGlobe className='text-blue-400 text-sm' />
            <span className='text-xs font-black tracking-[0.3em] text-slate-500 uppercase'>Global Presence</span>
            <div className='flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent' />
          </div>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-3'>
            {globalPresence.map((g, i) => (
              <motion.div key={i}
                whileHover={{ y: -3, borderColor: 'rgba(59,130,246,0.4)' }}
                className='flex items-start gap-3 p-3 bg-white border border-gray-200 rounded-xl transition-all duration-300 shadow-sm'
              >
                <span className='text-xl leading-none mt-0.5'>{g.flag}</span>
                <div>
                  <div className='text-xs font-black text-slate-900'>{g.region}</div>
                  <div className='text-[10px] text-slate-500 mt-0.5 leading-relaxed'>{g.countries}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════
          BOTTOM BAR
      ════════════════════════════════════ */}
      <div className='relative border-t border-gray-200'>
        {/* Bottom glow line */}
        <div className='absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent' />

        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5'>
          <div className='flex flex-col md:flex-row items-center justify-between gap-4'>

            {/* Left */}
            <div className='flex items-center gap-3 text-xs text-slate-500'>
              <span className='w-2 h-2 rounded-full bg-green-500 animate-pulse' />
              <span>© 2026 RM Tech Engineering Pvt. Ltd. All Rights Reserved.</span>
            </div>

            {/* Center — Made in India */}
            <div className='flex items-center gap-2 text-xs text-slate-500'>
              <span>🇮🇳</span>
              <span className='font-bold text-slate-600'>Proudly Made in India</span>
            </div>

            {/* Right */}
            <div className='flex items-center gap-5 text-xs text-slate-500'>
              <span className='hover:text-slate-800 cursor-pointer transition-colors duration-200'>Privacy Policy</span>
              <span className='w-px h-3 bg-gray-300' />
              <span className='hover:text-slate-800 cursor-pointer transition-colors duration-200'>Terms of Service</span>
              <span className='w-px h-3 bg-gray-300' />
              <Link to='/contact' className='hover:text-blue-400 transition-colors duration-200'>Sitemap</Link>
            </div>
          </div>
        </div>
      </div>

    </footer>
  )
}

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import newsBg from '../assets/images/news.png'
import { FaSearch, FaArrowRight, FaClock, FaBookmark, FaChevronLeft, FaChevronRight, FaEnvelope, FaLinkedin, FaTwitter, FaFacebook, FaCalendarAlt } from 'react-icons/fa'

const newsItems = [
  { id: 1, date: '12/03/2026', title: 'RM Tech Signs Overseas Slab CCM and Hot Strip Mill Project', category: 'Company News', excerpt: 'RM Tech has secured a major contract for the design and supply of a complete Slab Continuous Casting Machine and Hot Strip Mill for an overseas steel plant.', image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800', readTime: '5 min read', featured: true, tags: ['Contract', 'International', 'Steel Plant'] },
  { id: 2, date: '20/01/2026', title: "250H-Section Mill Successfully Commences Production", category: 'Company News', excerpt: 'The state-of-the-art 250H-Section Mill supplied by RM Tech has successfully commenced production, marking a significant milestone.', image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800', readTime: '4 min read', featured: true, tags: ['Production', 'Milestone', 'Partnership'] },
  { id: 3, date: '10/01/2026', title: "RM Tech Wins Bid for Core Equipment of Asia's Largest-Span Bascule Bridge", category: 'Industry News', excerpt: 'RM Tech has been awarded the contract to supply core equipment for Asia\'s largest-span bascule bridge.', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800', readTime: '6 min read', featured: true, tags: ['Bridge', 'Engineering', 'Asia'] },
  { id: 4, date: '05/01/2026', title: 'RM Tech Expands Manufacturing Capacity with New Production Line', category: 'Company News', excerpt: 'To meet growing global demand, RM Tech has commissioned a new advanced production line, increasing manufacturing capacity by 30%.', image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800', readTime: '3 min read', featured: false, tags: ['Expansion', 'Manufacturing', 'Growth'] },
  { id: 5, date: '28/12/2025', title: 'Annual Steel Industry Conference Highlights RM Tech Innovations', category: 'Industry News', excerpt: 'At the annual steel industry conference, RM Tech presented groundbreaking innovations in continuous casting technology.', image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800', readTime: '7 min read', featured: false, tags: ['Conference', 'Innovation', 'Technology'] },
  { id: 6, date: '15/12/2025', title: 'RM Tech Achieves ISO 14001:2015 Environmental Certification', category: 'Company News', excerpt: 'Demonstrating our commitment to environmental sustainability, RM Tech has successfully achieved ISO 14001:2015 certification.', image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800', readTime: '4 min read', featured: false, tags: ['Certification', 'Environment', 'Quality'] },
  { id: 7, date: '01/12/2025', title: 'Partnership with European Steel Giant for Green Steel Initiative', category: 'Industry News', excerpt: 'RM Tech announces strategic partnership with a leading European steel manufacturer for green steel production technologies.', image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800', readTime: '5 min read', featured: false, tags: ['Partnership', 'Green Steel', 'Europe'] },
  { id: 8, date: '20/11/2025', title: 'RM Tech Launches New Customer Support Portal', category: 'Company News', excerpt: 'Enhancing customer experience, RM Tech has launched a comprehensive online support portal with real-time tracking and 24/7 assistance.', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800', readTime: '3 min read', featured: false, tags: ['Support', 'Digital', 'Customer Service'] }
]

const categories = ['All', 'Company News', 'Industry News', 'Technology', 'Events']

export default function News () {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [bookmarked, setBookmarked] = useState([])
  const itemsPerPage = 6

  const filteredNews = newsItems.filter(item => {
    const matchCat = selectedCategory === 'All' || item.category === selectedCategory
    const matchSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || item.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchCat && matchSearch
  })

  const featuredNews = newsItems.filter(i => i.featured)
  const totalPages = Math.ceil(filteredNews.length / itemsPerPage)
  const paginatedNews = filteredNews.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
  const toggleBookmark = (id) => setBookmarked(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id])

  return (
    <div className='min-h-screen bg-gray-50 text-gray-800'>

      {/* ── HERO ── */}
      <section className='relative w-full bg-black' style={{ paddingTop: '56.25%' }}>
        <img src={newsBg} alt='News Hero' className='absolute inset-0 w-full h-full' style={{ objectFit: 'fill' }} />
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
                <span className='text-[10px] font-black tracking-[0.35em] text-blue-300 uppercase'>Latest Updates • RM Tech</span>
              </motion.div>
              <motion.h1 initial={{ opacity:0, y:25 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.7, delay:0.1 }}
                className='text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight mb-4'
              >
                Latest <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300'>News</span>
              </motion.h1>
              <motion.p initial={{ opacity:0, y:15 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.25 }}
                className='text-sm text-slate-300 max-w-xl mb-8'
              >
                Stay updated with the latest developments, achievements, and innovations from RM Tech Engineering
              </motion.p>
              <motion.div initial={{ opacity:0, y:15 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.5, delay:0.4 }}
                className='relative max-w-md'
              >
                <FaSearch className='absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm' />
                <input type='text' placeholder='Search news...' value={searchQuery} onChange={e => setSearchQuery(e.target.value)}
                  className='w-full pl-11 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 text-sm transition-all'
                />
              </motion.div>
            </div>
          </div>
        </div>
        <div className='absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent' />
      </section>

      {/* ── FEATURED ── */}
      <section className='py-12 bg-white border-b border-gray-100'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='mb-8'>
            <h2 className='text-2xl font-black text-gray-800 mb-1'>Featured <span className='text-red-500'>Stories</span></h2>
            <p className='text-gray-500 text-sm'>Highlighting our most significant achievements and announcements</p>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
            {featuredNews.map((item, index) => (
              <motion.article key={item.id}
                initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.5, delay:index*0.1 }}
                className={`bg-white border border-gray-200 rounded-2xl overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300 group ${index === 0 ? 'lg:col-span-2' : ''}`}
              >
                <div className={`relative overflow-hidden ${index === 0 ? 'h-56' : 'h-40'}`}>
                  <img src={item.image} alt={item.title} className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500' />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent' />
                  <span className='absolute top-3 left-3 px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full'>{item.category}</span>
                  <button onClick={e => { e.stopPropagation(); toggleBookmark(item.id) }}
                    className='absolute top-3 right-3 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center text-gray-600 hover:bg-white transition-all'
                  >
                    <FaBookmark className={bookmarked.includes(item.id) ? 'text-yellow-500' : 'text-gray-400'} />
                  </button>
                </div>
                <div className='p-5'>
                  <div className='flex items-center gap-3 text-xs text-gray-400 mb-2'>
                    <span className='flex items-center gap-1'><FaCalendarAlt />{item.date}</span>
                    <span className='flex items-center gap-1'><FaClock />{item.readTime}</span>
                  </div>
                  <h3 className={`font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors ${index === 0 ? 'text-lg' : 'text-base'}`}>{item.title}</h3>
                  <p className='text-gray-500 text-sm leading-relaxed mb-3'>{item.excerpt}</p>
                  <div className='flex flex-wrap gap-1.5 mb-3'>
                    {item.tags.map((tag, i) => <span key={i} className='px-2 py-0.5 bg-blue-50 text-blue-600 text-xs rounded-full border border-blue-100'>{tag}</span>)}
                  </div>
                  <div className='flex items-center justify-between'>
                    <span className='flex items-center gap-1.5 text-blue-600 font-semibold text-sm group-hover:gap-2.5 transition-all'>Read More <FaArrowRight className='text-xs' /></span>
                    <div className='flex gap-1.5'>
                      {[FaLinkedin, FaTwitter, FaFacebook].map((Icon, i) => (
                        <button key={i} className='w-7 h-7 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 hover:bg-blue-500 hover:text-white transition-all'><Icon className='text-xs' /></button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CATEGORY FILTER ── */}
      <section className='py-6 bg-gray-50 border-b border-gray-100 sticky top-[72px] z-30'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-wrap gap-2 justify-center'>
            {categories.map(cat => (
              <button key={cat} onClick={() => { setSelectedCategory(cat); setCurrentPage(1) }}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${selectedCategory === cat ? 'bg-blue-600 text-white shadow-md' : 'bg-white text-gray-600 border border-gray-200 hover:border-blue-400 hover:text-blue-600'}`}
              >{cat}</button>
            ))}
          </div>
        </div>
      </section>

      {/* ── ALL ARTICLES ── */}
      <section className='py-12 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='mb-8'>
            <h2 className='text-2xl font-black text-gray-800 mb-1'>All <span className='text-blue-600'>Articles</span></h2>
            <p className='text-gray-500 text-sm'>Browse through our complete collection of news and updates</p>
          </div>

          <AnimatePresence mode='wait'>
            <motion.div key={selectedCategory + currentPage}
              initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }} transition={{ duration:0.3 }}
              className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
            >
              {paginatedNews.map((item, i) => (
                <motion.article key={item.id}
                  initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.4, delay:i*0.07 }}
                  className='bg-white border border-gray-200 rounded-2xl overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300 group'
                >
                  <div className='relative h-44 overflow-hidden'>
                    <img src={item.image} alt={item.title} className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500' />
                    <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent' />
                    <span className='absolute top-3 left-3 px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full'>{item.category}</span>
                    <button onClick={e => { e.stopPropagation(); toggleBookmark(item.id) }}
                      className='absolute top-3 right-3 w-7 h-7 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-all'
                    >
                      <FaBookmark className={`text-xs ${bookmarked.includes(item.id) ? 'text-yellow-500' : 'text-gray-400'}`} />
                    </button>
                  </div>
                  <div className='p-5'>
                    <div className='flex items-center gap-3 text-xs text-gray-400 mb-2'>
                      <span className='flex items-center gap-1'><FaCalendarAlt />{item.date}</span>
                      <span className='flex items-center gap-1'><FaClock />{item.readTime}</span>
                    </div>
                    <h3 className='text-sm font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors leading-snug'>{item.title}</h3>
                    <p className='text-gray-500 text-xs leading-relaxed mb-3'>{item.excerpt}</p>
                    <div className='flex flex-wrap gap-1 mb-3'>
                      {item.tags.map((tag, ti) => <span key={ti} className='px-2 py-0.5 bg-blue-50 text-blue-600 text-[10px] rounded-full border border-blue-100'>{tag}</span>)}
                    </div>
                    <div className='flex items-center justify-between'>
                      <span className='flex items-center gap-1.5 text-blue-600 font-semibold text-xs'>Read More <FaArrowRight className='text-[10px]' /></span>
                      <div className='flex gap-1'>
                        {[FaLinkedin, FaTwitter].map((Icon, i) => (
                          <button key={i} className='w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 hover:bg-blue-500 hover:text-white transition-all'><Icon className='text-[10px]' /></button>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className='flex justify-center items-center gap-2 mt-10'>
              <button onClick={() => setCurrentPage(p => Math.max(p-1,1))} disabled={currentPage===1}
                className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all ${currentPage===1 ? 'bg-gray-100 text-gray-300 cursor-not-allowed' : 'bg-white border border-gray-200 text-gray-600 hover:border-blue-500 hover:text-blue-600'}`}
              ><FaChevronLeft className='text-xs' /></button>
              {[...Array(totalPages)].map((_,i) => (
                <button key={i} onClick={() => setCurrentPage(i+1)}
                  className={`w-9 h-9 rounded-lg font-bold text-sm transition-all ${currentPage===i+1 ? 'bg-blue-600 text-white shadow-md' : 'bg-white border border-gray-200 text-gray-600 hover:border-blue-500'}`}
                >{i+1}</button>
              ))}
              <button onClick={() => setCurrentPage(p => Math.min(p+1,totalPages))} disabled={currentPage===totalPages}
                className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all ${currentPage===totalPages ? 'bg-gray-100 text-gray-300 cursor-not-allowed' : 'bg-white border border-gray-200 text-gray-600 hover:border-blue-500 hover:text-blue-600'}`}
              ><FaChevronRight className='text-xs' /></button>
            </div>
          )}
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <section className='py-12 bg-gray-50 border-t border-gray-100'>
        <div className='max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <div className='w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-500 text-xl'><FaEnvelope /></div>
          <h2 className='text-xl font-black text-gray-800 mb-2'>Subscribe to Our <span className='text-red-500'>Newsletter</span></h2>
          <p className='text-gray-500 text-sm mb-6'>Get the latest news and insights delivered directly to your inbox</p>
          <div className='flex flex-col sm:flex-row gap-3'>
            <input type='email' placeholder='Enter your email address'
              className='flex-1 px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-500 text-sm transition-all'
            />
            <button className='px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-bold rounded-lg text-sm transition-all'>Subscribe</button>
          </div>
          <p className='text-gray-400 text-xs mt-3'>By subscribing, you agree to our Privacy Policy.</p>
        </div>
      </section>

    </div>
  )
}

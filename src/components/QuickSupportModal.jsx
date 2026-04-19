import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaTimes, FaPhoneAlt, FaEnvelope, FaUser, FaWhatsapp, FaPaperPlane, FaHeadset } from 'react-icons/fa';

export default function QuickSupportModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 2000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* Floating Support Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: 'spring' }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className='fixed right-4 bottom-4 md:right-6 md:bottom-6 z-40 w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:shadow-blue-500/50 transition-all'
      >
        <FaHeadset className='text-xl md:text-2xl' />
        <span className='absolute -top-1 -right-1 w-3 h-3 md:w-4 md:h-4 bg-green-500 rounded-full border-2 border-white animate-pulse' />
      </motion.button>

      <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className='fixed inset-0 bg-black/50 backdrop-blur-sm z-50'
          />

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className='fixed right-0 md:right-4 top-0 md:top-1/2 md:-translate-y-1/2 z-50 w-full h-full md:h-auto md:w-auto p-0 md:p-4'
            onClick={(e) => e.stopPropagation()}
          >
            <div className='relative w-full h-full md:h-auto md:max-w-md bg-white md:rounded-2xl shadow-2xl overflow-hidden md:overflow-auto max-h-screen md:max-h-[90vh]'>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(false)}
                className='absolute top-4 right-4 z-10 w-8 h-8 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center transition-colors'
              >
                <FaTimes />
              </motion.button>

              <div className='bg-gradient-to-br from-blue-600 to-indigo-700 p-4 md:p-6 text-white'>
                <div className='flex items-center gap-2 mb-2 md:mb-3'>
                  <span className='w-2 h-2 bg-green-400 rounded-full animate-pulse' />
                  <span className='text-xs font-bold uppercase tracking-wider'>Quick Support</span>
                </div>
                <h2 className='text-xl md:text-2xl font-black mb-1 md:mb-2'>Need Help?</h2>
                <p className='text-blue-100 text-xs md:text-sm'>We're here to assist you 24/7</p>
              </div>

              <div className='p-4 md:p-6 overflow-y-auto' style={{ maxHeight: 'calc(100vh - 140px)' }}>
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className='text-center py-8'
                  >
                    <div className='w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4'>
                      <FaPaperPlane className='text-2xl text-white' />
                    </div>
                    <h3 className='text-xl font-bold text-slate-900 mb-2'>Message Sent!</h3>
                    <p className='text-slate-600 text-sm'>We'll contact you shortly.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className='space-y-4'>
                    <div>
                      <label className='block text-xs font-bold text-slate-700 mb-1.5'>
                        <FaUser className='inline mr-1 text-blue-500' /> Name *
                      </label>
                      <input
                        type='text'
                        name='name'
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className='w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20'
                        placeholder='Your name'
                      />
                    </div>

                    <div>
                      <label className='block text-xs font-bold text-slate-700 mb-1.5'>
                        <FaEnvelope className='inline mr-1 text-blue-500' /> Email *
                      </label>
                      <input
                        type='email'
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className='w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20'
                        placeholder='your@email.com'
                      />
                    </div>

                    <div>
                      <label className='block text-xs font-bold text-slate-700 mb-1.5'>
                        <FaPhoneAlt className='inline mr-1 text-blue-500' /> Phone *
                      </label>
                      <input
                        type='tel'
                        name='phone'
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className='w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20'
                        placeholder='+91 1234567890'
                      />
                    </div>

                    <div>
                      <label className='block text-xs font-bold text-slate-700 mb-1.5'>Message *</label>
                      <textarea
                        name='message'
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={3}
                        className='w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 resize-none'
                        placeholder='How can we help?'
                      />
                    </div>

                    <button
                      type='submit'
                      className='w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-sm rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2'
                    >
                      <FaPaperPlane /> Send Message
                    </button>

                    <a
                      href='https://api.whatsapp.com/send?phone=916395764942'
                      target='_blank'
                      rel='noreferrer'
                      className='w-full px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-bold text-sm rounded-lg transition-all flex items-center justify-center gap-2'
                    >
                      <FaWhatsapp /> WhatsApp Us
                    </a>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
    </>
  );
}

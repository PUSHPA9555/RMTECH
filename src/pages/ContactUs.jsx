import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import contactBg from '../assets/images/slider1.jpg';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaGlobe, FaClock, FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaPaperPlane, FaCheckCircle, FaBuilding, FaHeadset, FaSalesforce } from 'react-icons/fa';

const contactInfo = [
  {
    icon: <FaBuilding />,
    title: "Office Address",
    details: [
      "B-1914, 16 Park View, Sec 19",
      "Gaur Yamuna City, Greater Noida - 203209"
    ],
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: <FaPhoneAlt />,
    title: "Phone Numbers",
    details: [
      "+91-6395764942",
      "+91-7389841471"
    ],
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: <FaEnvelope />,
    title: "Email Addresses",
    details: [
      "contact@rmtechengineering.com"
    ],
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: <FaWhatsapp />,
    title: "WhatsApp",
    details: [
      "+91-6395764942",
      "+91-7389841471"
    ],
    color: "from-green-600 to-green-500"
  }
];

const officeLocations = [
  {
    city: "Greater Noida",
    country: "India",
    type: "Headquarters",
    address: "B-1914, 16 Park View, Sec 19, Gaur Yamuna City",
    phone: "+91-6395764942",
    email: "contact@rmtechengineering.com"
  },
  {
    city: "Delhi NCR",
    country: "India",
    type: "Regional Office",
    address: "Greater Noida, Uttar Pradesh 203209",
    phone: "+91-7389841471",
    email: "contact@rmtechengineering.com"
  },
  {
    city: "Mumbai",
    country: "India",
    type: "Western Region Office",
    address: "Bandra Kurla Complex, Mumbai 400051",
    phone: "+91-22-6789-0123",
    email: "contact@rmtechengineering.com"
  },
  {
    city: "Chennai",
    country: "India",
    type: "Southern Region Office",
    address: "Anna Nagar, Chennai 600040",
    phone: "+91-44-2345-6789",
    email: "contact@rmtechengineering.com"
  }
];

const supportServices = [
  {
    icon: <FaHeadset />,
    title: "24/7 Technical Support",
    description: "Round-the-clock assistance for all technical queries and emergency support"
  },
  {
    icon: <FaSalesforce />,
    title: "Sales Inquiries",
    description: "Get quotes, product information, and customized solutions for your needs"
  },
  {
    icon: <FaGlobe />,
    title: "Global Logistics",
    description: "Worldwide shipping and delivery coordination for all orders"
  },
  {
    icon: <FaClock />,
    title: "After-Sales Service",
    description: "Installation, commissioning, and ongoing maintenance support"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

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
};

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
};

export default function ContactUs() {
  const containerRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div ref={containerRef} className='min-h-screen bg-white overflow-hidden'>
      {/* Contact Information Cards */}
      <section className='py-24 relative overflow-hidden bg-gray-50'>
        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <h2 className='text-xl md:text-2xl lg:text-3xl font-black text-slate-900 mb-3'>
              Contact <span className='text-red-500'>Information</span>
            </h2>
            <p className='text-slate-600 text-sm md:text-base lg:text-lg max-w-2xl mx-auto'>
              Multiple ways to reach our team
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'
          >
            {contactInfo.map((info, index) => (
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
                  className={`w-20 h-20 bg-gradient-to-br ${info.color} rounded-2xl flex items-center justify-center mx-auto mb-6 text-white text-4xl group-hover:shadow-lg transition-all`}
                >
                  {info.icon}
                </motion.div>
                <h3 className='text-base font-bold text-slate-900 mb-3'>{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className='text-slate-600 mb-2'>{detail}</p>
                ))}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className='py-24 relative bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className='bg-white border border-gray-200 rounded-3xl p-8 md:p-12 shadow-sm'
            >
              <h2 className='text-xl md:text-2xl lg:text-3xl font-black text-slate-900 mb-4'>
                Send us a <span className='text-red-500'>Message</span>
              </h2>
              <p className='text-slate-600 mb-6 md:mb-8 text-sm md:text-base'>
                Fill out the form below and our team will get back to you within 24 hours.
              </p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className='bg-green-500/20 border border-green-500/50 rounded-2xl p-8 text-center'
                >
                  <FaCheckCircle className='text-green-500 text-5xl mx-auto mb-4' />
                  <h3 className='text-2xl font-bold text-slate-900 mb-2'>Message Sent!</h3>
                  <p className='text-slate-600'>Thank you for contacting us. We'll respond shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className='space-y-6'>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div>
                      <label className='block text-sm font-medium text-slate-700 mb-2'>Full Name *</label>
                      <input
                        type='text'
                        name='name'
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className='w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition-all'
                        placeholder='John Doe'
                      />
                    </div>
                    <div>
                      <label className='block text-sm font-medium text-slate-700 mb-2'>Email Address *</label>
                      <input
                        type='email'
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className='w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition-all'
                        placeholder='john@example.com'
                      />
                    </div>
                  </div>

                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div>
                      <label className='block text-sm font-medium text-slate-700 mb-2'>Company Name</label>
                      <input
                        type='text'
                        name='company'
                        value={formData.company}
                        onChange={handleChange}
                        className='w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition-all'
                        placeholder='Your Company'
                      />
                    </div>
                    <div>
                      <label className='block text-sm font-medium text-slate-700 mb-2'>Phone Number</label>
                      <input
                        type='tel'
                        name='phone'
                        value={formData.phone}
                        onChange={handleChange}
                        className='w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition-all'
                        placeholder='+1 234 567 8900'
                      />
                    </div>
                  </div>

                  <div>
                    <label className='block text-sm font-medium text-slate-700 mb-2'>Subject *</label>
                    <input
                      type='text'
                      name='subject'
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className='w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition-all'
                      placeholder='Inquiry about Rolling Mills'
                    />
                  </div>

                  <div>
                    <label className='block text-sm font-medium text-slate-700 mb-2'>Message *</label>
                    <textarea
                      name='message'
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className='w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition-all resize-none'
                      placeholder='Write your message here...'
                    />
                  </div>

                  <motion.button
                    type='submit'
                    whileHover={{ scale: 1.02, boxShadow: '0 0 40px rgba(59, 130, 246, 0.6)' }}
                    whileTap={{ scale: 0.98 }}
                    className='w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-red-500 text-white font-bold rounded-xl shadow-lg shadow-blue-500/50 transition-all flex items-center justify-center gap-3'
                  >
                    <FaPaperPlane />
                    Send Message
                  </motion.button>
                </form>
              )}
            </motion.div>

            {/* Support Services */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className='space-y-8'
            >
              <div>
                <h2 className='text-xl md:text-2xl lg:text-3xl font-black text-slate-900 mb-4'>
                  Our <span className='text-blue-500'>Services</span>
                </h2>
                <p className='text-slate-600 mb-6 md:mb-8 text-sm md:text-base'>
                  We provide comprehensive support across all stages of your project.
                </p>
              </div>

              <div className='space-y-6'>
                {supportServices.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className='bg-white border border-gray-200 rounded-2xl p-6 cursor-pointer transition-all duration-300 group shadow-sm'
                  >
                    <div className='flex items-start gap-4'>
                      <div className='w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 text-2xl flex-shrink-0 group-hover:bg-red-500/20 transition-colors'>
                        {service.icon}
                      </div>
                      <div>
                        <h3 className='text-base font-bold text-slate-900 mb-1 group-hover:text-blue-500 transition-colors'>
                          {service.title}
                        </h3>
                        <p className='text-slate-600'>{service.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Media */}
              <div className='pt-8'>
                <h3 className='text-xl font-bold text-slate-900 mb-4'>Follow Us</h3>
                <div className='flex gap-4'>
                  {[
                    { icon: <FaLinkedin />, color: 'hover:bg-blue-600' },
                    { icon: <FaTwitter />, color: 'hover:bg-blue-400' },
                    { icon: <FaFacebook />, color: 'hover:bg-blue-700' },
                    { icon: <FaInstagram />, color: 'hover:bg-pink-600' }
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href='#'
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className={`w-12 h-12 bg-gray-100 border border-gray-200 rounded-xl flex items-center justify-center text-slate-600 text-xl ${social.color} hover:text-white transition-all`}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Locations Section */}
      <section className='py-24 relative overflow-hidden bg-gray-50'>
        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <h2 className='text-xl md:text-2xl lg:text-3xl font-black text-slate-900 mb-3'>
              Global <span className='text-red-500'>Offices</span>
            </h2>
            <p className='text-slate-600 text-sm md:text-base lg:text-lg max-w-2xl mx-auto'>
              Serving clients worldwide with local presence
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'
          >
            {officeLocations.map((office, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 30px 60px -15px rgba(59, 130, 246, 0.4)'
                }}
                className='bg-white border border-gray-200 rounded-3xl p-8 cursor-pointer transition-all duration-500 group shadow-sm'
              >
                <div className='flex items-center gap-3 mb-4'>
                  <div className='w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400'>
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h3 className='text-base font-bold text-slate-900'>{office.city}</h3>
                    <p className='text-slate-500 text-sm'>{office.country}</p>
                  </div>
                </div>

                <div className='px-3 py-1 bg-red-500/20 text-red-400 text-xs font-bold rounded-full inline-block mb-4'>
                  {office.type}
                </div>

                <div className='space-y-3 text-slate-600 text-sm'>
                  <p>{office.address}</p>
                  <p className='flex items-center gap-2'>
                    <FaPhoneAlt className='text-blue-400' />
                    {office.phone}
                  </p>
                  <p className='flex items-center gap-2'>
                    <FaEnvelope className='text-blue-400' />
                    {office.email}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className='py-24 relative bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <h2 className='text-xl md:text-2xl lg:text-3xl font-black text-slate-900 mb-3'>
              Find <span className='text-blue-500'>Us</span>
            </h2>
            <p className='text-slate-600 text-sm md:text-base lg:text-lg max-w-2xl mx-auto'>
              Visit our headquarters in Greater Noida, India
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className='bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm'
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10684.574257008315!2d77.55170985332067!3d28.30629782814851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cb9000d2b6ca5%3A0xb6fb70a08ed97c29!2sGaur%20Yamuna%20City%2016th%20Park%20View-Tower%20B!5e1!3m2!1sen!2sin!4v1776579521385!5m2!1sen!2sin" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-24 relative overflow-hidden bg-gray-50'>
        <div className='relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='bg-white border border-gray-200 rounded-3xl p-12 md:p-16 shadow-lg'
          >
            <h2 className='text-xl md:text-2xl lg:text-3xl font-black text-slate-900 mb-4'>
              Ready to <span className='text-red-500'>Start</span> Your Project?
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className='text-base md:text-lg lg:text-xl text-slate-600 mb-8 md:mb-10 max-w-2xl mx-auto'
            >
              Contact us today to discuss your requirements and get a customized solution
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className='flex flex-wrap justify-center gap-4'
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(220, 38, 38, 0.6)' }}
                whileTap={{ scale: 0.95 }}
                className='px-8 py-4 md:px-10 md:py-5 bg-red-500 hover:bg-red-600 text-white font-black text-base md:text-lg rounded-xl shadow-lg shadow-red-500/50 transition-all flex items-center gap-3'
              >
                <FaPhoneAlt />
                Call Us Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='px-8 py-4 md:px-10 md:py-5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-base md:text-lg rounded-xl border border-blue-500 transition-all flex items-center gap-3'
              >
                <FaWhatsapp />
                WhatsApp Us
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

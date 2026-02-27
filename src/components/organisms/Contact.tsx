'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { SectionContainer } from '@/components/templates/SectionContainer';
import { Heading, Paragraph } from '@/components/atoms/Typography';
import { Input, TextArea } from '@/components/atoms/Input';
import { Button } from '@/components/atoms/Button';
import { ContactInfo, SocialLink as SocialLinkType, FormData } from '@/types';
import { containerVariants, itemVariants } from '@/lib/animations';

const contactInfo: ContactInfo[] = [
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email",
    value: "dnawasany@gmail.com",
    link: "mailto:dnawasany@gmail.com"
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Phone",
    value: "+20 123 456 7890",
    link: "tel:+201234567890"
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Location",
    value: "Alexandria, Egypt",
    link: "https://www.google.com/maps/place/Alexandria,+Egypt"
  }
];

const socialLinks: SocialLinkType[] = [
  {
    icon: <Github className="w-6 h-6" />,
    title: "GitHub",
    url: "https://github.com/MohamedNawsany",
    color: "hover:text-gray-900"
  },
  {
    icon: <Linkedin className="w-6 h-6" />,
    title: "LinkedIn",
    url: "https://linkedin.com/in/mohamed-nawasany",
    color: "hover:text-blue-600"
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    title: "WhatsApp",
    url: "https://wa.me/201234567890",
    color: "hover:text-green-600"
  }
];

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await emailjs.send(
        'service_tswe9m9',
        'template_ymk3015',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message
        },
        'ASxp7pvo-Ju6g1B9r'
      );

      console.log(result.text);
      setIsSubmitted(true);
      setIsSubmitting(false);

      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setIsSubmitted(false);
      }, 3000);

    } catch (error) {
      console.error('Failed to send email:', error);
      setIsSubmitting(false);
      alert('Failed to send message. Please try again later.');
    }
  };

  return (
    <SectionContainer id="contact" bgColor="gray">
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Heading variant="h2" className="text-gray-900 mb-4">
          Get In Touch
        </Heading>
        <Paragraph className="max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? I'd love to hear from you. 
          Let's create something amazing together!
        </Paragraph>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h3 
            className="text-2xl font-semibold text-gray-900 mb-8"
            variants={itemVariants}
          >
            Let's Connect
          </motion.h3>
          
          <div className="space-y-6 mb-12">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                target={info.link.startsWith('http') ? "_blank" : "_self"}
                rel={info.link.startsWith('http') ? "noopener noreferrer" : ""}
                className="flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group"
                variants={itemVariants}
                whileHover={{ x: 5, scale: 1.02 }}
              >
                <motion.div 
                  className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {info.icon}
                </motion.div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900">
                    {info.title}
                  </h4>
                  <p className="text-gray-600">
                    {info.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Social Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold text-gray-900 mb-6">
              Follow Me
            </h4>
            <div className="flex space-x-4 mb-12">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-gray-600 ${social.color}`}
                  title={social.title}
                  whileHover={{ y: -4, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Availability */}
          <motion.div 
            className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <h4 className="text-lg font-semibold text-gray-900 mb-3">
              Currently Available
            </h4>
            <p className="text-gray-700 mb-4">
              I'm currently open to new opportunities and exciting projects. 
              Whether it's a full-time position, freelance work, or collaboration, 
              I'm always interested in discussing innovative ideas.
            </p>
            <div className="flex items-center">
              <motion.div 
                className="w-3 h-3 bg-green-500 rounded-full mr-3"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-green-700 font-medium">Available for work</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <form onSubmit={handleSubmit} className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Send Me a Message
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <Input
                label="Full Name"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="Your full name"
              />
              
              <Input
                label="Email Address"
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="your.email@example.com"
              />
            </div>

            <div className="mb-6">
              <Input
                label="Subject"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                placeholder="What's this about?"
              />
            </div>

            <div className="mb-6">
              <TextArea
                label="Message"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                placeholder="Tell me about your project or idea..."
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting || isSubmitted}
              className={`w-full flex items-center justify-center ${
                isSubmitted 
                  ? 'bg-green-600 hover:bg-green-700' 
                  : ''
              }`}
            >
              {isSubmitting ? (
                <motion.div 
                  className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
              ) : isSubmitted ? (
                <>
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Message Sent!
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </motion.div>
      </div>
    </SectionContainer>
  );
}

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Card, CardContent } from '../components/ui/card'
import { createClient } from '@supabase/supabase-js'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import { toast } from 'sonner'
import { Textarea } from '@/components/ui/textarea'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

const Contact = () => {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    company: '',
    phone: '',
    question: '',
    message: '',
    referer: '',
    form_source: '',
  })

  const handleInputChange = (valueOrEvent, name) => {
    if (typeof valueOrEvent === 'string' && name) {
      // For Select (value passed directly)
      setFormData((prev) => ({ ...prev, [name]: valueOrEvent }))
    } else {
      // For native inputs/textareas
      const e = valueOrEvent
      setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }
  }
  const validateForm = () => {
    const errors = []

    // Check required fields

    if (!formData.full_name.trim()) {
      errors.push('Full Name is required')
    }

    if (!formData.email.trim()) {
      errors.push('Work Email is required')
    } else {
      // Email format validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(formData.email)) {
        errors.push('Please enter a valid email address')
      }
    }

    if (!formData.company.trim()) {
      errors.push('Company is required')
    }

    // Phone validation (only if provided)
    if (formData.phone.trim()) {
      const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/
      if (!phoneRegex.test(formData.phone.replace(/[\s\-\(\)]/g, ''))) {
        errors.push('Please enter a valid phone number')
      }
    }

    if (!formData.question.trim()) {
      errors.push('Please select what you are looking for')
    }

    if (!formData.message.trim()) {
      errors.push('Message is required')
    }

    return errors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Validate form
    const validationErrors = validateForm()

    if (validationErrors.length > 0) {
      toast.error(validationErrors[0])
      return
    }
    try {
      // Insert the form data into your Supabase table

      const { error } = await supabase
        .from('contact_messages') // Replace with your table name
        .insert([
          {
            first_name: formData.full_name.trim().split(' ')[0],
            last_name: formData.full_name.trim().split(' ').slice(1).join(' '),
            full_name: formData.full_name.trim(),
            email: formData.email.trim().toLowerCase(),
            company: formData.company.trim(),
            phone: formData.phone.trim(),
            question: formData.question.trim(),
            message: formData.message.trim(),
            referer: location.pathname,
            form_source: 'contact-us-form',
          },
        ])

      if (error) throw error

      // Show success message with react-hot-toast
      toast.success("Thank you for your message! We'll get back to you soon.")
      setFormData({
        full_name: '',
        email: '',
        company: '',
        phone: '',
        question: '',
        message: '',
        referer: '',
        form_source: '',
      })
    } catch (error) {
      console.error('Error submitting form:', error)
      // Show error message with react-hot-toast
      toast.error('Something went wrong. Please try again later.')
    }
    // Handle form submission here
    // console.log('Form submitted:', formData)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+91 96546 07040',
      subtitle: 'Mon-Fri 9AM-6PM IST',
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'support@reguardai.com',
      subtitle: 'We respond within 24 hours',
    },
    {
      icon: MapPin,
      title: 'Office',
      details: '44 IIND FLOOR REGAL BUILDING',
      subtitle: 'CONNAUGHT PLACE, NEW DELHI - 110001',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Monday - Friday',
      subtitle: '9:00 AM - 7:00 PM IST',
    },
  ]

  const subjects = [
    'General Inquiry',
    'Product Demo Request',
    'Technical Support',
    'Partnership Opportunities',
    'Pricing Information',
    'Implementation Support',
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative min-h-[500px] pt-64 pb-16 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/src/assets/BannerForContactHighRes.png')",
        }}
      >
        <div className="absolute inset-0 w-full" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className=" max-w-4xl"
          >
            <div className="flex justify-start items-center">
              <div className=" px-4 py-2 bg-green-50 border border-green-200 rounded-full text-sm font-medium text-green-800 mb-6">
                Get In Touch
              </div>
            </div>
            {/* text-reguard-navy */}
            <h1 className="text-5xl lg:text-6xl font-bold text-reguard-navy mb-6">
              Contact Our
              <br />
              <span className="text-reguard-red">Expert Team</span>
            </h1>
            {/* text-gray-600 */}
            <p className="text-xl text-gray-600 leading-relaxed mb-8 w-[70%]">
              Ready to protect your institution from fraud? Our compliance
              experts are here to help you get started with ReguardAI.
            </p>
          </motion.div>
        </div>
      </section>
      {/* Contact Info Cards */}
      {/* <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center bg-white border border-gray-200 hover:shadow-lg transition-all duration-300">
                  <CardContent className="px-2 py-6">
                    <div className="inline-flex p-3 rounded-full bg-reguard-red/10 mb-4">
                      <info.icon className="h-6 w-6 text-reguard-red" />
                    </div>
                    <h3 className="font-semibold text-reguard-navy mb-2">
                      {info.title}
                    </h3>
                    <p className="text-gray-900 font-medium mb-1">
                      {info.details}
                    </p>
                    <p className="text-sm text-gray-500">{info.subtitle}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}
      {/* Contact Form & Demo CTA */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white shadow-xl">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-reguard-navy mb-6">
                    Get In Touch
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Input
                          type="text"
                          name="full_name"
                          required
                          value={formData.full_name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-reguard-red focus:border-transparent transition-all"
                          placeholder="Full Name *"
                        />
                      </div>
                      <div>
                        <Input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-reguard-red focus:border-transparent transition-all"
                          placeholder="Email Address *"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Input
                          type="text"
                          name="company"
                          required
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-reguard-red focus:border-transparent transition-all"
                          placeholder="Company Name *"
                        />
                      </div>
                      <div>
                        <Input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-reguard-red focus:border-transparent transition-all"
                          placeholder="Phone Number*"
                        />
                      </div>
                    </div>

                    <div>
                      <Select
                        name="question"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-reguard-red focus:border-transparent transition-all"
                        required
                        value={formData.question}
                        onValueChange={(value) =>
                          handleInputChange(value, 'question')
                        }
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="What are you looking for ?*" />
                        </SelectTrigger>
                        <SelectContent>
                          {subjects.map((subject) => (
                            <SelectItem key={subject} value={subject}>
                              {subject}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Textarea
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-reguard-red focus:border-transparent transition-all resize-none"
                        placeholder="Tell us about your compliance challenges and how we can help..."
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full text-xl bg-red-600 hover:bg-red-700 text-white py-6 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
                    >
                      <Send size={32} />
                      <span>Send Message</span>
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            <div className="flex flex-col gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300">
                    <CardContent className="flex items-start gap-4 p-6">
                      <div className="flex-shrink-0 p-3 rounded-full bg-reguard-red/20">
                        <info.icon className="h-6 w-6 text-reguard-red" />
                      </div>
                      <div className="flex flex-col">
                        <h4 className="font-semibold text-lg mb-1">
                          {info.title}
                        </h4>
                        <p className="text-gray-800 font-medium mb-1">
                          {info.details}
                        </p>
                        <p className="text-sm text-gray-800">{info.subtitle}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Demo CTA */}
            {/* <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <Card className="bg-reguard-navy text-white">
                <CardContent className="p-8">
                  <div>

                  <div>
                  <h3 className="text-2xl font-bold mb-4">Book a Live Demo</h3>
                  <p className="text-blue-100 mb-6">
                    See ReguardAI in action with a personalized demo tailored to
                    your institution's needs.
                  </p>
                  <div className="space-y-4 mb-8">
                    {[
                      'Live fraud detection demonstration',
                      'Custom ROI calculation',
                      'Implementation timeline',
                      'Pricing discussion',
                    ].map((item, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-blue-100">{item}</span>
                      </div>
                    ))}
                  </div>
                  <Button
                    onClick={() =>
                      window.open(
                        'https://cal.com/reguardai.com/secret',
                        '_blank'
                      )
                    }
                    className="w-full bg-reguard-red hover:bg-red-700 text-white py-4 text-lg font-semibold"
                  >
                    Schedule Demo Now
                  </Button>
                </div>
                  </div>
                </CardContent>
              </Card>

            </motion.div> */}
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      {/* <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-reguard-navy mb-6">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: 'How quickly can ReguardAI be implemented?',
                answer:
                  'Most implementations are completed within 2-4 weeks, depending on your existing infrastructure and requirements.',
              },
              {
                question:
                  'What types of financial institutions do you work with?',
                answer:
                  'We work with banks, NBFCs, fintech companies, payment processors, and digital lending platforms across India.',
              },
              {
                question: 'Is ReguardAI compliant with Indian regulations?',
                answer:
                  'Yes, our platform is fully compliant with RBI, SEBI, and other Indian financial regulations, with automatic updates for regulatory changes.',
              },
              {
                question: 'What kind of support do you provide?',
                answer:
                  'We provide 24/7 technical support, dedicated account management, and ongoing compliance consulting to ensure your success.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-50 border border-gray-200">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-reguard-navy mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  )
}

export default Contact

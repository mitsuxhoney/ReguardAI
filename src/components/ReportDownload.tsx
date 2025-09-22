import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, X, FileText, Globe, TrendingUp, Shield } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import File from '../assets/File.png';
const ReportDownload = () => {
  const [isDownloadFormOpen, setIsDownloadFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    country: ''
  });

  const countries = [
    'India', 'United States', 'United Kingdom', 'Canada', 'Australia',
    'Singapore', 'UAE', 'Germany', 'France', 'Japan', 'South Korea',
    'Brazil', 'Mexico', 'South Africa', 'Nigeria', 'Other'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Report download requested:', formData);
    // Here you would typically send the data to your backend
    // and trigger the actual download
    setisDownloadFormOpen(false);
    setFormData({
      firstName: '',
      lastName: '',
      company: '',
      email: '',
      country: ''
    });
    // Simulate download
    alert('Thank you! Your report download will begin shortly.');
  };

  return (
    <>
      <section id="report" className="py-24 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Header */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-sm font-medium text-blue-800 mb-6">
                  <FileText className="h-4 w-4 mr-2" />
                  Exclusive Industry Report
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-reguard-navy">
                  Get the Latest
                  <br />
                  <span className="text-reguard-red">Cyber Fraud Intelligence</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Download our comprehensive 2025 Global Cyber Fraud Trends Report
                </p>
              </div>

              {/* Main Content Card */}
              <Card className="overflow-hidden bg-white shadow-xl border-0 max-w-5xl mx-auto">
                <CardContent className="p-0">
                  <div className="lg:flex lg:items-center">
                    {/* Report Visual */}
                    <div className="lg:w-2/5 relative">
                      <div className="aspect-[4/5] lg:aspect-[3/4] relative overflow-hidden bg-gradient-to-br from-[#2a333c] to-[#1b252e]">
                        {/* Background Image */}
                        <img
                          src={File}
                          alt="Cybersecurity Analytics Dashboard"
                          className="absolute inset-0 w-full h-full object-cover opacity-30"
                        />
                        {/* Gradient Overlay */}
                        {/* <div className="absolute inset-0 bg-gradient-to-br from-reguard-navy/90 to-slate-800/90"></div>
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:50px_56px] opacity-20"></div> */}
                        <div className="relative z-10 p-8 h-full flex flex-col justify-between text-white">
                          <div>
                            <div className="inline-flex px-3 py-1 bg-reguard-red rounded-full text-xs font-semibold mb-4">
                              2025 EDITION
                            </div>
                            {/* <h3 className="text-2xl lg:text-3xl font-bold mb-2">
                              Global Cyber Fraud Trends Report
                            </h3> */}
                          </div>
                          <div className="space-y-3">
                            <div className="flex items-center text-sm opacity-90">
                              <Globe className="h-4 w-4 mr-2" />
                              <span>150+ Pages • 50+ Countries</span>
                            </div>
                            <div className="w-full bg-white/20 rounded-full h-2">
                              <div className="bg-reguard-red h-2 rounded-full w-3/4"></div>
                            </div>
                            <p className="text-xs opacity-75">Latest fraud intelligence & defense strategies</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {!isDownloadFormOpen ? (
                      {/* Content */ }
                      <div className="lg:w-3/5 p-8 lg:p-12">
                    <h3 className="text-2xl lg:text-3xl font-bold text-reguard-navy mb-6">
                      Essential Reading for Financial Leaders
                    </h3>

                    <div className="grid gap-4 mb-8">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center">
                          <TrendingUp className="h-4 w-4 text-reguard-red" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Latest Fraud Patterns</h4>
                          <p className="text-gray-600 text-sm">Emerging threats across global markets</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center">
                          <Shield className="h-4 w-4 text-reguard-red" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Defense Strategies</h4>
                          <p className="text-gray-600 text-sm">Proven methods to protect your institution</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center">
                          <FileText className="h-4 w-4 text-reguard-red" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Regulatory Updates</h4>
                          <p className="text-gray-600 text-sm">Compliance across jurisdictions</p>
                        </div>
                      </div>
                    </div>

                    <Button
                      onClick={() => setisDownloadFormOpen(true)}
                      size="lg"
                      className="w-full bg-reguard-red hover:bg-red-700 text-white py-4 text-lg font-semibold group shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <Download className="mr-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
                      Download Free Report
                    </Button>
                    <p className="text-xs text-gray-500 text-center mt-3">
                      No spam. Unsubscribe anytime. Your data is secure.
                    </p>
                  </div>
                  ) : (
                  null
                  )
                    }
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section >

      {/* Download Form Modal */ }
      <AnimatePresence>
  {
    isDownloadFormOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={() => setisDownloadFormOpen(false)}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="w-full max-w-md"
          onClick={(e) => e.stopPropagation()}
        >
          <Card className="bg-white shadow-2xl border-0">
            <CardContent className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className="p-2 bg-reguard-red rounded-lg mr-3">
                    <Download className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-reguard-navy">Download Report</h3>
                    <p className="text-sm text-gray-500">Get instant access to the report</p>
                  </div>
                </div>
                <button
                  onClick={() => setisDownloadFormOpen(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-reguard-red focus:border-transparent transition-all"
                      placeholder="John"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-reguard-red focus:border-transparent transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-reguard-red focus:border-transparent transition-all"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-reguard-red focus:border-transparent transition-all"
                    placeholder="you@company.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Country *
                  </label>
                  <select
                    name="country"
                    required
                    value={formData.country}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-reguard-red focus:border-transparent transition-all"
                  >
                    <option value="">Select your country</option>
                    {countries.map((country) => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-800">
                  <div className="flex items-center gap-2 font-medium mb-1">
                    <FileText className="h-4 w-4" />
                    You'll receive:
                  </div>
                  <ul className="space-y-1 ml-6">
                    <li>• Instant download link via email</li>
                    <li>• 150+ page comprehensive report</li>
                    <li>• Quarterly fraud trend updates</li>
                  </ul>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-reguard-red hover:bg-red-700 text-white py-4 text-lg font-semibold"
                >
                  Download Report Now
                </Button>
              </form>

              <p className="text-xs text-gray-500 text-center mt-4">
                By downloading, you agree to receive communications from ReguardAI. Unsubscribe anytime.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    )
  }
      </AnimatePresence >
    </>
  );
};

export default ReportDownload;
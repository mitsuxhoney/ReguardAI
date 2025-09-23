import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, X, FileText, Globe, TrendingUp, Shield } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import File from '../assets/File.png';
import { FlipCard } from './ui/flip-animation';



const ReportDownload = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    designation: '',
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
    setIsModalOpen(false);
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




              <Card className="overflow-hidden bg-white shadow-xl border-0 max-w-5xl mx-auto">
                <CardContent className="p-0">
                  <div className="lg:flex lg:items-center">
                    <div className="lg:w-2/5 relative">
                      <div className="aspect-[4/5] lg:aspect-[3/4] relative overflow-hidden bg-gradient-to-br from-[#222645] to-[#232323]">
                        <img
                          src={File}
                          alt="Cybersecurity Analytics Dashboard"
                          className="absolute inset-0 w-full h-full object-cover opacity-30"
                        />
                        <div className="relative z-10 p-8 h-full flex flex-col justify-between text-white">
                          <div>
                            <div className="inline-flex px-3 py-1 bg-reguard-red rounded-full text-xs font-semibold mb-4">
                              2025 EDITION
                            </div>
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


                    {/* right */}
                    {/* <div className="lg:w-3/5 p-8 lg:p-12">
                      <motion.div
                        className="relative w-full h-full"
                        initial={false}
                        animate={{ rotateY: isModalOpen ? 180 : 0 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        style={{ transformStyle: "preserve-3d" }}
                      >

                        <div className="lg:w-3/5 p-8 lg:p-5">
                          <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <label className="block text-sm font-semibold text-gray-600 mb-1 tracking-wide">
                                  First Name <span className="text-red-600">*</span>
                                </label>
                                <input
                                  type="text"
                                  name="firstName"
                                  required
                                  value={formData.firstName}
                                  onChange={handleInputChange}
                                  className="w-full h-8 px-3 py-2 border border-gray-200 rounded-md bg-gray-50 focus:bg-white focus:ring-2 focus:ring-reguard-red focus:border-reguard-red transition-all placeholder-gray-400 text-sm shadow-sm"
                                  placeholder="John"
                                  autoComplete="given-name"
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-semibold text-gray-600 mb-1 tracking-wide">
                                  Last Name <span className="text-red-600">*</span>
                                </label>
                                <input
                                  type="text"
                                  name="lastName"
                                  required
                                  value={formData.lastName}
                                  onChange={handleInputChange}
                                  className="w-full h-8 px-3 py-2 border border-gray-200 rounded-md bg-gray-50 focus:bg-white focus:ring-2 focus:ring-reguard-red focus:border-reguard-red transition-all placeholder-gray-400 text-sm shadow-sm"
                                  placeholder="Doe"
                                  autoComplete="family-name"
                                />
                              </div>
                            </div>

                            <div>
                              <label className="block text-sm font-semibold text-gray-600 mb-1 tracking-wide">
                                Company Name <span className="text-red-600">*</span>
                              </label>
                              <input
                                type="text"
                                name="company"
                                required
                                value={formData.company}
                                onChange={handleInputChange}
                                className="w-full h-8 px-3 py-2 border border-gray-200 rounded-md bg-gray-50 focus:bg-white focus:ring-2 focus:ring-reguard-red focus:border-reguard-red transition-all placeholder-gray-400 text-sm shadow-sm"
                                placeholder="Your Company"
                                autoComplete="organization"
                              />
                            </div>

                            <div>
                              <label className="block text-sm font-semibold text-gray-600 mb-1 tracking-wide">
                                Work Email <span className="text-red-600">*</span>
                              </label>
                              <input
                                type="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full h-8 px-3 py-2 border border-gray-200 rounded-md bg-gray-50 focus:bg-white focus:ring-2 focus:ring-reguard-red focus:border-reguard-red transition-all placeholder-gray-400 text-sm shadow-sm"
                                placeholder="you@company.com"
                                autoComplete="email"
                              />
                            </div>

                            <div>
                              <label className="block text-sm font-semibold text-gray-600 mb-1 tracking-wide">
                                Country <span className="text-red-600">*</span>
                              </label>
                              <select
                                name="country"
                                required
                                value={formData.country}
                                onChange={handleInputChange}
                                className="w-full h-8 px-3 py-0 border border-gray-200 rounded-md bg-gray-50 focus:bg-white focus:ring-2 focus:ring-reguard-red focus:border-reguard-red transition-all text-sm shadow-sm"
                              >
                                <option value="">Select your country</option>
                                {countries.map((country) => (
                                  <option key={country} value={country}>
                                    {country}
                                  </option>
                                ))}
                              </select>
                            </div>

                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-xs text-blue-800 mt-2">
                              <div className="flex items-center gap-2 font-semibold mb-1">
                                <FileText className="h-4 w-4" />
                                You'll receive:
                              </div>
                              <ul className="space-y-1 ml-6 list-disc">
                                <li>Instant download link via email</li>
                                <li>150+ page comprehensive report</li>
                                <li>Quarterly fraud trend updates</li>
                              </ul>
                            </div>

                            <Button
                              type="submit"
                              className="w-full bg-reguard-red hover:bg-red-700 text-white py-3 text-base font-semibold rounded-md shadow-md transition-all"
                            >
                              Download Report Now
                            </Button>
                          </form>

                          <p className="text-xs text-gray-500 text-center mt-4">
                            By downloading, you agree to receive communications from ReguardAI. Unsubscribe anytime.
                          </p>
                        </div>

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
                            onClick={() => setIsModalOpen(true)}
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
                      </motion.div>
                    </div> */}

                    {/* Right side - Flippable content */}
                    <div className="lg:w-3/5 relative">
                      <div className="relative w-full h-full perspective-1000 min-h-[540px]">
                        <motion.div
                          className="relative w-full h-full"
                          initial={false}
                          animate={{ rotateY: isModalOpen ? 180 : 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          style={{
                            transformStyle: "preserve-3d",
                            transformOrigin: "center center"
                          }}
                        >
                          {/* Front side - Benefits */}
                          <div
                            className="absolute inset-0 w-full h-fit backface-hidden p-8 lg:p-12"
                            style={{
                              backfaceVisibility: "hidden",
                              WebkitBackfaceVisibility: "hidden"
                            }}
                          >
                            <h3 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-6">
                              Essential Reading for Financial Leaders
                            </h3>
                            <div className="grid gap-6 mb-8">
                              <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                                  <TrendingUp className="h-5 w-5 text-red-600" />
                                </div>
                                <div>
                                  <h4 className="font-semibold text-gray-900 mb-1">Latest Fraud Patterns</h4>
                                  <p className="text-gray-600 text-sm">Emerging threats across global markets and how they're evolving</p>
                                </div>
                              </div>
                              <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                                  <Shield className="h-5 w-5 text-red-600" />
                                </div>
                                <div>
                                  <h4 className="font-semibold text-gray-900 mb-1">Defense Strategies</h4>
                                  <p className="text-gray-600 text-sm">Proven methods to protect your institution from sophisticated attacks</p>
                                </div>
                              </div>
                              <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                                  <FileText className="h-5 w-5 text-red-600" />
                                </div>
                                <div>
                                  <h4 className="font-semibold text-gray-900 mb-1">Regulatory Updates</h4>
                                  <p className="text-gray-600 text-sm">Compliance requirements across different jurisdictions</p>
                                </div>
                              </div>
                            </div>
                            <button
                              onClick={() => setIsModalOpen(true)}
                              className="w-full bg-red-600 hover:bg-red-700 text-white py-4 px-6 text-lg font-semibold group shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg flex items-center justify-center gap-3"
                            >
                              <Download className="h-5 w-5 group-hover:translate-y-1 transition-transform" />
                              Download Free Report
                            </button>
                            <p className="text-xs text-gray-500 text-center mt-4">
                              No spam. Unsubscribe anytime. Your data is secure.
                            </p>
                          </div>

                          {/* Back side - Form */}
                          <div
                            className="absolute inset-0 w-full h-full backface-hidden p-8 lg:px-10 lg:py-8"
                            style={{
                              backfaceVisibility: "hidden",
                              WebkitBackfaceVisibility: "hidden",
                              transform: "rotateY(180deg)"
                            }}
                          >
                            <div className="flex items-center justify-between mb-4">
                              <h3 className="text-2xl lg:text-2xl font-bold text-slate-800">
                                Get Your Report
                              </h3>
                              <button
                                onClick={() => setIsModalOpen(false)}
                                className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
                              >
                                ×
                              </button>
                            </div>

                            <div className="space-y-5">
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                  {/* <label className="block text-sm font-semibold text-gray-600 mb-2 tracking-wide">
                                    First Name <span className="text-red-600">*</span>
                                  </label> */}
                                  <input
                                    type="text"
                                    name="firstName"
                                    required
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                    className="w-full h-12 px-4 py-3 border border-gray-200 rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-red-600 focus:border-red-600 transition-all placeholder-gray-400 text-sm shadow-sm"
                                    placeholder="First Name"
                                    autoComplete="given-name"
                                  />
                                </div>
                                <div>
                                  {/* <label className="block text-sm font-semibold text-gray-600 mb-2 tracking-wide">
                                    Last Name <span className="text-red-600">*</span>
                                  </label> */}
                                  <input
                                    type="text"
                                    name="lastName"
                                    required
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                    className="w-full h-12 px-4 py-3 border border-gray-200 rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-red-600 focus:border-red-600 transition-all placeholder-gray-400 text-sm shadow-sm"
                                    placeholder="Last Name"
                                    autoComplete="family-name"
                                  />
                                </div>
                              </div>

                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* <label className="block text-sm font-semibold text-gray-600 mb-2 tracking-wide">
                                  Company Name <span className="text-red-600">*</span>
                                </label> */}
                                <div>
                                  <input
                                    type="text"
                                    name="company"
                                    required
                                    value={formData.company}
                                    onChange={handleInputChange}
                                    className="w-full h-12 px-4 py-3 border border-gray-200 rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-red-600 focus:border-red-600 transition-all placeholder-gray-400 text-sm shadow-sm"
                                    placeholder="Company Name"
                                    autoComplete="organization"
                                  />
                                </div>
                                <div>
                                  <input
                                    type="text"
                                    name="designation"
                                    required
                                    value={formData.company}
                                    onChange={handleInputChange}
                                    className="w-full h-12 px-4 py-3 border border-gray-200 rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-red-600 focus:border-red-600 transition-all placeholder-gray-400 text-sm shadow-sm"
                                    placeholder="Designation"
                                    autoComplete="organization"
                                  />
                                </div>
                              </div>

                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* <label className="block text-sm font-semibold text-gray-600 mb-2 tracking-wide">
                                  Work Email <span className="text-red-600">*</span>
                                </label> */}
                                <div>
                                  <input
                                    type="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full h-12 px-4 py-3 border border-gray-200 rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-red-600 focus:border-red-600 transition-all placeholder-gray-400 text-sm shadow-sm"
                                    placeholder="Work Email"
                                    autoComplete="email"
                                  />
                                </div>
                                <div>
                                  {/* <label className="block text-sm font-semibold text-gray-600 mb-2 tracking-wide">
                                  Country <span className="text-red-600">*</span>
                                  </label> */}
                                  <select
                                    name="country"
                                    required
                                    value={formData.country}
                                    onChange={handleInputChange}
                                    className="w-full h-12 px-4 py-0 border border-gray-200 rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-red-600 focus:border-red-600 transition-all text-sm shadow-sm"
                                  >
                                    <option value="">Country</option>
                                    {countries.map((country) => (
                                      <option key={country} value={country}>
                                        {country}
                                      </option>
                                    ))}
                                  </select>
                                </div>
                              </div>
                              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-xs text-blue-800 mt-4">
                                <div className="flex items-center gap-2 font-semibold mb-2">
                                  <FileText className="h-4 w-4" />
                                  You'll receive:
                                </div>
                                <ul className="space-y-1 ml-6 list-disc">
                                  <li>Instant download link via email</li>
                                  <li>150+ page comprehensive report</li>
                                  <li>Quarterly fraud trend updates</li>
                                </ul>
                              </div>
                              <button
                                type="button"
                                onClick={handleSubmit}
                                className="w-full bg-red-600 hover:bg-red-700 text-white py-3 text-base font-semibold rounded-lg shadow-md transition-all hover:shadow-lg"
                              >
                                Download Report Now
                              </button>
                            </div>

                            <p className="text-xs text-gray-500 text-center mt-4">
                              By downloading, you agree to receive communications from ReguardAI. Unsubscribe anytime.
                            </p>
                          </div>
                        </motion.div>
                      </div>
                    </div>


                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ReportDownload;




{/* Download Form Modal */ }
{/* <AnimatePresence>
        {false && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsModalOpen(false)}
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
                      onClick={() => setIsModalOpen(false)}
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
        )}
      </AnimatePresence> */}
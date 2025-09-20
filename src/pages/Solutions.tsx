import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Users, Building, TrendingUp, FileCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';

const Solutions = () => {
  const solutions = [
    {
      id: 'customer-compliance',
      icon: Users,
      title: 'Customer Compliance',
      description: 'Automated KYC monitoring and customer risk assessment with real-time fraud detection.',
      features: ['Real-time KYC monitoring', 'Risk scoring algorithms', 'Automated alerts', 'Compliance reporting'],
      color: 'bg-blue-50 border-blue-200 hover:border-blue-400'
    },
    {
      id: 'vendor-management',
      icon: Building,
      title: 'Vendor Management',
      description: 'Comprehensive vendor screening and ongoing monitoring for supply chain security.',
      features: ['Vendor screening', 'Ongoing monitoring', 'Risk assessment', 'Compliance tracking'],
      color: 'bg-green-50 border-green-200 hover:border-green-400'
    },
    {
      id: 'merchant-monitoring',
      icon: TrendingUp,
      title: 'Merchant Monitoring',
      description: 'Continuous monitoring of merchant activities to prevent fraudulent transactions.',
      features: ['Transaction monitoring', 'Behavioral analysis', 'Fraud detection', 'Risk mitigation'],
      color: 'bg-purple-50 border-purple-200 hover:border-purple-400'
    },
    {
      id: 'risk-assessment',
      icon: Shield,
      title: 'Risk Assessment',
      description: 'Advanced AI-powered risk assessment tools for comprehensive threat analysis.',
      features: ['AI risk scoring', 'Predictive analytics', 'Threat intelligence', 'Risk reporting'],
      color: 'bg-red-50 border-red-200 hover:border-red-400'
    },
    {
      id: 'regulatory-compliance',
      icon: FileCheck,
      title: 'Regulatory Compliance',
      description: 'Automated compliance with RBI, SEBI, and other Indian financial regulations.',
      features: ['Regulatory updates', 'Compliance automation', 'Audit trails', 'Reporting tools'],
      color: 'bg-yellow-50 border-yellow-200 hover:border-yellow-400'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-sm font-medium text-blue-800 mb-6">
              Complete Solution Suite
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-reguard-navy mb-6">
              AI-Powered Compliance
              <br />
              <span className="text-reguard-red">Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Comprehensive post-onboarding compliance solutions designed specifically for India's financial ecosystem
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-6">
            {/* Customer Compliance - Large Featured Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -4 }}
              className="lg:col-span-8"
            >
              <Card className="h-full bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 hover:border-blue-400 transition-all duration-300 group cursor-pointer overflow-hidden">
                <CardContent className="p-8 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center">
                      <div className="p-4 rounded-2xl bg-white shadow-sm mr-6">
                        <Users className="h-10 w-10 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-reguard-navy mb-2">Customer Compliance</h3>
                        <p className="text-blue-700 font-medium">Most Popular Solution</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-600">99.8%</div>
                      <div className="text-sm text-blue-600">Accuracy</div>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-8 text-lg leading-relaxed flex-grow">
                    Automated KYC monitoring and customer risk assessment with real-time fraud detection and compliance reporting.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="space-y-3">
                      {solutions[0].features.slice(0, 2).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-gray-700">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                          <span className="font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-3">
                      {solutions[0].features.slice(2).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-gray-700">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                          <span className="font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Link to={`/solutions/${solutions[0].id}`}>
                    <Button className="w-full bg-reguard-red hover:bg-red-700 text-white group-hover:shadow-lg transition-all duration-300 py-3 text-lg font-semibold">
                      Learn More
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>

            {/* Vendor Management - Medium Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -4 }}
              className="lg:col-span-4"
            >
              <Card className="h-full bg-gradient-to-br from-green-50 to-green-100 border-green-200 hover:border-green-400 transition-all duration-300 group cursor-pointer">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-xl bg-white shadow-sm mr-4">
                      <Building className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-reguard-navy">Vendor Management</h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed flex-grow">
                    Comprehensive vendor screening and ongoing monitoring for supply chain security.
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {solutions[1].features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-gray-600 text-sm">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link to={`/solutions/${solutions[1].id}`}>
                    <Button className="w-full bg-reguard-red hover:bg-red-700 text-white group-hover:shadow-lg transition-all duration-300">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>

            {/* Merchant Monitoring - Medium Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -4 }}
              className="lg:col-span-4"
            >
              <Card className="h-full bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 hover:border-purple-400 transition-all duration-300 group cursor-pointer">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-xl bg-white shadow-sm mr-4">
                      <TrendingUp className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-reguard-navy">Merchant Monitoring</h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed flex-grow">
                    Continuous monitoring of merchant activities to prevent fraudulent transactions.
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {solutions[2].features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-gray-600 text-sm">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link to={`/solutions/${solutions[2].id}`}>
                    <Button className="w-full bg-reguard-red hover:bg-red-700 text-white group-hover:shadow-lg transition-all duration-300">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>

            {/* Risk Assessment - Large Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -4 }}
              className="lg:col-span-8"
            >
              <Card className="h-full bg-gradient-to-br from-red-50 to-red-100 border-red-200 hover:border-red-400 transition-all duration-300 group cursor-pointer overflow-hidden">
                <CardContent className="p-8 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center">
                      <div className="p-4 rounded-2xl bg-white shadow-sm mr-6">
                        <Shield className="h-10 w-10 text-red-600" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-reguard-navy mb-2">Risk Assessment</h3>
                        <p className="text-red-700 font-medium">AI-Powered Intelligence</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-red-600">{'<'}1s</div>
                      <div className="text-sm text-red-600">Response</div>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-8 text-lg leading-relaxed flex-grow">
                    Advanced AI-powered risk assessment tools for comprehensive threat analysis and predictive intelligence.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="space-y-3">
                      {solutions[3].features.slice(0, 2).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-gray-700">
                          <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                          <span className="font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-3">
                      {solutions[3].features.slice(2).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-gray-700">
                          <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                          <span className="font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Link to={`/solutions/${solutions[3].id}`}>
                    <Button className="w-full bg-reguard-red hover:bg-red-700 text-white group-hover:shadow-lg transition-all duration-300 py-3 text-lg font-semibold">
                      Learn More
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>

            {/* Regulatory Compliance - Full Width */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -4 }}
              className="lg:col-span-12"
            >
              <Card className="bg-gradient-to-r from-yellow-50 via-yellow-100 to-orange-50 border-yellow-200 hover:border-yellow-400 transition-all duration-300 group cursor-pointer overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="p-4 rounded-2xl bg-white shadow-sm mr-6">
                        <FileCheck className="h-10 w-10 text-yellow-600" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-reguard-navy mb-2">Regulatory Compliance</h3>
                        <p className="text-yellow-700 font-medium mb-4">Automated compliance with RBI, SEBI, and other Indian financial regulations</p>
                        <div className="flex flex-wrap gap-4">
                          {solutions[4].features.map((feature, idx) => (
                            <div key={idx} className="flex items-center text-gray-700">
                              <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                              <span className="font-medium">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-yellow-600 mb-2">100%</div>
                      <div className="text-sm text-yellow-600 mb-4">Compliant</div>
                      <Link to={`/solutions/${solutions[4].id}`}>
                        <Button className="bg-reguard-red hover:bg-red-700 text-white group-hover:shadow-lg transition-all duration-300 px-8 py-3 text-lg font-semibold">
                          Learn More
                          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-reguard-navy">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-red-500/20 border border-red-400/30 rounded-full text-sm font-medium text-red-200 mb-8">
              Every day you wait costs you more in fraud losses
            </div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Stop Fraud?
              <br />
              Book Your Demo
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Schedule a personalized demo to see how ReguardAI can protect your institution from fraud and ensure compliance
            </p>
            <Button 
              size="lg"
              onClick={() => window.open('https://cal.com/reguardai.com/secret', '_blank')}
              className="bg-reguard-red hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold"
            >
              Book Your Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
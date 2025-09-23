import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Landmark, Smartphone, Building2, CreditCard, Banknote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import CTA from '@/components/CTA';

const Industries = () => {
  const industries = [
    {
      id: 'banking',
      icon: Landmark,
      title: 'Banking',
      description: 'Comprehensive compliance solutions for traditional banks and cooperative banks.',
      challenges: ['KYC compliance', 'AML monitoring', 'Regulatory reporting', 'Customer screening'],
      benefits: ['99.8% fraud detection', 'Automated compliance', 'Real-time monitoring', 'Cost reduction'],
      color: 'bg-blue-50 border-blue-200 hover:border-blue-400'
    },
    {
      id: 'fintech',
      icon: Smartphone,
      title: 'Fintech',
      description: 'Scalable compliance infrastructure for digital-first financial services.',
      challenges: ['Rapid scaling', 'Digital onboarding', 'API security', 'Regulatory adaptation'],
      benefits: ['Instant deployment', 'API integration', 'Scalable architecture', 'Compliance automation'],
      color: 'bg-green-50 border-green-200 hover:border-green-400'
    },
    {
      id: 'nbfcs',
      icon: Building2,
      title: 'NBFCs',
      description: 'Specialized compliance solutions for Non-Banking Financial Companies.',
      challenges: ['RBI compliance', 'Credit risk', 'Customer verification', 'Operational efficiency'],
      benefits: ['RBI compliance', 'Risk mitigation', 'Process automation', 'Cost optimization'],
      color: 'bg-purple-50 border-purple-200 hover:border-purple-400'
    },
    {
      id: 'payment-processors',
      icon: CreditCard,
      title: 'Payment Processors',
      description: 'Real-time fraud prevention for payment processing companies.',
      challenges: ['Transaction fraud', 'Merchant screening', 'Chargeback prevention', 'PCI compliance'],
      benefits: ['Real-time detection', 'Merchant monitoring', 'Fraud prevention', 'Compliance assurance'],
      color: 'bg-red-50 border-red-200 hover:border-red-400'
    },
    {
      id: 'digital-lending',
      icon: Banknote,
      title: 'Digital Lending',
      description: 'AI-powered risk assessment for digital lending platforms.',
      challenges: ['Credit assessment', 'Borrower verification', 'Default prediction', 'Regulatory compliance'],
      benefits: ['AI credit scoring', 'Automated verification', 'Risk prediction', 'Compliance automation'],
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
            <div className="inline-flex items-center px-4 py-2 bg-green-50 border border-green-200 rounded-full text-sm font-medium text-green-800 mb-6">
              Industry Expertise
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-reguard-navy mb-6">
              Tailored Solutions for
              <br />
              <span className="text-reguard-red">Every Industry</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Specialized compliance solutions designed for the unique needs of different financial sectors
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {industries.slice(0, 4).map((industry, index) => (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <Card className={`h-full ${industry.color} transition-all duration-300 group cursor-pointer`}>
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="p-3 rounded-lg bg-white shadow-sm mr-4">
                        <industry.icon className="h-8 w-8 text-reguard-red" />
                      </div>
                      <h3 className="text-2xl font-bold text-reguard-navy">{industry.title}</h3>
                    </div>
                    
                    <p className="text-gray-700 mb-6 leading-relaxed">{industry.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-3">Key Challenges</h4>
                        <div className="space-y-2">
                          {industry.challenges.map((challenge, idx) => (
                            <div key={idx} className="flex items-center text-gray-600 text-sm">
                              <div className="w-1.5 h-1.5 bg-red-400 rounded-full mr-2"></div>
                              <span>{challenge}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-3">Our Benefits</h4>
                        <div className="space-y-2">
                          {industry.benefits.map((benefit, idx) => (
                            <div key={idx} className="flex items-center text-gray-600 text-sm">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                              <span>{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <Link to={`/industries/${industry.id}`}>
                      <Button className="w-full bg-reguard-red hover:bg-red-700 text-white group-hover:shadow-lg transition-all duration-300">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Digital Lending - Full Width */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ y: -4 }}
          >
            <Card className={`${industries[4].color} transition-all duration-300 group cursor-pointer`}>
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="p-3 rounded-lg bg-white shadow-sm mr-4">
                      {React.createElement(industries[4].icon, { className: "h-8 w-8 text-reguard-red" })}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-reguard-navy">{industries[4].title}</h3>
                      <p className="text-gray-700">{industries[4].description}</p>
                    </div>
                  </div>
                  <Link to={`/industries/${industries[4].id}`}>
                    <Button className="bg-reguard-red hover:bg-red-700 text-white group-hover:shadow-lg transition-all duration-300">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Key Challenges</h4>
                    <div className="space-y-2">
                      {industries[4].challenges.map((challenge, idx) => (
                        <div key={idx} className="flex items-center text-gray-600">
                          <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                          <span>{challenge}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Our Benefits</h4>
                    <div className="space-y-2">
                      {industries[4].benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center text-gray-600">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-24 bg-reguard-navy">
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
      </section> */}
      <CTA/>
    </div>
  );
};

export default Industries;
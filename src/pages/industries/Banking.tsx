import React from 'react';
import { motion } from 'framer-motion';
import { Landmark, CheckCircle, ArrowRight, Shield, Users, FileCheck } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import CTA from '@/components/CTA';

const Banking = () => {
  const challenges = [
    'Complex KYC compliance requirements',
    'AML monitoring and reporting',
    'Customer risk assessment',
    'Regulatory compliance burden',
    'Manual review processes',
    'High operational costs'
  ];

  const solutions = [
    {
      icon: Shield,
      title: 'Automated KYC Monitoring',
      description: 'Continuous customer monitoring with real-time risk assessment and compliance tracking.'
    },
    {
      icon: Users,
      title: 'AML Compliance',
      description: 'Advanced anti-money laundering detection with automated suspicious activity reporting.'
    },
    {
      icon: FileCheck,
      title: 'Regulatory Reporting',
      description: 'Automated generation of regulatory reports for RBI and other compliance requirements.'
    }
  ];

  const benefits = [
    '99.8% fraud detection accuracy',
    '85% reduction in manual reviews',
    'Real-time compliance monitoring',
    'Automated regulatory reporting',
    'Cost reduction up to 70%',
    'Improved customer experience'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 border border-blue-200 rounded-full text-sm font-medium text-blue-800 mb-6">
              <Landmark className="h-4 w-4 mr-2" />
              Banking Solutions
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-reguard-navy mb-6">
              AI-Powered Compliance for
              <br />
              <span className="text-reguard-red">Banking Institutions</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Comprehensive compliance solutions designed specifically for traditional banks, cooperative banks, and regional banking institutions across India.
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

      {/* Challenges Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-reguard-navy mb-6">
                Banking Compliance Challenges
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Traditional banks face increasing regulatory pressure and compliance complexity that manual processes can't handle efficiently.
              </p>
              <div className="space-y-4">
                {challenges.map((challenge, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">{challenge}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-reguard-navy mb-6">Industry Impact</h3>
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-red-600 mb-2">₹15,000Cr+</div>
                      <div className="text-gray-600">Annual fraud losses in Indian banking</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-blue-600 mb-2">40%</div>
                      <div className="text-gray-600">Increase in compliance costs</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-purple-600 mb-2">60%</div>
                      <div className="text-gray-600">Manual review processes</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-reguard-navy mb-6">
              Our Banking Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI-powered solutions designed specifically for banking compliance requirements
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-white border border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="inline-flex p-4 rounded-full bg-blue-50 mb-6">
                      <solution.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-reguard-navy mb-4">{solution.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{solution.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-reguard-navy mb-6">
                Benefits for Banking Institutions
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Transform your compliance operations with AI-powered automation that reduces costs and improves accuracy.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-reguard-navy mb-6">Success Metrics</h3>
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Fraud Prevention</span>
                      <span className="text-2xl font-bold text-green-600">₹500Cr+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Cost Reduction</span>
                      <span className="text-2xl font-bold text-blue-600">70%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Processing Speed</span>
                      <span className="text-2xl font-bold text-purple-600">10x faster</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Implementation</span>
                      <span className="text-2xl font-bold text-orange-600">2 weeks</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
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

export default Banking;
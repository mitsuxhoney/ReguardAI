import React from 'react';
import { motion } from 'framer-motion';
import { Banknote, CheckCircle, ArrowRight, Brain, TrendingUp, UserCheck } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import CTA from '@/components/CTA';
const DigitalLending = () => {
  const challenges = [
    'Credit risk assessment accuracy',
    'Borrower identity verification',
    'Default prediction modeling',
    'Regulatory compliance requirements',
    'Loan approval speed',
    'Portfolio risk management'
  ];

  const solutions = [
    {
      icon: Brain,
      title: 'AI Credit Scoring',
      description: 'Advanced machine learning models for accurate credit risk assessment and scoring.'
    },
    {
      icon: UserCheck,
      title: 'Automated Verification',
      description: 'Comprehensive borrower verification with real-time identity and income validation.'
    },
    {
      icon: TrendingUp,
      title: 'Risk Prediction',
      description: 'Predictive analytics for default risk assessment and portfolio optimization.'
    }
  ];

  const benefits = [
    'AI-powered credit scoring',
    'Automated borrower verification',
    'Real-time risk assessment',
    'Faster loan approvals',
    'Reduced default rates',
    'Regulatory compliance automation'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-yellow-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-yellow-100 border border-yellow-200 rounded-full text-sm font-medium text-yellow-800 mb-6">
              <Banknote className="h-4 w-4 mr-2" />
              Digital Lending Solutions
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-reguard-navy mb-6">
              AI-Powered Risk Assessment for
              <br />
              <span className="text-reguard-red">Digital Lending</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Advanced AI-powered risk assessment and compliance solutions for digital lending platforms, enabling faster decisions and better risk management.
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
                Digital Lending Challenges
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Digital lending platforms need accurate risk assessment tools that can process applications quickly while maintaining low default rates.
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
                  <h3 className="text-2xl font-bold text-reguard-navy mb-6">Lending Market Stats</h3>
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-yellow-600 mb-2">₹5L Cr</div>
                      <div className="text-gray-600">Digital lending market size</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-blue-600 mb-2">40%</div>
                      <div className="text-gray-600">Annual growth rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-purple-600 mb-2">15%</div>
                      <div className="text-gray-600">Average default rate</div>
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
              Our Digital Lending Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced AI solutions that improve lending decisions while reducing risk and ensuring compliance
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
                <Card className="h-full bg-white border border-gray-200 hover:border-yellow-400 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="inline-flex p-4 rounded-full bg-yellow-50 mb-6">
                      <solution.icon className="h-8 w-8 text-yellow-600" />
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
                Benefits for Digital Lenders
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Improve your lending decisions with AI-powered risk assessment and automated compliance monitoring.
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
                  <h3 className="text-2xl font-bold text-reguard-navy mb-6">Impact Metrics</h3>
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Default Reduction</span>
                      <span className="text-2xl font-bold text-green-600">45%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Approval Speed</span>
                      <span className="text-2xl font-bold text-blue-600">5 minutes</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Risk Accuracy</span>
                      <span className="text-2xl font-bold text-purple-600">95%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Implementation</span>
                      <span className="text-2xl font-bold text-orange-600">1 week</span>
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

export default DigitalLending;
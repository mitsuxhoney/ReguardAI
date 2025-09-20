import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, CheckCircle, ArrowRight, Zap, Shield, AlertTriangle } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';

const PaymentProcessors = () => {
  const challenges = [
    'Real-time fraud detection',
    'High-volume transaction processing',
    'Merchant risk assessment',
    'Chargeback prevention',
    'PCI DSS compliance',
    'Cross-border transaction monitoring'
  ];

  const solutions = [
    {
      icon: Zap,
      title: 'Real-time Transaction Monitoring',
      description: 'Lightning-fast fraud detection that processes millions of transactions per second.'
    },
    {
      icon: Shield,
      title: 'Merchant Risk Scoring',
      description: 'Advanced risk assessment for merchants with continuous monitoring and alerts.'
    },
    {
      icon: AlertTriangle,
      title: 'Chargeback Prevention',
      description: 'Proactive chargeback prevention with predictive analytics and early warning systems.'
    }
  ];

  const benefits = [
    'Sub-second fraud detection',
    'Real-time merchant monitoring',
    'Chargeback reduction up to 80%',
    'PCI DSS compliance automation',
    'Cross-border transaction security',
    'High-volume processing capability'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-red-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-red-100 border border-red-200 rounded-full text-sm font-medium text-red-800 mb-6">
              <CreditCard className="h-4 w-4 mr-2" />
              Payment Processor Solutions
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-reguard-navy mb-6">
              Real-time Fraud Prevention for
              <br />
              <span className="text-reguard-red">Payment Processors</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              High-performance fraud detection and compliance solutions designed for payment processors handling millions of transactions daily.
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
                Payment Processing Challenges
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Payment processors need ultra-fast fraud detection that can handle massive transaction volumes without impacting performance.
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
                  <h3 className="text-2xl font-bold text-reguard-navy mb-6">Industry Statistics</h3>
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-red-600 mb-2">₹8,000Cr</div>
                      <div className="text-gray-600">Annual payment fraud losses</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-blue-600 mb-2">50B+</div>
                      <div className="text-gray-600">Transactions processed annually</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-purple-600 mb-2">0.1%</div>
                      <div className="text-gray-600">Acceptable fraud rate</div>
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
              Our Payment Processing Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              High-performance solutions designed for the demanding requirements of payment processors
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
                <Card className="h-full bg-white border border-gray-200 hover:border-red-400 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="inline-flex p-4 rounded-full bg-red-50 mb-6">
                      <solution.icon className="h-8 w-8 text-red-600" />
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
                Benefits for Payment Processors
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Protect your payment ecosystem with ultra-fast fraud detection and comprehensive compliance monitoring.
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
                  <h3 className="text-2xl font-bold text-reguard-navy mb-6">Performance Metrics</h3>
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Detection Speed</span>
                      <span className="text-2xl font-bold text-green-600">{'<'} 50ms</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Throughput</span>
                      <span className="text-2xl font-bold text-blue-600">1M+ TPS</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Chargeback Reduction</span>
                      <span className="text-2xl font-bold text-purple-600">80%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Uptime</span>
                      <span className="text-2xl font-bold text-orange-600">99.99%</span>
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

export default PaymentProcessors;
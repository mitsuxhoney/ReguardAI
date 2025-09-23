import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, CheckCircle, ArrowRight, Shield, Clock, AlertTriangle } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import CTA from '@/components/CTA';

const MerchantMonitoring = () => {
  const features = [
    {
      icon: Shield,
      title: 'Real-time Transaction Monitoring',
      description: 'Continuous monitoring of merchant transactions with instant fraud detection'
    },
    {
      icon: TrendingUp,
      title: 'Behavioral Analysis',
      description: 'AI-powered analysis of merchant behavior patterns to identify anomalies'
    },
    {
      icon: AlertTriangle,
      title: 'Risk Scoring',
      description: 'Dynamic risk scoring based on transaction patterns and merchant history'
    }
  ];

  const benefits = [
    'Real-time fraud detection',
    'Behavioral pattern analysis',
    'Automated risk scoring',
    'Chargeback prevention',
    'Merchant compliance tracking',
    'Transaction monitoring'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 border border-purple-200 rounded-full text-sm font-medium text-purple-800 mb-6">
              <TrendingUp className="h-4 w-4 mr-2" />
              Merchant Monitoring Solution
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-reguard-navy mb-6">
              Advanced Merchant
              <br />
              <span className="text-reguard-red">Fraud Prevention</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              AI-powered merchant monitoring that detects fraudulent activities in real-time, protecting your payment ecosystem from financial losses.
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

      {/* Features Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-reguard-navy mb-6">
              Comprehensive Merchant Protection
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Monitor every transaction and merchant behavior to prevent fraud before it impacts your business
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-white border border-gray-200 hover:border-purple-400 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="inline-flex p-4 rounded-full bg-purple-50 mb-6">
                      <feature.icon className="h-8 w-8 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-bold text-reguard-navy mb-4">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
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
                Why Choose Our Merchant Monitoring Solution?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Protect your payment ecosystem with advanced AI-powered merchant monitoring and fraud prevention.
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
                  <h3 className="text-2xl font-bold text-reguard-navy mb-6">Key Metrics</h3>
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Fraud Detection Rate</span>
                      <span className="text-2xl font-bold text-green-600">99.7%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Response Time</span>
                      <span className="text-2xl font-bold text-blue-600">{'<'} 500ms</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">False Positives</span>
                      <span className="text-2xl font-bold text-purple-600">{'<'} 2%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Implementation</span>
                      <span className="text-2xl font-bold text-orange-600">3 days</span>
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

export default MerchantMonitoring;
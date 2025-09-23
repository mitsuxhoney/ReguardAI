import React from 'react';
import { motion } from 'framer-motion';
import { Shield, CheckCircle, ArrowRight, Brain, BarChart3, AlertCircle } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import CTA from '@/components/CTA';

const RiskAssessment = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Risk Scoring',
      description: 'Advanced machine learning algorithms for accurate risk assessment and prediction'
    },
    {
      icon: BarChart3,
      title: 'Predictive Analytics',
      description: 'Forecast potential risks and threats before they materialize into actual losses'
    },
    {
      icon: AlertCircle,
      title: 'Threat Intelligence',
      description: 'Real-time threat intelligence integration for comprehensive risk evaluation'
    }
  ];

  const benefits = [
    'AI-powered risk scoring',
    'Predictive risk analytics',
    'Real-time threat intelligence',
    'Comprehensive risk reporting',
    'Automated risk mitigation',
    'Regulatory compliance'
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
              <Shield className="h-4 w-4 mr-2" />
              Risk Assessment Solution
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-reguard-navy mb-6">
              Advanced AI-Powered
              <br />
              <span className="text-reguard-red">Risk Assessment</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Comprehensive risk assessment tools powered by advanced AI to identify, analyze, and mitigate financial risks before they impact your institution.
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
              Comprehensive Risk Intelligence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced AI algorithms analyze multiple risk factors to provide accurate threat assessment
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
                <Card className="h-full bg-white border border-gray-200 hover:border-red-400 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="inline-flex p-4 rounded-full bg-red-50 mb-6">
                      <feature.icon className="h-8 w-8 text-red-600" />
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
                Why Choose Our Risk Assessment Solution?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Stay ahead of threats with predictive risk assessment and comprehensive threat intelligence.
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
                      <span className="text-gray-600">Risk Prediction Accuracy</span>
                      <span className="text-2xl font-bold text-green-600">99.9%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Threat Detection Speed</span>
                      <span className="text-2xl font-bold text-blue-600">Real-time</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Risk Mitigation</span>
                      <span className="text-2xl font-bold text-purple-600">95%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Deployment Time</span>
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

export default RiskAssessment;
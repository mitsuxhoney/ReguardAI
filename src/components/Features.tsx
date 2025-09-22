import React from 'react'
import { motion } from 'framer-motion'
import {
  Users,
  Building,
  CreditCard,
  AlertTriangle,
  Brain,
  Shield,
  ArrowRight,
  TrendingUp,
} from 'lucide-react'
import { Card, CardContent } from './ui/card'

const Features = () => {
  const problems = [
    {
      icon: AlertTriangle,
      title: 'Manual Compliance is Failing',
      description:
        'Traditional methods miss 40% of fraud cases and cost 10x more in resources',
    },
    {
      icon: TrendingUp,
      title: 'Fraud is Growing Exponentially',
      description:
        'Financial fraud increased 300% in India, costing institutions billions annually',
    },
    {
      icon: Users,
      title: 'Post-Onboarding Blind Spots',
      description:
        '85% of fraud happens after onboarding when monitoring becomes manual',
    },
  ]

  const solutions = [
    {
      icon: Brain,
      title: 'AI-Powered Detection',
      description:
        'Machine learning algorithms trained on Indian financial patterns detect fraud in real-time',
      metric: '99.8% accuracy',
    },
    {
      icon: Shield,
      title: 'Continuous Monitoring',
      description:
        '24/7 automated surveillance of customers, vendors, and merchants post-onboarding',
      metric: '< 1s response',
    },
    {
      icon: Building,
      title: 'Regulatory Compliance',
      description:
        'Automated compliance with RBI, SEBI, and other Indian financial regulations',
      metric: '100% compliant',
    },
  ]

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Problem Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-4 py-2 bg-red-50 border border-red-200 rounded-full text-sm font-medium text-red-800 mb-6">
            The Problem
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-reguard-navy">
            Your Current Compliance
            <br />
            <span className="text-reguard-red">Is Costing You Millions</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-red-50 border-red-200 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex p-4 rounded-full bg-red-100 mb-6">
                    <problem.icon className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-reguard-navy mb-4">
                    {problem.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {problem.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Solution Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-4 py-2 bg-green-50 border border-green-200 rounded-full text-sm font-medium text-green-800 mb-6">
            The Solution
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-reguard-navy">
            ReguardAI Stops Fraud
            <br />
            <span className="text-reguard-red">Before It Happens</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
            >
              <Card className="h-full bg-white border border-gray-200 hover:border-reguard-red hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="inline-flex p-4 rounded-full bg-gray-50 group-hover:bg-reguard-red mb-6 transition-colors duration-300">
                    <solution.icon className="h-8 w-8 text-gray-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="inline-flex px-3 py-1 bg-green-100 text-green-800 text-sm font-semibold rounded-full mb-4">
                    {solution.metric}
                  </div>
                  <h3 className="text-xl font-bold text-reguard-navy mb-4 group-hover:text-reguard-red transition-colors duration-300">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {solution.description}
                  </p>
                  <div className="flex items-center text-reguard-red font-medium group-hover:translate-x-2 transition-transform duration-300">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

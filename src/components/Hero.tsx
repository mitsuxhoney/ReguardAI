import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, CheckCircle, Star } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-b from-white via-gray-50/30 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-gray-100/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
      
      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative">
        <div className="text-center max-w-4xl mx-auto">
          {/* Social Proof Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-200 rounded-full text-sm font-medium text-green-800 mb-8"
          >
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3 w-3 fill-green-500 text-green-500" />
              ))}
            </div>
            Trusted by 500+ Financial Institutions
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            className="text-5xl lg:text-7xl font-bold leading-tight text-reguard-navy mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Stop Fraud Before
            <br />
            <span className="text-reguard-red">It Costs You Millions</span>
          </motion.h1>

          {/* Value Proposition */}
          <motion.p 
            className="text-xl lg:text-2xl text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            AI-powered post-onboarding compliance that has prevented <strong className="text-reguard-navy">₹2000+ Crores in fraud</strong> for Indian Banks, Fintech, and NBFCs
          </motion.p>

          {/* Benefits List */}
          <motion.div 
            className="flex flex-wrap justify-center gap-6 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {[
              "99.8% Accuracy Rate",
              "< 1 Second Response Time", 
              "24/7 Automated Monitoring",
              "RBI & SEBI Compliant"
            ].map((benefit, index) => (
              <div key={index} className="flex items-center gap-2 text-gray-700">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="font-medium">{benefit}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Button 
              size="lg" 
              className="bg-reguard-red hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
              onClick={() => window.open('https://cal.com/reguardai.com/secret', '_blank')}
            >
              Get Free Demo
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg font-semibold group"
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Watch 2-Min Demo
            </Button>
          </motion.div>

          {/* Risk-Free Guarantee */}
          <motion.p 
            className="text-sm text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            ✅ No setup fees • ✅ 30-day free trial • ✅ Cancel anytime
          </motion.p>
        </div>

        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          {[
            { value: "₹2000Cr+", label: "Fraud Prevented", sublabel: "In the last 12 months" },
            { value: "500+", label: "Institutions Protected", sublabel: "Across India" },
            { value: "99.8%", label: "Accuracy Rate", sublabel: "Industry leading" }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="text-4xl font-bold text-reguard-navy mb-2">{stat.value}</div>
              <div className="text-lg font-semibold text-gray-800 mb-1">{stat.label}</div>
              <div className="text-sm text-gray-500">{stat.sublabel}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
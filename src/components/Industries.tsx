import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Smartphone, Landmark, ArrowRight, CheckCircle } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';

const Industries = () => {
  const testimonials = [
    {
      icon: Landmark,
      company: "Leading Private Bank",
      role: "Chief Risk Officer",
      quote: "ReguardAI helped us prevent ₹500 Crores in potential fraud in just 6 months. The ROI was immediate.",
      results: "500Cr+ fraud prevented",
      industry: "Banking"
    },
    {
      icon: Smartphone,
      company: "Top Fintech Unicorn",
      role: "Head of Compliance",
      quote: "Implementation took just 2 weeks. Now we have 24/7 monitoring that would have required 50+ manual reviewers.",
      results: "95% cost reduction",
      industry: "Fintech"
    },
    {
      icon: Building2,
      company: "Major NBFC",
      role: "VP Operations",
      quote: "The AI catches patterns our team missed. We've reduced false positives by 80% while improving detection.",
      results: "80% fewer false positives",
      industry: "NBFC"
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-sm font-medium text-blue-800 mb-6">
            Customer Success Stories
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-reguard-navy">
            Real Results from
            <br />
            <span className="text-reguard-red">Real Customers</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how leading financial institutions are saving millions with ReguardAI
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
            >
              <Card className="h-full bg-white border border-gray-200 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="p-3 rounded-lg bg-gray-50 mr-4">
                      {React.createElement(testimonial.icon, { className: "h-6 w-6 text-reguard-red" })}
                    </div>
                    <div>
                      <div className="font-semibold text-reguard-navy">{testimonial.company}</div>
                      <div className="text-sm text-gray-500">{testimonial.role}</div>
                    </div>
                  </div>
                  
                  <blockquote className="text-gray-700 mb-6 leading-relaxed italic">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="flex items-center justify-between">
                    <div className="inline-flex px-3 py-1 bg-green-100 text-green-800 text-sm font-semibold rounded-full">
                      {testimonial.results}
                    </div>
                    <div className="text-sm text-gray-500">{testimonial.industry}</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Industries;
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Target, Award, Globe } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const About = () => {
  const stats = [
    { value: '₹2000Cr+', label: 'Fraud Prevented', icon: Award },
    { value: '500+', label: 'Institutions Protected', icon: Users },
    { value: '99.8%', label: 'Accuracy Rate', icon: Target },
    { value: '15+', label: 'Countries Served', icon: Globe }
  ];

  const team = [
    {
      name: 'Rajesh Kumar',
      role: 'CEO & Co-Founder',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      bio: 'Former VP at HDFC Bank with 15+ years in financial compliance'
    },
    {
      name: 'Priya Sharma',
      role: 'CTO & Co-Founder',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
      bio: 'AI/ML expert, former Google engineer specializing in fraud detection'
    },
    {
      name: 'Amit Patel',
      role: 'Head of Compliance',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      bio: 'Former RBI regulatory expert with deep knowledge of Indian financial laws'
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
              About ReguardAI
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-reguard-navy mb-6">
              Protecting India's
              <br />
              <span className="text-reguard-red">Financial Future</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Founded in 2020, ReguardAI is India's leading AI-powered compliance platform, trusted by 500+ financial institutions to prevent fraud and ensure regulatory compliance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center bg-white border border-gray-200 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="inline-flex p-3 rounded-full bg-reguard-red/10 mb-4">
                      <stat.icon className="h-6 w-6 text-reguard-red" />
                    </div>
                    <div className="text-3xl font-bold text-reguard-navy mb-2">{stat.value}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
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
                Our Mission
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                To democratize advanced fraud prevention technology for India's financial ecosystem, making sophisticated AI-powered compliance accessible to institutions of all sizes.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We believe that every financial institution, from the largest banks to emerging fintech startups, deserves access to world-class fraud prevention technology that protects their customers and ensures regulatory compliance.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-reguard-red rounded-full mr-3"></div>
                  <span className="text-gray-700">Prevent financial fraud before it happens</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-reguard-red rounded-full mr-3"></div>
                  <span className="text-gray-700">Ensure seamless regulatory compliance</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-reguard-red rounded-full mr-3"></div>
                  <span className="text-gray-700">Protect India's financial ecosystem</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team collaboration"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-reguard-navy mb-6">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry veterans with deep expertise in financial compliance, AI/ML, and regulatory technology
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center bg-white border border-gray-200 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-8">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto mb-6 object-cover"
                    />
                    <h3 className="text-xl font-bold text-reguard-navy mb-2">{member.name}</h3>
                    <div className="text-reguard-red font-medium mb-4">{member.role}</div>
                    <p className="text-gray-600 leading-relaxed">{member.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-reguard-navy mb-6">
              Our Core Values
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Innovation',
                description: 'Continuously pushing the boundaries of AI and machine learning to stay ahead of evolving fraud patterns.'
              },
              {
                title: 'Trust',
                description: 'Building long-term partnerships with our clients through transparency, reliability, and consistent results.'
              },
              {
                title: 'Excellence',
                description: 'Delivering world-class solutions that exceed expectations and set new industry standards.'
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-white border border-gray-200 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-xl font-bold text-reguard-navy mb-4">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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

export default About;
import React, { forwardRef, useRef } from 'react'
import { motion } from 'framer-motion'
import {
  Shield,
  Smartphone,
  Building,
  CreditCard,
  Users,
  Bell,
} from 'lucide-react'
import { cn } from '../lib/utils'
import { AnimatedBeam } from './ui/animated-beam'
const Circle = forwardRef(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'z-10 flex size-16 items-center justify-center rounded-full border-2 bg-white p-4 shadow-[0_0_30px_-8px_rgba(0,0,0,0.3)] backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:shadow-[0_0_40px_-8px_rgba(0,0,0,0.4)]',
        className
      )}
    >
      {children}
    </div>
  )
})
Circle.displayName = 'Circle'
const FraudSignals = () => {
  const containerRef = useRef(null)
  const reguardAIRef = useRef(null)
  const clientAppRef = useRef(null)
  const source1Ref = useRef(null)
  const source2Ref = useRef(null)
  const source3Ref = useRef(null)
  const source4Ref = useRef(null)
  const fraudSources = [
    {
      icon: CreditCard,
      label: 'Transaction Analysis',
      color:
        'bg-gradient-to-br from-red-50 to-red-100 border-red-200 hover:border-red-300',
      description: 'Real-time payment monitoring',
    },
    {
      icon: Users,
      label: 'Identity Verification',
      color:
        'bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200 hover:border-orange-300',
      description: 'Advanced user authentication',
    },
    {
      icon: Building,
      label: 'Merchant Monitoring',
      color:
        'bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 hover:border-blue-300',
      description: 'Business behavior analysis',
    },
    {
      icon: Smartphone,
      label: 'Device Intelligence',
      color:
        'bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 hover:border-purple-300',
      description: 'Device fingerprinting & tracking',
    },
  ]
  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-red-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Column - Animated Beam */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="relative"
          >
            <div
              className="flex w-full items-center justify-between"
              ref={containerRef}
            >
              {/* Sources Column (Left) */}
              <div className="flex flex-col justify-center space-y-8 relative z-10">
                {(() => {
                  const Source1Icon = fraudSources[0].icon
                  const Source2Icon = fraudSources[1].icon
                  return (
                    <>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{
                          type: 'spring',
                          stiffness: 400,
                          damping: 25,
                        }}
                      >
                        <Circle
                          ref={source1Ref}
                          className={fraudSources[0].color}
                        >
                          <Source1Icon className="h-6 w-6 text-red-600" />
                        </Circle>
                      </motion.div>
                      <motion.div>
                        <Circle ref={source2Ref}>
                          <Users className="h-6 w-6" />
                        </Circle>
                      </motion.div>
                      <motion.div>
                        <Circle ref={source3Ref}>
                          <Building className="h-6 w-6" />
                        </Circle>
                      </motion.div>
                      <motion.div>
                        <Circle ref={source4Ref}>
                          <Smartphone className="h-6 w-6" />
                        </Circle>
                      </motion.div>
                    </>
                  )
                })()}
              </div>
              {/* ReguardAI Center */}

              <Circle ref={reguardAIRef} className="size-24 relative z-10">
                <Shield className="h-10 w-10" />
              </Circle>

              {/* Client App (Right) */}

              <Circle ref={clientAppRef} className="size-20 relative z-10">
                <Smartphone className="h-8 w-8" />
              </Circle>

              {/* Animated Beams */}
              <div className="absolute inset-0 z-0">
                <AnimatedBeam
                  containerRef={containerRef}
                  fromRef={source1Ref}
                  toRef={reguardAIRef}
                  curvature={-30}
                  delay={0}
                />
                <AnimatedBeam
                  containerRef={containerRef}
                  fromRef={source2Ref}
                  toRef={reguardAIRef}
                  curvature={-10}
                  delay={0.5}
                />
                <AnimatedBeam
                  containerRef={containerRef}
                  fromRef={source3Ref}
                  toRef={reguardAIRef}
                  curvature={10}
                  delay={1}
                />
                <AnimatedBeam
                  containerRef={containerRef}
                  fromRef={source4Ref}
                  toRef={reguardAIRef}
                  curvature={30}
                  delay={1.5}
                />
                <AnimatedBeam
                  containerRef={containerRef}
                  fromRef={reguardAIRef}
                  toRef={clientAppRef}
                  curvature={0}
                  delay={2}
                />
              </div>
            </div>
          </motion.div>
          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Header */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-sm font-medium text-blue-800 mb-6">
                  <Bell className="h-4 w-4 mr-2" />
                  Real-Time Intelligence
                </div>
              </motion.div>
              <motion.h2
                className="text-4xl lg:text-5xl font-bold text-white leading-tight"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
              >
                How ReguardAI Sends
                <br />
                <span className="text-reguard-red">Fraud Signals</span>
              </motion.h2>
              <motion.p
                className="text-lg text-white leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                AI monitors data sources and instantly alerts when fraud is
                detected
              </motion.p>
            </div>
            {/* Signal Types */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold text-reguard-navy mb-4">
                  Types of Fraud Signals
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <CreditCard className="h-5 w-5 text-gray-600" />
                    <span className="text-gray-900">Transaction Analysis</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-gray-600" />
                    <span className="text-gray-900">Identity Verification</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Building className="h-5 w-5 text-gray-600" />
                    <span className="text-gray-900">Merchant Monitoring</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Smartphone className="h-5 w-5 text-gray-600" />
                    <span className="text-gray-900">Device Intelligence</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
export default FraudSignals

import React, { useRef } from 'react';
import { TimelineContent } from './timeline-animation';
import { motion } from 'framer-motion';
import GautamR from '../../assets/GautamR.jpeg'
import StephanieD from '../../assets/StephanieD.jpeg'
function ClientFeedback() {
  const testimonialRef = useRef<HTMLDivElement>(null);

  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut"
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: 30,
      opacity: 0,
    },
  };

  const testimonials = [
    {
      quote: "ReguardAI prevented ₹500 Crores in potential fraud in just 6 months. The ROI was immediate and the implementation seamless.",
      name: "Gautam Rohidekar",
      title: "Group General Counsel",
      company: "Dream11",
      image: GautamR,
      bgColor: "bg-reguard-navy",
      textColor: "text-white"
    },
    {
      quote: "The compliance automation has streamlined our processes significantly. ReguardAI's technology integrates seamlessly with our existing systems.",
      name: "Stephanie Davis",
      title: "Head of Compliance",
      company: "Helcim",
      image: StephanieD,
      bgColor: "bg-reguard-red",
      textColor: "text-white"
    },
    {
      quote: "ReguardAI has enhanced our risk management capabilities. The platform's insights help us make better informed decisions for our customers.",
      name: "Kaushik C",
      title: "General Manager",
      company: "Tripura Gramin Bank",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      bgColor: "bg-slate-900",
      textColor: "text-white"
    },
    {
      quote: "ReguardAI's post-onboarding monitoring has transformed our risk management. Highly recommended for any financial institution.",
      name: "Sneha Reddy",
      title: "Risk Manager",
      company: "Digital Bank",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      bgColor: "bg-blue-600",
      textColor: "text-white"
    },
    {
      quote: "Their customer support is exceptional. Available 24/7 and incredibly knowledgeable about Indian financial regulations.",
      name: "Vikram Singh",
      title: "Compliance Head",
      company: "Regional Bank",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      bgColor: "bg-slate-900",
      textColor: "text-white"
    },
    {
      quote: "ReguardAI has been a key partner in our growth journey. Their technology scales perfectly with our expanding operations.",
      name: "Kavya Nair",
      title: "CTO",
      company: "Payment Processor",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face",
      bgColor: "bg-reguard-red",
      textColor: "text-white"
    }
  ];

  return (
    <section id="testimonials" className="w-full bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={testimonialRef}>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <TimelineContent 
            as="div" 
            className="inline-flex items-center px-4 py-2 bg-green-50 border border-green-200 rounded-full text-sm font-medium text-green-800 mb-6" 
            animationNum={0} 
            customVariants={revealVariants} 
            timelineRef={testimonialRef}
          >
            Customer Success Stories
          </TimelineContent>
          <TimelineContent 
            as="h2" 
            className="text-4xl lg:text-5xl font-bold text-reguard-navy mb-6" 
            animationNum={1} 
            customVariants={revealVariants} 
            timelineRef={testimonialRef}
          >
            Trusted by India's
            <br />
            <span className="text-reguard-red">Financial Leaders</span>
          </TimelineContent>
          <TimelineContent 
            as="p" 
            className="text-xl text-gray-600 max-w-3xl mx-auto" 
            animationNum={2} 
            customVariants={revealVariants} 
            timelineRef={testimonialRef}
          >
            See how leading financial institutions are saving millions with ReguardAI
          </TimelineContent>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Column 1 */}
          <div className="flex flex-col gap-6">
            <TimelineContent 
              animationNum={0} 
              customVariants={revealVariants} 
              timelineRef={testimonialRef} 
              className={`flex-1 flex flex-col justify-between ${testimonials[0].bgColor} ${testimonials[0].textColor} overflow-hidden rounded-2xl border border-gray-200 p-8 relative`}
            >
              <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:50px_56px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
              <div className="relative z-10">
                <blockquote className="text-lg leading-relaxed mb-8">
                  "{testimonials[0].quote}"
                </blockquote>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-lg">{testimonials[0].name}</div>
                    <div className="text-sm opacity-90">{testimonials[0].title}</div>
                    <div className="text-sm opacity-75">{testimonials[0].company}</div>
                  </div>
                  <img
                    src={testimonials[0].image}
                    alt={testimonials[0].name}
                    className="w-16 h-16 rounded-xl object-cover border-2 border-white/20"
                  />
                </div>
              </div>
            </TimelineContent>

            <TimelineContent 
              animationNum={1} 
              customVariants={revealVariants} 
              timelineRef={testimonialRef} 
              className={`flex flex-col justify-between ${testimonials[1].bgColor} ${testimonials[1].textColor} overflow-hidden rounded-2xl border border-gray-200 p-8`}
            >
              <div>
                <blockquote className="text-base leading-relaxed mb-6">
                  "{testimonials[1].quote}"
                </blockquote>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold">{testimonials[1].name}</div>
                    <div className="text-sm opacity-90">{testimonials[1].title}</div>
                    <div className="text-sm opacity-75">{testimonials[1].company}</div>
                  </div>
                  <img
                    src={testimonials[1].image}
                    alt={testimonials[1].name}
                    className="w-14 h-14 rounded-xl object-cover border-2 border-white/20"
                  />
                </div>
              </div>
            </TimelineContent>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-6">
            <TimelineContent 
              animationNum={2} 
              customVariants={revealVariants} 
              timelineRef={testimonialRef} 
              className={`flex flex-col justify-between ${testimonials[2].bgColor} ${testimonials[2].textColor} overflow-hidden rounded-2xl border border-gray-200 p-8`}
            >
              <div>
                <blockquote className="text-base leading-relaxed mb-6">
                  "{testimonials[2].quote}"
                </blockquote>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold">{testimonials[2].name}</div>
                    <div className="text-sm opacity-90">{testimonials[2].title}</div>
                    <div className="text-sm opacity-75">{testimonials[2].company}</div>
                  </div>
                  <img
                    src={testimonials[2].image}
                    alt={testimonials[2].name}
                    className="w-14 h-14 rounded-xl object-cover border-2 border-white/20"
                  />
                </div>
              </div>
            </TimelineContent>

            <TimelineContent 
              animationNum={3} 
              customVariants={revealVariants} 
              timelineRef={testimonialRef} 
              className={`flex flex-col justify-between ${testimonials[3].bgColor} ${testimonials[3].textColor} overflow-hidden rounded-2xl border border-gray-200 p-8`}
            >
              <div>
                <blockquote className="text-base leading-relaxed mb-6">
                  "{testimonials[3].quote}"
                </blockquote>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold">{testimonials[3].name}</div>
                    <div className="text-sm opacity-90">{testimonials[3].title}</div>
                    <div className="text-sm opacity-75">{testimonials[3].company}</div>
                  </div>
                  <img
                    src={testimonials[3].image}
                    alt={testimonials[3].name}
                    className="w-14 h-14 rounded-xl object-cover border-2 border-white/20"
                  />
                </div>
              </div>
            </TimelineContent>

            <TimelineContent 
              animationNum={4} 
              customVariants={revealVariants} 
              timelineRef={testimonialRef} 
              className={`flex flex-col justify-between ${testimonials[4].bgColor} ${testimonials[4].textColor} overflow-hidden rounded-2xl border border-gray-200 p-8`}
            >
              <div>
                <blockquote className="text-base leading-relaxed mb-6">
                  "{testimonials[4].quote}"
                </blockquote>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold">{testimonials[4].name}</div>
                    <div className="text-sm opacity-90">{testimonials[4].title}</div>
                    <div className="text-sm opacity-75">{testimonials[4].company}</div>
                  </div>
                  <img
                    src={testimonials[4].image}
                    alt={testimonials[4].name}
                    className="w-14 h-14 rounded-xl object-cover border-2 border-white/20"
                  />
                </div>
              </div>
            </TimelineContent>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-6">
            <TimelineContent 
              animationNum={5} 
              customVariants={revealVariants} 
              timelineRef={testimonialRef} 
              className={`flex flex-col justify-between ${testimonials[5].bgColor} ${testimonials[5].textColor} overflow-hidden rounded-2xl border border-gray-200 p-8`}
            >
              <div>
                <blockquote className="text-base leading-relaxed mb-6">
                  "{testimonials[5].quote}"
                </blockquote>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold">{testimonials[5].name}</div>
                    <div className="text-sm opacity-90">{testimonials[5].title}</div>
                    <div className="text-sm opacity-75">{testimonials[5].company}</div>
                  </div>
                  <img
                    src={testimonials[5].image}
                    alt={testimonials[5].name}
                    className="w-14 h-14 rounded-xl object-cover border-2 border-white/20"
                  />
                </div>
              </div>
            </TimelineContent>

            <TimelineContent 
              animationNum={6} 
              customVariants={revealVariants} 
              timelineRef={testimonialRef} 
              className={`flex-1 flex flex-col justify-between bg-gradient-to-br from-reguard-navy to-slate-800 text-white overflow-hidden rounded-2xl border border-gray-200 p-8 relative`}
            >
              <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:50px_56px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
              <div className="relative z-10">
                <blockquote className="text-lg leading-relaxed mb-8">
                  "ReguardAI has been a true game-changer for us. Their exceptional service, combined with their deep expertise and commitment to excellence, has made a significant impact on our business operations and fraud prevention capabilities."
                </blockquote>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-lg">Arjun Mehta</div>
                    <div className="text-sm opacity-90">CTO</div>
                    <div className="text-sm opacity-75">Digital Lending Platform</div>
                  </div>
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face"
                    alt="Arjun Mehta"
                    className="w-16 h-16 rounded-xl object-cover border-2 border-white/20"
                  />
                </div>
              </div>
            </TimelineContent>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClientFeedback;
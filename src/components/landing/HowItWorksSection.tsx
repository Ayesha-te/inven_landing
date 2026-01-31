import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Store, RefreshCw, TrendingUp, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: '01',
    icon: Store,
    title: 'Create your store',
    subtitle: 'and add products',
    description: 'Set up your store in minutes. Import products from Excel or add them manually with barcode scanning.',
    color: 'from-blue-500/20 to-blue-500/5',
  },
  {
    number: '02',
    icon: RefreshCw,
    title: 'Track inventory',
    subtitle: 'automatically',
    description: 'Your stock updates in real-time as you sell, receive, or transfer products between locations.',
    color: 'from-primary/20 to-primary/5',
  },
  {
    number: '03',
    icon: TrendingUp,
    title: 'Get insights',
    subtitle: 'and grow smarter',
    description: 'Receive smart notifications and use analytics to make better purchasing and stocking decisions.',
    color: 'from-purple-500/20 to-purple-500/5',
  },
];

export const HowItWorksSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(".works-header",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Steps animation
      gsap.fromTo(".step-card",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".steps-container",
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Progress line animation
      if (lineRef.current) {
        gsap.fromTo(lineRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".steps-container",
              start: "top 70%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }

      // Number pulse animation
      gsap.to(".step-number", {
        scale: 1.1,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        stagger: 0.3
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="how-it-works" className="py-20 md:py-28 bg-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="works-header inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <ArrowRight className="w-4 h-4 mr-2" />
            Simple Process
          </span>
          <h2 className="works-header text-4xl md:text-5xl font-bold text-foreground mb-4">
            How it works
          </h2>
          <p className="works-header text-lg text-muted-foreground max-w-2xl mx-auto">
            Get started with StockLive in three simple steps.
          </p>
        </div>

        <div className="steps-container relative">
          {/* Progress line */}
          <div 
            ref={lineRef}
            className="hidden lg:block absolute top-24 left-[15%] right-[15%] h-1 bg-gradient-to-r from-blue-500 via-primary to-purple-500 rounded-full origin-left"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="step-card relative"
              >
                {/* Card */}
                <div className="group text-center p-8 rounded-3xl bg-card border border-border hover:border-primary/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  {/* Step icon with gradient background */}
                  <div className={`relative inline-flex items-center justify-center h-20 w-20 rounded-3xl bg-gradient-to-br ${step.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="h-10 w-10 text-primary" />
                    
                    {/* Step number badge */}
                    <span className="step-number absolute -top-2 -right-2 h-8 w-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center shadow-lg">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-1">
                    {step.title}
                  </h3>
                  <p className="text-lg text-primary font-medium mb-4">
                    {step.subtitle}
                  </p>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>

                {/* Connector arrow for mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-4">
                    <ArrowRight className="h-6 w-6 text-primary rotate-90" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

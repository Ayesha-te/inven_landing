import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, Zap, LayoutDashboard, Bell, Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

const solutions = [
  {
    icon: Zap,
    title: 'Simple setup',
    description: 'Get started in minutes, not days. No technical skills required.',
  },
  {
    icon: LayoutDashboard,
    title: 'Clean dashboard',
    description: 'Everything you need, nothing you don\'t. Beautifully organized.',
  },
  {
    icon: Sparkles,
    title: 'Real-time tracking',
    description: 'Know exactly what\'s in stock, across all your stores, instantly.',
  },
  {
    icon: Bell,
    title: 'Smart alerts',
    description: 'Get notified before products expire or run out of stock.',
  },
];

export const SolutionSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(".solution-header",
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

      // Cards animation
      cardsRef.current.forEach((card, i) => {
        if (card) {
          gsap.fromTo(card,
            { opacity: 0, y: 60, rotateX: -15 },
            {
              opacity: 1,
              y: 0,
              rotateX: 0,
              duration: 0.8,
              delay: i * 0.15,
              ease: "power3.out",
              scrollTrigger: {
                trigger: ".solution-grid",
                start: "top 85%",
                toggleActions: "play none none reverse"
              }
            }
          );
        }
      });

      // Floating background elements
      gsap.to(".solution-float", {
        y: -30,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        stagger: 0.5
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-primary/10 to-primary/5" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="solution-float absolute top-20 left-20 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
        <div className="solution-float absolute bottom-20 right-20 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
        <div className="solution-float absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <div className="solution-header inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-foreground">The Solution</span>
            </div>
            
            <h2 className="solution-header text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Meet <span className="text-primary">StockLive</span>
            </h2>
            
            <p className="solution-header text-lg text-muted-foreground mb-8 max-w-xl">
              A modern inventory system built for businesses like yours. 
              Not complex enterprise software — just what you need to grow.
            </p>

            {/* Quick features list */}
            <div className="solution-header space-y-4 mb-8">
              {['Set up in under 5 minutes', 'No technical skills needed', 'Free forever plan available'].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <div className="solution-header">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 gap-2 h-14 px-8">
                Get Started Free
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Right: Solution Cards */}
          <div className="solution-grid grid grid-cols-1 sm:grid-cols-2 gap-6">
            {solutions.map((solution, index) => (
              <div
                key={solution.title}
                ref={el => cardsRef.current[index] = el}
                className="group p-6 rounded-3xl bg-card/80 backdrop-blur-sm border border-border hover:border-primary/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                style={{ perspective: '1000px' }}
              >
                <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:from-primary/30 transition-all duration-300">
                  <solution.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {solution.title}
                </h3>
                <p className="text-sm text-muted-foreground">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

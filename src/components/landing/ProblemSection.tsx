import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AlertTriangle, Eye, FileSpreadsheet, BarChart3, X } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const problems = [
  {
    icon: AlertTriangle,
    title: 'Losing money to expired products',
    description: 'Products expire before you can sell them, eating into your profits.',
    stat: '23%',
    statLabel: 'Revenue Lost',
  },
  {
    icon: Eye,
    title: 'No visibility into stock levels',
    description: "You don't know what's in stock until it's too late.",
    stat: '40%',
    statLabel: 'Stockouts',
  },
  {
    icon: FileSpreadsheet,
    title: 'Excel sheets causing errors',
    description: 'Manual tracking leads to costly mistakes and lost sales.',
    stat: '67%',
    statLabel: 'Human Errors',
  },
  {
    icon: BarChart3,
    title: 'No real-time analytics',
    description: "You're making decisions without the data you need.",
    stat: '52%',
    statLabel: 'Missed Insights',
  },
];

export const ProblemSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(".problem-header",
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

      // Cards animation with stagger
      gsap.fromTo(".problem-card",
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".problem-grid",
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Floating X icons
      gsap.to(".float-x", {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: "none"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-28 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 text-destructive/10">
          <X className="float-x w-32 h-32" />
        </div>
        <div className="absolute bottom-20 right-10 text-destructive/10">
          <X className="float-x w-24 h-24" />
        </div>
        <div className="absolute top-1/2 right-1/4 text-destructive/5">
          <X className="float-x w-48 h-48" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="problem-header inline-flex items-center px-4 py-2 rounded-full bg-destructive/10 text-destructive text-sm font-medium mb-6">
            <AlertTriangle className="w-4 h-4 mr-2" />
            Common Problems
          </span>
          <h2 className="problem-header text-4xl md:text-5xl font-bold text-foreground mb-4">
            Sound familiar?
          </h2>
          <p className="problem-header text-lg text-muted-foreground max-w-2xl mx-auto">
            If you're still managing inventory with spreadsheets or outdated software, 
            you're probably facing these challenges.
          </p>
        </div>

        <div className="problem-grid grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <div
              key={problem.title}
              className="problem-card group relative p-8 rounded-3xl bg-card border border-border hover:border-destructive/30 hover:shadow-xl transition-all duration-500 overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-destructive/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="h-14 w-14 rounded-2xl bg-destructive/10 flex items-center justify-center group-hover:bg-destructive/20 group-hover:scale-110 transition-all duration-300">
                    <problem.icon className="h-7 w-7 text-destructive" />
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-destructive">{problem.stat}</p>
                    <p className="text-xs text-muted-foreground">{problem.statLabel}</p>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-destructive transition-colors duration-300">
                  {problem.title}
                </h3>
                <p className="text-muted-foreground">{problem.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

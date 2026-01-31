import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShieldCheck, Cloud, Store, Users, Clock, Award } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const trustItems = [
  {
    icon: Store,
    value: '5,000+',
    label: 'Stores Trust Us',
  },
  {
    icon: Users,
    value: '50K+',
    label: 'Active Users',
  },
  {
    icon: ShieldCheck,
    value: '99.9%',
    label: 'Uptime',
  },
  {
    icon: Clock,
    value: '24/7',
    label: 'Support',
  },
  {
    icon: Cloud,
    value: '100%',
    label: 'Cloud Based',
  },
  {
    icon: Award,
    value: '#1',
    label: 'Rated Solution',
  },
];

export const TrustSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const countersRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate stats on scroll
      gsap.fromTo(".trust-item",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Counter animation for numeric values
      countersRef.current.forEach((counter, i) => {
        if (counter && trustItems[i].value.match(/^\d/)) {
          const endValue = parseInt(trustItems[i].value.replace(/[^0-9]/g, ''));
          gsap.fromTo(counter,
            { innerText: 0 },
            {
              innerText: endValue,
              duration: 2,
              ease: "power2.out",
              snap: { innerText: 1 },
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 85%",
                toggleActions: "play none none reverse"
              },
              onUpdate: function() {
                const val = Math.round(this.targets()[0].innerText);
                const suffix = trustItems[i].value.replace(/[0-9.,]/g, '');
                counter.innerText = val.toLocaleString() + suffix;
              }
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 md:py-20 bg-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Trusted Worldwide</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Built for real businesses. Designed for real growth.
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
          {trustItems.map((item, index) => (
            <div
              key={item.label}
              className="trust-item group text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <p 
                ref={el => countersRef.current[index] = el}
                className="text-2xl md:text-3xl font-bold text-foreground mb-1"
              >
                {item.value}
              </p>
              <p className="text-sm text-muted-foreground">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

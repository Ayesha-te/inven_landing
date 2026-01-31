import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { ArrowRight, MessageCircle, Sparkles, Check } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);


const APP_URL = "https://inventory-wzsj.vercel.app";


export const CTASection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const floatingRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Content animation
      gsap.fromTo(".cta-animate",
        { opacity: 0, y: 50 },
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

      // Floating elements
      floatingRef.current.forEach((el, i) => {
        if (el) {
          gsap.to(el, {
            y: i % 2 === 0 ? -20 : 20,
            x: i % 3 === 0 ? 10 : -10,
            rotation: i % 2 === 0 ? 5 : -5,
            duration: 3 + i * 0.5,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
          });
        }
      });

      // Pulse animation for main card
      gsap.to(".cta-card", {
        boxShadow: "0 0 60px rgba(183, 240, 0, 0.3)",
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-28 relative overflow-hidden">
      {/* Background with gradient mesh */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-primary/10 to-primary/5" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(183,240,0,0.15),transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,rgba(183,240,0,0.1),transparent_50%)]" />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          ref={el => floatingRef.current[0] = el}
          className="absolute top-20 left-[10%] w-16 h-16 bg-primary/20 rounded-2xl"
        />
        <div 
          ref={el => floatingRef.current[1] = el}
          className="absolute top-40 right-[15%] w-12 h-12 bg-primary/30 rounded-full"
        />
        <div 
          ref={el => floatingRef.current[2] = el}
          className="absolute bottom-32 left-[20%] w-20 h-20 bg-primary/15 rounded-3xl"
        />
        <div 
          ref={el => floatingRef.current[3] = el}
          className="absolute bottom-20 right-[10%] w-14 h-14 bg-primary/25 rounded-xl"
        />
        <div 
          ref={el => floatingRef.current[4] = el}
          className="absolute top-1/2 left-[5%] w-8 h-8 bg-primary rounded-full"
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="cta-card text-center p-12 md:p-16 rounded-[3rem] bg-card/80 backdrop-blur-sm border border-primary/20 shadow-2xl">
          {/* Badge */}
          <div className="cta-animate inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-foreground">Start for free today</span>
          </div>

          <h2 className="cta-animate text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Start managing your inventory
            <br />
            <span className="text-primary">the smart way</span>
          </h2>
          
          <p className="cta-animate text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of businesses that trust StockLive to manage their inventory, 
            reduce waste, and grow smarter.
          </p>

          {/* Trust points */}
          <div className="cta-animate flex flex-wrap justify-center gap-6 mb-10">
            {['1 month free plan', 'No extra verifications required', 'Setup in 5 minutes'].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center">
                  <Check className="h-3 w-3 text-primary" />
                </div>
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </div>
          
          <div className="cta-animate flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 gap-2 h-14 px-10 text-lg"

              onClick={() => window.location.href = `${APP_URL}/?mode=signup&plan=BASIC`}

             

            >
              Get Started Free
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="gap-2 h-14 px-10 text-lg border-2">
              <MessageCircle className="h-5 w-5" />
              Request a Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

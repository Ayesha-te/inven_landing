import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Package, TrendingUp, Bell, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

<<<<<<< HEAD
const APP_URL = "https://inventory-wzsj.vercel.app";
=======
const APP_URL = "http://localhost:5173"; // Change this to your actual app URL
>>>>>>> d1a2b457d616c106772da36791eb71ebc64047df

export const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const floatingRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero content animation
      gsap.fromTo(".hero-animate",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          delay: 0.2
        }
      );

      // Dashboard card animation
      gsap.fromTo(".dashboard-card",
        { opacity: 0, scale: 0.9, y: 40 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          delay: 0.5
        }
      );

      // Floating cards animation
      gsap.fromTo(".floating-card",
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          delay: 1
        }
      );

      // Continuous floating animation
      floatingRef.current.forEach((el, i) => {
        if (el) {
          gsap.to(el, {
            y: i % 2 === 0 ? -15 : 15,
            duration: 3 + i * 0.5,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
          });
        }
      });

      // Floating decorative elements
      gsap.to(".float-slow", {
        y: -20,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });

      gsap.to(".float-fast", {
        y: 15,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden bg-background">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="float-slow absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="float-fast absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="float-slow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/5 to-transparent rounded-full blur-3xl" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(183,240,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(183,240,0,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
          {/* Left: Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="hero-animate inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-foreground">Now with AI-powered insights</span>
            </div>

            {/* Headline */}
            <h1 className="hero-animate text-4xl md:text-5xl lg:text-7xl font-bold text-foreground leading-tight mb-6">
              Manage inventory,
              <br />
              <span className="text-primary relative">
                track expiry
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                  <path d="M2 6C50 2 150 2 198 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-primary/40"/>
                </svg>
              </span>, and
              <br />
              grow smarter
            </h1>

            {/* Subheadline */}
            <p className="hero-animate text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              All-in-one inventory management for small and medium businesses. 
              Simple to use. Powerful to grow.
            </p>

            {/* CTAs */}
            <div className="hero-animate flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 gap-2 h-14 px-8 text-base"
<<<<<<< HEAD
                onClick={() => window.location.href = `${APP_URL}/?mode=signup&plan=BASIC`}
=======
                onClick={() => window.location.href = `${APP_URL}/auth?mode=signup&plan=BASIC`}
>>>>>>> d1a2b457d616c106772da36791eb71ebc64047df
              >
                Get Started Free
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2 group h-14 px-8 text-base border-2">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Play className="h-4 w-4 text-primary" />
                </div>
                Watch Demo
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="hero-animate flex flex-wrap items-center gap-6 mt-10 justify-center lg:justify-start text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center">
                  <svg className="h-3 w-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Basic forever plan</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center">
                  <svg className="h-3 w-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>No credit card</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center">
                  <svg className="h-3 w-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>5,000+ businesses</span>
              </div>
            </div>
          </div>

          {/* Right: Dashboard Preview */}
          <div className="relative">
            {/* Main dashboard mockup */}
            <div 
              ref={el => floatingRef.current[0] = el}
              className="dashboard-card relative bg-card/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-border/50 p-6 md:p-8"
            >
              <div className="space-y-6">
                {/* Dashboard header */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Total Inventory Value</p>
                    <p className="text-4xl font-bold text-foreground">$124,580</p>
                    <p className="text-sm text-primary flex items-center gap-1 mt-1">
                      <TrendingUp className="h-4 w-4" />
                      +12.5% from last month
                    </p>
                  </div>
                  <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <TrendingUp className="h-8 w-8 text-primary" />
                  </div>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-secondary/50 rounded-2xl p-4 border border-border/50">
                    <p className="text-xs text-muted-foreground mb-1">Products</p>
                    <p className="text-2xl font-bold text-foreground">1,234</p>
                  </div>
                  <div className="bg-secondary/50 rounded-2xl p-4 border border-border/50">
                    <p className="text-xs text-muted-foreground mb-1">Low Stock</p>
                    <p className="text-2xl font-bold text-amber-500">23</p>
                  </div>
                  <div className="bg-secondary/50 rounded-2xl p-4 border border-border/50">
                    <p className="text-xs text-muted-foreground mb-1">Expiring</p>
                    <p className="text-2xl font-bold text-destructive">8</p>
                  </div>
                </div>

                {/* Chart */}
                <div className="h-40 bg-gradient-to-t from-primary/10 to-transparent rounded-2xl flex items-end justify-around px-6 pb-6 border border-border/30">
                  {[40, 65, 45, 80, 55, 90, 70, 85].map((height, i) => (
                    <div
                      key={i}
                      className="w-8 bg-gradient-to-t from-primary to-primary/60 rounded-t-lg transition-all duration-300 hover:from-primary hover:to-primary/80"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Floating notification card */}
            <div 
              ref={el => floatingRef.current[1] = el}
              className="floating-card absolute -left-8 md:-left-16 top-1/3 bg-card/95 backdrop-blur-sm rounded-2xl shadow-xl border border-border/50 p-4 max-w-[220px]"
            >
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-xl bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                  <Bell className="h-5 w-5 text-amber-500" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Low Stock Alert</p>
                  <p className="text-xs text-muted-foreground mt-0.5">5 products need reorder</p>
                </div>
              </div>
            </div>

            {/* Floating product card */}
            <div 
              ref={el => floatingRef.current[2] = el}
              className="floating-card absolute right-4 md:right-0 -bottom-4 md:-bottom-8 bg-card/95 backdrop-blur-sm rounded-2xl shadow-xl border border-border/50 p-4 max-w-[200px]"
            >
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Package className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">New order</p>
                  <p className="text-xs text-muted-foreground">+48 items added</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Check, Sparkles, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

gsap.registerPlugin(ScrollTrigger);

<<<<<<< HEAD
const APP_URL = "https://inventory-wzsj.vercel.app";
=======
const APP_URL = "http://localhost:5173"; // Change this to your actual app URL
>>>>>>> d1a2b457d616c106772da36791eb71ebc64047df

const plans = [
  {
    name: 'Basic',
<<<<<<< HEAD
    price: '$9',
    period: '/month',
    description: 'For small shops getting started',
=======
    price: '$0',
    period: 'forever',
    description: 'Perfect for getting started',
>>>>>>> d1a2b457d616c106772da36791eb71ebc64047df
    features: [
      '1 Store',
      'Core inventory management',
      'Expiry tracking & alerts',
      'Email notifications',
      'Basic analytics & reports',
      'Standard support',
    ],
    cta: 'Get Started',
    highlighted: false,
    icon: null,
    planValue: 'BASIC',
  },
  {
<<<<<<< HEAD
    name: 'Starter',
    price: '$19',
=======
    name: 'Standard',
    price: '$29',
>>>>>>> d1a2b457d616c106772da36791eb71ebc64047df
    period: '/month',
    description: 'For growing businesses',
    features: [
      'Up to 3 Stores',
      'Advanced inventory tracking',
      'Barcode & scanner support',
      'Orders management',
      'Supplier management',
      'Stock level alerts',
      'Detailed reports & insights',
    ],
    cta: 'Start Free Trial',
    highlighted: true,
    badge: 'Most Popular',
    icon: Sparkles,
<<<<<<< HEAD
    planValue: 'STARTER',
  },
  {
    name: 'Pro',
    price: '$39',
=======
    planValue: 'STANDARD',
  },
  {
    name: 'Other',
    price: '$79',
>>>>>>> d1a2b457d616c106772da36791eb71ebc64047df
    period: '/month',
    description: 'For serious operations',
    features: [
      'Unlimited stores',
      'Unlimited products',
      'Multi-channel inventory sync',
      'POS system integration',
      'Advanced analytics & performance reports',
      'Clearance & liquidation tools',
      'Priority support',
    ],
    cta: 'Start Free Trial',
    highlighted: false,
    icon: Zap,
<<<<<<< HEAD
    planValue: 'PRO',
=======
    planValue: 'OTHER',
>>>>>>> d1a2b457d616c106772da36791eb71ebc64047df
  },
];

export const PricingSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(".pricing-header",
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

      // Cards animation with 3D effect
      cardsRef.current.forEach((card, i) => {
        if (card) {
          gsap.fromTo(card,
            { 
              opacity: 0, 
              y: 80,
              rotateY: i === 0 ? -15 : i === 2 ? 15 : 0,
              scale: 0.9
            },
            {
              opacity: 1,
              y: 0,
              rotateY: 0,
              scale: i === 1 ? 1.05 : 1,
              duration: 1,
              delay: i * 0.15,
              ease: "power3.out",
              scrollTrigger: {
                trigger: ".pricing-grid",
                start: "top 85%",
                toggleActions: "play none none reverse"
              }
            }
          );
        }
      });

      // Floating badge animation
      gsap.to(".popular-badge", {
        y: -5,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="pricing" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="pricing-header inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            💰 Pricing Plans
          </span>
          <h2 className="pricing-header text-4xl md:text-5xl font-bold text-foreground mb-4">
            Simple, transparent pricing
          </h2>
          <p className="pricing-header text-lg text-muted-foreground max-w-2xl mx-auto">
            Start free and upgrade as you grow. No hidden fees.
          </p>
        </div>

        <div className="pricing-grid grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto" style={{ perspective: '1000px' }}>
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              ref={el => cardsRef.current[index] = el}
              className={cn(
                "relative p-8 rounded-3xl border transition-all duration-500 hover:-translate-y-2",
                plan.highlighted
                  ? "bg-card border-primary shadow-2xl shadow-primary/20"
                  : "bg-card/80 border-border hover:border-primary/30 hover:shadow-xl"
              )}
            >
              {/* Popular badge */}
              {plan.badge && (
                <div className="popular-badge absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground text-sm font-semibold shadow-lg">
                  ✨ {plan.badge}
                </div>
              )}

              <div className="text-center mb-8">
                {plan.icon && (
                  <div className="inline-flex items-center justify-center h-12 w-12 rounded-2xl bg-primary/10 mb-4">
                    <plan.icon className="h-6 w-6 text-primary" />
                  </div>
                )}
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1 mb-2">
                  <span className="text-5xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground text-lg">{plan.period}</span>
                </div>
                <p className="text-muted-foreground">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className={cn(
                      "h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0",
                      plan.highlighted ? "bg-primary/20" : "bg-secondary"
                    )}>
                      <Check className={cn(
                        "h-4 w-4",
                        plan.highlighted ? "text-primary" : "text-muted-foreground"
                      )} />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
<<<<<<< HEAD
                onClick={() => window.location.href = `${APP_URL}/?mode=signup&plan=${plan.planValue}`}
=======
                onClick={() => window.location.href = `${APP_URL}/auth?plan=${plan.planValue}`}
>>>>>>> d1a2b457d616c106772da36791eb71ebc64047df
                className={cn(
                  "w-full h-12 text-base font-semibold transition-all duration-300",
                  plan.highlighted
                    ? "bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30"
                    : "bg-secondary hover:bg-secondary/80 text-secondary-foreground hover:border-primary/30"
                )}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* Money back guarantee */}
        <p className="pricing-header text-center text-muted-foreground mt-12">
          🔒 30-day money-back guarantee • Cancel anytime • No questions asked
        </p>
      </div>
    </section>
  );
};

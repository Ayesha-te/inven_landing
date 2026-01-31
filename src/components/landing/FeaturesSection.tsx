import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    id: "01",
    title: "Real-time inventory tracking across all your locations",
    description: "",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    badge: "Feature"
  },
  {
    id: "02", 
    title: "Smart expiry alerts before products go bad",
    description: "",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    badge: "Feature"
  },
  {
    id: "03",
    title: "Barcode scanning for lightning-fast operations",
    description: "",
    image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    badge: "Feature"
  },
  {
    id: "04",
    title: "Multi-channel sync for online & offline stores",
    description: "",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    badge: "Feature"
  }
];

// duplicate for looping
const duplicatedFeatures = [...features, ...features, ...features];

export const FeaturesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollWrapperRef = useRef<HTMLDivElement>(null);
  const autoScrollTweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    const wrapper = scrollWrapperRef.current;
    if (!container || !wrapper) return;

    gsap.set(container, { x: 0 });

    const setupAutoScroll = () => {
      const containerWidth = wrapper.offsetWidth;
      const scrollWidth = duplicatedFeatures.length * 450;
      const scrollDistance = scrollWidth - containerWidth;

      if (scrollDistance > 0) {
        if (autoScrollTweenRef.current) {
          autoScrollTweenRef.current.kill();
        }
        autoScrollTweenRef.current = gsap.to(container, {
          x: -scrollDistance,
          duration: 25,
          ease: "none",
          repeat: -1,
          onRepeat: () => {
            gsap.set(container, { x: 0 });
          }
        });
      }
    };

    const timeoutId = setTimeout(setupAutoScroll, 100);

    // Pause/resume on hover
    const wrapperEl = wrapper;
    const handleMouseEnter = () => {
      if (autoScrollTweenRef.current) autoScrollTweenRef.current.pause();
    };
    const handleMouseLeave = () => {
      if (autoScrollTweenRef.current) autoScrollTweenRef.current.resume();
    };

    wrapperEl.addEventListener("mouseenter", handleMouseEnter);
    wrapperEl.addEventListener("mouseleave", handleMouseLeave);

    // Header animation
    gsap.fromTo(".header-animate", 
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );

    return () => {
      clearTimeout(timeoutId);
      if (autoScrollTweenRef.current) {
        autoScrollTweenRef.current.kill();
      }
      wrapperEl.removeEventListener("mouseenter", handleMouseEnter);
      wrapperEl.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      id="features"
      className="relative py-20 bg-black overflow-hidden min-h-screen flex items-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        boxShadow: "inset 0 0 0 1000px rgba(0, 0, 0, 0.75)"
      }}
    >
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 min-h-screen items-center">
          
          {/* Left Text Section */}
          <div className="lg:col-span-5 flex flex-col justify-center py-20 px-4 sm:px-8 lg:px-16 xl:px-24">
            <div className="header-animate mb-6">
              <span className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary text-xs font-medium uppercase tracking-wider rounded-full border border-primary/20">
                • FEATURES
              </span>
            </div>

            <h2 className="header-animate text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight text-white">
              The <span className="text-primary">StockLive</span><br/>
              Advantage
            </h2>

            <p className="header-animate text-lg text-gray-300 mb-12 max-w-xl leading-relaxed">
              Experience powerful features that make inventory management effortless, accurate, and tailored for your business growth.
            </p>

            <div className="header-animate">
              <a 
                href="#pricing"
                className="group bg-transparent hover:bg-primary border-2 border-primary text-primary hover:text-primary-foreground font-medium px-8 py-4 rounded-full text-base transition-all duration-300 inline-flex items-center w-fit"
              >
                Explore Features
                <div className="ml-3 w-8 h-8 bg-primary group-hover:bg-primary-foreground rounded-full flex items-center justify-center transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4 text-primary-foreground group-hover:text-primary transition-colors duration-300" />
                </div>
              </a>
            </div>
          </div>
          
          {/* Right Auto-Scroll Section */}
          <div className="lg:col-span-7 h-screen flex items-center">
            <div 
              ref={scrollWrapperRef}
              className="w-full h-full overflow-hidden cursor-grab select-none"
            >
              <div 
                ref={scrollContainerRef}
                className="flex gap-6 h-full items-center"
                style={{ width: `${duplicatedFeatures.length * 450}px` }}
              >
                {duplicatedFeatures.map((item, index) => (
                  <div
                    key={`${item.id}-${index}`}
                    className="flex-shrink-0 w-[420px] h-[70vh] group"
                  >
                    <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
                      <div className="absolute inset-0">
                        <img 
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                          draggable={false}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/20" />
                      </div>

                      {/* Large Number - Top Right */}
                      <div className="absolute top-6 right-6">
                        <span className="text-5xl md:text-6xl font-bold text-white/60 select-none">
                          {item.id}
                        </span>
                      </div>

                      {/* Badge - Top Left */}
                      <div className="absolute top-6 left-6">
                        <span className="px-4 py-2 text-sm font-medium rounded-full backdrop-blur-md bg-primary/90 text-primary-foreground border border-primary/30">
                          {item.badge}
                        </span>
                      </div>

                      {/* Content at Bottom */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">
                          {item.title}
                        </h3>
                        {item.description && (
                          <p className="text-gray-300 text-sm leading-relaxed">
                            {item.description}
                          </p>
                        )}
                      </div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

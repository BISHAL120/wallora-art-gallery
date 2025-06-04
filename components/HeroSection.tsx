import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    {
      src: "/lovable-uploads/8fb01de6-f8c5-46f5-a474-facbf3d3c100.png",
      title: "Abstract Ocean Flow in Blue & Gold",
      subtitle:
        "Textured contemporary art featuring swirling waves and metallic accents",
    },
    {
      src: "/lovable-uploads/05be21dd-5b55-4750-a2a8-95c3e700713b.png",
      title: "Modern Portrait Art Collection",
      subtitle:
        "Vibrant contemporary expressions capturing human emotion through bold colors",
    },
    {
      src: "/lovable-uploads/c98a05af-871d-4541-a89b-991d3268332d.png",
      title: "Serene Mountain Landscape",
      subtitle: "Minimalist natural beauty inspired by Alpine peaks at dawn",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroImages.length) % heroImages.length
    );
  };

  return (
    <section id="hero" className="relative h-screen overflow-hidden">
      {/* Hero Slider */}
      <div className="relative w-full h-full">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${index === currentSlide
              ? "opacity-100 scale-100"
              : "opacity-0 scale-105"
              }`}
          >
            <div
              className="w-full h-full bg-cover bg-center bg-gray-100 transform transition-transform duration-1000"
              style={{ backgroundImage: `url(${image.src})` }}
            >
              <div className="absolute inset-0 bg-black/30"></div>

              {/* Image Title and Subtitle */}
              <div
                className={`absolute inset-0 flex flex-col items-center justify-center text-center text-white transition-all duration-1000 ${index === currentSlide
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
                  }`}
              >
                <h1
                  className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-slide-down"
                  style={{ animationDelay: "300ms" }}
                >
                  {image.title}
                </h1>
                <p
                  className="text-lg md:text-xl mb-8 max-w-2xl mx-auto font-light animate-fade-slide-up"
                  style={{ animationDelay: "500ms" }}
                >
                  {image.subtitle}
                </p>
                <div
                  className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in"
                  style={{ animationDelay: "800ms" }}
                >
                  <Button
                    size="lg"
                    onClick={() => scrollToSection("featured")}
                    className="bg-black  hover:bg-sage hover:text-white text-lg px-8 py-4 font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 cursor-pointer"
                  >
                    Explore Collection
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => scrollToSection("customization")}
                    className="border-white text-black hover:bg-white hover: text-lg px-8 py-4 font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 cursor-pointer"
                  >
                    How It Works
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm p-3 rounded-full transition-all duration-300 hover:scale-110 active:scale-95"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm p-3 rounded-full transition-all duration-300 hover:scale-110 active:scale-95"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>
      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${index === currentSlide ? "bg-white scale-125" : "bg-white/50"
              }`}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes fade-slide-down {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-slide-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        .animate-fade-slide-down {
          animation: fade-slide-down 0.8s ease-out forwards;
        }
        .animate-fade-slide-up {
          animation: fade-slide-up 0.8s ease-out forwards;
          animation-delay: 400ms;
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        .animate-slide-up {
          animation: fade-slide-up 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;

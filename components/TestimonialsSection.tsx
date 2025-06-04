import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      location: 'Dhaka',
      rating: 5,
      text: 'The artwork transformed my living room completely! The customization process was seamless and the quality exceeded my expectations.',
      image: 'https://images.unsplash.com/photo-1715838854648-ea200803934a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 2,
      name: 'Ahmed Rahman',
      location: 'Chittagong',
      rating: 5,
      text: 'Outstanding service and beautiful art pieces. The team helped me choose the perfect size and colors for my office space.',
      image: 'https://images.unsplash.com/photo-1611880147493-7542bdb0f024?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 3,
      name: 'Fatima Khan',
      location: 'Sylhet',
      rating: 5,
      text: 'Incredible attention to detail and fast delivery. The textured artwork adds such elegance to our home. Highly recommended!',
      image: 'https://images.unsplash.com/photo-1676197907524-4445d9a86226?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 4,
      name: 'Mohammad Ali',
      location: 'Rajshahi',
      rating: 5,
      text: 'Professional service from start to finish. The custom portrait turned out exactly as I envisioned. Will definitely order again!',
      image: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-display text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Customer Stories
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Discover how our art pieces have transformed spaces and touched lives
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0">
                  <Card className="m-4 bg-white/80 backdrop-blur-sm p-0">
                    <CardContent className="p-8 md:p-12">
                      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden bg-gradient-to-tr from-indigo-500 to-purple-500 p-1">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            width={500}
                            height={500}
                            className="w-full h-full object-cover rounded-full"
                          />
                        </div>

                        <div className="flex-1 space-y-6">
                          <div className="flex justify-start">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <span key={i} className="text-amber-400">
                                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                </svg>
                              </span>
                            ))}
                          </div>

                          <blockquote className="text-lg md:text-xl text-slate-700 leading-relaxed">
                            {testimonial.text}
                          </blockquote>

                          <div className="pt-4 border-t border-slate-200">
                            <h4 className="font-display font-bold text-xl text-slate-900">
                              {testimonial.name}
                            </h4>
                            <p className="text-indigo-600 font-medium">{testimonial.location}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevTestimonial}
            className="absolute left-5 md:-left-5 top-[45%] -translate-y-[45%] -translate-x-1/2 bg-white/80 hover:bg-indigo-600 hover:text-white p-4 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-5 md:-right-5 top-[45%] -translate-y-[45%] translate-x-1/2 bg-white/80 hover:bg-indigo-600 hover:text-white p-4 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-12 h-1.5 rounded-full transition-all duration-300 ${index === currentTestimonial
                  ? 'bg-indigo-600'
                  : 'bg-slate-200 hover:bg-slate-300'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

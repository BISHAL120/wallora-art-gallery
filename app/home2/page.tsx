"use client"
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowDown } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Home2 = () => {
  const [currentArtwork, setCurrentArtwork] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  const artworks = [
    {
      id: 1,
      src: '/lovable-uploads/8fb01de6-f8c5-46f5-a474-facbf3d3c100.png',
      title: 'Abstract Ocean Flow',
      description: 'A mesmerizing blend of blues and whites that captures the eternal dance between sea and sky. This piece evokes the rhythmic patterns of ocean waves, creating a sense of movement and tranquility that transforms any space into a coastal sanctuary.',
      artist: 'Marina Coastwell',
      year: '2024',
      medium: 'Acrylic on Canvas',
      dimensions: '36" x 48"',
      history: 'Inspired by the artist\'s morning walks along the Mediterranean coast, this piece was created during a three-month residency in Santorini. The flowing forms represent the artist\'s meditation on the eternal cycle of tides and the healing power of water.',
      price: '$299'
    },
    {
      id: 2,
      src: '/lovable-uploads/05be21dd-5b55-4750-a2a8-95c3e700713b.png',
      title: 'Contemporary Portrait',
      description: 'A bold exploration of human emotion through vibrant colors and expressive brushstrokes. This contemporary portrait challenges traditional representation while celebrating the complexity of modern identity and self-expression.',
      artist: 'Viktor Modernsky',
      year: '2024',
      medium: 'Mixed Media on Canvas',
      dimensions: '30" x 40"',
      history: 'Part of the "Faces of Tomorrow" series, this portrait was created using a unique technique combining traditional painting with digital elements. The work explores themes of identity in the digital age and won the Contemporary Art Prize in 2024.',
      price: '$279'
    },
    {
      id: 3,
      src: '/lovable-uploads/c98a05af-871d-4541-a89b-991d3268332d.png',
      title: 'Mountain Serenity',
      description: 'A minimalist interpretation of alpine landscapes that captures the essence of mountain solitude. The subtle gradations and clean lines create a sense of peace and contemplation, bringing the majesty of high peaks into intimate spaces.',
      artist: 'Elena Peaks',
      year: '2023',
      medium: 'Oil on Linen',
      dimensions: '40" x 30"',
      history: 'Created during a solo hiking expedition in the Swiss Alps, this piece represents the artist\'s spiritual journey through mountain meditation. Each layer was painted from memory, capturing different moments of light throughout a single day at altitude.',
      price: '$399'
    },
    {
      id: 4,
      src: '/lovable-uploads/de648ad9-5688-4535-9d1f-cd8579d95540.png',
      title: 'Textured Landscape',
      description: 'An abstract interpretation of natural forms through rich textures and earthy tones. This piece invites tactile exploration while representing the raw beauty of untamed landscapes and the passage of geological time.',
      artist: 'Terra Naturalis',
      year: '2024',
      medium: 'Textured Acrylic with Sand',
      dimensions: '42" x 32"',
      history: 'Inspired by the badlands of Utah, this work incorporates actual sand and mineral pigments collected during the artist\'s desert expeditions. The layered technique represents millions of years of geological formation compressed into a single artistic moment.',
      price: '$349'
    },
    {
      id: 5,
      src: '/lovable-uploads/3775e8ce-8e74-4859-bfaf-87ddfdfb1ba6.png',
      title: 'Coastal Dreams',
      description: 'A dreamy seascape that blurs the line between reality and imagination. Soft blues and whites flow together like morning mist over water, creating an atmosphere of peaceful contemplation and endless possibility.',
      artist: 'Oceana Dreamweaver',
      year: '2024',
      medium: 'Watercolor and Acrylic',
      dimensions: '34" x 44"',
      history: 'Born from the artist\'s recurring dreams of flying over endless oceans, this piece was painted entirely from memory and imagination. The ethereal quality comes from a unique wet-on-wet technique developed over years of studying cloud formations.',
      price: '$329'
    },
    {
      id: 6,
      src: '/lovable-uploads/5aa2b1a0-940c-41c6-985a-056992c30072.png',
      title: 'Vibrant Tree',
      description: 'A celebration of life and growth through explosive color and dynamic form. This tree represents resilience, transformation, and the vibrant energy that flows through all living things, making it a powerful symbol for any space.',
      artist: 'Flora Vivacious',
      year: '2024',
      medium: 'Acrylic and Digital Enhancement',
      dimensions: '38" x 50"',
      history: 'Created using a revolutionary technique combining traditional painting with digital color manipulation, this piece represents the fusion of natural beauty with modern technology. The tree is based on a 300-year-old oak that survived multiple forest fires.',
      price: '$359'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      // Calculate which artwork should be shown based on scroll position
      const artworkHeight = window.innerHeight;
      const newCurrentArtwork = Math.floor(window.scrollY / artworkHeight);
      setCurrentArtwork(Math.min(newCurrentArtwork, artworks.length - 1));
    };

    // Only add the event listener on the client side
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [artworks.length]);

  const handleCustomizeClick = (artworkTitle: string) => {
    const message = `Hi! I'm interested in customizing the "${artworkTitle}" artwork. Could you please provide more details about size and color options?`;
    const whatsappUrl = `https://wa.me/8801946559679?text=${encodeURIComponent(message)}`;
    if (typeof window !== 'undefined') {
      window.open(whatsappUrl, '_blank');
    }
  };

  return (
    <div className="relative">
      {/* Navigation Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-earth-medium">
        <div className="container mx-auto px-4 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 group">
            <ArrowLeft className="w-5 h-5  group-hover: transition-colors" />
            <span className=" group-hover: transition-colors font-medium">Back to Home</span>
          </Link>
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 rounded-sm flex items-center justify-center">
              <span className="text-white bg-[#2d2d2d] px-2 py-1 rounded-sm font-display font-bold text-sm">W</span>
            </div>
            <span className="font-display font-semibold text-lg ">Wallora</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center space-y-2">
        {artworks.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-8 rounded-full transition-all duration-300 ${index === currentArtwork ? 'bg-slate-700' : 'bg-gray-300'
              }`}
          />
        ))}
        <ArrowDown className="w-6 h-10 mt-4 text-white animate-bounce border rounded-full" />
      </div>

      {/* Artwork Sections */}
      {artworks.map((artwork, index) => (
        <section
          key={artwork.id}
          className="relative h-screen flex items-center overflow-hidden"
          style={{ zIndex: artworks.length - index }}
        >
          {/* Background Image with Parallax */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${artwork.src})`,
              transform: typeof window !== 'undefined' ? `translateY(${(scrollY - (index * window.innerHeight)) * 0.5}px)` : 'none',
              filter: 'brightness(0.4)'
            }}
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />

          {/* Content */}
          <div className="relative z-10 container mx-auto px-4 lg:px-0 grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div
              className="text-white space-y-6"
              style={{
                transform: typeof window !== 'undefined' ? `translateX(${Math.max(0, (scrollY - (index * window.innerHeight)) * -0.7)}px)` : 'none',
                opacity: typeof window !== 'undefined' ? Math.max(0, 1 - Math.abs(scrollY - (index * window.innerHeight)) / window.innerHeight) : 1
              }}
            >
              <div className="space-y-2">
                <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight">
                  {artwork.title}
                </h1>
                <p className=" text-lg font-medium">
                  by {artwork.artist} • {artwork.year}
                </p>
              </div>

              <p className="text-lg md:text-xl leading-relaxed opacity-90">
                {artwork.description}
              </p>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className=" font-medium">Medium:</span>
                  <p>{artwork.medium}</p>
                </div>
                <div>
                  <span className=" font-medium">Dimensions:</span>
                  <p>{artwork.dimensions}</p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <h3 className=" font-semibold mb-2">Artwork History</h3>
                <p className="text-sm leading-relaxed opacity-90">
                  {artwork.history}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4">
                <div className="text-3xl font-bold ">
                  {artwork.price}
                </div>
                <Button
                  onClick={() => handleCustomizeClick(artwork.title)}
                  className="bg-sage hover:bg-terracotta text-white px-6 py-3 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  Customize This Piece
                </Button>
              </div>
            </div>

            {/* Right Content - Featured Image */}
            <div
              className="relative"
              style={{
                transform: typeof window !== 'undefined' ? `translateX(${Math.min(0, (scrollY - (index * (typeof window !== 'undefined' ? window.innerHeight : 0))) * 0.5)}px) scale(${1 + Math.max(0, (scrollY - (index * (typeof window !== 'undefined' ? window.innerHeight : 0))) * 0.0002)})` : 'none',
                opacity: typeof window !== 'undefined' ? Math.max(0, 1 - Math.abs(scrollY - (index * (typeof window !== 'undefined' ? window.innerHeight : 0))) / (typeof window !== 'undefined' ? window.innerHeight : 1)) : 1
              }}
            >
              <div className="relative overflow-hidden rounded-lg shadow-2xl group">
                <Image
                  src={artwork.src}
                  alt={artwork.title}
                  width={500}
                  height={500}
                  className="w-full h-96 md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium">Available in custom sizes and colors</p>
                </div>
              </div>
            </div>
          </div>

          {/* Section Number */}
          <div className="absolute bottom-8 left-8 text-white/50 font-display text-6xl font-bold">
            {String(index + 1).padStart(2, '0')}
          </div>
        </section>
      ))}

      {/* Final Call to Action Section */}
      <section className="h-screen flex items-center justify-center text-center bg-[#2d2d2d]">
        <div className="space-y-8 px-4">
          <h2 className="font-display text-4xl md:text-6xl font-bold text-white">
            Ready to Transform
            <br />
            <span className="">Your Space?</span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Each piece can be customized to your exact specifications.
            Contact us to discuss size, color, and framing options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => {
                const message = "Hi! I'd like to discuss customizing artwork for my space.";
                const whatsappUrl = `https://wa.me/8801946559679?text=${encodeURIComponent(message)}`;
                if (typeof window !== 'undefined') {
                  window.open(whatsappUrl, '_blank');
                }
              }}
              size="lg"
              className="bg-sage hover:bg-terracotta text-white border border-white/80 px-8 py-4 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Start Your Custom Order
            </Button>
            <Link href="/">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-[#2d2d2d] hover:bg-white hover: px-8 py-4 text-lg transition-all duration-300 hover:scale-105"
              >
                Explore Gallery
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home2;


import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

const FeaturedSection = () => {
  const artworks = [
    {
      id: 1,
      src: '/lovable-uploads/8fb01de6-f8c5-46f5-a474-facbf3d3c100.png',
      title: 'Abstract Ocean Flow',
      price: '$299',
      category: 'Abstract'
    },
    {
      id: 2,
      src: '/lovable-uploads/de648ad9-5688-4535-9d1f-cd8579d95540.png',
      title: 'Textured Landscape',
      price: '$349',
      category: 'Landscape'
    },
    {
      id: 3,
      src: '/lovable-uploads/c98a05af-871d-4541-a89b-991d3268332d.png',
      title: 'Mountain Serenity',
      price: '$399',
      category: 'Nature'
    },
    {
      id: 4,
      src: '/lovable-uploads/05be21dd-5b55-4750-a2a8-95c3e700713b.png',
      title: 'Contemporary Portrait',
      price: '$279',
      category: 'Portrait'
    },
    {
      id: 5,
      src: '/lovable-uploads/3775e8ce-8e74-4859-bfaf-87ddfdfb1ba6.png',
      title: 'Coastal Dreams',
      price: '$329',
      category: 'Abstract'
    },
    {
      id: 6,
      src: '/lovable-uploads/5aa2b1a0-940c-41c6-985a-056992c30072.png',
      title: 'Vibrant Tree',
      price: '$359',
      category: 'Nature'
    }
  ];

  const handleCustomizeClick = (artworkTitle: string) => {
    const message = `Hi! I'm interested in customizing the "${artworkTitle}" artwork. Could you please provide more details about size and color options?`;
    const whatsappUrl = `https://wa.me/8801946559679?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="featured" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-display text-3xl md:text-4xl font-bold  mb-6">
            Featured Artworks
          </h2>
          <div className="w-20 h-1 bg-sage mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our curated collection of contemporary art pieces, each available in custom sizes and colors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artworks.map((artwork, index) => (
            <Card
              key={artwork.id}
              className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden bg-white animate-zoom-in transform hover:scale-105 p-0"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={artwork.src}
                  alt={artwork.title}
                  width={460}
                  height={320}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700 cursor-pointer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4 transform -translate-x-2 group-hover:translate-x-4 transition-transform duration-300">
                  <span className="bg-white/90  px-3 py-1 rounded-full text-sm font-medium shadow-md">
                    {artwork.category}
                  </span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg transform scale-75 group-hover:scale-100 transition-transform duration-300 cursor-pointer">
                    <span className=" font-medium">Click to view</span>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4 transform group-hover:scale-105 transition-transform duration-300">
                  {artwork.title}
                </h3>
                <p className="text-xl font-bold mb-4 transform group-hover:scale-105 transition-transform duration-300">{artwork.price}</p>
                <p className="text-gray-600 text-sm mb-6">Custom size & color available</p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    onClick={() => handleCustomizeClick(artwork.title)}
                    className="flex-1  hover:bg-sage text-white transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
                  >
                    Customize
                  </Button>
                  <Button
                    onClick={() => handleCustomizeClick(artwork.title)}
                    variant="outline"
                    className="flex-1 transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
                  >
                    Order Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;

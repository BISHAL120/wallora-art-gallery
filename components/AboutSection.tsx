
const AboutSection = () => {
  return (
    <section id="about" className="md:py-20 py-10 bg-ivory">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <h2 className="font-display text-3xl md:text-4xl font-bold  mb-6">
              About Wallora Art
            </h2>
            <div className="w-20 h-1 bg-sage mx-auto mb-8"></div>

            <p className="text-lg text-gray-700 leading-relaxed mb-3 md:mb-8">
              At Wallora, we believe every wall tells a story. Our collection features handcrafted
              contemporary artworks designed to transform your space into a reflection of your unique style.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-8 md:mt-12">
              <div className="text-center group">
                <div className="w-16 h-16 bg-sage rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-2xl">🎨</span>
                </div>
                <h3 className="font-display font-semibold text-xl  mb-3">Handcrafted Quality</h3>
                <p className="text-gray-600">Each piece is carefully created with premium materials and attention to detail.</p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 bg-terracotta rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-2xl">⚡</span>
                </div>
                <h3 className="font-display font-semibold text-xl  mb-3">Custom Size & Color</h3>
                <p className="text-gray-600">Personalize every artwork to match your space and aesthetic preferences.</p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-2xl">🚚</span>
                </div>
                <h3 className="font-display font-semibold text-xl  mb-3">Delivered with Care</h3>
                <p className="text-gray-600">Safe packaging and timely delivery ensure your artwork arrives perfect.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

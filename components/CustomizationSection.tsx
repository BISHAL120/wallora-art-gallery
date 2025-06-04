
const CustomizationSection = () => {
  const steps = [
    {
      number: '01',
      title: 'Choose Artwork',
      description: 'Browse our collection and select your favorite piece',
      icon: '🎨'
    },
    {
      number: '02',
      title: 'Select Size & Color',
      description: 'Customize dimensions and color palette to match your space',
      icon: '📐'
    },
    {
      number: '03',
      title: 'Place Order',
      description: 'Contact us via WhatsApp with your specifications',
      icon: '📱'
    },
    {
      number: '04',
      title: 'Delivered with Care',
      description: 'Receive your custom artwork safely packaged',
      icon: '🚚'
    }
  ];

  const handleContactClick = () => {
    const message = "Hi! I'd like to learn more about your customization process and available options.";
    const whatsappUrl = `https://wa.me/8801946559679?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="customization" className="py-20 bg-earth-light">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-display text-3xl md:text-4xl font-bold  mb-6">
            How Customization Works
          </h2>
          <div className="w-20 h-1 bg-sage mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Our simple 4-step process ensures you get the perfect artwork for your space.
          </p>
          <div className="flex items-center justify-center gap-2 mb-8">
            <span className=" font-medium">Questions? Call us:</span>
            <a
              href="tel:+8801946559679"
              className=" font-bold text-lg hover:text-terracotta transition-all duration-300 hover:scale-105"
            >
              +880 1946-559679
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="text-center group animate-fade-in-up hover:transform hover:scale-105 transition-all duration-500 border border-slate-400 overflow-hidden hover:shadow-2xl  hover:shadow-blue-300 p-6 rounded-md cursor-default"
            // style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 border-4 border-sage/20 group-hover:border-sage/40 group-hover:bg-sage/5">
                  <span className="text-3xl transform group-hover:scale-110 transition-transform duration-300">{step.icon}</span>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-sage rounded-full flex items-center justify-center group-hover:bg-terracotta transition-colors duration-300 animate-pulse">
                  <span className=" font-bold text-sm">{step.number}</span>
                </div>
              </div>
              <h3 className="font-display font-semibold text-xl  mb-3 group-hover: transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={handleContactClick}
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium overflow-hidden rounded-xl bg-sage transition-all duration-500 ease-in-out hover:bg-terracotta border border-slate-400 hover:border-terracotta hover:text-white shadow-lg hover:shadow-xl hover:shadow-blue-300 cursor-pointer"
          >
            <span className="relative flex items-center gap-2 text-black transition-transform duration-500 group-hover:translate-x-1">
              Start Your Custom Order
              <svg
                className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </span>
            <span className="absolute inset-0 border-2 border-transparent group-hover:border-sage/20 rounded-xl transition-all duration-500" />
            <span className="absolute inset-0 -z-10 bg-gradient-to-br from-sage/10 to-terracotta/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CustomizationSection;

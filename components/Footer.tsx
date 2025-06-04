
const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="text-white bg-[#2d2d2d] py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-sage rounded-sm flex items-center justify-center">
                <span className="text-white px-2.5 py-1.5 rounded-md bg-[#9caf88] font-display font-bold text-xl">W</span>
              </div>
              <span className="font-display font-bold text-2xl">Wallora</span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Transform your space with custom contemporary artworks. Handcrafted pieces
              with personalized size and color options to match your unique style.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-sage rounded-full flex items-center justify-center hover:bg-white hover: transition-all duration-300">
                <span className="text-lg">📘</span>
              </a>
              <a href="#" className="w-10 h-10 bg-sage rounded-full flex items-center justify-center hover:bg-white hover: transition-all duration-300">
                <span className="text-lg">📷</span>
              </a>
              <a href="#" className="w-10 h-10 bg-sage rounded-full flex items-center justify-center hover:bg-white hover: transition-all duration-300">
                <span className="text-lg">🐦</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('hero')}
                  className="text-gray-300 hover: transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover: transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('featured')}
                  className="text-gray-300 hover: transition-colors"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('customization')}
                  className="text-gray-300 hover: transition-colors"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover: transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-6">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+8801946559679"
                  className="text-gray-300 hover: transition-colors flex items-center space-x-2"
                >
                  <span>📱</span>
                  <span>+880 1946-559679</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@wallora-art.com"
                  className="text-gray-300 hover: transition-colors flex items-center space-x-2"
                >
                  <span>📧</span>
                  <span>info@wallora-art.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/8801946559679"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover: transition-colors flex items-center space-x-2"
                >
                  <span>💬</span>
                  <span>WhatsApp</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-center md:text-left">
              © 2025 Wallora Art. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover: transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover: transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover: transition-colors">Shipping Info</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

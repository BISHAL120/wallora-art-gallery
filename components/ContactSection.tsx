
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappMessage = `Hi! My name is ${formData.name}. 
Email: ${formData.email}
Message: ${formData.message}`;

    const whatsappUrl = `https://wa.me/8801946559679?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');

    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleWhatsAppClick = () => {
    const message = "Hi! I'm interested in your artwork collection. Could you please provide more information?";
    const whatsappUrl = `https://wa.me/8801946559679?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-earth-light">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-display text-3xl md:text-4xl font-bold  mb-6">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-sage mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to transform your space? Contact us for custom artwork inquiries or any questions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <h3 className="font-display text-2xl font-semibold  mb-8">
              Let&apos;s Create Something Beautiful Together
            </h3>

            <div className="space-y-6 mb-8">
              <div className="flex items-center space-x-4 group hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 bg-sage rounded-full flex items-center justify-center group-hover:bg-terracotta transition-colors duration-300 group-hover:shadow-lg">
                  <span className="text-white text-xl">📱</span>
                </div>
                <div>
                  <h4 className="font-medium  group-hover: transition-colors duration-300">WhatsApp / Phone</h4>
                  <a
                    href="tel:+8801946559679"
                    className=" hover:text-terracotta transition-colors duration-300 font-medium"
                  >
                    +880 1946-559679
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 group hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 bg-terracotta rounded-full flex items-center justify-center group-hover:bg-sage transition-colors duration-300 group-hover:shadow-lg">
                  <span className="text-white text-xl">📧</span>
                </div>
                <div>
                  <h4 className="font-medium  group-hover: transition-colors duration-300">Email</h4>
                  <a
                    href="mailto:info@wallora-art.com"
                    className=" hover:text-terracotta transition-colors duration-300"
                  >
                    info@wallora-art.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 group hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12  rounded-full flex items-center justify-center group-hover:bg-sage transition-colors duration-300 group-hover:shadow-lg">
                  <span className="text-white text-xl">🕒</span>
                </div>
                <div>
                  <h4 className="font-medium  group-hover: transition-colors duration-300">Response Time</h4>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Usually within 2-4 hours</p>
                </div>
              </div>
            </div>

            <Button
              onClick={handleWhatsAppClick}
              className="w-full md:w-auto bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95"
            >
              💬 Chat on WhatsApp
            </Button>
          </div>

          {/* Contact Form */}
          <Card className="border-0 shadow-lg animate-zoom-in hover:shadow-xl transition-shadow duration-300" style={{ animationDelay: '400ms' }}>
            <CardContent className="p-8">
              <h3 className="font-display text-xl font-semibold  mb-6">
                Send us a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="group">
                  <label htmlFor="name" className="block text-sm font-medium  mb-2 group-hover: transition-colors duration-300">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="border-earth-medium focus:border-sage transition-all duration-300 hover:border-sage/50"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="group">
                  <label htmlFor="email" className="block text-sm font-medium  mb-2 group-hover: transition-colors duration-300">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="border-earth-medium focus:border-sage transition-all duration-300 hover:border-sage/50"
                    placeholder="Enter your email address"
                  />
                </div>

                <div className="group">
                  <label htmlFor="message" className="block text-sm font-medium  mb-2 group-hover: transition-colors duration-300">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="border-earth-medium focus:border-sage resize-none transition-all duration-300 hover:border-sage/50"
                    placeholder="Tell us about your artwork needs, preferred size, colors, or any questions..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full  hover:bg-sage text-white py-3 font-medium transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-lg"
                >
                  Send Message via WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

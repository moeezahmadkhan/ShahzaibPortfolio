import React from 'react';
import { Mail, Phone, MapPin, Instagram, Linkedin, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  interface ContactInfoItem {
    icon: JSX.Element;
    title: string;
    value: string;
    link: string | null;
  }

  interface SocialLinkItem {
    icon: JSX.Element;
    name: string;
    handle: string;
    link: string;
  }

  const contactInfo: ContactInfoItem[] = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "contact@realshahzaib.com",
      link: "mailto:contact@realshahzaib.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+92 3390084791",
      link: "tel:+9232390084791"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "WhatsApp",
      value: "+92 339 0084791",
      link: "https://wa.me/923390084791"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Lahore, Pakistan",
      link: null
    }
  ];

  const socialLinks: SocialLinkItem[] = [
    {
      icon: <Instagram className="w-6 h-6" />,
      name: "Instagram",
      handle: "@realshahzaibcom",
      link: "https://www.instagram.com/realshahzaibcom"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      name: "LinkedIn",
      handle: "Shahzaib Azeem",
      link: "https://www.linkedin.com/in/shahzaib-azeem-18aa75267?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-tiktok w-6 h-6" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M21 7.917v4.034a1 1 0 0 1 -.865 .987l-6.643 .574l-.255 -2.713v-4.664" />
          <path d="M12 20.985v-4.654a2.025 2.025 0 0 0 -2.02 -2.023c-1.296 -.003 -1.865 .165 -2.713 .647a2.025 2.025 0 0 0 -1.022 1.488v2.531c0 1.25 .833 2.5 2.5 2.5a2.502 2.502 0 0 0 2.5 -2.5z" />
        </svg>
      ),
      name: "TikTok",
      handle: "@realshahzaib.com",
      link: "https://www.tiktok.com/@realshahzaib.com"
    }
  ];
  
  const services = [
    "PERFORMANCE MARKETING",
    "WEBSITE DEVELOPMENT",
    "GRAPHIC DESIGNING",
    "VIDEO EDITING",
    "SEARCH ENGINE OPTIMIZATION",
    "ECOMMERCE PACKAGE"
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-yellow-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to take your brand to the next level? Let's discuss how we can work together
            to achieve your digital marketing goals.
          </p>
        </div>

        <div className="max-w-xl mx-auto bg-gradient-to-br from-gray-800 to-gray-900 p-8 md:p-10 rounded-xl border border-gray-700 shadow-2xl">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Connect With Us
          </h3>

          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="space-y-6 mb-10"
          >
            <input type="hidden" name="apikey" value="f605c0a5-be9b-4449-9e32-41d07e3be1b9" />
            
            <div>
              <label htmlFor="name" className="text-white">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Your Name"
                className="w-full mt-2 p-3 bg-gray-900 text-white rounded-md border border-gray-700 focus:outline-none focus:border-amber-400"
              />
            </div>

            <div>
              <label htmlFor="phone" className="text-white">Phone (WhatsApp)</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Your Phone Number"
                className="w-full mt-2 p-3 bg-gray-900 text-white rounded-md border border-gray-700 focus:outline-none focus:border-amber-400"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="text-white">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Your Email"
                className="w-full mt-2 p-3 bg-gray-900 text-white rounded-md border border-gray-700 focus:outline-none focus:border-amber-400"
              />
            </div>
            
            <div>
              <label htmlFor="service" className="text-white">Service Required</label>
              <select
                id="service"
                name="service"
                required
                className="w-full mt-2 p-3 bg-gray-900 text-white rounded-md border border-gray-700 focus:outline-none focus:border-amber-400"
              >
                <option value="">-- Select a Service --</option>
                {services.map((service, index) => (
                  <option key={index} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="message" className="text-white">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                placeholder="Your Message"
                className="w-full mt-2 p-3 bg-gray-900 text-white rounded-md border border-gray-700 focus:outline-none focus:border-amber-400"
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full py-3 px-6 bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-semibold rounded-md transition-all duration-300 hover:from-amber-400 hover:to-yellow-500 hover:shadow-lg"
            >
              Send Message
            </button>
          </form>

          <div className="space-y-6 mb-10">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-center gap-4 group">
                <div className="p-3 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-lg text-black flex-shrink-0 transition-transform duration-200 group-hover:scale-110 glow-effect glow-on-hover">
                  {info.icon}
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg">{info.title}</h4>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-gray-300 hover:text-amber-400 transition-colors duration-300 text-base"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-gray-300 text-base">{info.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="pt-8 border-t border-gray-700">
            <h4 className="text-2xl font-semibold text-white mb-6 text-center">Follow Our Journey</h4>
            <div className="flex gap-6 justify-center">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  className="p-4 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg text-amber-400 hover:from-amber-500 hover:to-yellow-600 hover:text-black transition-all duration-300 hover:transform hover:-translate-y-2"
                  title={`${social.name}: ${social.handle}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

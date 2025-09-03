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
      link: "https://instagram.com/shahzaib_marketer"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      name: "LinkedIn",
      handle: "Shahzaib Azeem",
      link: "https://www.linkedin.com/in/shahzaib-azeem-18aa75267?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
    }
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

        {/* Main container for the unified contact and social info */}
        <div className="max-w-xl mx-auto bg-gradient-to-br from-gray-800 to-gray-900 p-8 md:p-10 rounded-xl border border-gray-700 shadow-2xl">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Connect With Me
          </h3>

          {/* Contact Information */}
          <div className="space-y-6 mb-10">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-center gap-4 group">
                {/* Applied glow-effect to the icon container */}
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

          {/* Social Links */}
          <div className="pt-8 border-t border-gray-700">
            <h4 className="text-2xl font-semibold text-white mb-6 text-center">Follow My Journey</h4>
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
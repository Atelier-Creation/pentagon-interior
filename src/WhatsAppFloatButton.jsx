import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppFloatButton = () => {
  const phoneNumber = '919176828870'; 
  const message = 'Hello! I am Looking for More personalized Interior Design Details...';

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#25d366] text-white p-4 rounded-full shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] z-[1000] transition-all duration-300 hover:scale-110 hover:shadow-[0_6px_20px_rgba(37,211,102,0.23)] flex items-center justify-center group"
      aria-label="Contact us on WhatsApp"
    >
      <FaWhatsapp size={32} className="transition-transform duration-300 group-hover:rotate-12" />
    </a>
  );
};

export default WhatsAppFloatButton;

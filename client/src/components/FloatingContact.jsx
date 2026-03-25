import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Phone, Mail, Linkedin, MessageCircle } from 'lucide-react';

const FloatingContact = () => {
    const contacts = [
        { icon: <Instagram size={18} />, href: "https://instagram.com/netcradus", label: "Instagram", color: "bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888]" },
        { icon: <Linkedin size={18} />, href: "https://uk.linkedin.com/company/netcradus-limited?trk=public_post_follow-view-profile", label: "LinkedIn", color: "bg-accent" },
        { icon: <Mail size={18} />, href: "mailto:contact@netcradus.com", label: "Email", color: "bg-accent-bright" },
        { icon: <Phone size={18} />, href: "tel:1800121008800", label: "Phone", color: "bg-orange-500" },
        {icon: <MessageCircle size={18} />,href: "https://wa.me/917290909571",label: "WhatsApp",color: "bg-green-500"
}
    ];

    return (
        <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3 pointer-events-none">
            {contacts.map((contact, index) => (
                <motion.a
                    key={index}
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, x: -5 }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`pointer-events-auto w-10 h-10 rounded-full flex items-center justify-center text-white shadow-lg ${contact.color} hover:shadow-xl transition-all`}
                    title={contact.label}
                >
                    {contact.icon}
                </motion.a>
            ))}
        </div>
    );
};

export default FloatingContact;

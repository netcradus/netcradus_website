import React from 'react';
import { motion } from 'framer-motion';
import { useState, useEffect } from "react";
import { Instagram, Phone, Mail, Linkedin, Facebook, Youtube } from 'lucide-react';

const FloatingContact = () => {
const contacts = [
    {
        icon: <Instagram size={18} />,
        href: "https://instagram.com/netcradus",
        label: "Instagram",
        color: "bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888]"
    },

    {
        icon: <Facebook size={18} />,
        href: "https://www.facebook.com/netcradus",
        label: "Facebook",
        color: "bg-blue-600"
    },

    {
        icon: <Linkedin size={18} />,
        href: "https://www.linkedin.com/company/netcradus-pvt-ltd/",
        label: "LinkedIn",
        color: "bg-accent"
    },

    {
        icon: <Youtube size={18} />,
        href: "https://www.youtube.com/@Netcradus-acis",
        label: "YouTube",
        color: "bg-red-600"
    },

    {
        icon: <Mail size={18} />,
        href: "mailto:contact@netcradus.com",
        label: "Email",
        color: "bg-accent-bright"
    },

    {
        icon: <Phone size={18} />,
        href: "tel:1800121008800",
        label: "Phone",
        color: "bg-orange-500"
    }
];
  const [isScrolling, setIsScrolling] = useState(false);

    useEffect(() => {
        let timeout;

        const handleScroll = () => {
            // Mobile only
            if (window.innerWidth < 768) {
                setIsScrolling(true);

                clearTimeout(timeout);

                timeout = setTimeout(() => {
                    setIsScrolling(false);
                }, 500);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            clearTimeout(timeout);
        };
    }, []);


    return (
        // <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3 pointer-events-none">
        //     {contacts.map((contact, index) => (
        //         <motion.a
        //             key={index}
        //             href={contact.href}
        //             target="_blank"
        //             rel="noopener noreferrer"
        //             whileHover={{ scale: 1.1, x: -5 }}
        //             initial={{ opacity: 0, x: 20 }}
        //             animate={{ opacity: 1, x: 0 }}
        //             transition={{ delay: index * 0.1 }}
        //             className={`pointer-events-auto w-10 h-10 rounded-full flex items-center justify-center text-white shadow-lg ${contact.color} hover:shadow-xl transition-all`}
        //             title={contact.label}
        //         >
        //             {contact.icon}
        //         </motion.a>
        //     ))}
        // </div>
         <motion.div
            animate={{
                x: isScrolling ? 50 : 0,
                opacity: isScrolling ? 0.5 : 1,
            }}
            transition={{ duration: 0.3 }}
            className="fixed right-4 top-1/4 -translate-y-1/4 z-50 flex flex-col   items-center gap-3 pointer-events-none"
        >
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
        </motion.div>
    );
};

export default FloatingContact;

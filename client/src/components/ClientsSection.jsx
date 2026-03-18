import React from 'react';
import { motion } from 'framer-motion';
import client1 from "../assets/clientsList/client_1-removebg.png";
import client2 from "../assets/clientsList/client_2-removebg.png";
import client3 from "../assets/clientsList/client_3-removebg.png";
import client4 from "../assets/clientsList/client 4.png";
import client5 from "../assets/clientsList/client5.png";
import client6 from "../assets/clientsList/client_6-removebg.png";

const clients = [
    { name: "Client 1", logo: client1 },
    { name: "Client 2", logo: client2 },
    { name: "Client 3", logo: client3 },
    { name: "Client 4", logo: client4 },
    { name: "Client 5", logo: client5 },
    { name: "Client 6", logo: client6 },
];

const ClientsSection = () => {
    return (
        <section className="py-20 bg-[var(--bg-color)] overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Trusted by Industry Leaders</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-[var(--primary-accent)] to-[var(--secondary-accent)] mx-auto rounded-full" />
                </div>

                <div className="relative flex overflow-x-hidden">
                    <div className="py-12 animate-marquee whitespace-nowrap flex items-center">
                        {clients.concat(clients).map((client, index) => (
                            <div
                                key={index}
                                className="mx-12 flex-shrink-0"
                            >
                                <img
                                    src={client.logo}
                                    alt={client.name}
                                    className="h-16 md:h-20 w-auto object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClientsSection;

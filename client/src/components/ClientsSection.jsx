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
        <section className="py-24 bg-premium-radial relative overflow-hidden transition-all duration-500">
            <div className="container max-w-screen-2xl mx-auto px-8 lg:px-16 xl:px-24">
                <div className="text-center mb-20">
                    <span className="text-[10px] md:text-[12px] font-bold tracking-[0.4em] text-accent uppercase mb-6 block">Strategic Alliances</span>
                    <h2 className="text-3xl md:text-5xl font-display font-black text-zinc-900 dark:text-white mb-6 uppercase tracking-wider">Trusted by Industry <span className="text-accent italic text-4xl md:text-6xl">Leaders.</span></h2>
                    <div className="w-32 h-[1px] bg-accent/30 mx-auto rounded-full" />
                </div>

                <div className="relative flex overflow-x-hidden">
                    <div className="py-12 animate-marquee whitespace-nowrap flex items-center">
                        {clients.concat(clients).map((client, index) => (
                            <div
                                key={index}
                                className="mx-16 flex-shrink-0 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-1000 dark:brightness-200 dark:invert"
                            >
                                <img
                                    src={client.logo}
                                    alt={client.name}
                                    className="h-14 md:h-16 w-auto object-contain"
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

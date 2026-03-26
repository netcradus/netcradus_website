import React from 'react';
import client1 from "../assets/clientsList/client_1-removebg.png";
import client2 from "../assets/clientsList/client_2-removebg.png";
import client3 from "../assets/clientsList/client_3-removebg.png";
import client4 from "../assets/clientsList/client 4.png";
import client5 from "../assets/clientsList/client5.png";
import client6 from "../assets/clientsList/client_6-removebg.png";

const clients = [
    { name: "Client 1", logo: client1 },
    { name: "Client 2", logo: client2, needsLightBg: true },
    { name: "Client 3", logo: client3 },
    { name: "Client 4", logo: client4 },
    { name: "Client 5", logo: client5 },
    { name: "Client 6", logo: client6 },
];

const ClientsSection = () => {
    return (
        <section className="py-24 bg-premium-radial relative overflow-hidden transition-all duration-500">
            <div className="container max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-16 xl:px-24">
                <div className="text-center mb-20">
                    <span className="text-[10px] md:text-[12px] font-bold tracking-[0.4em] text-accent font-display uppercase mb-6 block">Strategic Alliances</span>
                    <h2 className="text-3xl md:text-5xl font-display font-black text-text-primary mb-6 uppercase tracking-wider">Trusted by Industry <span className="text-accent italic text-4xl md:text-6xl">Leaders.</span></h2>
                    <div className="w-32 h-[1px] bg-accent/30 mx-auto rounded-full" />
                </div>

                <div className="relative flex overflow-x-hidden">
                    <div className="py-12 animate-marquee whitespace-nowrap flex items-center">
                        {clients.concat(clients).map((client, index) => (
                            <div
                                key={index}
                                className="mx-16 flex-shrink-0"
                            >
                                <img
                                    src={client.logo}
                                    alt={client.name}
                                    className={`h-14 md:h-16 w-auto object-contain ${
                                        client.needsLightBg ? "bg-white/90 rounded-md px-3 py-2" : ""
                                    }`}
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


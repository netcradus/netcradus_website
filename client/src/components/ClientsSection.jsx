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
    const marqueeClients = clients.concat(clients);

    return (
        <section className="client-marquee-section relative overflow-hidden py-24 transition-all duration-500">
            <div className="container max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-16 xl:px-24">
                <div className="text-center mb-20">
                    <span className="text-[10px] md:text-[12px] font-bold tracking-[0.4em] text-accent font-display uppercase mb-6 block">Strategic Alliances</span>
                    <h2 className="text-3xl md:text-5xl font-display font-black text-white mb-6 uppercase tracking-wider">Trusted by Industry <span className="text-accent italic text-4xl md:text-6xl">Leaders.</span></h2>
                    <div className="w-32 h-[1px] bg-accent/30 mx-auto rounded-full" />
                </div>

                <div className="client-marquee-viewport">
                    <div className="client-marquee-track py-10">
                        {marqueeClients.map((client, index) => (
                            <div key={`${client.name}-${index}`} className="mx-10 flex flex-shrink-0 items-center justify-center md:mx-16">
                                <img
                                    src={client.logo}
                                    alt={client.name}
                                    className={`client-marquee-logo object-contain transition-all duration-300 ${
                                        client.name === "Client 6" 
                                          ? "h-16 md:h-20 scale-[1.15] px-2" 
                                          : "h-14 w-auto md:h-16"
                                    } ${
                                        client.needsLightBg ? "client-marquee-light-badge" : ""
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


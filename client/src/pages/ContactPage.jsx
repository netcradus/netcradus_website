import React, { useEffect } from 'react';
import Contact from "../components/Contact";
import { usePageMeta } from '../hooks/usePageMeta';

const ContactPage = () => {
    usePageMeta(
        'Contact | Netcradus',
        'Contact Netcradus for cybersecurity consulting, ACIS platform discussions, and enterprise resilience planning.'
    );

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Contact />
    );
};

export default ContactPage;

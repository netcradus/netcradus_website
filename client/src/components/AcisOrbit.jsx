import React from "react";
import { motion } from "framer-motion";
import './AcisOrbit.css';

const OrbitRing = ({ size, duration, delay = 0, reverse = false, children, className }) => (
    <motion.div
        className={`orbit-ring ${className}`}
        style={{ width: size, height: size }}
        animate={{ rotate: reverse ? -360 : 360 }}
        transition={{ duration, repeat: Infinity, ease: "linear", delay }}
    >
        {React.Children.map(children, child =>
            React.isValidElement(child) ? React.cloneElement(child, { reverse, duration, delay }) : child
        )}
    </motion.div>
);

const OrbitLabel = ({ text, angle, radius, color = "primary", reverse, duration, delay }) => {
    const x = Math.cos((angle * Math.PI) / 180) * radius;
    const y = Math.sin((angle * Math.PI) / 180) * radius;
    const isFront = y > 0;

    return (
        <div
            className={`orbit-label-wrapper ${isFront ? 'front' : 'back'}`}
            style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
            }}
        >
            <motion.div
                animate={{ rotate: reverse ? 360 : -360 }}
                transition={{ duration, repeat: Infinity, ease: "linear", delay }}
                className={`orbit-label-card color-${color}`}
            >
                <div className="status-dot" />
                <span className="mono">{text}</span>
            </motion.div>
        </div>
    );
};

export default function AcisOrbit() {
    return (
        <div className="acis-orbit-container">
            <div className="orbit-ambient-glow" />

            <div className="orbit-core">
                <motion.div
                    animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.7, 0.4] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="core-glow"
                />

                <div className="core-sphere">
                    <div className="core-badge mono">
                        <div className="core-icon">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M4.5 7L19.5 17" /><path d="M4.5 17L19.5 7" />
                            </svg>
                        </div>
                        <span>ACIS ACTIVE</span>
                    </div>
                </div>
            </div>

            <OrbitRing size={240} duration={25}>
                <OrbitLabel text="AI SIEM + SOAR" angle={0} radius={120} />
                <OrbitLabel text="Threat Intel" angle={180} radius={120} />
            </OrbitRing>

            <OrbitRing size={380} duration={40} reverse>
                <OrbitLabel text="Managed SOC" angle={45} radius={190} color="secondary" />
                <OrbitLabel text="Incident Response" angle={225} radius={190} color="secondary" />
            </OrbitRing>

            <OrbitRing size={520} duration={55}>
                <OrbitLabel text="Cloud Security" angle={90} radius={260} color="accent" />
                <OrbitLabel text="Penetration Testing" angle={270} radius={260} color="accent" />
            </OrbitRing>
        </div>
    );
}

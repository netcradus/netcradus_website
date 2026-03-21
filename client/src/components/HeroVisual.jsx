import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Activity, Lock, Zap } from 'lucide-react';

const HeroVisual = () => {
    const canvasRef = useRef(null);
    const containerRef = useRef(null);
    const [tilt, setTilt] = useState({ x: 0, y: 0 });
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        
        // --- LAYER 1: CANVAS PARTICLES ---
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;
        
        const particleCount = 60;
        const particles = [];
        const connectionDistance = 150;
        
        const initParticles = () => {
            particles.length = 0;
            const width = canvas.width / (window.devicePixelRatio || 1);
            const height = canvas.height / (window.devicePixelRatio || 1);
            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    vx: (Math.random() - 0.5) * 0.3,
                    vy: (Math.random() - 0.5) * 0.3,
                    radius: Math.random() * 0.8 + 0.5,
                    color: Math.random() > 0.3 ? 'rgba(232, 64, 10, ' : 'rgba(255, 255, 255, '
                });
            }
        };

        const resize = () => {
            const dpr = window.devicePixelRatio || 1;
            const parent = canvas.parentElement;
            canvas.width = parent.offsetWidth * dpr;
            canvas.height = parent.offsetHeight * dpr;
            ctx.scale(dpr, dpr);
            initParticles();
        };

        const animate = () => {
            const width = canvas.width / (window.devicePixelRatio || 1);
            const height = canvas.height / (window.devicePixelRatio || 1);
            ctx.clearRect(0, 0, width, height);

            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0) p.x = width;
                if (p.x > width) p.x = 0;
                if (p.y < 0) p.y = height;
                if (p.y > height) p.y = 0;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = p.color + '0.3)';
                ctx.fill();

                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < connectionDistance) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(232, 64, 10, ${0.1 * (1 - dist / connectionDistance)})`;
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
            }
            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener('resize', resize);
        resize();
        animate();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    const handleMouseMove = (e) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        setTilt({ x: y * 12, y: x * -12 });
    };

    const handleMouseLeave = () => {
        setTilt({ x: 0, y: 0 });
    };

    return (
        <div 
            ref={containerRef}
            className="relative w-full h-[500px] flex items-center justify-center overflow-visible select-none transition-all duration-700 ease-out"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ perspective: '1200px' }}
        >
            {/* Layer 1: Particles */}
            <canvas 
                ref={canvasRef} 
                className="absolute inset-0 w-full h-full pointer-events-none opacity-50"
            />

            {/* Layer 2: Floating UI Cards Group */}
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="relative z-10 w-[400px] h-[300px] flex items-center justify-center"
                style={{ 
                    transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                    transformStyle: 'preserve-3d',
                    transition: tilt.x === 0 ? 'transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)' : 'none'
                }}
            >
                {/* 1. Main Dashboard Card */}
                <div className="glass-main w-[320px] p-6 animate-float relative z-20">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-accent-bright animate-pulse shadow-[0_0_10px_#ff5520]" />
                            <span className="text-[10px] font-bold tracking-[0.2em] text-zinc-500 dark:text-zinc-500 uppercase">ACIS THREAT MONITOR</span>
                        </div>
                        <Activity size={14} className="text-accent opacity-50" />
                    </div>
                    
                    <div className="h-[1px] w-full bg-zinc-200 dark:bg-zinc-800 mb-6" />
                    
                    <div className="mb-6">
                        <div className="flex items-baseline gap-2">
                            <span className="text-4xl font-bold text-accent-bright tracking-tighter">99.8%</span>
                            <span className="text-[10px] font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">Accuracy Rate</span>
                        </div>
                        <p className="text-[11px] text-zinc-500 dark:text-zinc-600 mt-1 font-sans">Neural node processing active across 4 nodes.</p>
                    </div>

                    <div className="flex gap-2 mb-6">
                        {['Real-time', 'AI-Powered', 'Zero Trust'].map(pill => (
                            <span key={pill} className="text-[9px] font-bold px-2 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent-bright uppercase tracking-wider">
                                {pill}
                            </span>
                        ))}
                    </div>

                    <div className="space-y-2">
                        <div className="flex items-center justify-between text-[9px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">
                            <span>Scanning Infrastructure</span>
                            <span>73%</span>
                        </div>
                        <div className="h-1.5 w-full bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                            <motion.div 
                                initial={{ width: 0 }}
                                animate={{ width: isMounted ? '73%' : 0 }}
                                transition={{ duration: 2, delay: 1, ease: 'circOut' }}
                                className="h-full bg-gradient-to-r from-accent to-accent-bright shadow-[0_0_12px_rgba(232,64,10,0.4)]"
                            />
                        </div>
                    </div>
                </div>

                {/* 2. Satellite Top-Right: Security Status */}
                <div 
                    className="glass-main absolute -top-10 -right-12 w-[160px] p-4 animate-float z-30" 
                    style={{ animationDelay: '-2s', transform: 'translateZ(40px)' }}
                >
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-lg bg-accent/10 text-accent">
                            <Shield size={18} />
                        </div>
                        <div>
                            <div className="text-xs font-bold text-zinc-900 dark:text-white">0 Breaches</div>
                            <div className="text-[9px] font-medium text-zinc-500 uppercase tracking-widest">Last 30 Days</div>
                        </div>
                    </div>
                </div>

                {/* 3. Satellite Bottom-Left: Active Shields */}
                <div 
                    className="glass-main absolute -bottom-8 -left-10 w-[150px] p-4 animate-float z-10" 
                    style={{ animationDelay: '-1s', transform: 'translateZ(-20px)' }}
                >
                    <div className="flex items-end gap-1.5 mb-3 h-8">
                        {[0.5, 0.7, 1, 0.6].map((op, i) => (
                            <motion.div 
                                key={i}
                                initial={{ height: 0 }}
                                animate={{ height: [12, 24, 16, 32, 20][i] }}
                                transition={{ duration: 1, delay: 1.2 + i*0.1 }}
                                className="w-full bg-accent rounded-t-sm" 
                                style={{ opacity: op }} 
                            />
                        ))}
                    </div>
                    <div className="flex items-center gap-2">
                        <Lock size={10} className="text-accent" />
                        <span className="text-[10px] font-bold text-zinc-500 dark:text-zinc-500 uppercase tracking-widest">Active Shields</span>
                    </div>
                </div>
            </motion.div>

            {/* Decorative Bloom */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent/10 blur-[100px] rounded-full pointer-events-none" />
        </div>
    );
};

export default HeroVisual;

"use client";
import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Stage, PresentationControls, ContactShadows, Environment } from '@react-three/drei';
import { Physics, RigidBody } from '@react-three/rapier';
import { motion, AnimatePresence } from 'framer-motion';
import { Smartphone, Code2, Zap, Terminal, ArrowRight, Info, ShieldCheck, Box } from 'lucide-react';

// --- 1. THE "INSTANT FALLBACK" HERO (SEO & LCP Friendly) ---
const StaticHero = ({ onEnter }: { onEnter: () => void }) => (
  <motion.div 
    exit={{ opacity: 0, scale: 1.1 }}
    className="fixed inset-0 z-[100] bg-[#020202] flex flex-col items-center justify-center p-6 text-center"
  >
    <div className="max-w-4xl">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
        <span className="px-3 py-1 rounded-full border border-blue-500/30 text-[10px] font-black uppercase text-blue-400 tracking-widest bg-blue-500/5">
          Available for Freelance // 2026
        </span>
      </motion.div>
      <h1 className="text-6xl md:text-9xl font-black italic uppercase tracking-tighter leading-[0.8] mb-8 text-white">
        Creative <br/> <span className="text-gray-800">Technologist</span>
      </h1>
      <p className="text-gray-500 font-mono text-sm mb-12 max-w-xl mx-auto leading-relaxed">
        Building high-concurrency Web Systems and 60FPS React Native Experiences. 
        Where physics meets functional engineering.
      </p>
      <button 
        onClick={onEnter}
        className="group relative px-12 py-5 bg-white text-black font-black uppercase italic tracking-widest rounded-full hover:bg-blue-600 hover:text-white transition-all overflow-hidden"
      >
        <span className="relative z-10 flex items-center gap-3">
          Enter Command Center <ArrowRight size={18} />
        </span>
        <motion.div className="absolute inset-0 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
      </button>
    </div>
    
    {/* Performance Metrics Badge */}
    <div className="absolute bottom-10 flex gap-8 opacity-30 grayscale hover:grayscale-0 transition-all cursor-help">
       <div className="flex items-center gap-2 font-mono text-[10px]"><ShieldCheck size={14}/> LCP: 0.8s</div>
       <div className="flex items-center gap-2 font-mono text-[10px]"><Zap size={14}/> 120FPS Optimized</div>
    </div>
  </motion.div>
);

// --- 2. THE MASTER COMMAND CENTER ---
export default function MasterPortfolio() {
  const [hasEntered, setHasEntered] = useState(false);
  const [hoverSide, setHoverSide] = useState<'left' | 'right' | null>(null);
  const [rotation, setRotation] = useState<[number, number, number]>([0, 0, 0]);

  return (
    <main className="h-screen w-full bg-[#020202] text-white selection:bg-blue-500">
      
      <AnimatePresence>
        {!hasEntered && <StaticHero onEnter={() => setHasEntered(true)} />}
      </AnimatePresence>

      {/* --- COMMAND CENTER UI (Only visible after Enter) --- */}
      {hasEntered && (
        <div className="relative h-full w-full flex overflow-hidden">
          
          {/* SIDE WING HINT AFFORDANCES */}
          <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50 opacity-20 hover:opacity-100 transition-opacity">
            <div className="flex flex-col items-center gap-2 text-[8px] font-black vertical-text uppercase tracking-widest text-gray-500">
               <ChevronRight size={16} className="animate-bounce-x" /> Inspect_Logic
            </div>
          </div>

          {/* LEFT: CASE STUDY WING (From your Mind Map) */}
          <motion.aside 
            onMouseEnter={() => setHoverSide('left')}
            onMouseLeave={() => setHoverSide(null)}
            initial={{ x: -440 }}
            animate={{ x: hoverSide === 'left' ? 0 : -440 }}
            className="fixed left-0 top-0 h-full w-[480px] bg-black/90 backdrop-blur-3xl border-r border-white/5 z-40 p-12 flex flex-col"
          >
             <div className="mb-12"><Terminal className="text-blue-500" /></div>
             <h3 className="text-4xl font-black italic uppercase mb-4">The Restro 3D</h3>
             <p className="font-mono text-xs text-gray-500 leading-relaxed">
               Challenge: 2s Load Times for 3D Assets. <br/>
               Solution: Draco Compression + M4 Parallel Rendering. <br/>
               Result: +45% Engagement Metric.
             </p>
             <div className="mt-auto border-t border-white/5 pt-8">
               <button className="text-[10px] font-black uppercase tracking-widest border border-white/20 px-6 py-3 rounded-full hover:bg-white hover:text-black transition-all">View Full Case Study</button>
             </div>
          </motion.aside>

          {/* CENTER: THE INTERACTIVE LAB */}
          <section className={`flex-1 flex flex-col transition-all duration-700 ${hoverSide ? 'opacity-10 blur-xl scale-95' : 'opacity-100'}`}>
            <Canvas shadows camera={{ position: [0, 0, 8], fov: 35 }}>
              <Suspense fallback={null}>
                <Environment preset="city" />
                <Physics gravity={[0, -9.8, 0]}>
                  <PresentationControls 
                    global 
                    config={{ mass: 2, tension: 500 }} 
                    onUpdate={(e) => setRotation([e.rotation[0], e.rotation[1], e.rotation[2]])}
                  >
                    <Stage intensity={0.5} adjustCamera={false}>
                      {/* Your 3D Menu Model (Burger/Sushi) drops here */}
                      <RigidBody colliders="cuboid" restitution={0.4}>
                         <mesh castShadow receiveShadow>
                           <boxGeometry args={[1.5, 1.5, 1.5]} />
                           <meshStandardMaterial color="#050505" metalness={1} roughness={0.05} />
                         </mesh>
                      </RigidBody>
                    </Stage>
                  </PresentationControls>
                  <ContactShadows opacity={0.4} scale={15} blur={2.5} far={4} />
                </Physics>
              </Suspense>
            </Canvas>

            {/* QUICK TOUR / SKIP FOR NON-GAMERS */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-white/5 px-6 py-3 rounded-full border border-white/10 backdrop-blur-sm">
               <Info size={14} className="text-blue-500"/>
               <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-gray-500">Use Mouse to Rotate Object // Scroll to navigate</span>
            </div>
          </section>

          {/* RIGHT: NATIVE MIRROR (Hybrid Proof) */}
          <motion.aside 
            onMouseEnter={() => setHoverSide('right')}
            onMouseLeave={() => setHoverSide(null)}
            initial={{ x: 440 }}
            animate={{ x: hoverSide === 'right' ? 0 : 440 }}
            className="fixed right-0 top-0 h-full w-[480px] bg-black/90 backdrop-blur-3xl border-l border-white/5 z-40 p-12 flex flex-col items-center justify-center"
          >
             <Smartphone className="text-purple-500 mb-8" size={32} />
             <div className="w-56 h-[480px] rounded-[3rem] border-4 border-gray-800 bg-gray-900 overflow-hidden relative shadow-2xl">
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-gray-800 rounded-b-xl" />
               <div className="h-full w-full flex items-center justify-center bg-black/40">
                  <Box className="text-purple-400/30" size={60} style={{ transform: `rotateX(${rotation[0]}rad) rotateY(${rotation[1]}rad)` }} />
               </div>
             </div>
             <p className="mt-8 text-[10px] font-mono text-gray-600 tracking-widest uppercase italic">Real-time State Mirroring</p>
          </motion.aside>

        </div>
      )}
    </main>
  );
}

const ChevronRight = ({ size, className }: { size: number, className: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m9 18 6-6-6-6"/></svg>
);
"use client";

import { useEffect, useState } from "react";

export function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-linear-to-br from-primary to-secondary backdrop-blur-sm">
      <style>{`
        @keyframes fadeOut {
          0% { opacity: 1; }
          70% { opacity: 1; }
          100% { opacity: 0; }
        }
        
        @keyframes scaleIn {
          0% { transform: scale(0.8); opacity: 0; }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); opacity: 1; }
        }
        
        @keyframes slideUp {
          0% { transform: translateY(20px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        
        .splash-container {
          animation: fadeOut 2.5s ease-out forwards;
        }
        
        .splash-logo {
          animation: scaleIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        
        .splash-text {
          animation: slideUp 0.8s ease-out 0.2s backwards;
        }
      `}</style>

      <div className="splash-container flex flex-col items-center justify-center gap-4">
        <div className="splash-logo flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-2xl">
          <div className="text-3xl font-bold bg-linear-to-br from-primary to-secondary bg-clip-text text-transparent">
            <img src="/images/logo.png" className="w-17 h-17" />
          </div>
        </div>
        <div className="splash-text text-center">
          <h1 className="text-3xl font-bold text-white">BFS BINTANG LIMA</h1>
          <p className="mt-2 text-lg text-blue-100">Healthcare Excellence</p>
        </div>
      </div>
    </div>
  );
}

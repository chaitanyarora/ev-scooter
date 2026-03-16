import React from 'react';
import { BatteryCharging, ShieldCheck, Zap, Cog } from 'lucide-react';

const Models = () => {
  return (
    <div className="pt-nav min-h-screen">
      <section className="section-padding text-center relative z-10 pb-10">
        <div className="container">
          <h1 className="mb-4 animate-fade-in">Our <span className="text-gradient">Lineup</span></h1>
          <p className="text-muted mx-auto animate-fade-in delay-100 text-center" style={{ maxWidth: '600px', fontSize: '1.2rem', margin: '0 auto' }}>
            Choose the perfect Geomoto scooter tailored for your daily commute and weekend adventures.
          </p>
        </div>
      </section>

      {/* Flagship Model Feature */}
      <section className="section-padding pt-0 relative z-10">
        <div className="container">
          <div className="glass-panel relative overflow-hidden animate-fade-in delay-200" style={{ padding: '0' }}>
            {/* Background Accent */}
            <div className="absolute inset-0 bg-glow glow-bottom-left w-full h-full opacity-10" style={{ pointerEvents: 'none' }}></div>
            
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Product Image */}
              <div className="p-10 flex justify-center items-center" style={{ background: 'rgba(0,0,0,0.2)' }}>
                <img 
                  src="/images/model_scooter.png" 
                  alt="Geomoto Flagship Scooter" 
                  className="w-full"
                  style={{ objectFit: 'contain', filter: 'drop-shadow(0 20px 30px rgba(0,255,136,0.3))', borderRadius: '20px' }}
                />
              </div>
              
              {/* Product Details */}
              <div className="p-10 flex flex-col justify-center">
                <span className="badge mb-4 w-fit">Flagship Series</span>
                <h2 className="mb-2">GeoX <span className="text-gradient">Pro</span></h2>
                <h3 className="mb-4 text-muted font-normal">₹1,34,999 <span style={{ fontSize: '1rem' }}>(ex-showroom)</span></h3>
                
                <p className="text-muted mb-8">
                  The ultimate performance EV scooter. Designed for power, styled for the future. With a massive 4kWh battery and our gen-2 HyperDrive motor, the GeoX Pro redefines urban mobility.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-2">
                    <BatteryCharging color="var(--primary)" size={24} />
                    <div>
                      <h4 className="m-0">150 km</h4>
                      <p className="text-muted text-sm m-0">True Range</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap color="var(--primary)" size={24} />
                    <div>
                      <h4 className="m-0">90 km/h</h4>
                      <p className="text-muted text-sm m-0">Top Speed</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Cog color="var(--primary)" size={24} />
                    <div>
                      <h4 className="m-0">6 kW</h4>
                      <p className="text-muted text-sm m-0">Peak Power</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck color="var(--primary)" size={24} />
                    <div>
                      <h4 className="m-0">3 Yrs</h4>
                      <p className="text-muted text-sm m-0">Warranty</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <button className="btn btn-primary flex-1">Pre-book Now</button>
                  <button className="btn btn-outline flex-1">View Specs</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Models */}
      <section className="section-padding relative z-10 pt-0">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-6">
            
            {/* Model 2 */}
            <div className="glass-panel animate-fade-in delay-300">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="mb-1">Geo <span className="text-gradient">Lite</span></h3>
                  <p className="text-muted m-0">₹94,999</p>
                </div>
                <span className="badge">City Commuter</span>
              </div>
              <p className="text-muted mb-6">Perfect for daily office runs. Lightweight, nimble, and highly efficient.</p>
              <div className="grid grid-cols-2 gap-4 mb-6" style={{ background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '15px' }}>
                <div><span className="block text-sm text-muted">Range</span><span className="font-bold">100 km</span></div>
                <div><span className="block text-sm text-muted">Top Speed</span><span className="font-bold">75 km/h</span></div>
                <div><span className="block text-sm text-muted">Power</span><span className="font-bold">3.5 kW</span></div>
                <div><span className="block text-sm text-muted">Charging</span><span className="font-bold">4.5 hrs</span></div>
              </div>
              <button className="btn btn-outline w-full text-center">Book Now</button>
            </div>
            
            {/* Model 3 */}
            <div className="glass-panel animate-fade-in delay-300">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="mb-1">GeoX <span className="text-gradient" style={{ backgroundImage: 'linear-gradient(135deg, #ff0088 0%, #ff8800 100%)' }}>Sport</span></h3>
                  <p className="text-muted m-0">₹1,49,999</p>
                </div>
                <span className="badge" style={{ borderColor: '#ff0088', color: '#ff0088' }}>Track Ready</span>
              </div>
              <p className="text-muted mb-6">For the thrill seekers. Upgraded suspension, track tires, and aggressive tuning.</p>
              <div className="grid grid-cols-2 gap-4 mb-6" style={{ background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '15px' }}>
                <div><span className="block text-sm text-muted">Range</span><span className="font-bold">130 km</span></div>
                <div><span className="block text-sm text-muted">Top Speed</span><span className="font-bold">105 km/h</span></div>
                <div><span className="block text-sm text-muted">Power</span><span className="font-bold">8.5 kW</span></div>
                <div><span className="block text-sm text-muted">0-40</span><span className="font-bold">2.5s</span></div>
              </div>
              <button className="btn btn-outline w-full text-center" style={{ borderColor: '#ff0088', color: '#ff0088' }} onMouseEnter={e => { e.target.style.background = 'rgba(255,0,136,0.1)'; }} onMouseLeave={e => { e.target.style.background = 'transparent'; }}>Book Now</button>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Models;

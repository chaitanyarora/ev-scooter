import React from 'react';
import { Target, Shield, BatteryCharging, Leaf } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-nav min-h-screen">
      {/* Hero Section */}
      <section className="section-padding text-center relative">
        <div className="container relative z-10">
          <span className="badge mb-4 animate-fade-in">Our Mission</span>
          <h1 className="mb-6 animate-fade-in delay-100">
            Electrifying India's <span className="text-gradient">Future</span>
          </h1>
          <p className="text-muted mx-auto max-w-2xl animate-fade-in delay-200 text-center" style={{ maxWidth: '600px', fontSize: '1.2rem', margin: '0 auto' }}>
            Geomoto was founded with a singular vision: to accelerate the adoption of sustainable urban mobility across the nation without compromising on style or performance.
          </p>
        </div>
      </section>

      {/* Stats / Core Values */}
      <section className="section-padding relative z-10">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-6 items-center">
            
            <div className="glass-panel animate-fade-in">
              <h2 className="mb-4">Why Choose <span className="text-gradient">Geomoto?</span></h2>
              <p className="text-muted mb-6">
                Our scooters are designed specifically for Indian roads and weather conditions, offering unmatched durability and range. We believe in providing premium technology at an accessible price point, making the transition to electric seamless for everyone.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="flex flex-col gap-1">
                  <div className="mb-2" style={{ background: 'rgba(0,255,136,0.1)', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <BatteryCharging color="var(--primary)" size={24} />
                  </div>
                  <h4 style={{ fontSize: '1.1rem' }}>Advanced Battery</h4>
                  <p className="text-muted" style={{ fontSize: '0.9rem' }}>Fire-safe LFP cells with dynamic thermal management.</p>
                </div>
                
                <div className="flex flex-col gap-1">
                  <div className="mb-2" style={{ background: 'rgba(0,255,136,0.1)', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Shield color="var(--primary)" size={24} />
                  </div>
                  <h4 style={{ fontSize: '1.1rem' }}>Built Tough</h4>
                  <p className="text-muted" style={{ fontSize: '0.9rem' }}>Aerospace grade chassis tested on 10,000km of rough terrain.</p>
                </div>
                
                <div className="flex flex-col gap-1 mt-4">
                  <div className="mb-2" style={{ background: 'rgba(0,255,136,0.1)', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Target color="var(--primary)" size={24} />
                  </div>
                  <h4 style={{ fontSize: '1.1rem' }}>Precision Engineering</h4>
                  <p className="text-muted" style={{ fontSize: '0.9rem' }}>0-40 km/h in 3.1 seconds with silent hub motors.</p>
                </div>
                
                <div className="flex flex-col gap-1 mt-4">
                  <div className="mb-2" style={{ background: 'rgba(0,255,136,0.1)', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Leaf color="var(--primary)" size={24} />
                  </div>
                  <h4 style={{ fontSize: '1.1rem' }}>Zero Emissions</h4>
                  <p className="text-muted" style={{ fontSize: '0.9rem' }}>Saving an average of 1.5 tons of CO2 per rider annually.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 animate-fade-in delay-200">
               <div className="glass-panel text-center" style={{ background: 'linear-gradient(135deg, rgba(0,255,136,0.1) 0%, rgba(13,13,33,0.6) 100%)' }}>
                 <h1 className="text-gradient">50k+</h1>
                 <p className="text-muted">Happy Riders in India</p>
               </div>
               <div className="glass-panel text-center">
                 <h1 className="text-gradient">₹0.15/km</h1>
                 <p className="text-muted">Industry Leading Running Cost</p>
               </div>
               <div className="glass-panel text-center" style={{ background: 'linear-gradient(135deg, rgba(0,184,255,0.1) 0%, rgba(13,13,33,0.6) 100%)' }}>
                 <h1 className="text-gradient">5yr</h1>
                 <p className="text-muted">Comprehensive Battery Warranty</p>
               </div>
            </div>

          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="section-padding text-center relative z-10" style={{ paddingBottom: '8rem' }}>
        <div className="container">
          <div className="glass-panel" style={{ background: 'rgba(0, 255, 136, 0.05)', borderColor: 'var(--primary)', padding: '4rem 2rem' }}>
            <h2 className="mb-4">Ready to Make the Switch?</h2>
            <p className="text-muted mb-6 mx-auto" style={{ maxWidth: '500px' }}>Join the electric revolution today and experience the future of urban commuting.</p>
            <a href="/models" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2.5rem' }}>View Our Models</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

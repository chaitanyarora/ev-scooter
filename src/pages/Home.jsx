import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Shield, Battery, ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div className="pt-nav min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 pb-10 overflow-hidden" style={{ minHeight: 'calc(100vh - var(--nav-height))' }}>
        <div className="container relative z-10 grid lg:grid-cols-2 gap-6 items-center">
          
          {/* Hero Text */}
          <div className="animate-fade-in flex-col gap-4">
            <span className="badge mb-4">India's Next Gen EV</span>
            <h1 className="mb-4">
              Ride The <br />
              <span className="text-gradient">Future.</span>
            </h1>
            <p className="text-muted mb-6 mx-auto" style={{ fontSize: '1.2rem', maxWidth: '500px', textAlign: 'center', marginLeft: '0', marginRight: 'auto' }}>
              Experience unparalleled performance, industry-leading range, and zero-compromise design with Geomoto's flagship electric scooters.
            </p>
            <div className="flex gap-4">
              <Link to="/models" className="btn btn-primary">
                Explore Models <ArrowRight size={20} />
              </Link>
              <Link to="/about" className="btn btn-outline">
                Our Story
              </Link>
            </div>
            
            {/* Quick Stats */}
            <div className="flex gap-6 mt-10 pt-6" style={{ borderTop: '1px solid var(--border-color)' }}>
              <div>
                <h3 className="text-gradient">150km</h3>
                <p className="text-muted text-sm">True Range</p>
              </div>
              <div>
                <h3 className="text-gradient">90km/h</h3>
                <p className="text-muted text-sm">Top Speed</p>
              </div>
              <div>
                <h3 className="text-gradient">3.1s</h3>
                <p className="text-muted text-sm">0-40 km/h</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in delay-200 flex justify-center w-full">
            <div className="absolute inset-0 z-0 bg-glow glow-top-right w-full h-full" style={{ right: 0, top: '10%' }}></div>
            <img 
              src="/images/hero_scooter.png" 
              alt="Futuristic EV Scooter" 
              className="relative z-10 w-full"
              style={{ objectFit: 'contain', filter: 'drop-shadow(0 20px 40px rgba(0,255,136,0.2))', borderRadius: '20px', maxHeight: '600px' }}
            />
          </div>
          
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding relative z-10">
        <div className="container text-center">
          <h2 className="mb-10">Engineered for <span className="text-gradient">Excellence</span></h2>
          
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="glass-panel text-left animate-fade-in">
              <Battery color="var(--primary)" size={40} className="mb-4" />
              <h3 className="mb-2">Smart Battery</h3>
              <p className="text-muted">High-density LFP cells with AI-powered thermal management for ultimate safety and longevity.</p>
            </div>
            <div className="glass-panel text-left animate-fade-in delay-100">
              <Zap color="var(--primary)" size={40} className="mb-4" />
              <h3 className="mb-2">HyperDrive Motor</h3>
              <p className="text-muted">Silent, instant torque delivery matching the performance of a 125cc ICE scooter.</p>
            </div>
            <div className="glass-panel text-left animate-fade-in delay-200">
              <Shield color="var(--primary)" size={40} className="mb-4" />
              <h3 className="mb-2">Armored Chassis</h3>
              <p className="text-muted">Built with aerospace-grade aluminum alloy to withstand the toughest Indian road conditions.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Banner */}
      <section className="section-padding relative z-10">
        <div className="container">
          <div className="glass-panel text-center" style={{ background: 'linear-gradient(135deg, rgba(0,255,136,0.1) 0%, rgba(13,13,33,0.8) 100%)', padding: '5rem 2rem' }}>
            <h2 className="mb-4 text-gradient">The Revolution is Electric</h2>
            <p className="text-muted mb-6 mx-auto" style={{ maxWidth: '600px', fontSize: '1.2rem' }}>
              Join over 50,000 satisfied riders across India who have switched to Geomoto. Save money, save the environment, and ride with pride.
            </p>
            <Link to="/models" className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>Pre-book Yours Today</Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;

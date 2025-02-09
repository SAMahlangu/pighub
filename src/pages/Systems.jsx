import React, { useRef } from 'react';
import './Systems.css';

function PigProductionSystem() {
    const sectionRefs = Array.from({ length: 7 }, () => useRef(null));

    const scrollToSection = (ref) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="pig-production-container">
            <h1 className="pig-production-title">Pig Production System</h1>
            
            <section ref={sectionRefs[0]} className="pig-production-section">
                <h2>Large-Scale Commercial Pig Production</h2>
                <ul className="pig-production-list">
                    <li><strong>Modern Facilities:</strong> Advanced housing systems with controlled environments.</li>
                    <li><strong>Specialized Diets:</strong> Scientifically formulated feeds for optimized growth.</li>
                    <li><strong>Health Management:</strong> Regular vaccinations and biosecurity measures.</li>
                    <li><strong>Technological Integration:</strong> Monitoring animal health and farm management using technology.</li>
                    <li><strong>High Investment:</strong> Requires significant capital for infrastructure and equipment.</li>
                </ul>
            </section>
            
            <section ref={sectionRefs[1]} className="pig-production-section">
                <h2>Small-Scale Pig Farming</h2>
                <ul className="pig-production-list">
                    <li><strong>Low-Cost Setup:</strong> Use of locally available materials to reduce initial investment.</li>
                    <li><strong>Feed Sources:</strong> Utilizes homegrown feed, agricultural by-products, and kitchen scraps.</li>
                    <li><strong>Labor-Intensive:</strong> Family involvement in daily pig care and management.</li>
                    <li><strong>Diverse Breeds:</strong> Use of indigenous breeds adapted to local conditions.</li>
                    <li><strong>Community Integration:</strong> Farmers exchange knowledge and resources locally.</li>
                    <li><strong>Sustainable Practices:</strong> Recycling waste and practicing crop-livestock integration.</li>
                </ul>
            </section>

            <section ref={sectionRefs[2]} className="pig-production-section">
                <h2>Benefits of Small-Scale Pig Farming</h2>
                <ul className="pig-production-list">
                    <li><strong>Economic Opportunity:</strong> Provides income for rural families.</li>
                    <li><strong>Food Security:</strong> Supplies meat for households and local markets.</li>
                    <li><strong>Flexibility:</strong> Adaptable to market changes and environmental conditions.</li>
                    <li><strong>Cultural Significance:</strong> Preserves traditional farming practices and local breeds.</li>
                </ul>
            </section>

            <section ref={sectionRefs[3]} className="pig-production-section">
                <h2>Challenges for Small-Scale Pig Farming</h2>
                <ul className="pig-production-list">
                    <li><strong>Limited Resources:</strong> Restricted access to capital, veterinary services, and technology.</li>
                    <li><strong>Disease Management:</strong> Higher risks due to lack of biosecurity measures.</li>
                    <li><strong>Market Access:</strong> Difficulty in reaching larger markets and securing fair prices.</li>
                </ul>
            </section>

            <section ref={sectionRefs[4]} className="pig-production-section">
                <h2>Focus on Small-Scale Farming Practices</h2>
                <ul className="pig-production-list">
                    <li><strong>Free-Range Scavenging:</strong> Pigs forage for food in rural areas, consuming grass, brewery waste, and cereal by-products.</li>
                    <li><strong>Tethered or Confined Backyard Farming:</strong> Allows better control over pigs’ diet and environment.</li>
                    <li><strong>Small to Large Commercial Units:</strong> Intensive farming with controlled environments.</li>
                    <li><strong>Farrow-to-Finish System:</strong> Covers all stages from breeding to finishing pigs for market.</li>
                </ul>
            </section>

            <section ref={sectionRefs[5]} className="pig-production-section">
                <h2>Benefits of Free-Range Pig Farming</h2>
                <ul className="pig-production-list">
                    <li>Improves animal welfare and reduces stress.</li>
                    <li>Encourages natural behavior and better socialization.</li>
                    <li>Potential for improved meat quality.</li>
                </ul>
            </section>

            <button className="scroll-up-button" onClick={scrollToTop}>
                Scroll to Top
            </button>
        </div>
    );
}

export default PigProductionSystem;

import React, { useRef } from 'react';
import './Housing.css';
import butcher from '../assets/pigH.png';

function Housing() {
    const sectionRefs = Array.from({ length: 11 }, () => useRef(null));

    const scrollToSection = (ref) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const sections = [
        {
            title: 'Choose the Location',
            content: 'Select a flat, well-drained site that is easily accessible for transportation of pigs, feed, and equipment. Ensure good ventilation and an area away from sources of contamination.',
        },
        {
            title: 'Design the House',
            content: 'Determine the number of pigs you plan to house, as this will dictate the size of the structure. The house should allow pigs to move around freely, lie down comfortably, and have designated feeding and watering areas.',
        },
        {
            title: 'Gather Materials',
            content: 'Gather all necessary materials based on the design of your house, such as wood, nails, roofing sheets, concrete, and sand. You can also opt for pre-made panels or kits.',
        },
        {
            title: 'Lay the Foundation',
            content: 'Dig the foundation, ensuring the ground is level and stable. You can use bricks or stones for a solid foundation or opt for a concrete slab.',
        },
        {
            title: 'Build the Walls',
            content: 'Use wooden or metal frames to construct the walls. Ensure the walls are high enough (1.5-2 meters) to allow pigs to stand comfortably and prevent jumping.',
        },
        {
            title: 'Install the Roof',
            content: 'Secure roofing sheets to the top of the structure, ensuring a slanted roof to allow rainwater to run off effectively.',
        },
        {
            title: 'Install Doors and Windows',
            content: 'Install a large door for easy entry and exit and windows for ventilation to keep the air fresh and reduce humidity.',
        },
        {
            title: 'Install the Flooring',
            content: 'Install flooring materials like concrete or wood. Ensure a smooth surface for easy cleaning and durability.',
        },
        {
            title: 'Add Feeders and Waterers',
            content: 'Place feeders and waterers in convenient locations inside the pig house. Ensure they are easily accessible for the pigs.',
        },
        {
            title: 'Add Bedding',
            content: 'Add bedding material such as straw or sawdust to keep the pigs comfortable. Regularly change bedding to maintain hygiene.',
        },
        {
            title: 'Test Everything',
            content: 'Before introducing the pigs, test all aspects of the house to ensure security, functionality, and safety.',
        }
    ];

    return (
        <div className="housing-container">
            <h1 className="housing-title">Building a Pig House</h1>

            <ol className="housing-list">
                {sections.map((section, index) => (
                    <li key={index} onClick={() => scrollToSection(sectionRefs[index])} style={{ cursor: 'pointer' }}>
                        {section.title}
                    </li>
                ))}
            </ol>

            {sections.map((section, index) => (
                <div key={index} ref={sectionRefs[index]} className="housing-section">
                    <h2>{section.title}</h2>
                    <p>{section.content}</p>
                </div>
            ))}

            <div className="incubation-image-container">
                <img src={butcher} alt="butcher" className="incubation-structure-image" />
                <p></p>
            </div>

            {/* Additional Information */}
            <div className="additional-info">
                <h3>Additional Information on Building a Pig House:</h3>
                <p><strong>To build a pig house, you will need:</strong></p>
                <ul>
                    <li>Wooden or metal frame</li>
                    <li>Roofing</li>
                    <li>Walls (wood, brick, or concrete)</li>
                    <li>Flooring</li>
                    <li>Fencing</li>
                    <li>Doors and windows</li>
                </ul>
                <p><strong>Steps:</strong></p>
                <ul>
                    <li>Prepare a flat site with adequate drainage.</li>
                    <li>Build a frame (1.5-2m high).</li>
                    <li>Add flooring and walls.</li>
                    <li>Install doors and windows.</li>
                    <li>Fence the enclosure.</li>
                    <li>Finish the interior (bedding, feeding, watering).</li>
                </ul>

                <p><strong>About The Pig:</strong></p>
                <ul>
                    <li>Pigs spend most of their time outdoors.</li>
                    <li>Pigs must have room to move, exercise, and forage.</li>
                    <li>Pigs are exposed to sunlight.</li>
                    <li>Pigs breathe fresh air.</li>
                    <li>No cage or crates.</li>
                    <li>Pigs like to graze on pasture.</li>
                </ul>
            </div>

            <button className="scroll-up-button" onClick={scrollToTop}>
                Scroll to Top
            </button>
        </div>
    );
}

export default Housing;

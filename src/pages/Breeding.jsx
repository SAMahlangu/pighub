import React, { useRef } from 'react';
import './Breeding.css';
import pigBreedingImg from '../assets/pig_breeding_cycle.png';
import yorkshireImg from '../assets/yorkshire_image.png';
import durocImg from '../assets/duroc_image.png';
import landraceImg from '../assets/landrace_image.png';
import berkshireImg from '../assets/berkshire_image.png';
import hampshireImg from '../assets/hampshire_image.png';
import tamworthImg from '../assets/tamworth_image.png';
import largeBlackImg from '../assets/large_black_image.png';
import pietrainImg from '../assets/pietrain_image.png';

function PigBreeding() {
    // const sectionRefs = Array.from({ length: 6 }, () => useRef(null));
    const sectionRefs = Array.from({ length: 16 }, () => useRef(null)); // Adjusted to 16 for all sections
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
            title: 'Pig Breeding and Selection',
            
            content: [
                'Get a male pig (boar) and a female pig (sow) and put them together into a pig house. The male pig will mount the female pig, and they will have multiple babies, but this will happen when the sow is ready.',
                'When does sow get ready? The sow will be ready to mate every 21 days for 2 to 3 days. After mating, the sow is pregnant for about 114 days and then gives birth to baby pigs.',
                'As a farmer, you can expect 8 to 12 baby pigs from each pregnant sow. First-time moms have fewer babies. To have more babies, make sure the pigs are healthy, well-fed, and happy. Some babies may not survive (mortality). With good care, 10 pigs can have 250 babies a year. This number can vary.',
                'Mortality refers to the death rate, which can affect babies, adults, and unborn animals. In pigs, common causes of death include disease, accidents, poor nutrition, bad environment, and genetics. Tracking mortality helps identify health issues, prevent future deaths, improve animal care, reduce losses, and enhance farm management.',
                'To reduce mortality, farmers can vaccinate, provide good food, maintain clean living conditions, offer regular care, and choose strong genetics. By understanding mortality, farmers can take steps to prevent death and promote a healthier pig population.'
            ],
            img: pigBreedingImg

        },
        {
            title: 'What Happens After a Pig Gives Birth',
            content: [
                'The sow will take care of the piglets, and you, as a farmer, can help by:',
                '• Providing food and water for the sow and piglets',
                '• Keeping their living space clean and warm',
                '• Checking for healthy piglets and helping weak ones',
                '• Giving vaccinations to protect against disease',
                '• Tagging or marking piglets for identification',
                '• Weaning and separating piglets from the sow after 3 to 4 weeks',
                '• Moving piglets to a nursery area for growth and care',
                '• Monitoring their health, growth, and behavior',
                'This care ensures the piglets grow strong and healthy. Weaning reduces the sow\'s stress, allowing her to rest and prepare for the next pregnancy. It also helps the piglets grow independently and prepare for their next stage of life.'
            ]
        },
        {
            title: 'Farrowing Process and Care of the Sow During Farrowing',
            content: [
                'The farrowing process involves several critical steps to ensure the successful delivery of piglets and the health of the sow:',
                '• Preparation: Prepare the farrowing area well in advance, ensuring it is clean, dry, and equipped with necessary supplies such as clean bedding, a heat source for piglets in cold weather, and any required tools. Monitor the sow closely as she nears her farrowing date.',
                '• Farrowing: During farrowing, assist the sow if necessary, but avoid interfering too much. Most sows can farrow without assistance. Ensure that each piglet is born healthy and check that the sow can clean and nurse them properly.',
                '• Immediate Care: After birth, make sure that each piglet receives colostrum within the first few hours to boost immunity. Ensure that the piglets are kept warm, as they are unable to regulate their body temperature effectively on their own.',
                '• Monitoring: Watch the sow and piglets closely during the farrowing process. Check that the sow is properly nursing all her piglets and that there are no signs of distress or complications.'
            ]
        },
        {
            title: 'Managing Farrowing Complications',
            content: [
                'Farrowing complications can occur and require prompt attention to ensure the health of both the sow and piglets:',
                '• Dystocia: If the sow is having difficulty delivering piglets, check for any obstructions or unusual conditions. Aid as needed and consult a veterinarian if problems persist.',
                '• Stillborn Piglets: Occasionally, piglets may be stillborn or fail to thrive. Ensure the sow is well-supported and monitor her closely for signs of infection or distress. Disinfect the farrowing area to prevent disease spread.',
                '• Post-Farrowing Care: After farrowing, monitor the sow for signs of post-partum issues such as uterine infections or mastitis. Provide proper nutrition and hydration to support her recovery and milk production.',
                '• Piglet Care: Address any issues with weak or orphaned piglets promptly. Supplement feeding with milk replacers if needed and provide additional warmth.'
            ]
        },
        {
            title: 'Care of Newborn Piglets',
            
            content: [
                'Immediately after birth, it\'s vital to ensure that piglets receive colostrum, the first milk produced by the sow. Colostrum is rich in antibodies and provides essential immunity to protect piglets from diseases. Within the first 24 hours, piglets should receive adequate colostrum to strengthen their immune systems.',
                'Additionally, newborn piglets are highly susceptible to cold stress, so maintaining warmth is crucial. Bedding, heat lamps, or heated pads are commonly used to keep the piglets\' environment warm, ideally around 32°C (90°F) during the first week of life.'
            ]
        },
        {
            title: 'Factors to Consider When Buying a Pig',
            content: [
                'Several important factors to look out for when you are buying a pig:',
                '• Health Status: Check for any signs of illness or parasites. Healthy pigs should have clear eyes, clean ears, and a shiny coat. Avoid pigs with coughing, runny noses, and signs of diarrhea.',
                '• Genetics: Research the pig’s lineage to ensure they come from a strong genetic background. Look for pigs with desirable traits like good growth rates, feed efficiency, and high reproductive performance.',
                '• Age: Consider the age of the pigs. Breeding pigs are typically selected around 6-12 months of age. Ensure they are mature enough to start breeding but not too old.',
                '• Conformation: Examine the physical structure of the pigs. They should have good body conformation, with strong legs and a straight back. Avoid pigs with deformities or poor structure, as this can affect their productivity.',
                '• Diet and Management: Understand the current diet and management practices of the pigs. Pigs that have been well-managed and fed are likely to adapt better to your farm conditions.',
                '• Adaptability: Consider how well the pigs will adapt to your local environment and farming conditions. Some breeds are more suited to specific climates or housing systems.',
                '• Cost: Evaluate the cost of the pigs in relation to their quality and your budget. Sometimes a higher upfront cost can be justified by better breeding potential and lower long-term expenses.',
                '• Purpose of Farming: If it is for meat production, choose breeds known for high-quality meat and efficient growth. If you\'re interested in producing special products like heritage pork and organic meat, look for those traits in the pigs.'
            ]
        },        
        {
            title: 'Yorkshire (Large White)',
            img: yorkshireImg, // Replace with actual image path
            content: [
                'Description: A widely used breed known for its excellent growth rate, feed efficiency, and high-quality lean meat.',
                'Best For: Commercial meat production and crossbreeding.',
                'Advantage: Good reproductive traits, large litter sizes, and adaptability to different environments.'
            ],
            
        },
        {
            title: 'Duroc',
            img: durocImg, // Replace with actual image path
            content: [
                'Description: A popular breed known for its rapid growth, high feed efficiency, and likeable, marbled meat.',
                'Best For: Meat production and crossbreeding.',
                'Advantage: Excellent growth rate and meat quality, good temperament.'
            ],
            
        },
        {
            title: 'Landrace',
            img: landraceImg, // Replace with actual image path
            content: [
                'Description: Known for its large size, good mothering ability, and prolific breeding.',
                'Best For: Breeding stock and crossbreeding for meat production.',
                'Advantage: Large litters, good milk production, lean meat.'
            ],
            
        },
        {
            title: 'Berkshire',
            img: berkshireImg, // Replace with actual image path
            content: [
                'Description: A heritage breed prized for its likeable, tender meat with good marbling.',
                'Best For: Markets and specialty pork production.',
                'Advantages: High-quality meat, good temperament, adaptable to various farming conditions.'
            ],
            
        },
        {
            title: 'Hampshire',
            img: hampshireImg, // Replace with actual image path
            content: [
                'Description: Known for its lean meat and rapid growth.',
                'Best For: Meat production.',
                'Advantage: Excellent carcass quality, good growth rate, and strong legs.'
            ],
            
        },
        {
            title: 'Tamworth',
            img: tamworthImg,
            content: [
                'Description: A hardy breed known for its ability to thrive outdoor, pasture-based systems.',
                'Best For: Pasture-based or organic farming.',
                'Advantages: Excellent foraging ability, good mothering traits, high-quality bacon.'
            ],
             
        },
        {
            title: 'Large Black',
            img: largeBlackImg, // Replace with actual image path
            content: [
                'Description: A heritage breed known for its excellent foraging ability and likeable meat.',
                'Best For: Pasture-based or organic farming, local markets.',
                'Advantage: Hardy, good mothering traits, high-quality meat.'
            ],
            
        },
        {
            title: 'Pietrain',
            img: pietrainImg, // Replace with actual image path
            content: [
                'Description: Known for its muscular build and high lean meat yield.',
                'Best For: Crossbreeding to enhance muscle development in offspring.',
                'Advantages: High lean meat percentage, low backfat.'
            ],

        },
        {
            title: 'SAPPO and Research',
            content: [
                '“SAPPO regards research to be one of the pillars on which the pork industry stands.”'
            ]
        }
        
    ];
    
    return (
        <div className="breeding-container">
            <h1>Pig Breeding Information</h1>
            <p>Learn about different aspects of pig breeding, including best practices and breeds.</p>

        {/* Navigation Buttons */}
        <div className="navigation-buttons">
                    {sections.map((section, index) => (
                        <button key={index} onClick={() => scrollToSection(sectionRefs[index])}>
                            {section.title}
                        </button>
                    ))}
                </div>

            <div className="breeding-content">
                {sections.map((section, index) => (
                    <div key={index} ref={sectionRefs[index]} className="breeding-section">
                        <h2>{section.title}</h2>
                        {section.img && <img src={section.img} alt={section.title} className="pig-breed-img" />}
                        <ul>
                            {section.content.map((text, idx) => (
                                <li key={idx}>{text}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Back to Top Button */}
            <div className="bottom-buttons">
                <button onClick={scrollToTop}>Back to Top</button>
            </div>
        </div>
    );
}

export default PigBreeding;

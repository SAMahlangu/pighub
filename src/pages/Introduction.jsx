import React, { useRef } from 'react';
import './Introduction.css';

function Introduction() {
    const sectionRefs = Array.from({ length: 7 }, () => useRef(null));

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
            title: 'Introduction to Pig Production in South Africa',
            content: 'Pigs, also known as swine or hogs, are intelligent, social mammals belonging to the scientific family Sus Scrofa. Originating from Africa, Europe, and Asia, pigs have distinctive physical characteristics including a special snout, curly tail, short legs, and a weight range of 50 to 600 kg, with colors such as white, black, brown, and pink. With over 100 breeds, pigs serve multiple purposes: raised for meat, pork products, leather, and even medicine. Pigs are popular farm animals and can even be kept as pets. They offer a reliable source of cash income through the sale of pigs and pork products.',
        },
        {
            title: 'Essential Factors for Starting a Successful Pig Farm',
            content: 'Starting a pig farm involves careful planning and consideration of several key factors. Important factors include selecting the right location with reliable road access, assessing capital investment, and choosing breeds based on demand in your region. Consider proper housing, feeding, health management, and labor expertise. Market research, environmental considerations, legal compliance, and risk management are also essential to the farm’s success.',
        },
        {
            title: 'Health Management and Biosecurity',
            content: 'Access to veterinary care is crucial. Establish a relationship with a qualified veterinarian for regular health checks, vaccinations, and disease treatment. Implement strict hygiene and biosecurity measures to prevent disease outbreaks. Pigs are susceptible to diseases such as African Swine Fever, Porcine Reproductive and Respiratory Syndrome (PRRS), and swine flu, which can spread rapidly and cause significant losses.',
        },
        {
            title: 'Feeding and Nutrition',
            content: 'A consistent supply of high-quality feed with at least 18% crude protein is necessary to meet the nutritional needs of pigs at different growth stages. Feed is one of the largest expenses in pig farming, so it’s essential to consider cost-effective feed options that support optimal growth and health.',
        },
        {
            title: 'Challenges in Pig Farming',
            content: 'Pig farming presents challenges like disease outbreaks, feed price fluctuations, and environmental concerns. Diseases like African Swine Fever can cause significant losses, and market fluctuations can affect profitability. Biosecurity measures, effective feed management, and market research are vital in overcoming these challenges.',
        },
        {
            title: 'Market Opportunities and Value-Added Products',
            content: 'Pig farmers can increase profitability by processing pork into products like sausages, bacon, and ham. Developing a strong brand and attractive packaging can help stand out in the market. There is growing demand for organic and free-range pork, which often commands higher prices. Farmers can also tap into the gourmet market by raising specialty pig breeds such as Duroc.',
        },
        {
            title: 'A Business Plan for Success',
            content: 'A comprehensive business plan is essential for starting and running a successful pig farm. It integrates all factors like location, capital, breed selection, feeding, health management, and market strategies. With careful planning, a solid business plan ensures the farm operates efficiently, stays financially viable, and aligns with long-term objectives.',
        },
    ];

    return (
        <div className="introduction-container">
            <h1 className="introduction-title">Introduction to Pig Production in South Africa</h1>
            
            <ol className="introduction-list">
                {sections.map((section, index) => (
                    <li key={index} onClick={() => scrollToSection(sectionRefs[index])} style={{ cursor: 'pointer' }}>
                        {section.title}
                    </li>
                ))}
            </ol>

            {sections.map((section, index) => (
                <div key={index} ref={sectionRefs[index]} className="introduction-section">
                    <h2>{section.title}</h2>
                    <p>{section.content}</p>
                </div>
            ))}

            <button className="scroll-up-button" onClick={scrollToTop}>
                Scroll to Top
            </button>
        </div>
    );
}

export default Introduction;

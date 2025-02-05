import React, { useRef } from 'react'; // Import useRef if using refs
import './Broiler.css'; // Import the CSS file
import '../Header.jsx'; // Import the CSS file
import chickenImage from '../assets/pighouse.png'; // Adjust the path to point to your image






function BroilerPage() {
  // Create references for the introduction and infrastructure sections
  // Create references for each section
  const introductionRef = useRef(null);
  const infrastructureRef = useRef(null);
  const equipmentRef = useRef(null);
  const lightingRef = useRef(null);
  const stockingRef = useRef(null);
  const feedingRef = useRef(null);
  const hygieneRef = useRef(null);
  const healthRef = useRef(null);
  const productionRef = useRef(null);
  

  // Scroll handlers for each section
  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Scroll handler to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="broiler-container">
      <h1 className="broiler-title">Pig Farm Production Guide</h1>
      
      <ol className="broiler-list">
        <li onClick={() => scrollToSection(introductionRef)} style={{ cursor: 'pointer' }}>
          Introduction
        </li>
        <li onClick={() => scrollToSection(infrastructureRef)} style={{ cursor: 'pointer' }}>
          Pig Production System
        </li>
        <li onClick={() => scrollToSection(equipmentRef)} style={{ cursor: 'pointer' }}>
          Building a structure for the pigs
        </li>
        <li onClick={() => scrollToSection(lightingRef)} style={{ cursor: 'pointer' }}>
          Pig, mating and selection
        </li>
        <li onClick={() => scrollToSection(stockingRef)} style={{ cursor: 'pointer' }}>
          Pig disease``
        </li>
        <li onClick={() => scrollToSection(feedingRef)} style={{ cursor: 'pointer' }}>
          Nutrition and Feeding
        </li>
        <li onClick={() => scrollToSection(hygieneRef)} style={{ cursor: 'pointer' }}>
          Managment
        </li>
        <li onClick={() => scrollToSection(healthRef)} style={{ cursor: 'pointer' }}>
          Marketing and sales
        </li>
        <li onClick={() => scrollToSection(productionRef)} style={{ cursor: 'pointer' }}>
          Financial management
        </li>
        {/* <li onClick={() => scrollToSection(marketingRef)} style={{ cursor: 'pointer' }}>
          Marketing and Selling
        </li>
        <li onClick={() => scrollToSection(stepByStepRef)} style={{ cursor: 'pointer' }}>
          Step by Step Process of Putting Everything You’ve Learned Together
        </li> */}
      </ol>

      {/* The Introduction section */}
      <div className="broiler-section" ref={introductionRef}>
  <h2>1. Introduction to Pig Production in South Africa</h2>
  <p>
    Pigs, also known as swine or hogs, are intelligent, social mammals belonging to a scientific family called <i>Sus Scrofa</i>. Originating from Africa, Europe, and Asia, pigs have distinctive physical characteristics, including a special snout, curly tail, short legs, and varied sizes ranging from 50 to 600 kg and colors such as white, black, brown, and pink. With over 100 breeds, pigs serve multiple purposes: they are raised for meat, and pork is used for leather, medicine, and are popular farm animals or even kept as pets. Pigs are a versatile livestock choice, offering a reliable source of cash income through the sale of pigs and pork products.
  </p>
  <p>
    Pigs can consume a wide range of feeds, including agricultural by-products, making them more cost-effective to raise compared to other livestock. Pigs reproduce rapidly, with sows capable of giving birth to large litters, often twice a year. This ensures a continuous cycle of production and income. This financial stability can help meet daily expenses and improve the quality of life for farming families. Beyond income generation, pigs play a crucial role in enhancing food security by providing a consistent supply of nutritious meat for household consumption.
  </p>
  <p>
    Moreover, the by-products of pig farming, such as manure, contribute significantly to sustainable agriculture. Hence, pig farming can be integrated with crop farming, where pig manure is used as fertilizer, enhancing soil fertility and contributing to sustainable agriculture practices. Pig manure is an excellent organic fertilizer that improves soil fertility, leading to better crop yields and more resilient farming systems.
  </p>

  <h3>Essential Factors for Starting a Successful Pig Farm</h3>
  <p>
    Starting a pig farm involves careful planning and consideration of several key factors to ensure the success and sustainability of the venture. Here are some important factors to consider:
  </p>
  <ul>
    <li>
      <strong>Location and Farm Site:</strong> Ensure the farm is accessible by road for the transportation of pigs, feed, and other supplies. Check local zoning laws and regulations regarding pig farming to ensure compliance. A reliable and clean water source is essential for the pigs' drinking, cleaning, and cooling needs. Consider the local climate and how it may affect pig health and comfort. Proper ventilation and shelter are crucial.
    </li>
    <li>
      <strong>Capital Investment:</strong> Assess the initial costs for purchasing land, constructing pig pens, buying piglets, feed, and other necessary equipment. Consider operating capital for expenses, such as feed, veterinary care, labor, utilities, and maintenance. Determine how you will finance the farm, either through personal savings, loans, or grants.
    </li>
    <li>
      <strong>Breed Selection:</strong> Choose breeds that are in demand in your region, considering factors like meat quality, growth rate, and adaptability to local conditions, and decide whether you want to focus on breeding, fattening, or a combination of both, and select breeds accordingly.
    </li>
    <li>
      <strong>Housing and Facilities:</strong> Construct pens that provide adequate space, ventilation, and protection from extreme weather. Design the farm to prevent bird or rat intrusion and minimize the risk of disease transmission, including proper sanitation facilities and controlled access.
    </li>
    <li>
      <strong>Feeding and Nutrition:</strong> Ensure a consistent supply of high-quality feed with at least 18% crude protein to meet the nutritional needs of the pigs at different stages of growth. Consider the cost of feed, as it is one of the largest expenses in pig farming.
    </li>
    <li>
      <strong>Health Management:</strong> Access to veterinary care is important. Establish a relationship with a qualified veterinarian for regular health checks, vaccinations, and treatment of diseases. Implement strict hygiene and biosecurity measures to prevent the spread of diseases.
    </li>
    <li>
      <strong>Labor and Expertise:</strong> Hire or train workers who are knowledgeable in pig husbandry, including feeding, breeding, and health care. Develop strong farm management skills, including record-keeping, budgeting, and problem-solving.
    </li>
    <li>
      <strong>Market Research:</strong> Identify potential buyers for your pigs, whether they are local markets, butcheries, processors, or retailers. Understand the market price trends and how they may affect your profitability.
    </li>
    <li>
      <strong>Environmental Considerations:</strong> Develop a plan for managing pig waste to avoid environmental pollution and comply with regulations. Consider sustainable farming practices that minimize environmental impact and promote long-term farm viability.
    </li>
    <li>
      <strong>Legal and Regulatory Compliance:</strong> Obtain any necessary permits or licenses required to operate a pig farm in your area. Adhere to animal welfare regulations and best practices to ensure the humane treatment of pigs.
    </li>
    <li>
      <strong>Risk Management:</strong> Consider insuring the farm against risks such as disease outbreaks, natural disasters, and theft. Develop a plan to handle unforeseen challenges, such as market downturns or feed shortages.
    </li>
  </ul>

  <p>
    A comprehensive business plan is a crucial tool that integrates these factors, ensuring that each aspect of the farm is well-thought-out and aligned with overall goals. By developing a comprehensive business plan, you ensure that all aspects of your farm are well-planned and aligned with your long-term objectives, setting a solid foundation for success.
  </p>

  <h3>Challenges in Pig Farming</h3>
  <p>
    Pigs are susceptible to a range of diseases, such as African Swine Fever, Porcine Reproductive and Respiratory Syndrome (PRRS), and swine flu. These diseases can spread rapidly and cause significant losses. Maintaining strict biosecurity protocols is essential to prevent disease outbreaks. This includes controlling farm access, proper sanitation, and regular health checks. Feed accounts for a major portion of production costs. Fluctuations in the prices of feed ingredients like maize, soybeans, and other grains can impact profitability.
  </p>
  <p>
    Pig farmers can increase profitability by processing pork into a variety of products, such as sausages, bacon, ham, and others. Value-added products often fetch higher prices in the market. Developing a strong brand and investing in attractive packaging can help farmers stand out in the market and attract premium customers. There is a growing demand for organic and free-range pork, which can command higher prices. Farmers who can meet the standards for organic certification can tap into this lucrative market. A farmer can decide to raise specialty pig breeds such as Duroc for their unique flavors or characteristics to attract gourmet markets, farmers, and consumers.
  </p>
  <p>
    Beginner farmers may face challenges in accessing lucrative markets, particularly if they lack the resources to meet stringent quality standards.
  </p>
</div>


      {/* The Pig Production System section */}
      <div className="broiler-section" ref={infrastructureRef}>
      <h2>Pig Production Systems</h2>
        <p>
          Pig production systems vary significantly, ranging from large-scale commercial operations to small-scale farming, each with its own methods and practices. Let's explore these systems in detail, with a particular emphasis on small-scale farming.
        </p>
        <h3>Large-Scale Commercial Pig Production</h3>
        <ul>
          <li>Modern Facilities: Large farms invest in advanced housing systems with controlled environments to optimize growth and health.</li>
          <li>Specialized Diets: Pigs are fed scientifically formulated diets to meet their nutritional needs precisely, ensuring rapid growth and high productivity.</li>
          <li>Health Management: Comprehensive health programs, including regular vaccinations and biosecurity measures, are in place to prevent disease outbreaks.</li>
          <li>Technological Integration: Use of technology for monitoring animal health, feed consumption, and overall farm management.</li>
          <li>High Investment: Significant capital investment in infrastructure, equipment, and technology to maximize efficiency and production scale.</li>
        </ul>

        <h3>Small-Scale Pig Farming</h3>
        <p>
          Small-scale pig farming, often practiced by smallholder farmers, involves simpler, more traditional methods. Here, the focus is on sustainability and local practices. Key aspects include:
        </p>
        <ul>
          <li>Low-Cost Setup: Small-scale farmers typically use locally available materials to build pig pens, reducing initial investment costs.</li>
          <li>Feed Sources: Pigs are often fed a mix of homegrown feed, agricultural byproducts, and kitchen scraps. This reduces feed costs and utilizes available resources effectively.</li>
          <li>Labor-Intensive: Farming is more labour-intensive, with family members often involved in daily care and management of the pigs.</li>
          <li>Diverse Breeds: Small farms might keep various pig breeds, including indigenous ones, which are well-adapted to local conditions.</li>
          <li>Community Integration: Small-scale pig farming is often integrated into the local community, with farmers exchanging knowledge and resources.</li>
          <li>Sustainable Practices: Emphasis on recycling waste, such as using pig manure as fertilizer, and practicing crop-livestock integration.</li>
        </ul>

        <h4>Benefits of Small-Scale Pig Farming</h4>
        <ul>
          <li>Economic Opportunity: Provides a source of income for rural families and can be a step towards poverty alleviation.</li>
          <li>Food Security: Contributes to local food supply, providing meat for household consumption and local markets.</li>
          <li>Flexibility: Small-scale farms can be more adaptable to changing market conditions and environmental challenges.</li>
          <li>Cultural Significance: Preserves traditional farming practices and local breeds, which are part of cultural heritage.</li>
        </ul>

        <h4>Challenges for Small-Scale Pig Farming</h4>
        <ul>
          <li>Limited Resources: Small farmers often have limited access to capital, veterinary services, and modern technology.</li>
          <li>Disease Management: Due to fewer resources, small-scale farms may face challenges in controlling diseases and maintaining biosecurity.</li>
          <li>Market Access: Small-scale farmers might struggle with accessing larger markets and securing fair prices for their products.</li>
        </ul>

        <p>
          While large-scale pig production focuses on efficiency and volume through advanced technology and significant investments, small-scale pig farming prioritizes sustainability, local resource use, and community involvement. Both systems play vital roles in the agricultural landscape, but small-scale farming remains crucial for rural development and food security.
        </p>

        <h4>Key Practices in Small-Scale Farming</h4>
        <ul>
          <li>
            Free range to scavenge for food: Practiced by small farmers mainly in rural areas where pigs are fed mostly grass, brewery, cereal by-products, or waste products/food.
          </li>
          <li>
            Tethered or confined in a backyard or village: This permits control of the pigs.
          </li>
          <li>
            Kitchen Swills and Crop by-products: A system popular in Africa, Asia, and South America.
          </li>
          <li>
            Small, Medium, or Large Commercial Units: Highly intensive systems with technical control over environmental stress.
          </li>
          <li>
            Intensive Pig Farming: Conventional structures handle everything from breeding to raising pregnant pigs.
          </li>
        </ul>
      </div>
      
        {/* The BUILDING A STRUCTURE FOR THE PIGS section */}
        <div className="broiler-section" ref={equipmentRef}>
  <h2>Building a Structure for the Pigs</h2>
  <p>
    You need to decide on how many pigs you wish to farm with, as it will determine the size of your structure. You must choose between free-range pig farming or housing the pigs in pens, which will also impact the cost of your materials. Whether you build your own building or buy a house for your pigs, it is preferable to build your own structure. 
    Biosecurity and welfare considerations must be incorporated into the structure design and adhered to.
  </p>
  {/* Add the chicken image */}
  <div>
    <img src={chickenImage} alt="Broiler Chickens" className="broiler-image" />
  </div>
  <h3>Building a Pig House</h3>
  <p>
    To build a pig house, you will need:
  </p>
  <ul>
    <li>Wooden or metal frame</li>
    <li>Roofing (e.g., iron sheets)</li>
    <li>Walls (wood, brick, or concrete)</li>
    <li>Flooring</li>
    <li>Fencing</li>
    <li>Doors and windows</li>
  </ul>

  <h4>Steps to Build the Pig House</h4>
  <ol>
    <li>Prepare a flat site with adequate drainage.</li>
    <li>Build a frame (1.5-2m high).</li>
    <li>Add flooring and walls.</li>
    <li>Install doors and windows.</li>
    <li>Fence the enclosure.</li>
    <li>Finish the interior with bedding, feeding, and watering setups.</li>
  </ol>

  <h4>Key Considerations for Pig Housing</h4>
  <ul>
    <li>Pigs spend most of their time outdoors.</li>
    <li>Pigs must have room to move, exercise, and forage.</li>
    <li>Pigs should be exposed to sunlight.</li>
    <li>Pigs need fresh air for proper breathing.</li>
    <li>No cages or crates should be used.</li>
    <li>Pigs like to graze on pasture.</li>
  </ul>
        </div>


      {/* The PIG, MATING AND SELECTION section */}
      <div className="broiler-section" ref={lightingRef}>
      <h2>Pig, mating and selection</h2>
      <div className="breeding-info">
        <p>
          <strong>Breeding Pigs:</strong> To start breeding, get a male pig (boar) and a female pig (sow) and put them together in a pig house. The boar will mount the sow when she is ready, and they will have multiple babies. This process occurs when the sow is in heat.
        </p>

        <h3>When Does a Sow Get Ready?</h3>
        <p>
          The sow is ready to mate every 21 days for 2 to 3 days. After mating, the sow is pregnant for approximately 114 days and then gives birth to baby pigs. As a farmer, you can expect 8 to 12 baby pigs from each pregnant sow. First-time mothers tend to have fewer babies. To ensure more babies, make sure the pigs are healthy, well-fed, and happy. Some baby pigs may not survive (mortality). With good care, 10 pigs can produce up to 250 babies a year, though this number may vary.
        </p>

        <h4>Understanding Mortality</h4>
        <p>
          Mortality refers to the death rate and can affect baby pigs, adults, and unborn animals. Common causes of death in pigs include diseases, accidents, poor nutrition, bad environmental conditions, and genetics. Tracking mortality helps identify health issues, prevent future deaths, improve animal care, reduce losses, and enhance farm management.
        </p>
        <p>
          To reduce mortality, farmers can:
          <ul>
            <li>Vaccinate pigs to protect against diseases</li>
            <li>Provide nutritious food</li>
            <li>Maintain clean and comfortable living conditions</li>
            <li>Offer regular care and health checks</li>
            <li>Choose strong genetics when breeding</li>
          </ul>
        </p>
        <p>
          By understanding and addressing mortality, farmers can promote healthier pigs and improve farm productivity.
        </p>
      </div>

      <h3>What Happens After a Pig Gives Birth?</h3>
      <p>
        After giving birth, the sow takes care of her piglets, and the farmer helps by:
      </p>
      <ul>
        <li>Providing food and water for the sow and piglets</li>
        <li>Keeping their living space clean and warm</li>
        <li>Checking for healthy piglets and assisting weak ones</li>
        <li>Giving vaccinations to protect against diseases</li>
        <li>Tagging or marking piglets for identification</li>
        <li>Weaning piglets from the sow after 3 to 4 weeks</li>
        <li>Moving piglets to a nursery area for growth and care</li>
        <li>Monitoring their health, growth, and behavior</li>
      </ul>
      <p>
        This care ensures that piglets grow strong and healthy, setting them up for the next stage of their lives.
      </p>

      <h4>Why Is Weaning Important?</h4>
      <p>
        Weaning reduces stress for the sow, allowing her to rest and prepare for her next pregnancy. It also helps the piglets grow independently and prepares them for their next stage of life. Proper weaning practices are essential for maintaining a healthy and productive pig farm.
      </p>
      </div>
      
      {/* The Pig disease section */}
      <div className="broiler-section" ref={stockingRef}>
      <h2>Pig disease</h2>
      </div>

      {/* The Nutrition and Feeding section */}
      <div className="broiler-section" ref={feedingRef}>
      <h2>Nutrition and Feeding</h2>
      </div>

      {/* The Management section */}
      <div className="broiler-section" ref={hygieneRef}>
      <h2>Management</h2>
      </div>

      {/* The Marketing and sales section */}
      <div className="broiler-section" ref={healthRef}>
      <h2>Marketing and sales</h2>
      </div>

      {/* The Financial management section */}
      <div className="broiler-section" ref={productionRef}>
        <h2>Financial management</h2>
        {/* Add content */}
      </div>
      
      {/* Scroll Up Button */}
      <button className="scroll-up-button" onClick={scrollToTop}>
        Scroll to Top
      </button>
    </div>
  );
}

export default BroilerPage;

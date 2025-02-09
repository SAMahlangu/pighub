import React, { useRef } from 'react';
import './Health.css'; // Add your styles

const PigHealth = () => {
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
    <div className="pig-health-container">
      <h1>Pig Health and Diseases</h1>

      <div className="navigation-buttons">
        <button onClick={() => scrollToSection(sectionRefs[0])}>Jump to Introduction</button>
        <button onClick={() => scrollToSection(sectionRefs[1])}>Acute & Subacute Diseases</button>
        <button onClick={() => scrollToSection(sectionRefs[2])}>Vaccination Schedules</button>
        <button onClick={() => scrollToSection(sectionRefs[3])}>Common Pig Diseases</button>
        <button onClick={() => scrollToSection(sectionRefs[4])}>Post-Weaning Diseases</button>
        <button onClick={() => scrollToSection(sectionRefs[5])}>PRRS (Blue Ear Disease)</button>
        <button onClick={() => scrollToSection(sectionRefs[6])}>Classical Swine Fever (CSF)</button>
      </div>

      <section ref={sectionRefs[0]} className="health-section">
        <h2>Introduction</h2>
        <p>
          Pigs are susceptible to various bacterial, viral, and parasitic infections such as roundworm infestation and foot-and-mouth disease.
          Understanding these diseases, their prevention, and treatment is crucial for maintaining a healthy pig farm.
        </p>
      </section>

      <section ref={sectionRefs[1]} className="health-section">
        <h2>Acute and Subacute Diseases</h2>
        <h3>Acute Diseases</h3>
        <p>These appear suddenly, last for a short time, and can be severe, often causing high mortality.</p>
        <ul>
          <li>Swine fever</li>
          <li>Pneumonia</li>
          <li>Scours</li>
          <li>Severe bacterial infections</li>
        </ul>

        <h3>Subacute Diseases</h3>
        <p>These develop slowly, last longer than acute diseases, and make pigs feel unwell but not severely sick.</p>
        <ul>
          <li>Parasitic infections</li>
          <li>Mild bacterial infections</li>
          <li>Respiratory issues</li>
          <li>Nutritional deficiencies</li>
        </ul>
      </section>

      <section ref={sectionRefs[2]} className="health-section">
        <h2>Vaccination Schedules</h2>
        <h3>Pre-Weaning Vaccinations</h3>
        <p>
          Piglets receive vaccines for diseases like <strong>E. coli</strong> and <strong>Clostridium perfringens</strong> shortly after birth or during the weaning period.
        </p>

        <h3>Growing Pigs</h3>
        <p>
          Vaccinations for diseases such as <strong>PRRS</strong>, <strong>PCV2 (Porcine Circovirus Type 2)</strong>, and 
          <strong> Mycoplasma hyopneumonia</strong> are administered between 3 to 6 weeks of age.
        </p>

        <h3>Breeding Sows</h3>
        <p>
          Breeding sows receive vaccinations for reproductive diseases, Foot-and-Mouth Disease (FMD), and African Swine Fever (ASF) before mating and during pregnancy.
        </p>
      </section>

      <section ref={sectionRefs[3]} className="health-section">
      <h2>Common Pig Diseases</h2>
<table>
  <thead>
    <tr>
      <th>Disease</th>
      <th>Major Signs</th>
      <th>Treatment</th>
      <th>Prevention</th>
      <th>Comments</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Colibacillosis (E. coli)</td>
      <td>Diarrhea (scours), sudden death</td>
      <td>Fluid therapy, antibiotics (I,O,W); warmth</td>
      <td>Improve hygiene, vaccinate sow/gilts, provide a warm clean creep area</td>
      <td>Coccidiosis may be involved</td>
    </tr>
    <tr>
      <td>Coccidiosis</td>
      <td>Diarrhea (10-21 days old)</td>
      <td>Fluid therapy, coccidiostats</td>
      <td>Improve hygiene, provide a warm clean creep area</td>
      <td>-</td>
    </tr>
    <tr>
      <td>Overlay / trauma</td>
      <td>Sudden death</td>
      <td>None</td>
      <td>Provide a warm clean creep area, check farrowing crate design</td>
      <td>-</td>
    </tr>
    <tr>
      <td>Starvation (hypo-glycaemia)</td>
      <td>Weakness, death</td>
      <td>Dextrose solutions, supplementary feeding</td>
      <td>Improve sow's milk supply</td>
      <td>Ensure gilts have adequate functional teats</td>
    </tr>
    <tr>
      <td>Stillbirths</td>
      <td>Born dead</td>
      <td>None</td>
      <td>Various methods</td>
      <td>Many causes, consult a veterinarian</td>
    </tr>
    <tr>
      <td>Miscellaneous infections</td>
      <td>Lameness, sudden death</td>
      <td>Antibiotics (I)</td>
      <td>Improve hygiene, repair flooring</td>
      <td>Infection due to bacteria, swollen joints commonly seen</td>
    </tr>
    <tr>
      <td>Exudative epidermitis (greasy pig)</td>
      <td>Skin lesions, death</td>
      <td>Antibiotics, skin protectant, vitamins</td>
      <td>Improve hygiene, provide a dry, warm, clean creep area, prevent skin abrasions</td>
      <td>-</td>
    </tr>
    <tr>
      <td>Colibacillosis (E. coli) - Post-weaning</td>
      <td>Diarrhea, sudden death</td>
      <td>Fluid therapy, antibiotics</td>
      <td>Vaccinate, improve hygiene, provide warmth for weaners, reduce stress at weaning</td>
      <td>A common and expensive problem</td>
    </tr>
    <tr>
      <td>Respiratory disease</td>
      <td>Coughing, sneezing, reduced growth rate, sometimes death</td>
      <td>Antibiotics (I,W,F), improved ventilation and environment</td>
      <td>Improve ventilation, reduce stocking density, reduce stress, antibiotics, vaccinate</td>
      <td>Enzootic pneumonia, pleuropneumonia, pasteurellosis, Glasser's disease, Streptococcus suis</td>
    </tr>
    <tr>
      <td>Swine dysentery</td>
      <td>Diarrhea with blood, reduced growth rates, death</td>
      <td>Antibiotics (I,W,F), reduced stocking density</td>
      <td>Improve hygiene, antibiotics (F)</td>
      <td>Avoid purchasing infected pigs, control rodents</td>
    </tr>
    <tr>
      <td>Proliferative enteropathy (PE) (Ileitis)</td>
      <td>Diarrhea with blood, reduced growth rate, sudden death</td>
      <td>Antibiotics (I,W,F), iron, vitamin B</td>
      <td>Antibiotics (F)</td>
      <td>Three main syndromes affecting different aged pigs</td>
    </tr>
    <tr>
      <td>Sarcoptic mange</td>
      <td>Itching, dermatitis, rubbing, scratching, reduced growth rate</td>
      <td>Miticidal sprays, pour-ons, injection and in-feed premix</td>
      <td>Strategically treat breeder pigs and weaners/growers</td>
      <td>May go unnoticed in a herd; can add to pneumonia problems; pigs of all ages can be affected</td>
    </tr>
    <tr>
      <td>Intestinal torsion</td>
      <td>Sudden death</td>
      <td>Diet manipulation</td>
      <td>None</td>
      <td>A common cause of death in some herds</td>
    </tr>
    <tr>
      <td>Gastric ulceration</td>
      <td>Loss of appetite, vomiting, death</td>
      <td>Rarely effective</td>
      <td>Manipulate diet, including feed coarseness, reduce stress, reduce disease</td>
      <td>Probably feed and disease related; can affect pigs of any age</td>
    </tr>
    <tr>
      <td>Erysipelas</td>
      <td>Arthritis, skin lesions, reduced growth rate, condemnations at slaughter</td>
      <td>Antibiotics (I)</td>
      <td>Vaccinate</td>
      <td>Most losses occur between two and six months of age</td>
    </tr>
    <tr>
      <td>Internal parasites (worms)</td>
      <td>Diarrhea, reduced growth rate, pneumonia</td>
      <td>Parasiticides (in-feed or injection)</td>
      <td>Parasiticides</td>
      <td>Roundworm, whipworm, kidney worm</td>
    </tr>
    <tr>
      <td>Exudative epidermitis (greasy pig) - Post-weaning</td>
      <td>Skin lesions, death</td>
      <td>Antibiotics, skin protectant, vitamins</td>
      <td>Improve hygiene, provide a dry, warm, clean weaner pen, prevent skin abrasions</td>
      <td>Staphylococcus hyicus infection</td>
    </tr>
  </tbody>
</table>
      </section>

      <section ref={sectionRefs[4]} className="health-section">
        <h2>Post-Weaning Diseases</h2>
        <ul>
          <li><strong>Colibacillosis (E. coli)</strong>: A common cause of diarrhea in newly weaned pigs.</li>
          <li><strong>Pneumonia</strong>: Causes coughing, weight loss, and slow growth.</li>
          <li><strong>Proliferative Enteropathy (Ileitis)</strong>: Leads to bloody diarrhea and stunted growth.</li>
          <li><strong>Sarcoptic Mange</strong>: Causes itching, scratching, and reduced weight gain.</li>
        </ul>
      </section>

      <section ref={sectionRefs[5]} className="health-section">
        <h2>Porcine Reproductive & Respiratory Syndrome (PRRS)</h2>
        <p>
          Also known as <strong>Blue Ear Disease</strong>, PRRS is a viral disease that affects reproduction and respiratory health.
        </p>
        <ul>
          <li>Abortions and reproductive failure</li>
          <li>Increased returns to heat</li>
          <li>Pneumonia and respiratory distress</li>
          <li>Stunted growth and weight loss</li>
          <li>Coughing and poor appetite</li>
        </ul>
      </section>

      <section ref={sectionRefs[6]} className="health-section">
        <h2>Classical Swine Fever (CSF) - Hog Cholera (HC)</h2>
        <p>
          CSF, also known as Hog Cholera, is a highly contagious viral disease affecting only pigs. It is one of the most economically devastating swine diseases worldwide.
        </p>
        <h3>Key Facts</h3>
        <ul>
          <li>Affects only pigs</li>
          <li>Highly virulent strains cause rapid and severe illness</li>
          <li>Chronic forms exist with prolonged symptoms</li>
        </ul>
        <h3>Prevention and Control</h3>
        <ul>
          <li>Vaccination</li>
          <li>National eradication programs</li>
          <li>Strict biosecurity measures on farms</li>
        </ul>
      </section>

      <footer>
        <p>
          Understanding pig health and disease management is essential for reducing mortality, improving production, and ensuring the success of a pig farm.
          Regular vaccinations, hygiene maintenance, and disease monitoring are key to keeping pigs healthy.
        </p>
      </footer>
      <button className="scroll-up-button" onClick={scrollToTop}>
                Scroll to Top
            </button>
    </div>
  );
};

export default PigHealth;

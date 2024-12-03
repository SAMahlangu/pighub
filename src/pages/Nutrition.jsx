import React from 'react';
import './Nutrition.css'; // Ensure you import your CSS file
import nutritionImage from '../assets/nutrition.png'; // Add the path to your corrugated iron image

const PoultryFeedNutrition = () => {
    return (
        <div className="poultry-feed-container">
            <h1 className="poultry-feed-title">Poultry Feed and Nutrition Requirements</h1>
            <div className="broiler-images">   
    <div className="image-container">
        <img src={nutritionImage} alt="Concrete Mason Structure" className="broiler-structure-image" />
    </div>
</div>

            <div className="poultry-feed-section">
                <h2>The Basics of Chicken Nutrition</h2>
                <ul className="poultry-feed-list">
                    <li><strong>Protein:</strong> Essential for muscle growth, feather development, and egg production. Ensure the feed contains about 16-20% protein, especially for laying hens.</li>
                    <li><strong>Carbohydrates:</strong> Provide energy for daily activities. Corn and grains are excellent sources, but a balanced feed is necessary to prevent obesity and maintain energy levels.</li>
                    <li><strong>Fats:</strong> Important for nutrient absorption and energy storage. Include healthy fats like sunflower seeds or flaxseeds to promote glossy feathers and overall health.</li>
                    <li><strong>Vitamins and Minerals:</strong> Crucial for various bodily functions, including tissue formation, enzyme activity, and blood cell production. Minerals such as calcium, phosphorus, chlorine, sodium, magnesium, and potassium are vital for forming eggshells and bones. Essentially, vitamins are categorized into two respective groups: fat-soluble and water-soluble.</li>
                </ul>
            </div>

            <div className="poultry-feed-section">
                <h2>Feed and Nutrition</h2>
                <p>Now that one has a basic understanding of what crucial nutrition is and how they affect the breeding of the birds’ anatomy and physiological aspect, we will look at the nutritional value of each nutrient and its composition to the needs and requirements of the birds.</p>
                <p>This section will discuss the nutrition values required by the bird, reflecting changes in its growth and size over the weeks of its development. We will examine the different nutritional requirements for each growth stage and how to feed accordingly.</p>
                <p>Feed and Nutrition Requirement (Composition) for the following:</p>
                <ul className="poultry-feed-list">
                    <li>Starter feed for day-old chicks</li>
                    <li>Grower feed for broiler chicks</li>
                    <li>Finisher feed for broiler birds</li>
                    <li>Maintenance feed for broiler</li>
                </ul>
            </div>

            <div className="poultry-feed-section">
                <h2>Starter Feed for Day-Old Broiler Chicks</h2>
                <ol className="poultry-feed-list">
                    <li>Fulfills the nutritional needs of broiler chicks from day one until they reach 18 days old.</li>
                    <li>Designed to be highly palatable, encouraging feed intake and supporting body development.</li>
                    <li>Includes highly digestible protein to enhance body mass growth.</li>
                    <li>Contains standard growth promoters and coccidiostat to optimize production and profitability.</li>
                </ol>
                <h3>Compositions:</h3>
                <table className="poultry-feed-table">
                    <thead>
                        <tr>
                            <th>Nutrients</th>
                            <th>Specification (g/kg)</th>
                            <th>Min/Max</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Protein</td>
                            <td>200</td>
                            <td>Min</td>
                        </tr>
                        <tr>
                            <td>Lysine</td>
                            <td>12</td>
                            <td>Min</td>
                        </tr>
                        <tr>
                            <td>Fat</td>
                            <td>25</td>
                            <td>Min</td>
                        </tr>
                        <tr>
                            <td>Fibre</td>
                            <td>50</td>
                            <td>Max</td>
                        </tr>
                        <tr>
                            <td>Calcium</td>
                            <td>9-12</td>
                            <td>Min to Max</td>
                        </tr>
                        <tr>
                            <td>Phosphorus</td>
                            <td>6</td>
                            <td>Min</td>
                        </tr>
                    </tbody>
                </table>
                <h3>Feeding Instructions:</h3>
                <ul className="poultry-feed-list">
                    <li>Two-Phase Feeding Program: Provide unlimited feed from day one until about 20 days old (1000g per bird).</li>
                    <li>Three-Phase Feeding Program: Provide unlimited feed from day one until about 18 days old (800g per bird), then switch to Grower.</li>
                </ul>
                <h3>General Information:</h3>
                <ul className="poultry-feed-list">
                    <li>The feed is made with easily digestible ingredients to ensure good digestion. It includes a growth promoter and a coccidiostat as standard.</li>
                    <li>Contains at least 5% genetically modified organisms (GMOs).</li>
                </ul>
                <p><strong>NB!</strong> Always ensure fresh feed and water are available.</p>
            </div>

            <div className="poultry-feed-section">
                <h2>Grower Feed for Broiler Chicks (18 to 28 Days Old)</h2>
                <ol className="poultry-feed-list">
                    <li>Satisfies the nutritional needs of broiler chicks during their growth phase.</li>
                    <li>Formulated to be highly palatable, promoting feed intake and body development.</li>
                    <li>Includes easily digestible protein to enhance body mass growth.</li>
                    <li>Contains standard growth promoters and coccidiostat to boost production and profitability.</li>
                </ol>
                <h3>Compositions:</h3>
                <table className="poultry-feed-table">
                    <thead>
                        <tr>
                            <th>Nutrients</th>
                            <th>Specification (g/kg)</th>
                            <th>Min/Max</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Protein</td>
                            <td>180</td>
                            <td>Min</td>
                        </tr>
                        <tr>
                            <td>Lysine</td>
                            <td>10.5</td>
                            <td>Min</td>
                        </tr>
                        <tr>
                            <td>Fat</td>
                            <td>25</td>
                            <td>Min</td>
                        </tr>
                        <tr>
                            <td>Fibre</td>
                            <td>60</td>
                            <td>Max</td>
                        </tr>
                        <tr>
                            <td>Calcium</td>
                            <td>7-12</td>
                            <td>Min to Max</td>
                        </tr>
                        <tr>
                            <td>Phosphorus</td>
                            <td>5</td>
                            <td>Min</td>
                        </tr>
                    </tbody>
                </table>
                <h3>Feeding Instructions:</h3>
                <ul className="poultry-feed-list">
                    <li>Two-Phase Feeding Program: Provide unlimited feed starting at 20 days old. Feed approximately 2675g per bird until around 40 days old.</li>
                    <li>Three-Phase Feeding Program: Provide unlimited feed starting at 18 days old. Feed approximately 1575g per bird until around 32 days old, then switch to Finisher.</li>
                </ul>
                <p><strong>NB!</strong> Always ensure fresh feed and water are available.</p>
                <h3>General Information:</h3>
                <ul className="poultry-feed-list">
                    <li>The broiler feed standardly includes a growth promoter and a coccidiostat.</li>
                    <li>Contains a minimum of 5% genetically modified organisms (GMOs).</li>
                </ul>
            </div>

            <div className="poultry-feed-section">
                <h2>Finisher Feed for Broiler Birds (28 Days to Slaughter)</h2>
                <ol className="poultry-feed-list">
                    <li>Satisfies the nutritional needs of broiler birds during the finishing stage.</li>
                    <li>Formulated to be highly palatable, encouraging feed intake and body development.</li>
                    <li>Includes easily digestible protein to enhance body mass growth.</li>
                    <li>Contains standard growth promoters and coccidiostat to maximize production and profitability.</li>
                </ol>
                <h3>Compositions:</h3>
                <table className="poultry-feed-table">
                    <thead>
                        <tr>
                            <th>Nutrients</th>
                            <th>Specification (g/kg)</th>
                            <th>Min/Max</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Protein</td>
                            <td>160</td>
                            <td>Min</td>
                        </tr>
                        <tr>
                            <td>Lysine</td>
                            <td>9.5</td>
                            <td>Min</td>
                        </tr>
                        <tr>
                            <td>Fat</td>
                            <td>25</td>
                            <td>Min</td>
                        </tr>
                        <tr>
                            <td>Fibre</td>
                            <td>80</td>
                            <td>Max</td>
                        </tr>
                        <tr>
                            <td>Calcium</td>
                            <td>6-10</td>
                            <td>Min to Max</td>
                        </tr>
                        <tr>
                            <td>Phosphorus</td>
                            <td>4.5</td>
                            <td>Min</td>
                        </tr>
                    </tbody>
                </table>
                <h3>Feeding Instructions:</h3>
                <ul className="poultry-feed-list">
                    <li>Two-Phase Feeding Program: Provide unlimited feed starting at 40 days old. Feed approximately 1200g per bird until slaughter.</li>
                    <li>Three-Phase Feeding Program: Provide unlimited feed starting at 32 days old. Feed approximately 1100g per bird until slaughter.</li>
                </ul>
                <p><strong>NB!</strong> Always ensure fresh feed and water are available.</p>
                <h3>General Information:</h3>
                <ul className="poultry-feed-list">
                    <li>The broiler feed standardly includes a growth promoter and a coccidiostat.</li>
                    <li>Contains a minimum of 5% genetically modified organisms (GMOs).</li>
                </ul>
            </div>

            <div className="poultry-feed-section">
                <h2>Maintenance Feed for Broilers</h2>
                <h3>General Information:</h3>
                <ul className="poultry-feed-list">
                    <li>Maintenance feed is provided after slaughter or for grown birds not intended for breeding. It has a balanced composition suitable for adult birds.</li>
                </ul>
                <h3>Compositions:</h3>
                <table className="poultry-feed-table">
                    <thead>
                        <tr>
                            <th>Nutrients</th>
                            <th>Specification (g/kg)</th>
                            <th>Min/Max</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Protein</td>
                            <td>130</td>
                            <td>Min</td>
                        </tr>
                        <tr>
                            <td>Lysine</td>
                            <td>7</td>
                            <td>Min</td>
                        </tr>
                        <tr>
                            <td>Fat</td>
                            <td>20</td>
                            <td>Min</td>
                        </tr>
                        <tr>
                            <td>Fibre</td>
                            <td>90</td>
                            <td>Max</td>
                        </tr>
                        <tr>
                            <td>Calcium</td>
                            <td>5-10</td>
                            <td>Min to Max</td>
                        </tr>
                        <tr>
                            <td>Phosphorus</td>
                            <td>4</td>
                            <td>Min</td>
                        </tr>
                    </tbody>
                </table>
                <h3>Feeding Instructions:</h3>
                <ul className="poultry-feed-list">
                    <li>Provide unlimited feed for maintenance with a focus on maintaining weight without promoting excessive growth.</li>
                </ul>
                <p><strong>NB!</strong> Always ensure fresh feed and water are available.</p>
            </div>
        </div>
    );
}

export default PoultryFeedNutrition;

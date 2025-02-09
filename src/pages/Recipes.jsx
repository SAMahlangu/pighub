import React, { useRef } from 'react';
import './Recipes.css';
import porkMeatDiagram from '../assets/pork_meat_diagram.png';
import porkRibsImg from '../assets/pork_ribs.png';
import porkStewImg from '../assets/pork_stew.png';
import bbqPorkImg from '../assets/bbq_pork.png';
import roastedPigImg from '../assets/roasted_pig.png';

function PorkRecipes() {
    const recipeRefs = Array.from({ length: 7 }, () => useRef(null));

    const scrollToSection = (ref) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const recipes = [
        {
            title: 'Pork Meat Processing & Value Addition',
            img: porkMeatDiagram,
            content: [
                'Enhancing profitability in pork processing involves transforming raw pork into refined products.',
                'Techniques like Modified Atmosphere Packaging (MAP) extend shelf life and maintain meat quality.',
                'Common fresh pork cuts include pork chops, ribs, and tenderloins.'
            ]
        },
        {
            title: 'Examples of Value Addition in Pig Processing',
            content: [
                '**Fresh Meat:** Pork cuts like chops, ribs, and tenderloins are sold fresh. Using **Modified Atmosphere Packaging (MAP)** with nitrogen and carbon dioxide helps maintain color and reduce microbial growth.',
                '**Curing and Smoking:** Cuts like ham, bacon, and sausages can be cured using salt, sugar, and nitrates before being smoked. A locally built **smoking chamber** helps control costs and ensures high-quality results.',
                '**Sausages:** Ground pork mixed with spices, fat, and preservatives is stuffed into casings. Types include fresh (Italian sausages), cooked (bologna, frankfurters), and smoked (kielbasa, Andouille).',
                '**Rendering:** Animal by-products like fat and bones are converted into **lard, meat meal, and tallow** used in soaps, candles, and biodiesel production.',
                '**Pork By-products:** Intestines, liver, kidneys, and even pork skin can be used in food products, gelatin, animal feed, and more.',
                '**Packaging & Marketing:** Branding, social media, food festivals, and attractive **packaging designs** help add value and increase product sales.'
            ]
        },
        {
            title: 'Delicious Braised Pork Ribs Recipe',
            img: porkRibsImg,
            ingredients: [
                '1 kg pork ribs, cut into small pieces',  
                '2 tbsp soy sauce',  
                '1 tbsp oyster sauce',  
                '1 tbsp hoisin sauce',  
                '1 tbsp sugar or honey (for caramelization)',  
                '1/2 tsp black pepper',  
                '2 cloves garlic, minced',  
                '2 tbsp cooking oil',  
                '1/4 cup water'
            ],
            instructions: [
                'Marinate the pork ribs with soy sauce, oyster sauce, hoisin sauce, sugar, and black pepper. Let it marinate for at least 30 minutes.',
                'Heat oil in a large pan or wok over medium heat. Add the minced garlic and sauté until fragrant.',
                'Add the marinated ribs into the pan and sear them until they are browned on all sides.',
                'Add water to the pan, lower the heat, and let it simmer. Stir occasionally until the sauce thickens and the ribs are well-coated in a caramelized glaze.',
                'Once done, remove the ribs from the pan and serve hot with rice.'
            ]
        },
        {
            title: 'Pork Stew Recipe',
            img: porkStewImg,
            ingredients: [
                '1kg pork tenderloin (cubed)',
                '1 tsp salt',
                '½ tsp black pepper',
                '2 tbsp olive oil',
                '1 large onion (chopped)',
                '3 garlic cloves (minced)',
                '2 tbsp flour',
                '4 cups chicken/veggie broth',
                '14.5 oz diced tomatoes',
                '4 russet potatoes (chunked)',
                '3 large carrots (sliced)',
                '1 tsp dried thyme',
                '1 tsp dried rosemary',
                '2 tbsp Worcestershire sauce',
                '1 bay leaf',
                'Fresh parsley (for garnish)'
            ],
            instructions: [
                'Heat olive oil in a pot over medium-high heat.',
                'Season pork with salt and pepper, then brown all sides.',
                'Add onion and garlic, cook until fragrant.',
                'Stir in flour, followed by broth to deglaze the pot.',
                'Add remaining ingredients and mix well.',
                'Simmer for 1.5-2 hours until pork is tender.',
                'Garnish with parsley and serve with rice or bread.'
            ]
        },
        {
            title: 'BBQ Pork Chops Recipe',
            img: bbqPorkImg,
            ingredients: [
                '8 - 10 pork chops',
                '2 tbsp garlic & onion powder',
                '1/2 cup tomato sauce',
                '4 tbsp brown sugar',
                '1/4 cup soy sauce',
                '2 tbsp apple cider vinegar',
                '2 tbsp olive oil',
                '1/4 cup Worcestershire sauce',
                '4 garlic cloves (minced)'
            ],
            instructions: [
                'Season pork chops with garlic and onion powder.',
                'Mix marinade ingredients and reserve 1/2 cup for basting.',
                'Marinate chops for at least 3 hours (or overnight for best results).',
                'Grill over medium heat, basting regularly, until fully cooked.'
            ]
        },
        {
            title: 'Roasted Whole Pig',
            img: roastedPigImg,
            ingredients: [
                'Whole pig, cleaned and prepared',
                'Salt',
                'Pepper',
                'Garlic powder',
                'Onion powder',
                'Lemon juice'
            ],
            instructions: [
                'Rub the pig with salt, pepper, garlic powder, onion powder, and lemon juice.',
                'Roast over hot charcoal or wood fire, basting regularly with drippings.',
                'Maintain even heat and turn occasionally for uniform cooking.',
                'Serve with dipping sauces like vinegar with chili and garlic.'
            ]
        }
    ];
    

    return (
        <div className="recipes-container">
            <h1>Pork Processing & Recipes</h1>
            <p>Discover value addition in pork processing, including smoking, sausage making, and delicious pork recipes.</p>
            <div className="recipe-buttons">
                {recipes.map((recipe, index) => (
                    <button key={index} onClick={() => scrollToSection(recipeRefs[index])}>
                        {recipe.title}
                    </button>
                ))}
            </div>
            <div className="recipe-content">
                {recipes.map((recipe, index) => (
                    <div key={index} ref={recipeRefs[index]} className="recipe-section">
                        <h2>{recipe.title}</h2>
                        {recipe.img && <img src={recipe.img} alt={recipe.title} className="recipe-img" />}
                        {recipe.content && recipe.content.map((text, i) => <p key={i}>{text}</p>)}
                        {recipe.ingredients && (
                            <>
                                <h3>Ingredients</h3>
                                <ul>
                                    {recipe.ingredients.map((item, i) => <li key={i}>{item}</li>)}
                                </ul>
                            </>
                        )}
                        {recipe.instructions && (
                            <>
                                <h3>Instructions</h3>
                                <ol>
                                    {recipe.instructions.map((step, i) => <li key={i}>{step}</li>)}
                                </ol>
                            </>
                        )}
                    </div>
                ))}
            </div>
            <div className="bottom-buttons">
                <button onClick={scrollToTop}>Back to Top</button>
            </div>
        </div>
    );
}

export default PorkRecipes;

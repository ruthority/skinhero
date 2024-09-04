import React from 'react';
import { useLocation } from 'react-router-dom';
import '/src/index.css';


const products = {
    DrySkin: {
        cleansers: [
            {
                name: 'Hydrating Facial Cleanser',
                description: 'A gentle cleanser that removes makeup and impurities without stripping the skin.',
                reviews: 9392,
                brand: 'CeraVe',
            },
            {
                name: 'Cream to Foam Cleanser',
                description: 'Transforms from cream to foam to cleanse without drying out the skin.',
                reviews: 3200,
                brand: 'Neutrogena',
            },
        ],
        treatments: [
            {
                name: 'Moisturizing Cream',
                description: 'An ultra-hydrating formula that helps repair the skin barrier.',
                reviews: 7500,
                brand: 'Eucerin',
            },
            {
                name: 'Hydration Booster',
                description: 'A serum that provides an extra boost of hydration for dry skin.',
                reviews: 2800,
                brand: 'The Ordinary',
            },
        ],
        sunProtection: [
            {
                name: 'Hydrating Mineral Sunscreen SPF 30',
                description: 'A sheer tint sunscreen that hydrates while providing sun protection.',
                reviews: 531,
                brand: 'CeraVe',
            },
        ],
    },
    OilySkin: {
        cleansers: [
            {
                name: 'Foaming Facial Cleanser',
                description: 'A lightweight foaming cleanser that removes oil and impurities.',
                reviews: 4200,
                brand: 'La Roche-Posay',
            },
            {
                name: 'Gel Cleanser',
                description: 'A gel-based cleanser that targets oily skin effectively.',
                reviews: 4000,
                brand: 'Clinique',
            },
        ],
        treatments: [
            {
                name: 'Salicylic Acid Treatment',
                description: 'Helps to control excess oil and treat acne breakouts.',
                reviews: 5400,
                brand: 'Neutrogena',
            },
            {
                name: 'Benzoyl Peroxide Gel',
                description: 'A powerful gel that targets acne-causing bacteria.',
                reviews: 6500,
                brand: 'Clean & Clear',
            },
        ],
        sunProtection: [
            {
                name: 'Ultra-Light Gel Moisturizer',
                description: 'Lightweight gel that hydrates and protects the skin from UV rays.',
                reviews: 736,
                brand: 'CeraVe',
            },
            {
                name: 'Oil-Free Sunscreen SPF 30',
                description: 'Specially formulated to control shine while providing sun protection.',
                reviews: 830,
                brand: 'Neutrogena',
            },
        ],
    },
    CombinationSkin: {
        cleansers: [
            {
                name: 'Non-Foaming Cleanser',
                description: 'A balanced cleanser suitable for combination skin that doesn’t over-dry.',
                reviews: 1500,
                brand: 'First Aid Beauty',
            },
        ],
        treatments: [
            {
                name: 'Hydrating Serum',
                description: 'A serum that hydrates dry areas while controlling oil.',
                reviews: 1200,
                brand: 'Hylamide',
            },
        ],
        sunProtection: [
            {
                name: 'Broad Spectrum SPF 30 Sunscreen',
                description: 'A sunscreen that adapts to both oily and dry areas.',
                reviews: 1500,
                brand: 'Aveeno',
            },
        ],
    },
    NormalSkin: {
        cleansers: [
            {
                name: 'Gentle Foaming Cleanser',
                description: 'A mild foaming cleanser that works for all skin types.',
                reviews: 2450,
                brand: 'Olay',
            },
        ],
        treatments: [
            {
                name: 'Antioxidant Serum',
                description: 'A lightweight serum that protects and hydrates normal skin.',
                reviews: 1900,
                brand: 'SkinCeuticals',
            },
        ],
        sunProtection: [
            {
                name: 'Hydrating Broad Spectrum SPF 50',
                description: 'A hydrating sunscreen for daily use that suits all skin types.',
                reviews: 800,
                brand: 'Neutrogena',
            },
        ],
    },
};

const hyperpigmentationTypes = {
    'melasma': {
        name: 'Melasma',
        description: 'Brown or gray-brown patches on the face.',
        treatments: [
            {
                name: 'Hydroquinone Cream',
                description: 'A skin lightening agent used to treat melasma.',
                brand: 'Obagi',
                reviews: 700,
            },
            {
                name: 'Vitamin C Serum',
                description: 'An antioxidant that can help brighten the skin and reduce pigmentation.',
                brand: 'Skinceuticals',
                reviews: 900,
            },
        ],
    },
    'post-inflammatory': {
        name: 'Post Inflammatory Hyperpigmentation',
        description: 'Darkening of the skin occurring after inflammation or injury.',
        treatments: [
            {
                name: 'Niacinamide Cream',
                description: 'Helps to reduce pigmentation and improve skin barrier function.',
                brand: 'The Ordinary',
                reviews: 1500,
            },
            {
                name: 'Glycolic Acid Toner',
                description: 'Exfoliates the skin to promote new cell turnover and reduce dark spots.',
                brand: 'Pixi',
                reviews: 2000,
            },
        ],
    },
};

const acneTypes = {
    'whiteheads': {
        name: 'Whiteheads',
        description: 'Closed clogged pores appearing as small white bumps.',
        treatments: [
            {
                name: 'Retinoid Cream',
                description: 'Promotes cell turnover to prevent clogged pores.',
                brand: 'Differin',
                reviews: 1300,
            },
        ],
    },
    'blackheads': {
        name: 'Blackheads',
        description: 'Open clogged pores appearing as small black spots.',
        treatments: [
            {
                name: 'Charcoal Face Mask',
                description: 'Helps unclog pores and control oil.',
                brand: 'Origins',
                reviews: 1100,
            },
        ],
    },
    'papules': {
        name: 'Papules',
        description: 'Small red bumps on the skin that can be tender to the touch.',
        treatments: [
            {
                name: 'Benzoyl Peroxide Wash',
                description: 'Clears acne-causing bacteria and reduces inflammation.',
                brand: 'PanOxyl',
                reviews: 1400,
            },
        ],
    },
    'pustules': {
        name: 'Pustules',
        description: 'Red bumps filled with pus.',
        treatments: [
            {
                name: 'Salicylic Acid Spot Treatment',
                description: 'Helps reduce inflamed breakouts quickly.',
                brand: 'Mario Badescu',
                reviews: 1800,
            },
        ],
    },
    'nodules': {
        name: 'Nodules',
        description: 'Large, painful lumps that form deep within the skin.',
        treatments: [
            {
                name: 'Clindamycin Gel',
                description: 'Topical antibiotic that helps control severe acne.',
                brand: 'Clindagel',
                reviews: 1300,
            },
        ],
    },
    'cystic': {
        name: 'Cystic Acne',
        description: 'Severe acne characterized by painful cysts.',
        treatments: [
            {
                name: 'Oral Retinoids',
                description: 'A powerful oral medication for treating cystic acne.',
                brand: 'Accutane',
                reviews: 1250,
            },
        ],
    },
};

const skinTypes = {
    'Dry Skin': {
        description: 'Your skin lacks moisture and feels tight.',
        productRecommendations: products.DrySkin,
    },
    'Oily Skin': {
        description: 'Your skin produces excess oil and may appear shiny.',
        productRecommendations: products.OilySkin,
    },
    'Combination Skin': {
        description: 'Your skin has both oily and dry areas.',
        productRecommendations: products.CombinationSkin,
    },
    'Normal Skin': {
        description: 'Your skin is well-balanced and feels comfortable.',
        productRecommendations: products.NormalSkin,
    },
};

const ProductCard = ({ product }) => (
    <div className="product-card">
        <h5>{product.name} by {product.brand}</h5>
        <p>{product.description}</p>
        <p>{product.reviews} reviews</p>
    </div>
);

const ProductRecommendation = () => {
    const location = useLocation();
    const { selectedSkinType, selectedAcneType, selectedHyperpigmentation } = location.state || {};

    const skinData = skinTypes[selectedSkinType] || {};
    const acneData = acneTypes[selectedAcneType] || {};
    const hyperData = hyperpigmentationTypes[selectedHyperpigmentation] || {};


    return (
        <div className="product-recommendation-container">
            <h2>Your Personalized Product Recommendations</h2>

            {selectedSkinType && (
                <div className="skin-info">
                    <h3>Skin Type: {selectedSkinType}</h3>
                    <p>{skinData.description}</p>
                    <h4>Product Recommendations:</h4>
                </div>
            )}

            {/* Cleansers */}
            <div className="products">
                <h4>Cleansers</h4>
                {skinData.productRecommendations?.cleansers?.map((product, index) => (
                    <ProductCard key={index} product={product} />
                )) || <p>No cleansers recommended.</p>}
            </div>

            {/* Treatments */}
            <div className="products">
                <h4>Treatments</h4>
                {skinData.productRecommendations?.treatments?.map((product, index) => (
                    <ProductCard key={index} product={product} />
                )) || <p>No treatments recommended.</p>}
            </div>

            {/* Sun Protection */}
            <div className="products">
                <h4>Sun Protection</h4>
                {skinData.productRecommendations?.sunProtection?.map((product, index) => (
                    <ProductCard key={index} product={product} />
                )) || <p>No sun protection recommended.</p>}
            </div>

            <div className="condition-info">
                {selectedAcneType && (
                    <>
                        <h3>Acne Type: {acneData.name}</h3>
                        <p>{acneData.description}</p>
                    </>
                )}
                {selectedHyperpigmentation && (
                    <>
                        <h3>Hyperpigmentation Type: {hyperData.name}</h3>
                        <p>{hyperData.description}</p>
                    </>
                )}
                {(!selectedAcneType && !selectedHyperpigmentation) && (
                    <p>No specific acne or hyperpigmentation types selected.</p>
                )}
            </div>
        </div>
    );
};

export default ProductRecommendation;  
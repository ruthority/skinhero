import React from 'react';
import { useLocation } from 'react-router-dom';
import '/src/index.css';

const products = {
    DrySkin: {
        cleanser: [
            {
                name: 'Hydrating Facial Cleanser',
                description: 'A gentle cleanser that removes makeup and impurities without stripping the skin.',
                brand: 'CeraVe',
            },
        ],
        serum: [
            {
                name: 'Hydration Booster',
                description: 'A serum that provides an extra boost of hydration for dry skin.',
                brand: 'The Ordinary',
            },
        ],
        moisturizer: [
            {
                name: 'Moisturizing Cream',
                description: 'An ultra-hydrating formula that helps repair the skin barrier.',
                brand: 'Eucerin',
            },
        ],
        sunProtection: [
            {
                name: 'Hydrating Mineral Sunscreen SPF 30',
                description: 'A sheer tint sunscreen that hydrates while providing sun protection.',
                brand: 'CeraVe',
            },
        ],
    },
    OilySkin: {
        cleanser: [
            {
                name: 'Foaming Facial Cleanser',
                description: 'A lightweight foaming cleanser that removes oil and impurities.',
                brand: 'La Roche-Posay',
            },
        ],
        serum: [
            {
                name: 'Salicylic Acid Serum',
                description: 'Helps to control excess oil and treat acne breakouts.',
                brand: 'Neutrogena',
            },
        ],
        moisturizer: [
            {
                name: 'Ultra-Light Gel Moisturizer',
                description: 'Lightweight gel that hydrates and controls oil.',
                brand: 'CeraVe',
            },
        ],
        sunProtection: [
            {
                name: 'Oil-Free Sunscreen SPF 30',
                description: 'Specially formulated to control shine while providing sun protection.',
                brand: 'Neutrogena',
            },
        ],
    },
    CombinationSkin: {
        cleanser: [
            {
                name: 'Non-Foaming Cleanser',
                description: 'A balanced cleanser suitable for combination skin that doesn’t over-dry.',
                brand: 'First Aid Beauty',
            },
        ],
        serum: [
            {
                name: 'Hydrating Serum',
                description: 'A serum that hydrates dry areas while controlling oil.',
                brand: 'Hylamide',
            },
        ],
        moisturizer: [
            {
                name: 'Balanced Moisturizer',
                description: 'Moisturizer that hydrates without making skin greasy.',
                brand: 'CeraVe',
            },
        ],
        sunProtection: [
            {
                name: 'Broad Spectrum SPF 30 Sunscreen',
                description: 'A sunscreen that adapts to both oily and dry areas.',
                brand: 'Aveeno',
            },
        ],
    },
    NormalSkin: {
        cleanser: [
            {
                name: 'Gentle Foaming Cleanser',
                description: 'A mild foaming cleanser that works for all skin types.',
                brand: 'Olay',
            },
        ],
        serum: [
            {
                name: 'Antioxidant Serum',
                description: 'A lightweight serum that protects and hydrates normal skin.',
                brand: 'SkinCeuticals',
            },
        ],
        moisturizer: [
            {
                name: 'Daily Moisturizer',
                description: 'A versatile moisturizer for normal skin.',
                brand: 'Neutrogena',
            },
        ],
        sunProtection: [
            {
                name: 'Hydrating Broad Spectrum SPF 50',
                description: 'A hydrating sunscreen for daily use that suits all skin types.',
                brand: 'Neutrogena',
            },
        ],
    },
    SensitiveSkin: {
        cleanser: [
            {
                name: 'Soothing Gel Cleanser',
                description: 'A gentle, fragrance-free cleanser that calms and soothes sensitive skin.',
                brand: 'Cetaphil',
            },
        ],
        serum: [
            {
                name: 'Calming Anti-Redness Serum',
                description: 'A serum designed to reduce redness and irritation, perfect for sensitive skin.',
                brand: 'La Roche-Posay',
            },
        ],
        moisturizer: [
            {
                name: 'Ultra Repair Cream',
                description: 'A rich, soothing moisturizer that provides intense hydration for sensitive skin.',
                brand: 'First Aid Beauty',
            },
        ],
        sunProtection: [
            {
                name: 'Mineral Sunscreen SPF 30',
                description: 'A gentle, mineral-based sunscreen that provides broad-spectrum protection without irritating sensitive skin.',
                brand: 'Aveeno',
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
            },
        ],
    },
};


const ProductCard = ({ product }) => (
    <div className="product-card">
        <h5>{product.name} by {product.brand}</h5>
        <p>{product.description}</p>
    </div>
);

const determineSkinType = (responses) => {
    const { skinFeel, tissueResidue, itchyInflamed, cheeksTight } = responses;

    if (skinFeel === 'tight' && tissueResidue === 'no' && itchyInflamed === 'no' && cheeksTight === 'yes') {
        return 'DrySkin';
    } else if (skinFeel === 'tight' && tissueResidue === 'no' && itchyInflamed === 'yes' && cheeksTight === 'no') {
        return 'SensitiveSkin';
    } else if (skinFeel === 'comfortable' && tissueResidue === 'yes' && itchyInflamed === 'no' && cheeksTight === 'yes') {
        return 'CombinationSkin';
    } else if (skinFeel === 'comfortable' && tissueResidue === 'no' && itchyInflamed === 'no' && cheeksTight === 'no') {
        return 'NormalSkin';
    } else if (skinFeel === 'comfortable' && tissueResidue === 'yes' && itchyInflamed === 'no' && cheeksTight === 'no') {
        return 'OilySkin';

    } else {
        return 'UnknownSkinType';
    }
};

const ProductRecommendation = () => {
    const location = useLocation();
    const { selectedAcne, selectedHyperpigmentation, skinTypeResponses } = location.state || {};

    const selectedSkinType = determineSkinType(skinTypeResponses);
    const skinData = products[selectedSkinType] || {};

    const acneTypesArray = Array.isArray(selectedAcne) ? selectedAcne : [selectedAcne];
    const acneTreatmentsByType = acneTypesArray.map(type => ({
        type,
        treatments: acneTypes[type]?.treatments || []
    }));

    const hyperpigmentationTypesArray = Array.isArray(selectedHyperpigmentation) ? selectedHyperpigmentation : [selectedHyperpigmentation];
    const hyperDataArray = hyperpigmentationTypesArray.map(type => hyperpigmentationTypes[type]).filter(Boolean);

    return (
        <div className="product-recommendation-container">
            <h2 className='product-recommendation-header'>Product Recommendations</h2>
            <p>Note: Check with a consultant for further diagnoses or treatment.</p>

            {selectedSkinType && (
                <div className="skin-info">
                    <h3>Skin Type: {selectedSkinType}</h3>
                    <h4>Product Recommendations:</h4>
                </div>
            )}

            {/* Cleansers */}
            <div className="product-category">
                <h4>Cleanser</h4>
                <div className="products">
                    {skinData.cleanser?.map((product, index) => (
                        <ProductCard key={index} product={product} />
                    )) || <p>No cleansers recommended.</p>}
                </div>
            </div>

            {/* Serums */}
            <div className="product-category">
                <h4>Serum</h4>
                <div className="products">
                    {skinData.serum?.map((product, index) => (
                        <ProductCard key={index} product={product} />
                    )) || <p>No serums recommended.</p>}
                </div>
            </div>

            {/* Moisturizers */}
            <div className="product-category">
                <h4>Moisturizer</h4>
                <div className="products">
                    {skinData.moisturizer?.map((product, index) => (
                        <ProductCard key={index} product={product} />
                    )) || <p>No moisturizers recommended.</p>}
                </div>
            </div>

            {/* Sun Protection */}
            <div className="product-category">
                <h4>Sun Protection</h4>
                <div className="products">
                    {skinData.sunProtection?.map((product, index) => (
                        <ProductCard key={index} product={product} />
                    )) || <p>No sun protection recommended.</p>}
                </div>
            </div>

            <div className="condition-info">
                {acneTreatmentsByType.length > 0 && (
                    <>
                        <h3>Acne Treatments</h3>
                        {acneTreatmentsByType.map(({ type, treatments }, index) => (
                            <div key={index} className="acne-treatments-group">
                                <h4>{acneTypes[type]?.name || type}</h4>
                                <div className="products">
                                    {treatments.map((product, index) => (
                                        <ProductCard key={index} product={product} />
                                    )) || <p>No treatments recommended for {acneTypes[type]?.name || type}.</p>}
                                </div>
                            </div>
                        ))}
                    </>
                )}
                {hyperDataArray.length > 0 && (
                    <>
                        <h3>Hyperpigmentation Treatments</h3>
                        {hyperDataArray.map((hyperData, index) => (
                            <div key={index} className="hyperpigmentation-group">
                                <h4>{hyperData.name}</h4>
                                <div className="products">
                                    {hyperData.treatments?.map((product, index) => (
                                        <ProductCard key={index} product={product} />
                                    )) || <p>No treatments recommended for {hyperData.name}.</p>}
                                </div>
                            </div>
                        ))}
                    </>
                )}
                {(!acneTreatmentsByType.length && !hyperDataArray.length) && (
                    <p>No specific acne or hyperpigmentation types selected.</p>
                )}
            </div>
        </div>
    );
};

export default ProductRecommendation;
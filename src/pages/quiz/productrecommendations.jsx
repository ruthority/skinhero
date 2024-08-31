import React from 'react';
import { productRecommendations } from '/src/pages/quiz/productrecommendation.jsx';
const ProductRecommendations = ({ skinType, selectedAcne, selectedHyperpigmentation }) => {
    const recommendedProducts = productRecommendations[skinType]?.products || [];

    return (
        <div className="product-recommendations">
            <h2>Recommended Products</h2>
            {recommendedProducts.length > 0 ? (
                <ul>
                    {recommendedProducts.map((product, index) => (
                        <li key={index}>
                            <a href={product.link} target="_blank" rel="noopener noreferrer">{product.name}</a>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No product recommendations available for your skin type.</p>
            )}
        </div>
    );
};

export default ProductRecommendations;
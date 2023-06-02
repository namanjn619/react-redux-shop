import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

function ProductComponent() {
    const products = useSelector((state) => state.allProducts.products);
    const renderList = products.map((product) => {
        const { id, title, image, price, category} = product;
        return (
          <div key={id} className="product_card">
            <Link to={`/product/${id}`}>
              <div className="product_image">
                <img src={image} alt="" />
              </div>
              <div className="product_content">
                <div className="product_header">
                  <h1>{title}</h1>
                  <h1>{price}</h1>
                  <h4>{category}</h4>
                </div>
              </div>
            </Link>
          </div>
        );
        
});
return (
       <div className='product_container'>
            <div className='product_cards'>
                {renderList}
            </div>
        </div>
    )
}

export { ProductComponent };

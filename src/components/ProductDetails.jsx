import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct } from '../redux/actions/productActions';


function ProductDetails() {
    const product = useSelector((state) => state.product);
    const { image, title, price, category, description } = product;
    const { productId } = useParams();
    const dispatch = useDispatch();
    console.log(product);

    const fetchProductDetails = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch((err) => {
            console.log("Err", err)
        });
        dispatch(selectedProduct(response.data));
    };
    useEffect(() => {
        if (productId && productId !== "") fetchProductDetails();
    }, [productId]);
  return (
    <div className="singleProduct_container">
      {Object.keys(product).length === 0 ? (
        <div className="loading">...Loading!</div>
      ) : (
        <div className="singleProduct_card">
          <div className="singleProduct_image">
            <img src={image} alt="" />
          </div>
          <div className="singleProduct_description">
            <h1>{title}</h1>
            <div className="price">
              <h1>$ {price}</h1>
            </div>
            <div className="category">
              <h4>Category : {category}</h4>
            </div>
            <h4>{description}</h4>
            <button>Add to Cart</button>
          </div>
        </div>
      )}
    </div>
  );
}

export { ProductDetails };

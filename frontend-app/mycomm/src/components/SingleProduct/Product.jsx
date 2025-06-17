import { useEffect, useState } from 'react'
import './Product.css'
import { useSearchParams, useNavigate } from 'react-router-dom'
import axios from 'axios';

function ProductPage() {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const [currProd, setCurrProd] = useState({
        _id: '',
        category:'',
        description:'',
        image:'',
        price:'',
        rating:'' ,
        title:'',
    });
    const id = searchParams.get('id');

    useEffect(() => {
        axios
            .get(`http://localhost:7979/api/products/getOneProduct?id=${id}`)
            .then((response) => {
                console.log(response.data);
                setCurrProd(response.data.result);
            }).catch((err) => { })
    }, [])


    const handleAddToCart = () => {
        axios.post('http://localhost:7979/api/cart/addToCart', {productid: id})
        .then(() => {
            alert("added to cart");
        }).catch(() => {alert("ERROR: could not add to cart")})

    }

    return (
        <div className="singleProductContainer">
          <h2 className="productCategory">Category: {currProd.category.toUpperCase()}</h2>
          <h1 className="productTitle">{currProd.title.toUpperCase()}</h1>
          <img className="productImage2" src = {currProd.image} />
          <h2 className="productPrice">₹{currProd.price}</h2>
          <h3 className="productRating">Rating: {currProd.rating}⭐</h3>
          <p className="productDescription2">{currProd.description}</p>
          <button className="addToCartBtn" onClick={handleAddToCart}>Add to Cart</button>

        </div>
      );
      
}

export default ProductPage
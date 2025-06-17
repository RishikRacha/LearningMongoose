import React, { useState } from 'react'
import "./Products.css";
import axios from 'axios';
import { productsActionCreator } from '../../redux/action/myAction';
import myStore from '../../redux/store/store';
import { useDispatch , useSelector} from 'react-redux';
import { Link, useNavigate} from 'react-router-dom';

function Products() {
    let randImg = "https://media.gettyimages.com/id/167759603/photo/backpack-with-grey-and-blue-colors.jpg?s=612x612&w=gi&k=20&c=JyhPA_9lDhwEouvt26GsLSZdzyQ9dXZ46KkxE1m_5eE="
    let productsDemo = [{name:"Prod 1" , price: 37, description:"lorem ipsum sit dolor amet", image: randImg}, {name:"SECOND" , price: 109, description:"lorem ipsum sit dolor amet", image: randImg}, {name:"333" , price: 303, description:"lorem ipsum sit dolor amet jkbevkuw weivnoiweknvoi wev weohvoweiehv oihvi whviowh oivhwvoihwio hvoiw vowhoi ewhvoi he kjweubviuwe vhweiv  hwiov wvuwvuh vwuih wiurvhw rvv whuwrhv ouvh we iuevhiwh v vhiwhvoi rwhviowr hvoih oivwhiowrvh uivhuiwv vhohvroi hlr vh", image: randImg}];
    let navigate = useNavigate();
    const [productsState, setProducts] = useState([]);

    const productsDispatch = useDispatch();
    const productsData = useSelector((store) => {
        return store.products;
    })

    const getProductsData = () => {
        if(productsData.length != 0) {
            return;
        }
        // .get('https://fakestoreapi.com/products')
        axios
        .get('http://localhost:7979/api/products/getProducts', {headers: {Authorization: `Bearer ${'asdfghjklasdfghjklasdfghjklasdfghjklasdfghjkl'}`}})
        .then((response) => {
            // setProducts(response.data)     // We are using redux now instead of directly updating state
            const productsAction = productsActionCreator(response.data.result);
            console.log(response);
            
            productsDispatch(productsAction)
        })
        .catch(error => console.log(error));

        document.getElementById('bannerShadow').style.backgroundColor = "#000000be";
    }

    const getProducts = () => {
        document.getElementsByClassName('tableContainer')[0].style.display = 'none';
        document.getElementsByClassName('cardsContainer')[0].style.display = 'grid';

        getProductsData();
    }
    
    const getProductsTable = () => {
        document.getElementsByClassName('cardsContainer')[0].style.display = 'none'; 
        document.getElementsByClassName('tableContainer')[0].style.display = 'flex'; 
        
        getProductsData();
    }

    let alertC = () => alert("click");  let alertD = () => alert("DESC");  

  return (
    <div className='productsContainer'>
        
        <div className="banner">
            <div id='bannerShadow'></div>
            <h2>PRODUCTS</h2>
            {/* <p>This page loads the products automatically when the Products component is mounted using the useEffect() Hook and the products data is stored in the redux store. The useEffect Hook is not triggered when the store already contains products data, thereby preventing unnecessary reloads when the component is unmounted and remounted. This optimization significantly reduces load time as it avoids refetching data when revisiting the component. You can navigate to other pages of the web app without worrying about losing the current set of products. Clicking the 'getCards' or 'getTable' button will fetch a new set of products from the Fake Store API.</p> */}
            <p> This Products React component is a dynamic product display that automatically fetches (using <b><u>useEffect</u></b> Hook) the product data from an external API. It uses <b><u>Redux</u></b> for state management and does not call the API unnecessarily when the data already exists in the store, which eliminates reload time of the component on remounting. Check the console for Redux logging. It has a cards layout and a table layout, which can be toggled using the buttons.</p>
        </div>
        <div className='prodButtons'>
            <button onClick={getProducts}>getCards</button>
            <button onClick={getProductsTable}>getTable</button>
        </div>

    {/* Cards DIV  */}
        <div className="cardsContainer">
            {productsData.map((product) => {
                return <div key={product._id} className='productCard' onClick={() => {navigate(`/product-details?id=${product['_id']}`)}}>         {/* used _id from mongo objects for key instead of id in fakestoreapi */}
                    <img src={product.image} alt={product.title} className='productImage' />
                    <h2 className='productName text'>{product.title}</h2>
                    <h3 className='productPrice text'>£{product.price}</h3>
                    <h3 className='productPrice text'>★ {product.rating}</h3>
                    {/* <p className='productDescription text' onClick={alertD}>{product.description}</p> */}


                </div>
            })}
        </div>

    {/* Table DIV */}
        <div className='tableContainer' >
            <table frame='box' width={'100%'} >
                <thead>
                    <tr style={{height:'60px', textAlign:'center', color:'beige', fontSize:'23px'}}>
                      <th>Image</th>
                      <th>Name</th>
                      <th>Description</th>
                      <th >Cost</th>
                      <th >Details</th>
                    </tr>
                </thead>

                <tbody>
                    {productsData.map((product) => {return <tr key={product._id}>
                        <td><img src={product.image} alt={product.title} width='80px' height='80px'/></td>
                        <th>{product.title}</th>
                        {/* <td style={{ maxWidth: '1000px', overflowY: 'scroll', overflowX: 'visible' , textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' , color: 'rgba(255, 215, 106, 0.657)', marginLeft:"40px"}}>{product.description}</td> */}
                        <th style={{minWidth:'150px', textAlign:"center", fontSize:'22px'}}>£{product.price}</th>
                        <th style={{minWidth:'150px', textAlign:"center", fontSize:'22px'}}>£{product.rating}</th>
                        <th style={{minWidth:'150px', textAlign:"center", fontSize:'22px'}}><button onClick={() => {navigate(`/product-details?id=${product['_id']}`)}}>view</button></th>
                    </tr>
                    })}
                </tbody>
            </table>
        </div>
        
    </div>
  )
}

export default Products
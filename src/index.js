import React from "react";
import ReactDOM from "react-dom";
import Greeting from 'components/Greeting';
import 'css/index.css';
import clothing from 'img/men-fashion/clothing.jpg';
// I didn't alias for js file
import productList from './js/models/products';
import Product from "components/Product";
const App = () => {
    return (
        <div>
            {productList.map(product=>{
                return(
                    <Product key={product.id} 
                        product={product}/>
                )
            })}
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
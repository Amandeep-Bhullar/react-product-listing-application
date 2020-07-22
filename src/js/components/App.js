import React from "react";
// I didn't alias for js file
import productList from '../models/products';
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

export default App;
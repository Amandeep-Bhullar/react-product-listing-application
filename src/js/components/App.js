import React from "react";

// I didn't alias for js file
import productList from '../models/products';
import Product from "components/Product";
import Header from "components/Header";
import Footer from "components/Footer";
const App = () => {
    return (
        <div>
            <Header />
            {productList.map(product=>{
                return(
                    <Product key={product.id} 
                        product={product}/>
                )
            })}
            <Footer />
        </div>
    )
}

export default App;
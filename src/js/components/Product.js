import React from "react";
const Product= (props)=>{

    const {name, price, imgUrl} = props.product;

    const showAlert = () => {
        alert(`${name} has been added`);
    }

    return(
        <div className="border product-grid">
            <div className="box">
                <div>
                {name}
                </div>
                <div>
                <img src={imgUrl}></img>
                </div>
                <div>
                {price}
                </div>
                <div>
                <button type="button" onClick={showAlert}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}
export default Product;
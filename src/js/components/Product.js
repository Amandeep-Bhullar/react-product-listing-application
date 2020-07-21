import React from "react";
const Product= (props)=>{

    const {name, price, imgUrl} = props.product;

    const showAlert = () => {
        alert(`${name} has been added`);
    }

    return(
        <div>
            {name}
            <img src={imgUrl}></img>
            {price}
            <button type="button" onClick={showAlert}>Add to Cart</button>
        </div>
    )
}
export default Product;
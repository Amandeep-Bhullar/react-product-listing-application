import React from "react";

const Header = () => {
    return (
        <section>
             <h1>Header</h1>
            <nav class="main-navbar"> 
                <ul class="topbar">
                    <li> <a href="/">Home</a></li>
                    <li> <a href="/products">Products</a></li>
                    <li> <a href="/registration">Customer Registration</a></li>
                    <li> <a href="/login">Login</a></li>
                </ul>
             </nav>
        </section>
    )
}
export default Header;

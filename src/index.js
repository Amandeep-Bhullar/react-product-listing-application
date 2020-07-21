import React from "react";
import ReactDOM from "react-dom";
import Greeting from 'components/Greeting';
import 'css/index.css';
import clothing from 'img/men-fashion/clothing.jpg';

const App = () => {
    return(
    <div>
     <Greeting name="World" />
     <img src={clothing}></img>
    <Greeting name="hello" />
    </div>
     )
}

ReactDOM.render(<App />, document.getElementById('root'));
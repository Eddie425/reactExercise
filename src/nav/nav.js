import "./nav.css";
import React from "react";
import StyleItem from "../shared-ui/style-Item.js";

class Nav extends React.Component{
    render(){
        return <nav>
                    <div className="logo">Logo</div>
                    <div className="menu">
                        <StyleItem word="Item 1" color="black"/>
                        <StyleItem word="Item 2" color="blue"/>
                        <StyleItem word="Item 3" color="green"/>
                    </div>
                </nav>;
    }
}
export default Nav;

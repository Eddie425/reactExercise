import "./index.css"
import React from "react";
import ReactDOM from "react-dom";
import Header from "../header/header.js";
import Nav from "../nav/nav.js";
import ToDo from "../todo/todo.js";

class App extends React.Component{
    render(){
        return <>
            <Nav/><Header/><ToDo/>
        </>;
    }
}

ReactDOM.render(
    <App/>,
    document.querySelector("#root")
);

import React from "react";

class StyleItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            textDeco: "none"
        }
    }

    mouseOver(){
        this.setState({
            textDeco: "underline"
        })
    }
    
    mouseOut(){
        this.setState({
            textDeco: "none"
        })
    }
    
    render(){
        return <div className="item" 
        onMouseOver={this.mouseOver.bind(this)}
        onMouseOut={this.mouseOut.bind(this)}
        style={{color: this.props.color, fontWeight: "bold", textDecoration: this.state.textDeco}}>
                    {this.props.word}
                </div>;
    }
}
export default StyleItem;

import React from "react";

class ToDo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            datas: ["Java", "JavaScript", "jQuery"]
        }
    }
    add(){
        this.state.datas.push("Item");
        this.setState({
            datas: this.state.datas
        })
    }
    render(){
        let content;
        if(this.state.datas.length === 0){
            content = <div>nothing</div>;
        }else{
            let list = [];
            this.state.datas.forEach(function(text, index){
                list.push(<li key={index}>{text}</li>);
            })
            content = <ul>{list}</ul>;
        }
        return <div>
            <h3>ToDo List</h3>
            {content}
            <button onClick={this.add.bind(this)}>Add</button>
        </div>;
    }
}
export default ToDo;
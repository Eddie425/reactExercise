import React from "react";
import List from "./list";

class ToDo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            datas: ["Java", "JavaScript", "jQuery"],
            inputText: ""
        }
    }

    add(){
        this.state.datas.push(this.state.inputText);
        this.setState({
            datas: this.state.datas,
            inputText: ""
        })
    }

    changeText(e){
        let inputElement = e.target;
        this.setState({
            inputText: inputElement.value
        });
    }

    remove(index){
        this.state.datas.splice(index, 1);
        this.setState({
            data: this.state.data
        });
    }
    
    render(){
        let content;
        if(this.state.datas.length === 0){
            content = <div>nothing</div>;
        }else{
            content = <List datas={this.state.datas} remove={this.remove.bind(this)} />
        }
        return <div>
            <h3>ToDo List</h3>
            {content}
            <div>
                <input type="text" value={this.state.inputText} onChange={this.changeText.bind(this)} />
            <button onClick={this.add.bind(this)}>Add</button>
            </div>
        </div>;
    }
}
export default ToDo;
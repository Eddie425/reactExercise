import React from "react";

class List extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        // console.log("List Did Mount")
        this.intervalId = window.setInterval(() => {
            console.log("Delete");
            this.props.remove(0);
        }, 3000);
    }

    componentDidUpdate(){
        // console.log("List Update Mount")
    }

    componentWillUnmount(){
        // console.log("List Will Unmount")
        window.clearInterval(this.intervalId);
        console.log(this.intervalId)
    }

    // remove(e){
    //     let index = e.target.getAttribute("data-index");
    //     index = parseInt(index);
    //     this.props.datas.splice(index, 1);
    //     this.setState({
    //         datas: this.props.datas,
    //     })
    // }

    remove(e){
        let index = e.target.getAttribute("data-index")
        index = parseInt(index);
        this.props.remove(index);
    }

    render(){
        let list = [];
            this.props.datas.forEach((text, index) => {
                list.push(<li key={index}>
                    <span>{text}</span>
                    <button data-index={index} onClick={this.remove.bind(this)}>X</button>
                    </li>);
            })
            return <ul>{list}</ul>;
    }
}
export default List;
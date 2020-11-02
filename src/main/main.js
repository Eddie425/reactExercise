import React from 'react';
import "./main.css";
import Place from "../place/place.js";

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        }
    }
    componentDidMount() {
        let src = "https://data.taipei/api/v1/dataset/36847f3f-deff-4183-a5bb-800737591de5?scope=resourceAquire"
        fetch(src).then((response) => {
            return response.json();
        }).then((data) => {
            console.log(data)
            this.setState({
                data: data.result.results
            })
        })
    }

    renderData(dataList) {
        let list = [];
        for (let i = 0; i < dataList.length; i++) {
            let imgSrcs = dataList[i].file.split("http://")[1];
            let place = {data :dataList[i], imgSrcs: "http://" + imgSrcs};
            list.push(<Place key={i} place={place}/>);
        }
        return list;
    }

    renderMain() {
        let main;
        if (this.state.data == null) {
            main = <main>Loading...</main>;
        } else {
            let list;
            if (this.props.filter == null) {
                list = this.renderData(this.state.data);
            } else {
                let filteredData = this.state.data.filter((place) => {
                    return place.CAT2 == this.props.filter;
                });
                list = this.renderData(filteredData);
            }
            main = <main>{list}</main>;
        }
        return main;
    }

    render() { 
        let main = this.renderMain();
        return <>
            {main}
            </>;
    }

    
}
 
export default Main;
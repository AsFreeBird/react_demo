import React from "react";
// import Prototype from 'prop-types'


export default class Test extends React.Component{
    // constructor(){
    //     super();
    //     this.state = {
    //         name:"DaPeng"
    //     }
    // }

    state = {
        name:"DaPeng"
    }
    constructor(props){
        super(props);
    }

    render(){
        return(
        <div>
            <button>点击 {this.state.name}</button>
            <button>{this.props.name}</button>
        </div>)
    }
}


// Test.prototype = {
//     name:Prototype.string
// }

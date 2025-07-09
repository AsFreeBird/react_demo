
import React from "react";

export default class StatusImproveMent extends React.Component {

    state = {
        rmb: "",
        dollar: ""
    }

    transformToRMB= (value) =>{
        if (parseFloat(value) || value === "" || parseFloat(value) === 0) {
            this.setState({
                rmb: value === "" ? "" : (value * 7.3255).toFixed(2),
                dollar: value
            });
        } else {
            alert("请输入数字！");
        }
    }

    transformToDollar = (value)=>{
        if (parseFloat(value) || value === "" || parseFloat(value) === 0) {
            this.setState({
                rmb: value,
                dollar: value === "" ? "" : (value * 0.1365).toFixed(2)
            });
        } else {
            alert("请输入数字！");
        }
    }

    render() {
        return (
            <div>
                <text>状态提升</text>
                <Money text="美元" money={this.state.dollar} transform={this.transformToRMB} />
                <Money text="人名币" money={this.state.rmb} transform={this.transformToDollar} />
            </div>
        )
    }
}

export function Money(props) {

    function handleChange(e) {
        props.transform(e.target.value);
    }

    return (
        <fieldset>
            <legend>
                {props.text}
            </legend>
            <input type="text" value={props.money} onChange={handleChange} />
        </fieldset>
    );
}
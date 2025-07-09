import React, { useState } from "react";

//受控组件
export class From1 extends React.Component {

    constructor() {
        super();
        this.state = {
            value1: "",
            value2: ""
        }
    }


    onSubmit = (e) => {
        alert(this.state.value)
    }
    onChange = (e) => {
        switch (e.target.name) {
            case "one": {
                this.setState({
                    value1: e.target.value.toUpperCase()
                })
            }
            case "two": {
                const text = e.target.value.split("").map(item => {
                    if (!isNaN(item)) {
                        return item
                    }
                }).join("")
                this.setState({
                    value2: text
                })

            }

        }
    }

    render() {
        return (
            <div>
                <input typ De="text"
                    name="one"
                    value={this.state.value1}
                    placeholder="自动转成大写"
                    onChange={this.onChange}
                />
                <input typ De="text" name="two"
                    value={this.state.value2}
                    placeholder="只能输入数字"
                    onChange={this.onChange}
                />
                <button onClick={this.onSubmit}> 提交</button>
            </div>
        )
    }
}


export class Textarea extends React.Component {
    constructor() {
        super()
        this.state = {
            value: ""
        }
    }

    onSubmit = () => {
        alert(this.state.value)
    }

    onChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }
    render() {
        return (
            <div>
                <textarea rows="10" cols="30" value={this.state.value} onChange={
                    this.onChange
                } />
                <button onClick={this.onSubmit}> 提交</button>
            </div>
        )
    }
}

export class CheckBoxs extends React.Component {
    state = {
        checkBoxs: [
            {
                content: "html", checked: false
            },
            {
                content: "css", checked: false
            },
            {
                content: "js", checked: false
            },
            {
                content: "react", checked: true
            }
        ]
    }

    onChange = (index) => {
        const arr = this.state.checkBoxs
        arr[index].checked = !arr[index].checked
        this.setState({
            checkBoxss: arr
        })
    }

    render() {
        return (
            <div>
                {
                    this.state.checkBoxs.map((item, index) => (
                        <div>
                            <input
                                type="checkbox"
                                value={item.content}
                                checked={item.checked}
                                onChange={()=>this.onChange(index)} />
                            <span>{item.content}</span>
                        </div>
                    ))
                }
            </div>
        )
    }
}
//非受控组件

export class RefDemo extends React.Component{
    constructor(){
        super()
        this.inputRef = React.createRef()
    }

    onclick = ()=>{
        console.log(this.inputRef.current.value)
    }
    render(){
        return(
            <div>
                <input type="text" ref={this.inputRef} defaultValue="123"/>
                <button  onClick={this.onclick}> 获取到的内容</button>
            </div>
        )
    }
}

import React, { Component } from 'react'
// bind event handlers in react
export class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:'hello'
        }
        // 3rd approach- binding in class constructor
        // this.clickHandler=this.clickHandler.bind(this)
    }
    // 1st and 2nd approach
    // clickHandler(){
    //      this.setState({
    //          message:"goodbye!"
    //      })

    //  }
    
    // 4th approach
    clickHandler=()=>{
        this.setState({
            message:'Goodbye!'
            
        })
    }
    
    render() {
        return (
            <div>
                <div>
                {this.state.message}

            </div>
            {/* 1st approach- binding in render method*/}
            {/* <button onClick={this.clickHandler.bind(this)}>
                Click

            </button> */}
            {/* 2nd approach- use arrow function */}
            {/* <button onClick={()=> this.clickHandler()}>Click</button> */}
            {/* 3rd approach- binding in constructor */}
            {/* 4th approach- class property as arrow functions */}
            <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default EventBind

import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }

    increment(){
        // this.state.count= this.state.count + 1     ... this can not be changed directly... we need to use setState method for changing the value
        // react will know that it has to re-render the component only when we use setState
        // this.setState(
        //     {
        //         count: this.state.count + 1
        //     },
        //     ()=>{
        //         console.log('Callback value', this.state.count)
        //     }
        // )
        // pass function as an argument
        this.setState(prevState => ({
            count: prevState.count + 1
        }))
        console.log(this.state.count)

    }

incrementFive(){
    this.increment()
    this.increment()
    this.increment()
    this.increment()
    this.increment()
}
    render() {
        return (
            <div>
                <div>Count- {this.state.count}</div>
                <button onClick={()=> this.incrementFive()}>Increment</button>
            </div>
        )
    }
}

export default Counter

import React, { Component } from 'react'

class Message extends Component{
    constructor(){
        super() // used to get properties of base Component class
        this.state={  // state is used because it can be changed
            message: 'Welcome to my page!'
        }
    }

    changeMessage(){
        this.setState({
            message:"Thankyou for Subscribing"
        })
    }
    // againChange(){
    //     this.setState({
    //         button.hide(),
    //     })
    // }
    render(){
        return (
            <div>
                <h2><i>{this.state.message}</i></h2>
                <button onClick={()=> this.changeMessage()}>Click Here</button>
            </div>
        )
    }
}
export default Message
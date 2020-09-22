// Class component
// Props are immutable

import React, { Component } from 'react'

class Welcome extends Component{
    render(){
    // "this" is used in class components
    return <h1>Weclome {this.props.name} as {this.props.hero}</h1>
    }
}

export default Welcome
import React from 'react';

// Props are immutable
const Greet = (props) => {
console.log(props)
return (
    // It should contain only one wrapper element- Limitation
    <div>
        <h1>Hello {props.name} as {props.hero} !</h1>
        {props.children}
    </div>
)
}

export default Greet
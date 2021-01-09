import React from "react";

const Card=({title="Card1", content="Hello", but="Click Here"})=>{
    return(
        <div className="card text-center" style={{width: "17rem", margin:"5px"}}>
              <img
                src="https://images.pexels.com/photos/3532557/pexels-photo-3532557.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">
                  {content}
                </p>
                <a href="#" className="btn btn-success">{but}</a>
              </div>
            </div>
    )
};

export default Card
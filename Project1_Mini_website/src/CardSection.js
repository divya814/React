import React from "react";
import Card from "./Card"

const CardSection=()=>(
    <section className="contact bg-success p-4">
      <div className="container ">
        <h2 className="text-white">
          We love new friends!
        </h2>
        <div className="row">
          <div className="col-3">
            <Card title="Web Development" content="Learn and make Websites" but="Web Dev Course"></Card>
          </div>
          <div className="col-3">
            <Card title="App Development" content="Learn and make your own Apps" but="App Dev Course"></Card>
          </div>
          <div className="col-3">
            <Card title="Machine Learning" content="Learn ML and be the expert" but="ML Course"></Card>
          </div>
          <div className="col-3">
            <Card title="Cyber Security" content="Hack for good" but="CSS Course"></Card>
          </div>
        </div>
      </div>
    </section>
)
export default CardSection
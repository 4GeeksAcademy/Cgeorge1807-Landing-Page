import React from "react";

const Jumbotron = () => {
    return (
        <div className="p-5">
            <div className="jumbotron bg-light container text-start" style={{ paddingLeft: 0, marginLeft: 0 }}>
                <h1 className="display-4 p-2">A Warm Welcome!</h1>
                <p className="lead">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum commodi fuga ducimus, dicta quidem magnam porro hic esse, voluptatum quasi deserunt harum! Earum, cum? Dolorum reiciendis libero totam consectetur possimus.</p>
                <a className="btn btn-primary btn-lg" href="#" role="button">Call to action!</a>
            </div>
        </div>
    )
}
export default Jumbotron


import React from "react";

const Card = () => {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <div className="card-body">
                <img src="https://media.meer.com/attachments/188b462da42b5418f6eb11d4dbd6214fab6ef039/store/fill/1090/613/96d34153fe81196b88433da1f4e5fdd61b2dd3de54e339e1fdf8667ed6b8/Cerro-El-Avila-Venezuela.jpg" className="card-img-top" alt="Avila"/>
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae doloribus consequatur quibusdam repellendus. Sed, distinctio!.</p>
                <a href="#" className="btn btn-primary">Find Out More!</a>
            </div>
        </div>
    )
}
export default Card;


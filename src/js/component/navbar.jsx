import React from "react";

const Navbar = () => {
    return (
        // <div>
        //     <nav className="navbar bg-dark border-bottom border-body">
        //         <div className="container-fluid">
        //             <a className="navbar-brand text-white">Start Bootstrap</a>
        //             <form className="d-flex" role="search">
        //                 <a className="navbar-brand text-white">Home </a>
        //                 <a className="navbar-brand text-white">About </a>
        //                 <a className="navbar-brand text-white">Services </a>
        //                 <a className="navbar-brand text-white">Contact </a>
        //             </form>
        //         </div>
        //     </nav>
        // </div>
<nav class="navbar navbar-expand-lg bg-dark">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a class="navbar-brand text-white" href="#">Start Bootstrap</a>
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active text-white" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="#">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="#">Contact</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
      </form>
    </div>
  </div>
</nav>
    )
}
export default Navbar
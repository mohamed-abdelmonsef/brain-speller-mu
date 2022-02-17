import React from "react";

export default class Header extends React.Component {
    render() {
        return (
            <div>
                <header id="header" class="float">
                    <div class="container d-flex align-items-center">

                        <h1 class="logo me-auto"><a href="index.html"><img src={process.env.PUBLIC_URL + `/img/BrainSpeller.png`}></img></a></h1>


                        <nav id="navbar" class="navbar order-last order-lg-0">
                            <ul>
                                <li><a class="nav-link scrollto " href="#hero">Home</a></li>
                                <li><a class="nav-link scrollto" href="#about">Technology</a></li>
                                <li><a class="nav-link scrollto" href="#services">Services</a></li>
                                <li><a class="nav-link scrollto" href="#payment">Payment</a></li>
                               
                                <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
                            </ul>
                            <i class="bi bi-list mobile-nav-toggle"></i>
                        </nav>


                    </div>
                </header>
            </div >
        )
    }
}
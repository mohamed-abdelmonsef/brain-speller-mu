import React from "react";

export default class Header extends React.Component {
    render() {
        return (
            <div >

                <div id="topbar" class="d-flex align-items-center fixed-top">
                    <div class="container d-flex justify-content-between">
                        <div class="contact-info d-flex align-items-center">
                            <i class="bi bi-envelope"></i> <a href="contact@example.com">contact@example.com</a>
                            <i class="bi bi-phone"></i> +20 0189 55488 55
                        </div>
                        <div class="d-none d-lg-flex social-links align-items-center">
                            <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
                            <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
                            <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
                            <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
                        </div>
                    </div>
                </div>
                <header id="header" class="fixed-top">
                    <div class="container d-flex align-items-center">

                        <h1 class="logo me-auto"><a href="index.html">Brain Speller</a></h1>


                        <nav id="navbar" class="navbar order-last order-lg-0">
                            <ul>
                                <li><a class="nav-link scrollto " href="#hero">Home</a></li>
                                <li><a class="nav-link scrollto" href="#about">About</a></li>
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
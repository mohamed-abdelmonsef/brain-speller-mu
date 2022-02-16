import React from "react";

export default class Footer extends React.Component{
    render(){
        return(
            <div id="footer">
                <div class="container">
                    <div class="row mt-5">
                        <div class="col-lg-4">
                            
                                <div class="address">
                                    <i class="bi bi-geo-alt"></i>
                                    <h4>Location:</h4>
                                    <p>A108 Adam Street, New York, NY 535022</p>
                                </div>
                        </div>        
                        <div class="col-lg-4">
                                <div class="email">
                                    <i class="bi bi-envelope"></i>
                                    <h4>Email:</h4>
                                    <p>info@example.com</p>
                                </div>
                        </div>
                        <div class="col-lg-4">
                                <div class="phone">
                                    <i class="bi bi-phone"></i>
                                    <h4>Call:</h4>
                                    <p>+1 5589 55488 55s</p>
                                </div>
                        </div>
                    </div>
                    <div class="row mt-5">
                        <div id="topbar" style={{background: (94, 160, 214)}} class="d-flex align-items-center float">
                            <div class="container d-flex justify-content-between">
                                <div class="d-none d-lg-flex social-links align-items-center">
                                    <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
                                    <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
                                    <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
                                    <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div> 
            </div>
        )
    }
}
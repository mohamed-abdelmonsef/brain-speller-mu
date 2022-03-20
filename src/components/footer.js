import React from "react";

export default class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div class="container">
                    <div class="row mt-5" id="topfooter">
                        <div class="col-lg-4">

                            <div class="address">
                                <i class="bi bi-geo-alt"></i>
                                <h4>Location:</h4>
                                <p>Faculty of Computer and Information Sciences - Mansoura University ,Egypt</p>
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
                    <div class="container d-md-flex py-4">

                        <div class="me-md-auto text-center text-md-start">
                            <div class="copyright">
                                &copy; Copyright <strong><span>Brain Speller</span></strong>. All Rights Reserved
                            </div>
                           
                        </div>
                        <div class="social-links text-center text-md-right pt-3 pt-md-0">
                            <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
                            <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
                            <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
                            <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
                            <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
                            
                        </div>
                        
                    </div>

                </div>
            </div>
        )
    }
}
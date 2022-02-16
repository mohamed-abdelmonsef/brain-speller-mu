import React from "react";

export default class Home extends React.Component {
    render() {
        return (
            <div >
                <section id="hero" class="d-flex align-items-center" s>
                    <div class="container">
                        <h1>Welcome to <br />Brain Speller</h1>
                        <a href="#about" class="btn-get-started scrollto">Get Started</a>
                    </div>
                </section>

                <main id="main">


                    <section id="why-us" class="why-us">
                        <div class="container">

                            <div class="row">
                                <div class="col-lg-4 d-flex align-items-stretch">
                                    <div class="content">
                                        <h3>Why Choose Brain Speller?</h3>
                                        <p>
                                            We provide high performance and many features from one application and one headset .
                                        </p>
                                        <div class="text-center">
                                            <a href="#" class="more-btn">Learn More <i class="bx bx-chevron-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-8 d-flex align-items-stretch">
                                    <div class="icon-boxes d-flex flex-column justify-content-center">
                                        <div class="row">
                                            <div class="col-xl-4 d-flex align-items-stretch">
                                                <div class="icon-box mt-4 mt-xl-0">
                                                    <i class="bx bx-receipt"></i>
                                                    <h4>Guarantee</h4>
                                                    <p>Guarantee 3 Years of Software Updates and 6 months for hardware</p>
                                                </div>
                                            </div>
                                            <div class="col-xl-4 d-flex align-items-stretch">
                                                <div class="icon-box mt-4 mt-xl-0">
                                                    <i class="bx bx-cube-alt"></i>
                                                    <h4>Features</h4>
                                                    <p> Our product providing you the ability to write without your hands and controlling
                                                        your smart home using only your mind and do many more other things .     
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="col-xl-4 d-flex align-items-stretch">
                                                <div class="icon-box mt-4 mt-xl-0">
                                                    <i class="bx bx-images"></i>
                                                    <h4>Who can use it ?</h4>
                                                    <p>All people can use it especaially the paralyzed people and who want to make his life easier !</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>
                    {/* -----------About section ------*/}
                    <section id="about" class="about">
                        <div class="container-fluid">

                            <div class="row">
                                <div class="col-xl-5 col-lg-6 video-box d-flex justify-content-center align-items-stretch position-relative">
                                    <a href="https://www.youtube.com/watch?v=6QcY7v9Kio4" class="glightbox play-btn mb-4"></a>
                                </div>

                                <div class="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
                                    <h3>About Brain Speller</h3>
                                    <p> users need to focus on the target letter or object on the application we developed
                                        by using Hybrid BCI combine SSVEP and p300 speller .
                                        and flashes to make visual stimuli for user's brain, while using 
                                        multidimensional EEG signals from the EEG headset (result from the visual stimuli), so we get BCI commands 
                                        and perform it </p>

                                    <div class="icon-box">
                                        <div class="icon"><i class="bx bx-fingerprint"></i></div>
                                        <h4 class="title"><a href="">Secure</a></h4>
                                        <p class="description"> we provide different ways of security like passwords and finger prints </p>
                                    </div>

                                    <div class="icon-box">
                                        <div class="icon"><i class="bx bx-atom"></i></div>
                                        <h4 class="title"><a href="">Performance</a></h4>
                                        <p class="description">Thanks to our hybrid Bci we guarantee high accuracy and fast response that will move you to another level</p>
                                    </div>

                                    <div class="icon-box">
                                        <div class="icon"><i class="bx bx-gift"></i></div>
                                        <h4 class="title"><a href="">Gifts</a></h4>
                                        <p class="description"> If you order 2 products you wil get 30% off</p>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </section>
                    {/* -----end of about section ---*/}

                    {/* ======= Services Section =======  */}
                    <section id="services" class="services">
                        <div class="container">

                            <div class="section-title">
                                <h2>Services</h2>
                                <p> We are presenting our features and services that our product providing to you and we will update it and add more in the future ! </p>
                            </div>

                            <div class="row">
                                <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
                                    <div class="icon-box">
                                        <div class="icon"><i class="fas fa-comment"></i></div>
                                        <h4><a href="">communication</a></h4>
                                        <p>Ability to communicate with others either  text or voice by using only your mind </p>
                                    </div>
                                </div>

                                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                                    <div class="icon-box">
                                        <div class="icon"><i class="fas fa-home"></i></div>
                                        <h4><a href="">Smart home</a></h4>
                                        <p>Usability in controlling smart devices remotely to provide comfortable environment for all people. </p>
                                    </div>
                                </div>

                                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
                                    <div class="icon-box">
                                        <div class="icon"><i class="fas fa-file"></i></div>
                                        <h4><a href="">Multiple tasks</a></h4>
                                        <p>Provide high performance for normal people to handle dealing with multiple tasks.</p>
                                    </div>
                                </div>

                                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                                    <div class="icon-box">
                                        <div class="icon"><i class="fas fa-wifi"></i></div>
                                        <h4><a href="">Connected to internet</a></h4>
                                        <p>Assisting users to do their written work or in solving MCQ examEnabling or to search on Google.</p>
                                    </div>
                                </div>

                                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                                    <div class="icon-box">
                                        <div class="icon"><i class="fas fa-key"></i></div>
                                        <h4><a href="">Be more secure</a></h4>
                                        <p>Facilitate the usage of ATM in a secure way or writing your passwords</p>
                                    </div>
                                </div>

                                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                                    <div class="icon-box">
                                        <div class="icon"><i class="fas fa-notes-medical"></i></div>
                                        <h4><a href="">Emergency</a></h4>
                                        <p>Providing icon for emergency calls and escort chat.</p>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </section>
                    {/* end of services */}
                    {/* ---------payment section --------*/}
                    <section id="payment" class="payment section-bg">
                        <div class="container">

                            <div class="section-title">
                                <h2>Make Your Order Now!</h2>
                            </div>
                            <div class="container mt-5 px-5">
                                <div class="mb-4">
                                    <h2 >Confirm order and pay</h2> <span>please make the payment, after that you can enjoy all the features and benefits.</span>
                                </div>
                                <div class="row">
                                    <div class="col-md-8">
                                        <div class="card p-3">
                                            <h6 class="text-uppercase">Payment details</h6>
                                            <div class="inputbox mt-3"> <input type="text" name="name" class="form-control" required="required" /> <span>Name on card</span> </div>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="inputbox mt-3 mr-2"> <input type="text" name="name" class="form-control" required="required" /> <i class="fa fa-credit-card"></i> <span>Card Number</span> </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="d-flex flex-row">
                                                        <div class="inputbox mt-3 mr-2"> <input type="text" name="name" class="form-control" required="required" /> <span>Expiry</span> </div>
                                                        <div class="inputbox mt-3 mr-2"> <input type="text" name="name" class="form-control" required="required" /> <span>CVV</span> </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="mt-4 mb-4">
                                                <h6 class="text-uppercase">Billing Address</h6>
                                                <div class="row mt-3">
                                                    <div class="col-md-6">
                                                        <div class="inputbox mt-3 mr-2"> <input type="text" name="name" class="form-control" required="required" /> <span>Street Address</span> </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="inputbox mt-3 mr-2"> <input type="text" name="name" class="form-control" required="required" /> <span>City</span> </div>
                                                    </div>
                                                </div>
                                                <div class="row mt-2">
                                                    <div class="col-md-6">
                                                        <div class="inputbox mt-3 mr-2"> <input type="text" name="name" class="form-control" required="required" /> <span>State/Province</span> </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="inputbox mt-3 mr-2"> <input type="text" name="name" class="form-control" required="required" /> <span>Zip code</span> </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="mt-4 mb-4 d-flex justify-content-between">  <button class="btn btn-success px-3">Pay $549<span>.99</span></button> </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="card card-blue p-3 text-white mb-3"> <span>You have to pay</span>
                                            <div class="d-flex flex-row align-items-end mb-3">
                                                <h1 class="mb-0 yellow">$549</h1> <span>.99</span>
                                            </div> <span>Enjoy all the features and perk after you complete the payment</span> <a href="#" class="yellow decoration">Know all the features</a>
                                            <div class="hightlight"> <span>100% Guaranteed support and update for the next 3 years.</span> </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </section>
                    {/* --------end of payment section -----*/}
                    {/* contact sections */}
                    <section id="contact" class="contact">
                        <div class="container">

                            <div class="section-title">
                                <h2>Contact</h2>
                                <p>If you’re experiencing difficulties setting up your product or in ordering
                                     our product or have any question to us ,please go and contact us !</p>
                            </div>
                        </div>



                        <div class="container">
                            <div class="row mt-5">



                                

                                <div class="col-lg-8 mt-5 mt-lg-0">

                                    <form action="forms/contact.php" method="post" role="form" class="php-email-form">
                                        <div class="row">
                                            <div class="col-md-6 form-group">
                                                <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required />
                                            </div>
                                            <div class="col-md-6 form-group mt-3 mt-md-0">
                                                <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required />
                                            </div>
                                        </div>
                                        <div class="form-group mt-3">
                                            <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required />
                                        </div>
                                        <div class="form-group mt-3">
                                            <textarea class="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                                        </div>
                                        <div class="my-3">
                                            <div class="loading">Loading</div>
                                            <div class="error-message"></div>
                                            <div class="sent-message">Your message has been sent. Thank you!</div>
                                        </div>
                                        <div class="text-center"><button type="submit">Send Message</button></div>
                                    </form>

                                </div>

                            </div>

                        </div>
                    </section>
                </main>

            </div>
        )
    }
}
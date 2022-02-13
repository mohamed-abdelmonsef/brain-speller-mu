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
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
                                            Asperiores dolores sed et. Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio ad corporis.
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
                                                    <h4>Corporis voluptates sit</h4>
                                                    <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                                                </div>
                                            </div>
                                            <div class="col-xl-4 d-flex align-items-stretch">
                                                <div class="icon-box mt-4 mt-xl-0">
                                                    <i class="bx bx-cube-alt"></i>
                                                    <h4>Ullamco laboris ladore pan</h4>
                                                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                                                </div>
                                            </div>
                                            <div class="col-xl-4 d-flex align-items-stretch">
                                                <div class="icon-box mt-4 mt-xl-0">
                                                    <i class="bx bx-images"></i>
                                                    <h4>Labore consequatur</h4>
                                                    <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
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
                                    <p>Esse voluptas cumque vel exercitationem. Reiciendis est hic accusamus. Non ipsam et sed minima temporibus laudantium. Soluta voluptate sed facere corporis dolores excepturi. Libero laboriosam sint et id nulla tenetur. Suscipit aut voluptate.</p>

                                    <div class="icon-box">
                                        <div class="icon"><i class="bx bx-fingerprint"></i></div>
                                        <h4 class="title"><a href="">Lorem Ipsum</a></h4>
                                        <p class="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                                    </div>

                                    <div class="icon-box">
                                        <div class="icon"><i class="bx bx-gift"></i></div>
                                        <h4 class="title"><a href="">Nemo Enim</a></h4>
                                        <p class="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                                    </div>

                                    <div class="icon-box">
                                        <div class="icon"><i class="bx bx-atom"></i></div>
                                        <h4 class="title"><a href="">Dine Pad</a></h4>
                                        <p class="description">Explicabo est voluptatum asperiores consequatur magnam. Et veritatis odit. Sunt aut deserunt minus aut eligendi omnis</p>
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
                                <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                            </div>

                            <div class="row">
                                <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
                                    <div class="icon-box">
                                        <div class="icon"><i class="fas fa-heartbeat"></i></div>
                                        <h4><a href="">Lorem Ipsum</a></h4>
                                        <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                                    </div>
                                </div>

                                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                                    <div class="icon-box">
                                        <div class="icon"><i class="fas fa-pills"></i></div>
                                        <h4><a href="">Sed ut perspiciatis</a></h4>
                                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                                    </div>
                                </div>

                                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
                                    <div class="icon-box">
                                        <div class="icon"><i class="fas fa-hospital-user"></i></div>
                                        <h4><a href="">Magni Dolores</a></h4>
                                        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
                                    </div>
                                </div>

                                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                                    <div class="icon-box">
                                        <div class="icon"><i class="fas fa-dna"></i></div>
                                        <h4><a href="">Nemo Enim</a></h4>
                                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                                    </div>
                                </div>

                                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                                    <div class="icon-box">
                                        <div class="icon"><i class="fas fa-wheelchair"></i></div>
                                        <h4><a href="">Dele cardo</a></h4>
                                        <p>Quis consequatur saepe eligendi voluptatem consequatur dolor consequuntur</p>
                                    </div>
                                </div>

                                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                                    <div class="icon-box">
                                        <div class="icon"><i class="fas fa-notes-medical"></i></div>
                                        <h4><a href="">Divera don</a></h4>
                                        <p>Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur</p>
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
                                        <div class="mt-4 mb-4 d-flex justify-content-between">  <button class="btn btn-success px-3">Pay $840</button> </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="card card-blue p-3 text-white mb-3"> <span>You have to pay</span>
                                            <div class="d-flex flex-row align-items-end mb-3">
                                                <h1 class="mb-0 yellow">$549</h1> <span>.99</span>
                                            </div> <span>Enjoy all the features and perk after you complete the payment</span> <a href="#" class="yellow decoration">Know all the features</a>
                                            <div class="hightlight"> <span>100% Guaranteed support and update for the next 5 years.</span> </div>
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
                                <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                            </div>
                        </div>



                        <div class="container">
                            <div class="row mt-5">

                                <div class="col-lg-4">
                                    <div class="info">
                                        <div class="address">
                                            <i class="bi bi-geo-alt"></i>
                                            <h4>Location:</h4>
                                            <p>A108 Adam Street, New York, NY 535022</p>
                                        </div>

                                        <div class="email">
                                            <i class="bi bi-envelope"></i>
                                            <h4>Email:</h4>
                                            <p>info@example.com</p>
                                        </div>

                                        <div class="phone">
                                            <i class="bi bi-phone"></i>
                                            <h4>Call:</h4>
                                            <p>+1 5589 55488 55s</p>
                                        </div>

                                    </div>

                                </div>

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
import React from 'react'

import './Home.css';

const Home = () => {
    return (
        <>
            <div className="container-fuild">
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="images/banner-01.jpg" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h1>GET THE BEST VILLA FOR YOU</h1>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="images/banner-02.jpg" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Second slide label</h5>
                                <p>Some representative placeholder content for the second slide.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="images/banner-03.jpg" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Third slide label</h5>
                                <p>Some representative placeholder content for the third slide.</p>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>



            <div className="container mt-2">
                <div className="row">
                    <div className="col-md-3 feature-card" >
                        <img src="images/featured.jpg" alt="" style={{ position: 'relative', borderRadius: '10px' }} />
                        <br />
                        <div style={{
                            height: '100px', width: '100px', borderRadius: '50%', backgroundColor: 'red', textAlign: 'center'
                            , padding: '25px', position: 'absolute', left: '100px', top: "1350px"
                        }}>
                            <img src="images/featured-icon.png" alt="" />
                        </div>

                    </div>
                    <div className="col-md-6">
                        <h5 > <b style={{ color: 'red', paddingLeft: '60px', marginTop: '10px' }}> I Featured</b> </h5>
                        <h1 style={{ paddingLeft: '60px', paddingTop: '20px', lineHeight: '1.5' }}> <b>
                            Best <br /> ApartMents & <br />
                            Sea View
                        </b> </h1>
                        <div className="card text-dark bg-light mb-3 mx-5" style={{ maxWidth: '22rem' }}>
                            <div className="card-header" style={{ color: 'red' }}> <b>Best useful links?</b> </div>
                            <div className="card-body">
                                <p className="card-text">Get <strong>the best villa </strong> website template in HTML CSS and Bootstrap for your business. TemplateMo provides you the best free CSS templates in the world. Please tell your friends about it.
                                    <br /> <br />
                                    How does this work?
                                    <br /> <br />
                                    Why is Villa Agency the best?</p>
                            </div>
                        </div>

                    </div>


                    <div className="col-md-3 p-5 ">
                        <div className='box' style={{ boxShadow: ' rgba(0, 0, 0, 0.35) 0px 5px 15px;', height: '300px', width: '400px' }}>
                            <div className='d-flex mt-2' >
                                <img src="images/info-icon-01.png" alt="" />
                                <div style={{ paddingLeft: '15px' }}>
                                    <h3> <b>250 m2</b></h3>
                                    <p> <b>Total Flat Space</b> </p>
                                </div>

                            </div>
                            <div className='d-flex mt-5'>
                                <img src="images/info-icon-02.png" alt='' />
                                <div style={{ paddingLeft: '15px' }}>
                                    <h3> <b>Contract</b></h3>
                                    <p> <b>Contract Ready</b> </p>
                                </div>

                            </div>
                            <div className='d-flex mt-5'>
                                <img src="images/info-icon-03.png" alt="" />
                                <div style={{ paddingLeft: '15px' }}>
                                    <h3> <b>PayMent</b></h3>
                                    <p> <b>PayMent Process</b> </p>
                                </div>

                            </div>
                            <div className='d-flex mt-5'>
                                <img src="images/info-icon-04.png" alt="" />
                                <div style={{ paddingLeft: '15px' }}>
                                    <h3> <b>Safety</b></h3>
                                    <p> <b>24/7 under</b> </p>
                                </div>

                            </div>
                        </div>



                    </div>
                </div>
            </div>


            <div className="container-fuild mt-5" style={{height:'600px'}}>
                <img src="images/video-bg.jpg" alt="" style={{position:'relative'}}/>
                <img src="images/video-frame.jpg" alt="" style={{position:'absolute',top:'1700px',left:'200px'}}/>
                <i class="fa-sharp fa-solid fa-circle-play" style={{fontSize:'100px',position:'absolute',top:'1900px',left:'680px',color:'blue'}} ></i>
            </div>

            <br /> <br /> <br />
            

            <br /> <br /> <br />

            <div className="container" style={ {textAlign:'center'}}>
                        <h4 style={{color:"red"}}>
                        | PROPERTIES <br />
                        </h4>
                <h1>
                <strong>

                    We Provide The <br /> Best Property <br /> You Like
                </strong>
                    </h1>
            </div>

            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-4 mt-3" >
                        <div className="card" style={{ width: '20rem', borderRadius: "30px" }}>
                            <img src="images/property-01.jpg" className="card-img-top" alt="..." style={{ borderRadius: "10px" }} />

                            <div className="card-body">
                                <h5 className="card-title">
                                    <button className='btn btn-secondary'>Luxury Villa</button> <span style={{ color: 'orange', paddingLeft: "60px" }}> <b> $2.264.000</b></span>
                                </h5>
                                <h5 className='mt-3 mb-3'><b>18 New Street Miami 92125</b></h5>
                                <p className="card-text">Bedroom : <strong>8</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Bedroom : <strong>8</strong>.</p>
                                <p className="card-text">Area : <strong>545m2</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Bedroom : <strong>3</strong>.</p>
                                <p className="card-text">Parking : <strong>6</strong></p>
                                <div style={{ textAlign: 'center' }}>

                                    <a href="/" className="btn btn-primary" style={{ borderRadius: '50px' }}>Schedule to visit</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mt-3" >
                        <div className="card" style={{ width: '20rem', borderRadius: "30px" }}>
                            <img src="images/property-02.jpg" className="card-img-top" alt="..." style={{ borderRadius: "10px" }} />

                            <div className="card-body">
                                <h5 className="card-title">
                                    <button className='btn btn-secondary'>Luxury Villa</button> <span style={{ color: 'orange', paddingLeft: "60px" }}> <b> $2.264.000</b></span>
                                </h5>
                                <h5 className='mt-3 mb-3'><b>54 Mid Street Florida 272001</b></h5>
                                <p className="card-text">Bedroom : <strong>8</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Bedroom : <strong>8</strong>.</p>
                                <p className="card-text">Area : <strong>545m2</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Bedroom : <strong>3</strong>.</p>
                                <p className="card-text">Parking : <strong>6</strong></p>
                                <div style={{ textAlign: 'center' }}>

                                    <a href="/" className="btn btn-primary" style={{ borderRadius: '50px' }}>Schedule to visit</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mt-3" >
                        <div className="card" style={{ width: '20rem', borderRadius: "30px" }}>
                            <img src="images/property-03.jpg" className="card-img-top" alt="..." style={{ borderRadius: "10px" }} />

                            <div className="card-body">
                                <h5 className="card-title">
                                    <button className='btn btn-secondary'>Luxury Villa</button> <span style={{ color: 'orange', paddingLeft: "60px" }}> <b> $2.264.000</b></span>
                                </h5>
                                <h5 className='mt-3 mb-3'><b>26 Old Street Miami 38540</b></h5>
                                <p className="card-text">Bedroom : <strong>8</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Bedroom : <strong>8</strong>.</p>
                                <p className="card-text">Area : <strong>545m2</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Bedroom : <strong>3</strong>.</p>
                                <p className="card-text">Parking : <strong>6</strong></p>
                                <div style={{ textAlign: 'center' }}>

                                    <a href="/" className="btn btn-primary" style={{ borderRadius: '50px' }}>Schedule to visit</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mt-5" >
                        <div className="card" style={{ width: '20rem', borderRadius: "30px" }}>
                            <img src="images/property-04.jpg" className="card-img-top" alt="..." style={{ borderRadius: "10px" }} />

                            <div className="card-body">
                                <h5 className="card-title">
                                    <button className='btn btn-secondary'>Luxury Villa</button> <span style={{ color: 'orange', paddingLeft: "60px" }}> <b> $2.264.000</b></span>
                                </h5>
                                <h5 className='mt-3 mb-3'><b>12 New Street Miami 1254</b></h5>
                                <p className="card-text">Bedroom : <strong>8</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Bedroom : <strong>8</strong>.</p>
                                <p className="card-text">Area : <strong>545m2</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Bedroom : <strong>3</strong>.</p>
                                <p className="card-text">Parking : <strong>6</strong></p>
                                <div style={{ textAlign: 'center' }}>

                                    <a href="/" className="btn btn-primary" style={{ borderRadius: '50px' }}>Schedule to visit</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mt-5" >
                        <div className="card" style={{ width: '20rem', borderRadius: "30px" }}>
                            <img src="images/property-05.jpg" className="card-img-top" alt="..." style={{ borderRadius: "10px" }} />

                            <div className="card-body">
                                <h5 className="card-title">
                                    <button className='btn btn-secondary'>Luxury Villa</button> <span style={{ color: 'orange', paddingLeft: "60px" }}> <b> $2.264.000</b></span>
                                </h5>
                                <h5 className='mt-3 mb-3'><b>34 Beach Street Miami 4268 </b></h5>
                                <p className="card-text">Bedroom : <strong>8</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Bedroom : <strong>8</strong>.</p>
                                <p className="card-text">Area : <strong>545m2</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Bedroom : <strong>3</strong>.</p>
                                <p className="card-text">Parking : <strong>6</strong></p>
                                <div style={{ textAlign: 'center' }}>

                                    <a href="/" className="btn btn-primary" style={{ borderRadius: '50px' }}>Schedule to visit</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mt-5" >
                        <div className="card" style={{ width: '20rem', borderRadius: "30px" }}>
                            <img src="images/property-06.jpg" className="card-img-top" alt="..." style={{ borderRadius: "10px" }} />

                            <div className="card-body">
                                <h5 className="card-title">
                                    <button className='btn btn-secondary'>Luxury Villa</button> <span style={{ color: 'orange', paddingLeft: "60px" }}> <b> $2.264.000</b></span>
                                </h5>
                                <h5 className='mt-3 mb-3'><b>22 New Street Poraland 16520</b></h5>
                                <p className="card-text">Bedroom : <strong>8</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Bedroom : <strong>8</strong>.</p>
                                <p className="card-text">Area : <strong>545m2</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Bedroom : <strong>3</strong>.</p>
                                <p className="card-text">Parking : <strong>6</strong></p>
                                <div style={{ textAlign: 'center' }}>

                                    <a href="/" className="btn btn-primary" style={{ borderRadius: '50px' }}>Schedule to visit</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


            </div>


            <section className="container my-5">
                <div className="col-md-12">
                    <div className="row">

                        <div className="col-md-5 tblImg text-center p-4">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30266.5016246339!2d73.84644105041195!3d18.514765997741396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf59dc704f55%3A0x5e22987160c6c337!2sRego%20Digital%20Solutions%20Private%20Limited!5e0!3m2!1smr!2sin!4v1691766303071!5m2!1smr!2sin"
                                width="450" height="500" allowfullscreen="" loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"></iframe>


                        </div>

                        <div className="col-md-7 p-2" style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}>

                            <div className="form form-control text-center">
                                <h2 className="fw-bold text-center mt-3">Fill Your <span className="text-danger">Registration</span> </h2>

                                <input className="mt-4 p-3 w-100" type="text" placeholder="Your Full Name" />
                                <input className="mt-5 p-3" style={{ width: '49%' }} type="email" placeholder="Your Email" />
                                <input className="mt-5 p-3 mx-1" style={{ width: '48.9%' }} type="number" placeholder="Your Number" />
                                <input className="mt-4 p-3 w-100" type="text" placeholder="SubJect" />

                                <div className=" mt-5">
                                    <textarea name="Massage" id="user_mes"
                                        placeholder="Massage" className="w-100"></textarea>
                                </div>
                                <button className="btn btn-danger text-light w-50 fw-bold mt-3">Send A Message</button>


                            </div>

                        </div>
                    </div>
                </div>

            </section>

            <footer className='container-fuild'>
                <footer className="footer">
                    <div className="container">
                        <div className="footer-content">
                            <div className="footer-logo">
                                <h1> VILLA</h1>
                            </div>
                            <div className="footer-links">
                                <ul className="footer-menu">
                                    <li><a href="/">Home</a></li>
                                    <li><a href="/">Constact</a></li>
                                    <li><a href="/">Properties</a></li>
                                    <li><a href="/">Properties Details</a></li>
                                </ul>
                            </div>
                            <div className="footer-social">
                                <ul className="social-icons">
                                    <li><a href="/"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="/"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="/"><i className="fab fa-instagram"></i></a></li>
                                    <li><a href="/"><i className="fab fa-linkedin-in"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer-bottom">
                            <p>&copy; 2023 Your Company. All rights reserved.</p>
                        </div>
                    </div>
                </footer>




            </footer>

        </>
    )
}

export default Home
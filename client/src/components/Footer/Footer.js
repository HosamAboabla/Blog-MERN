

const Footer = () => {


    return (
        <footer className="main-footer">
            <div className="container">
                <div className="row">
                <div className="col-md-4">
                    <div className="logo">
                    <h6 className="text-white">Bootstrap Blog</h6>
                    </div>
                    <div className="contact-details">
                    <p>53 Broadway, Broklyn, NY 11249</p>
                    <p>Phone: (020) 123 456 789</p>
                    <p>Email: <a href="mailto:info@company.com">Info@Company.com</a></p>
                    <ul className="social-menu">
                        <li className="list-inline-item"><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li className="list-inline-item"><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li className="list-inline-item"><a href="#"><i className="fa fa-instagram"></i></a></li>
                        <li className="list-inline-item"><a href="#"><i className="fa fa-behance"></i></a></li>
                        <li className="list-inline-item"><a href="#"><i className="fa fa-pinterest"></i></a></li>
                    </ul>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="menus d-flex">
                    <ul className="list-unstyled">
                        <li> <a href="#">My Account</a></li>
                        <li> <a href="#">Add Listing</a></li>
                        <li> <a href="#">Pricing</a></li>
                        <li> <a href="#">Privacy &amp; Policy</a></li>
                    </ul>
                    <ul className="list-unstyled">
                        <li> <a href="#">Our Partners</a></li>
                        <li> <a href="#">FAQ</a></li>
                        <li> <a href="#">How It Works</a></li>
                        <li> <a href="#">Contact</a></li>
                    </ul>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="latest-posts"><a href="#">
                        <div className="post d-flex align-items-center">
                        <div className="image">
                            <img src="img/small-thumbnail-1.jpg" alt="..." className="img-fluid" /></div>
                        <div className="title"><strong>Hotels for all budgets</strong><span className="date last-meta">October 26, 2016</span></div>
                        </div></a><a href="#">
                        <div className="post d-flex align-items-center">
                        <div className="image">
                            <img src="img/small-thumbnail-2.jpg" alt="..." className="img-fluid" /></div>
                        <div className="title"><strong>Great street atrs in London</strong><span className="date last-meta">October 26, 2016</span></div>
                        </div></a><a href="#">
                        <div className="post d-flex align-items-center">
                        <div className="image">
                            <img src="img/small-thumbnail-3.jpg" alt="..." className="img-fluid" /></div>
                        <div className="title"><strong>Best coffee shops in Sydney</strong><span className="date last-meta">October 26, 2016</span></div>
                        </div></a></div>
                </div>
                </div>
            </div>
            <div className="copyrights">
                <div className="container">
                <div className="row">
                    <div className="col-md-6">
                    <p>&copy; 2017. All rights reserved. Your great site.</p>
                    </div>
                    <div className="col-md-6 text-right">
                    <p>Template By <a href="https://bootstrapious.com/p/bootstrap-carousel" className="text-white">Bootstrapious</a>
                    </p>
                    </div>
                </div>
                </div>
            </div>
            </footer>
      
    )
  }
  
  export default Footer
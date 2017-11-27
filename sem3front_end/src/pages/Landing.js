import React, {Component} from "react"

export default class Landing extends Component {
	render() {
		return (<div className="landing">
				  <section id="hero">
				    <div className="hero-container">
				      <div className="wow fadeIn">
				        <div className="hero-logo">
				        </div>

				        <h1>Groop 10/10</h1>
				        <h2><span className="rotating">We make beautiful houses available,We provide amazing rentals deals,We serve nearby locations suggestions</span></h2>
				        <div className="actions">
				          <a href="#about" className="btn-get-started">Get Strated</a>
				          <a href="#services" className="btn-services">Our Services</a>
				        </div>
				      </div>
				    </div>
			      </section>

				  <section id="services">
				    <div className="container wow fadeInUp">
				      <div className="row">
				        <div className="col-md-12">
				          <h3 className="section-title">Our Services</h3>
				          <div className="section-title-divider"></div>
				          <p className="section-description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium</p>
				        </div>
				      </div>

				      <div className="row">
				        <div className="col-md-4 service-item">
				          <div className="service-icon"><i className="fa fa-desktop"></i></div>
				          <h4 className="service-title"><a href="">Lorem Ipsum</a></h4>
				          <p className="service-description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
				        </div>
				        <div className="col-md-4 service-item">
				          <div className="service-icon"><i className="fa fa-bar-chart"></i></div>
				          <h4 className="service-title"><a href="">Dolor Sitema</a></h4>
				          <p className="service-description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
				        </div>
				        <div className="col-md-4 service-item">
				          <div className="service-icon"><i className="fa fa-paper-plane"></i></div>
				          <h4 className="service-title"><a href="">Sed ut perspiciatis</a></h4>
				          <p className="service-description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
				        </div>
				        <div className="col-md-4 service-item">
				          <div className="service-icon"><i className="fa fa-photo"></i></div>
				          <h4 className="service-title"><a href="">Magni Dolores</a></h4>
				          <p className="service-description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
				        </div>
				        <div className="col-md-4 service-item">
				          <div className="service-icon"><i className="fa fa-road"></i></div>
				          <h4 className="service-title"><a href="">Nemo Enim</a></h4>
				          <p className="service-description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
				        </div>
				        <div className="col-md-4 service-item">
				          <div className="service-icon"><i className="fa fa-shopping-bag"></i></div>
				          <h4 className="service-title"><a href="">Eiusmod Tempor</a></h4>
				          <p className="service-description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
				        </div>
				      </div>
				    </div>
				  </section>

				  <section id="subscribe">
				    <div className="container wow fadeInUp">
				      <div className="row">
				        <div className="col-md-8">
				          <h3 className="subscribe-title">Subscribe For Updates</h3>
				          <p className="subscribe-text">Join our 1000+ subscribers and get updates on our latest feature updates, new locations support, and amazing rental deals</p>
				        </div>
				        <div className="col-md-4 subscribe-btn-container">
				          <a className="subscribe-btn" href="#">Subscribe Now</a>
				        </div>
				      </div>
				    </div>
				  </section>

				  <section id="testimonials">
				    <div className="container wow fadeInUp">
				      <div className="row">
				        <div className="col-md-12">
				          <h3 className="section-title">Testimonials</h3>
				          <div className="section-title-divider"></div>
				          <p className="section-description">Erdo lide, nora porodo filece, salvam esse se, quod concedimus ses haec dicturum fuisse</p>
				        </div>
				      </div>

				      <div className="row">
				        <div className="col-md-3">
				          <div className="profile">
				            <div className="pic"><img src="img/client-1.jpg" alt=""></img></div>
				            <h4>Lars</h4>
				            <span>Copenhagen Business Academy</span>
				          </div>
				        </div>
				        <div className="col-md-9">
				          <div className="quote">
				            <b><img src="img/quote_sign_left.png" alt=""></img></b> Really like the Travis thingy. Also the Jackson. These guys know their shit. <small><img src="img/quote_sign_right.png" alt=""></img></small>
				          </div>
				        </div>
				      </div>

				      <div className="row">
				        <div className="col-md-9">
				          <div className="quote">
				            <b><img src="img/quote_sign_left.png" alt=""></img></b> Looks nice. Needs better UX & UI tho.<small><img src="img/quote_sign_right.png" alt=""></img></small>
				          </div>
				        </div>
				        <div className="col-md-3">
				          <div className="profile">
				            <div className="pic"><img src="img/caroline.jpg" alt=""></img></div>
				            <h4>Caroline Simonsen</h4>
				            <span>Copenhagen Business Academy</span>
				          </div>
				        </div>
				      </div>

				    </div>
				  </section>

				  <section id="team">
				    <div className="container wow fadeInUp">
				      <div className="row">
				        <div className="col-md-12">
				          <h3 className="section-title">Our Team</h3>
				          <div className="section-title-divider"></div>
				          <p className="section-description">Our product is 10/10, as our group is 4/4</p>
				        </div>
				      </div>

				      <div className="row">
				        <div className="col-md-3">
				          <div className="member">
				            <div className="pic"><img src="img/adam.jpg" alt=""></img></div>
				            <h4>Adam Bečvář</h4>
				            <span>Backend Testing Official and Birdman Lookalike</span>
				            <div className="social">
				              <a href=""><i className="fa fa-twitter"></i></a>
				              <a href=""><i className="fa fa-facebook"></i></a>
				              <a href=""><i className="fa fa-google-plus"></i></a>
				              <a href=""><i className="fa fa-linkedin"></i></a>
				            </div>
				          </div>
				        </div>

				        <div className="col-md-3">
				          <div className="member">
				            <div className="pic"><img src="img/petru.jpg" alt=""></img></div>
				            <h4>Petru Catana</h4>
				            <span>Frontend Components and Alcoholism Expert</span>
				            <div className="social">
				              <a href=""><i className="fa fa-twitter"></i></a>
				              <a href=""><i className="fa fa-facebook"></i></a>
				              <a href=""><i className="fa fa-google-plus"></i></a>
				              <a href=""><i className="fa fa-linkedin"></i></a>
				            </div>
				          </div>
				        </div>

				        <div className="col-md-3">
				          <div className="member">
				            <div className="pic"><img src="img/vlad.jpg" alt=""></img></div>
				            <h4>Vlad Burac</h4>
				            <span>Frontend Advisor and Color Green Enthusiast</span>
				            <div className="social">
				              <a href=""><i className="fa fa-twitter"></i></a>
				              <a href=""><i className="fa fa-facebook"></i></a>
				              <a href=""><i className="fa fa-google-plus"></i></a>
				              <a href=""><i className="fa fa-linkedin"></i></a>
				            </div>
				          </div>
				        </div>

				        <div className="col-md-3">
				          <div className="member">
				            <div className="pic"><img src="img/patrick.jpg" alt=""></img></div>
				            <h4>Patrick Fenger</h4>
				            <span>Backend Endpoint Authority and HTML Programmer (#partyhard)</span>
				            <div className="social">
				              <a href=""><i className="fa fa-twitter"></i></a>
				              <a href=""><i className="fa fa-facebook"></i></a>
				              <a href=""><i className="fa fa-google-plus"></i></a>
				              <a href=""><i className="fa fa-linkedin"></i></a>
				            </div>
				          </div>
				        </div>

				      </div>
				    </div>
				  </section>

				  <section id="contact">
				    <div className="container wow fadeInUp">
				      <div className="row">
				        <div className="col-md-12">
				          <h3 className="section-title">Contact Us</h3>
				          <div className="section-title-divider"></div>
				          <p className="section-description">Tell us where we fucked up!</p>
				        </div>
				      </div>

				      <div className="row">
				        <div className="col-md-3 col-md-push-2">
				          <div className="info">
				            <div>
				              <i className="fa fa-map-marker"></i>
				              <p>A108 Adam Street</p>
				              <p>New York, NY 535022</p>
				            </div>

				            <div>
				              <i className="fa fa-envelope"></i>
				              <p>info@example.com</p>
				            </div>

				            <div>
				              <i className="fa fa-phone"></i>
				              <p>+1 5589 55488 55s</p>
				            </div>

				          </div>
				        </div>

				        <div className="col-md-5 col-md-push-2">
				          <div className="form">
				            <div id="sendmessage">Your message has been sent. Thank you!</div>
				            <div id="errormessage"></div>
				            <form action="" method="post" role="form" className="contactForm">
				              <div className="form-group">
				                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
				                <div className="validation"></div>
				              </div>
				              <div className="form-group">
				                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
				                <div className="validation"></div>
				              </div>
				              <div className="form-group">
				                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
				                <div className="validation"></div>
				              </div>
				              <div className="form-group">
				                <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
				                <div className="validation"></div>
				              </div>
				              <div className="text-center"><button type="submit">Send Message</button></div>
				            </form>
				          </div>
				        </div>

				      </div>
				    </div>
				  </section>

				  <footer id="footer">
				    <div className="container">
				      <div className="row">
				        <div className="col-md-12">
				          <div className="credits">
				            <a>What are you doing here? Scroll up! Go rent something you fucktard!</a>
				          </div>
				        </div>
				      </div>
				    </div>
				  </footer>

				  <a href="#" className="back-to-top"><i className="fa fa-chevron-up"></i></a>
			</div>)
	}
}
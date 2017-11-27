import React, {Component} from "react"
import axios from 'axios'



export default class About extends Component {

  render() {
    return (
          <section id="about">
            <div className="container wow fadeInUp">
              <div className="row">
                <div className="col-md-12">
                  <h3 className="section-title">About Us</h3>
                  <div className="section-title-divider"></div>
                  <p className="section-description">We are a team of passionate developers determined to make this app, no matter how useless and confusing the specifications are</p>
                </div>
              </div>
            </div>
            <div className="container about-container wow fadeInUp">
              <div className="row">
                <div className="col-md-6 col-md-push-6 about-content">
                  <h2 className="about-title">We provide great services and ideas</h2>
                  <p className="about-text">
                    We the bess
                  </p>
                  <p className="about-text">
                    We makin' dough
                  </p>
                  <p className="about-text">
                    We got you covered on that rental game tho
                  </p>
                </div>
              </div>
            </div>
          </section>)
  }
}
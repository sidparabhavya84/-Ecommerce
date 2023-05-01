import React from 'react'
import './About.css'
import { Boxes, Receipt } from 'react-bootstrap-icons'

function About() {
    return (
        <section id="about" className="about mt-5 mb-5">
            <div className="container">
                <div className="row">
                    <div className="section-title" data-aos="fade-up">
                        <h2>About</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>
                    <div className="col-xl-6 col-lg-7" data-aos="fade-right">
                        <img src="img/about-img.jpg" className="img-fluid" alt />
                    </div>
                    <div className="col-xl-6 col-lg-5 pt-5 pt-lg-0">
                        <h3 data-aos="fade-up">Voluptatem dignissimos provident</h3>
                        <p data-aos="fade-up">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <div className="icon-box" data-aos="fade-up">
                            <Receipt />
                            <h4>Corporis voluptates sit</h4>
                            <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                        </div>
                        <div className="icon-box" data-aos="fade-up" data-aos-delay={100}>
                            <Boxes />
                            <h4>Ullamco laboris nisi</h4>
                            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                        </div>
                        
                        <div className="icon-box" data-aos="fade-up" data-aos-delay={200}>
                            <Boxes />
                            <h4>Ullamco laboris nisi</h4>
                            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
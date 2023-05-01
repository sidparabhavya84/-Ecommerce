import React from 'react'
import './Service.css'
import { Dribbble, FileEarmarkMedical, GlobeCentralSouthAsia, Speedometer2 } from 'react-bootstrap-icons'

function Service() {
    return (
        <>
            <section id="services" className="services section-bg mt-5 mb-5 bg-purple">
                <div className="container">
                    <div className="section-title" data-aos="fade-up">
                        <h2>Services</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="fade-up">
                            <div className="icon-box icon-box-pink">
                                <div className="icon"><Dribbble /></div>
                                <h4 className="title"><a href>Lorem Ipsum</a></h4>
                                <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="fade-up" data-aos-delay={100}>
                            <div className="icon-box icon-box-cyan">
                                <div className="icon"><FileEarmarkMedical /></div>
                                <h4 className="title"><a href>Sed ut perspiciatis</a></h4>
                                <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="fade-up" data-aos-delay={200}>
                            <div className="icon-box icon-box-green">
                                <div className="icon"><Speedometer2 /></div>
                                <h4 className="title"><a href>Magni Dolores</a></h4>
                                <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="fade-up" data-aos-delay={300}>
                            <div className="icon-box icon-box-blue">
                                <div className="icon"><GlobeCentralSouthAsia /></div>
                                <h4 className="title"><a href>Nemo Enim</a></h4>
                                <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
        </>
    )
}

export default Service
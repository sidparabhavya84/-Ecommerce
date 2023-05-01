import React from 'react'
import { Card } from 'react-bootstrap'
import './Review.css'

function Review() {
    return (
        <>
            <section id="testimonials" className="testimonials">
                <div className="container" data-aos="zoom-in">
                    <header className="section-header">
                        <h3>Testimonials</h3>
                    </header>
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay={100}>
                                <div className="swiper-wrapper d-flex">
                                    <Card className='col-4 p-2 me-2'>
                                        <div className="swiper-slide">
                                            <div className="testimonial-item">
                                                <img src="img/testimonial-1.jpg" className="testimonial-img" alt />
                                                <h3>Saul Goodman</h3>
                                                <h4>Ceo &amp; Founder</h4>
                                                <p>
                                                    Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                                                </p>
                                            </div>
                                        </div>
                                    </Card>
                                    <Card className='col-4' >

                                        <div className="swiper-slide">
                                            <div className="testimonial-item">
                                                <img src="img/testimonial-2.jpg" className="testimonial-img" alt />
                                                <h3>Sara Wilsson</h3>
                                                <h4>Designer</h4>
                                                <p>
                                                    Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                                                </p>
                                            </div>
                                        </div>
                                    </Card>
                                    <Card className='col-4'>

                                        <div className="swiper-slide">
                                            <div className="testimonial-item">
                                                <img src="img/testimonial-3.jpg" className="testimonial-img" alt />
                                                <h3>Jena Karlis</h3>
                                                <h4>Store Owner</h4>
                                                <p>
                                                    Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                                                </p>
                                            </div>
                                        </div>{/* End testimonial item */}
                                    </Card>
                                </div>
                                <div className="swiper-pagination" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default Review
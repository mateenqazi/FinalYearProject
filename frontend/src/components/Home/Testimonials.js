import React, { Component } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
class Testimonials extends Component {
    render() {

        const responsive = {
            desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 3,
                slidesToSlide: 3 // optional, default to 1.
            },
            tablet: {
                breakpoint: { max: 1024, min: 464 },
                items: 2,
                slidesToSlide: 2 // optional, default to 1.
            },
            mobile: {
                breakpoint: { max: 464, min: 0 },
                items: 1,
                slidesToSlide: 1 // optional, default to 1.
            }
        };
        return (
            <div className="site-section">
                <div className="container">
                    <div className="row">
                        <div className="title-section text-center col-12">
                            <h2 className="text-uppercase">Testimonials</h2>
                        </div>
                    </div>
                    <Carousel
                        swipeable={true}
                        draggable={true}
                        showDots={true}
                        responsive={responsive}
                        ssr={true} // means to render carousel on server-side.
                        infinite={true}
                        autoPlay={this.props.deviceType !== "mobile" ? true : false}
                        autoPlaySpeed={1000}
                        keyBoardControl={true}
                        customTransition="all .5"
                        transitionDuration={800}
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        deviceType={this.props.deviceType}
                        dotListClass="custom-dot-list-style"
                        itemClass="carousel-item-padding-40-px"
                    >
                        <div className="testimony">
                            <blockquote>
                                <img src="images/person_3.jpg" alt="Image" className="img-fluid w-25 mb-4 rounded-circle" />
                                <p>&ldquo;Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo omnis voluptatem consectetur quam tempore obcaecati maiores voluptate aspernatur iusto eveniet, placeat ab quod tenetur ducimus. Minus ratione sit quaerat unde.&rdquo;</p>
                            </blockquote>

                            <p>&mdash; Mateen</p>
                        </div>
                        <div className="testimony">
                            <blockquote>
                                <img src="images/person_2.jpg" alt="Image" className="img-fluid w-25 mb-4 rounded-circle" />
                                <p>&ldquo;Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo omnis voluptatem consectetur quam tempore obcaecati maiores voluptate aspernatur iusto eveniet, placeat ab quod tenetur ducimus. Minus ratione sit quaerat unde.&rdquo;</p>
                            </blockquote>
                            <p>&mdash; Kelly Holmes</p>
                        </div>
                        <div className="testimony">
                            <blockquote>
                                <img src="images/person_4.jpg" alt="Image" className="img-fluid w-25 mb-4 rounded-circle" />
                                <p>&ldquo;Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo omnis voluptatem consectetur quam tempore obcaecati maiores voluptate aspernatur iusto eveniet, placeat ab quod tenetur ducimus. Minus ratione sit quaerat unde.&rdquo;</p>
                            </blockquote>
                            <p>&mdash; Kelly Holmes</p>
                        </div>
                        <div className="testimony">
                            <blockquote>
                                <img src="data:image/jpeg;base64,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" alt="Image" className="img-fluid w-25 mb-4 rounded-circle" />
                                <p>&ldquo;Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo omnis voluptatem consectetur quam tempore obcaecati maiores voluptate aspernatur iusto eveniet, placeat ab quod tenetur ducimus. Minus ratione sit quaerat unde.&rdquo;</p>
                            </blockquote>
                            <p>&mdash; Kelly Holmes</p>
                        </div>
                    </Carousel>
                </div>
            </div>
        )
    }
}

export default Testimonials

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import Testimonials from './Testimonials'
class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isAuthenticated: false
        }
    }

    static getDerivedStateFromProps(props, state) {
        const { isAuthenticated } = props.auth;

        if (isAuthenticated !== state.isAuthenticated) {
            state.isAuthenticated = isAuthenticated
        }
        return state
    }

    render() {
        const { isAuthenticated } = this.state
        return (
            <div>
                <div className="site-wrap">
                    <div className="site-blocks-cover" style={{ backgroundImage: `url(images/hero_1.jpg)` }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7 mx-auto order-lg-2 align-self-center">
                                    <div className="site-block-cover-content text-center">
                                        <h2 className="sub-title">Effective Medicine, New Medicine Everyday</h2>
                                        <h1>Welcome To Medicine Donation System</h1>
                                        <p>
                                            <Link to="/shop" className="btn btn-primary px-5 py-3">Shop Now</Link>
                                            {/* <a href="#" >Shop Now</a> */}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="site-section">
                        <div className="container">
                            <div className="row align-items-stretch section-overlap">
                                <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
                                    <div className="banner-wrap bg-primary h-100">
                                        {isAuthenticated ?
                                            <a href="#" className="h-100">
                                                <h5 style={{ color: 'white' }}>Add Post</h5>
                                                <p style={{ color: 'white' }}>Post or Request Medicine.</p>
                                                <Link to="/post"> <button style={{ padding: '2% 12% 2% 12%', color: 'white', fontSize: '22px', fontWeight: 'bold', border: 'none' }}>ADD Post </button></Link>
                                            </a> :
                                            <a href="#" className="h-100">
                                                <h5 style={{ color: 'white' }}>LOGIN</h5>
                                                <p style={{ color: 'white' }}>If you have an account.</p>
                                                <Link to="/login"> <button style={{ padding: '2% 12% 2% 12%', color: 'white', fontSize: '22px', fontWeight: 'bold', border: 'none' }}>Login </button></Link>
                                            </a>
                                        }
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
                                    <div className="banner-wrap h-100">
                                        {isAuthenticated ? <a href="#" className="h-100">
                                            <h5>Donate to Save Lives</h5>
                                            <p>
                                                "If anyone saved a life it would be as if he saved the life of the whole humanity."
                                                <sub>(Quran 5:32)</sub>
                                            </p>
                                        </a> :
                                            <a href="#" className="h-100">
                                                <h5>Season <br /> Sale 50% Off</h5>
                                                <p>
                                                    Amet sit amet dolor
                                    <strong>Lorem, ipsum dolor sit amet consectetur adipisicing.</strong>
                                                </p>
                                            </a>
                                        }

                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
                                    <div className="banner-wrap bg-warning h-100">
                                        {isAuthenticated ?
                                            <a href="#" className="h-100">
                                                <h5>Add Medicine</h5>
                                                <p>
                                                    Create Medicine
                                            </p>
                                                <Link to="/add-medinice"> <button style={{ border: 'none', padding: '2% 12% 2% 12%', fontSize: '22px', fontWeight: 'bold', color: 'white' }}>ADD Medicine </button></Link>
                                            </a>
                                            :
                                            <a href="#" className="h-100">
                                                <h5>SIGN UP</h5>
                                                <p>
                                                    Create an Account!
                                                </p>
                                                <Link to="/sign-up"> <button style={{ border: 'none', padding: '2% 12% 2% 12%', fontSize: '22px', fontWeight: 'bold', color: 'white' }}>Sign Up </button></Link>
                                            </a>
                                        }

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="site-section">
                        {/* <div className="container">
                            <div className="row">
                                <div className="title-section text-center col-12">
                                    <h2 className="text-uppercase">Popular Products</h2>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-6 col-lg-4 text-center item mb-4">
                                    <span className="tag">Sale</span>
                                    <a href="shop-single.html"> <img src="images/product_01.png" alt="Image" /></a>
                                    <h3 className="text-dark"><a href="shop-single.html">Bioderma</a></h3>
                                    <p className="price"><del>95.00</del> &mdash; $55.00</p>
                                </div>
                                <div className="col-sm-6 col-lg-4 text-center item mb-4">
                                    <a href="shop-single.html"> <img src="images/product_02.png" alt="Image" /></a>
                                    <h3 className="text-dark"><a href="shop-single.html">Chanca Piedra</a></h3>
                                    <p className="price">$70.00</p>
                                </div>
                                <div className="col-sm-6 col-lg-4 text-center item mb-4">
                                    <a href="shop-single.html"> <img src="images/product_03.png" alt="Image" /></a>
                                    <h3 className="text-dark"><a href="shop-single.html">Umcka Cold Care</a></h3>
                                    <p className="price">$120.00</p>
                                </div>

                                <div className="col-sm-6 col-lg-4 text-center item mb-4">

                                    <a href="shop-single.html"> <img src="images/product_04.png" alt="Image" /></a>
                                    <h3 className="text-dark"><a href="shop-single.html">Cetyl Pure</a></h3>
                                    <p className="price"><del>45.00</del> &mdash; $20.00</p>
                                </div>
                                <div className="col-sm-6 col-lg-4 text-center item mb-4">
                                    <a href="shop-single.html"> <img src="images/product_05.png" alt="Image" /></a>
                                    <h3 className="text-dark"><a href="shop-single.html">CLA Core</a></h3>
                                    <p className="price">$38.00</p>
                                </div>
                                <div className="col-sm-6 col-lg-4 text-center item mb-4">
                                    <span className="tag">Sale</span>
                                    <a href="shop-single.html"> <img src="images/product_06.png" alt="Image" /></a>
                                    <h3 className="text-dark"><a href="shop-single.html">Poo Pourri</a></h3>
                                    <p className="price"><del>$89</del> &mdash; $38.00</p>
                                </div>
                            </div>
                            <div className="row mt-5">
                                <div className="col-12 text-center">
                                    <a href="shop.html" className="btn btn-primary px-4 py-3">View All Products</a>
                                </div>
                            </div>
                        </div>
                    </div>
 */}

                    {/* <div className="site-section bg-light">
                        <div className="container">
                            <div className="row">
                                <div className="title-section text-center col-12">
                                    <h2 className="text-uppercase">New Products</h2>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 block-3 products-wrap">
                                    <div className="nonloop-block-3 owl-carousel">
                                        <div className="text-center item mb-4">
                                            <a href="shop-single.html"> <img src="images/product_03.png" alt="Image" /></a>
                                            <h3 className="text-dark"><a href="shop-single.html">Umcka Cold Care</a></h3>
                                            <p className="price">$120.00</p>
                                        </div>

                                        <div className="text-center item mb-4">
                                            <a href="shop-single.html"> <img src="images/product_01.png" alt="Image" /></a>
                                            <h3 className="text-dark"><a href="shop-single.html">Umcka Cold Care</a></h3>
                                            <p className="price">$120.00</p>
                                        </div>

                                        <div className="text-center item mb-4">
                                            <a href="shop-single.html"> <img src="images/product_02.png" alt="Image" /></a>
                                            <h3 className="text-dark"><a href="shop-single.html">Umcka Cold Care</a></h3>
                                            <p className="price">$120.00</p>
                                        </div>

                                        <div className="text-center item mb-4">
                                            <a href="shop-single.html"> <img src="images/product_04.png" alt="Image" /></a>
                                            <h3 className="text-dark"><a href="shop-single.html">Umcka Cold Care</a></h3>
                                            <p className="price">$120.00</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Testimonials />
                    <div className="site-section bg-secondary bg-image" style={{ backgroundImage: `url(images/bg_2.jpg)` }}>
                        <div className="container">
                            <div className="row align-items-stretch">
                                <div className="col-lg-6 mb-5 mb-lg-0">
                                    <a href="#" className="banner-1 h-100 d-flex" style={{ backgroundImage: `url(images/bg_1.jpg)` }}>

                                        <div className="banner-1-inner align-self-center">
                                            <h2>Pharma Products</h2>
                                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae ex ad minus rem odio voluptatem.
                </p>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-lg-6 mb-5 mb-lg-0">
                                    <a href="#" className="banner-1 h-100 d-flex" style={{ backgroundImage: `url(images/bg_2.jpg)` }}>
                                        <div className="banner-1-inner ml-auto  align-self-center">
                                            <h2>Rated by Experts</h2>
                                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae ex ad minus rem odio voluptatem.
                </p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
            </div></div>
        )
    }
}
const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, {})(withRouter(Home))

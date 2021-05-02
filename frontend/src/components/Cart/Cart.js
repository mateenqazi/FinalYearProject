import React, { Component } from 'react'

class Cart extends Component {
    render() {
        return (

            <div>
                <div className="site-wrap">
                    <div className="bg-light py-3">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 mb-0">
                                    <a href="index.html">Home</a> <span className="mx-2 mb-0">/</span>
                                    <strong className="text-black">Cart</strong>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="site-section">
                        <div className="container">
                            <div className="row mb-5">
                                <form className="col-md-12" method="post">
                                    <div className="site-blocks-table">
                                        <table className="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th className="product-thumbnail">Image</th>
                                                    <th className="product-name">Product</th>
                                                    <th className="product-price">Price</th>
                                                    <th className="product-quantity">Quantity</th>
                                                    <th className="product-total">Total</th>
                                                    <th className="product-remove">Remove</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="product-thumbnail">
                                                        <img src="images/product_02.png" alt="Image" className="img-fluid" />
                                                    </td>
                                                    <td className="product-name">
                                                        <h2 className="h5 text-black">Ibuprofen</h2>
                                                    </td>
                                                    <td>$55.00</td>
                                                    <td>
                                                        <div className="input-group mb-3" style={{ maxWidth: "120px" }}>
                                                            <div className="input-group-prepend">
                                                                <button className="btn btn-outline-primary js-btn-minus" type="button">-</button>
                                                            </div>
                                                            <input type="text" className="form-control text-center" value="1" placeholder=""
                                                                aria-label="Example text with button addon" aria-describedby="button-addon1" />
                                                            <div className="input-group-append">
                                                                <button className="btn btn-outline-primary js-btn-plus" type="button">+</button>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>$49.00</td>
                                                    <td><a href="#" className="btn btn-primary height-auto btn-sm">X</a></td>
                                                </tr>

                                                <tr>
                                                    <td className="product-thumbnail">
                                                        <img src="images/product_01.png" alt="Image" className="img-fluid" />
                                                    </td>
                                                    <td className="product-name">
                                                        <h2 className="h5 text-black">Bioderma</h2>
                                                    </td>
                                                    <td>$49.00</td>
                                                    <td>
                                                        <div className="input-group mb-3" style={{ maxWidth: "120px" }}>
                                                            <div className="input-group-prepend">
                                                                <button className="btn btn-outline-primary js-btn-minus" type="button">-</button>
                                                            </div>
                                                            <input type="text" className="form-control text-center" value="1" placeholder=""
                                                                aria-label="Example text with button addon" aria-describedby="button-addon1" />
                                                            <div className="input-group-append">
                                                                <button className="btn btn-outline-primary js-btn-plus" type="button">+</button>
                                                            </div>
                                                        </div>

                                                    </td>
                                                    <td>$49.00</td>
                                                    <td><a href="#" className="btn btn-primary height-auto btn-sm">X</a></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </form>
                            </div>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="row mb-5">
                                        <div className="col-md-6 mb-3 mb-md-0">
                                            <button className="btn btn-primary btn-md btn-block">Update Cart</button>
                                        </div>
                                        <div className="col-md-6">
                                            <button className="btn btn-outline-primary btn-md btn-block">Continue Shopping</button>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <label className="text-black h4" for="coupon">Coupon</label>
                                            <p>Enter your coupon code if you have one.</p>
                                        </div>
                                        <div className="col-md-8 mb-3 mb-md-0">
                                            <input type="text" className="form-control py-3" id="coupon" placeholder="Coupon Code" />
                                        </div>
                                        <div className="col-md-4">
                                            <button className="btn btn-primary btn-md px-4">Apply Coupon</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 pl-5">
                                    <div className="row justify-content-end">
                                        <div className="col-md-7">
                                            <div className="row">
                                                <div className="col-md-12 text-right border-bottom mb-5">
                                                    <h3 className="text-black h4 text-uppercase">Cart Totals</h3>
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col-md-6">
                                                    <span className="text-black">Subtotal</span>
                                                </div>
                                                <div className="col-md-6 text-right">
                                                    <strong className="text-black">$230.00</strong>
                                                </div>
                                            </div>
                                            <div className="row mb-5">
                                                <div className="col-md-6">
                                                    <span className="text-black">Total</span>
                                                </div>
                                                <div className="col-md-6 text-right">
                                                    <strong className="text-black">$230.00</strong>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-12">
                                                    <button className="btn btn-primary btn-lg btn-block" onclick="window.location='checkout.html'">Proceed To
                  Checkout</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="site-section bg-secondary bg-image" style={{ backgroundImage: 'url(images/bg_2.jpg)' }}>
                        <div className="container">
                            <div className="row align-items-stretch">
                                <div className="col-lg-6 mb-5 mb-lg-0">
                                    <a href="#" className="banner-1 h-100 d-flex" style={{ backgroundImage: 'url(images/bg_1.jpg)' }}>
                                        <div className="banner-1-inner align-self-center">
                                            <h2>Pharma Products</h2>
                                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae ex ad minus rem odio voluptatem.
            </p>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-lg-6 mb-5 mb-lg-0">
                                    <a href="#" className="banner-1 h-100 d-flex" style={{ backgroundImage: 'url(images/bg_2.jpg)' }}>
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


                    <footer className="site-footer">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 col-lg-3 mb-4 mb-lg-0">

                                    <div className="block-7">
                                        <h3 className="footer-heading mb-4">About Us</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius quae reiciendis distinctio voluptates
            sed dolorum excepturi iure eaque, aut unde.</p>
                                    </div>

                                </div>
                                <div className="col-lg-3 mx-auto mb-5 mb-lg-0">
                                    <h3 className="footer-heading mb-4">Quick Links</h3>
                                    <ul className="list-unstyled">
                                        <li><a href="#">Supplements</a></li>
                                        <li><a href="#">Vitamins</a></li>
                                        <li><a href="#">Diet &amp; Nutrition</a></li>
                                        <li><a href="#">Tea &amp; Coffee</a></li>
                                    </ul>
                                </div>

                                <div className="col-md-6 col-lg-3">
                                    <div className="block-5 mb-5">
                                        <h3 className="footer-heading mb-4">Contact Info</h3>
                                        <ul className="list-unstyled">
                                            <li className="address">203 Fake St. Mountain View, San Francisco, California, USA</li>
                                            <li className="phone"><a href="tel://23923929210">+2 392 3929 210</a></li>
                                            <li className="email">emailaddress@domain.com</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </footer>
                </div>
            </div>
        )
    }
}

export default Cart

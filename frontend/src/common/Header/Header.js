import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
class Header extends Component {
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
                <div className="site-navbar py-2">
                    <div className="search-wrap">
                        <div className="container">
                            <a href="#" className="search-close js-search-close"><span className="icon-close2"></span></a>
                            <form action="#" method="post">
                                <input type="text" className="form-control" placeholder="Search keyword and hit enter..." />
                            </form>
                        </div>
                    </div>
                    <div className="container">
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="logo">
                                <div className="site-logo">
                                    <Link to="/" className="js-logo-clone">Pharma</Link>
                                </div>
                            </div>
                            <div className="main-nav d-none d-lg-block">
                                <nav className="site-navigation text-right text-md-center" role="navigation">
                                    <ul className="site-menu js-clone-nav d-none d-lg-block">
                                        <li className="active"><Link to="/">Home</Link></li>
                                        {isAuthenticated ? <li><Link to="/post">Post Medicine</Link></li> : null}
                                        <li><Link to="/shop">Store</Link></li>
                                        <li className="has-children">
                                            <a href="#">Dropdown</a>
                                            <ul className="dropdown">
                                                <li><a href="#">Supplements</a></li>
                                                <li className="has-children">
                                                    <a href="#">Vitamins</a>
                                                    <ul className="dropdown">
                                                        <li><a href="#">Supplements</a></li>
                                                        <li><a href="#">Vitamins</a></li>
                                                        <li><a href="#">Diet &amp; Nutrition</a></li>
                                                        <li><a href="#">Tea &amp; Coffee</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="#">Diet &amp; Nutrition</a></li>
                                                <li><a href="#">Tea &amp; Coffee</a></li>

                                            </ul>
                                        </li>
                                        <li><Link to="/about">About</Link></li>
                                        <li><Link to="/contact">Contact</Link></li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="icons">
                                <a href="#" className="icons-btn d-inline-block js-search-open"><span className="icon-search"></span></a>
                                <Link to="/cart" className="icons-btn d-inline-block bag">
                                    <span className="icon-shopping-bag"></span>
                                    <span className="number">2</span>
                                </Link>
                                <a href="#" className="site-menu-toggle js-menu-toggle ml-3 d-inline-block d-lg-none"><span
                                    className="icon-menu"></span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, {})(withRouter(Header))

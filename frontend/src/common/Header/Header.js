import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { logoutUser } from '../../store/actions/authAction'
class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isAuthenticated: false,
            id: ''
        }
    }

    static getDerivedStateFromProps(props, state) {
        const { isAuthenticated, user } = props.auth;
        if (isAuthenticated !== state.isAuthenticated) {
            state.isAuthenticated = isAuthenticated
        }
        if (user && user.userId !== state.id) {
            state.id = user.userId
        }
        return state
    }
    logoutHanlder = (e) => {
        e.preventDefault()
        e.stopPropagation()
        this.props.logoutUser(this.props.history)
    }

    onSettingPage = (id, e) => {
        e.preventDefault()
        e.stopPropagation()
        console.log('hello pakistan', id)
        this.props.history.push('/setting/' + id)
    }

    render() {
        const { isAuthenticated, id } = this.state
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
                                        <li><Link to="/shop">Store</Link></li>
                                        <li className="has-children">
                                            <a href="#">Post</a>
                                            <ul className="dropdown">
                                                <li><a href="#">Veiw Post</a></li>
                                                {isAuthenticated ? <li><Link to="/post">Add Post</Link></li> : null}
                                            </ul>
                                        </li>
                                        <li><Link to="/about">About</Link></li>
                                        <li><Link to="/contact">Contact</Link></li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="icons">

                                <a href="#" className="icons-btn d-inline-block js-search-open"><span className="icon-search"></span></a>
                                {isAuthenticated ?
                                    <span>
                                        <a href="#" className="icons-btn d-inline-block js-search-open"><span onClick={(e) => this.onSettingPage(id, e)} className="icon-settings"></span></a>
                                        <a href="#" className="icons-btn d-inline-block js-search-open"><span onClick={this.logoutHanlder} className="icon-logout"></span></a>

                                    </span>
                                    : null
                                }
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

export default connect(mapStateToProps, { logoutUser })(withRouter(Header))

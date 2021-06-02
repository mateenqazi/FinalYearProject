import React, { Component } from 'react'
import { getAllMedicine } from '../../store/actions/medicineAction'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
class Shop extends Component {
    constructor(props) {
        super(props)
        this.state = {
            medicine: null,
        }
    }
    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.getAllMedicine()
    }
    static getDerivedStateFromProps(props, state) {
        const { medicine } = props.medicine
        if (medicine && medicine !== state.medicine) {
            state.medicine = medicine
        }
        return state
    }

    render() {
        const { medicine } = this.state
        console.log('hahahah', medicine)
        return (
            <div>
                <div className="site-wrap">
                    <div className="bg-light py-3">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 mb-0"><a href="index.html">Home</a> <span className="mx-2 mb-0">/</span> <strong className="text-black">Store</strong></div>
                            </div>
                        </div>
                    </div>
                    <div className="site-section">
                        <div className="container">
                            <div className="row">
                                {medicine && medicine.map((item, key) => {
                                    return <div key={key} className="col-sm-6 col-lg-4 text-center item mb-4">
                                        <Link to={`/item/${item._id}`}> <img src={`${item.image}`} alt="Image" /></Link>
                                        <h3 className="text-dark"><Link to={`/item/${item._id}`}>{item.name}</Link></h3>
                                        <p className="price">{item.price}</p>
                                    </div>

                                })}
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
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    medicine: state.medicine
});
export default connect(mapStateToProps, { getAllMedicine })(withRouter(Shop))
import React, { Component } from 'react'
import { singleMedicine } from '../../store/actions/medicineAction'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
class SingleShop extends Component {
    constructor(props) {
        super(props)
        this.state = {
            singleMedicine: null
        }
    }
    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.singleMedicine(this.props.match.params.id)
    }
    static getDerivedStateFromProps(props, state) {
        const { singleMedicine } = props.medicine
        if (singleMedicine && singleMedicine !== state.singleMedicine) {
            state.singleMedicine = singleMedicine
        }
        return state
    }
    render() {
        const { singleMedicine } = this.state
        console.log('singleMedicine', singleMedicine)
        return (
            <div>
                <div className="site-wrap">
                    <div className="bg-light py-3">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 mb-0"><a href="index.html">Home</a> <span className="mx-2 mb-0">/</span> <a
                                    href="shop.html">Store</a> <span className="mx-2 mb-0">/</span> <strong className="text-black">{singleMedicine && singleMedicine.name}</strong></div>
                            </div>
                        </div>
                    </div>

                    <div className="site-section">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-5 mr-auto">
                                    <div className="border text-center">
                                        <img src={singleMedicine && singleMedicine.image} alt="Image" className="img-fluid p-5" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <h2 className="text-black">{singleMedicine && singleMedicine.name}</h2>

<br></br><br></br>

                                    <p><strong className="text-primary h4">Rs. {singleMedicine && singleMedicine.price}</strong></p>



                                    <div className="mb-5">
                                        <div className="input-group mb-3" style={{ maxWidth: '220px' }}>
                                            <input type="text" readOnly disabled className="form-control text-center" value={singleMedicine && singleMedicine.quantity} placeholder=""
                                                aria-label="Example text with button addon" aria-describedby="button-addon1" />
                                        </div>

                                    </div>
                                    <br></br><br></br>
                                    <p><strong>Side Effects: </strong>{singleMedicine && singleMedicine.side_effects}</p>
                                    <p><strong>Uses: </strong> <mark>{singleMedicine && singleMedicine.uses}</mark></p>
                                    <p><strong>Category: </strong> <mark>{singleMedicine && singleMedicine.category}</mark></p>


<br></br><br></br>

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
export default connect(mapStateToProps, { singleMedicine })(withRouter(SingleShop))

import React, { Component } from "react";
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { AddMedicineApi } from '../../store/actions/medicineAction'

class AddMedicine extends Component {
    constructor(props) {
        super(props);
        this.state = {

            name: '',
            price: '0',
            expire_date: '',
            category: '',
            qty: '',
            type: ''
        }
    };

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    onSubmitHandler = (e) => {
        e.preventDefault()
        const data = {
            id: this.props.auth.user.userId,
            name: this.state.name,
            price: this.state.price,
            expire_date: this.state.expire_date,
            category: this.state.category,
            qty: this.state.qty,
            type: this.state.type
        }
        this.props.AddMedicineApi(data, this.props.history)
    }
    onChangeHandler = (e) => {
        e.preventDefault()
        if (e.target.name === "type" && e.target.value === "free") {
            this.setState({
                [e.target.name]: e.target.value,
                'price': '0'
            })
        }
        else {
            this.setState({
                [e.target.name]: e.target.value
            })
        }
    }

    render() {
        const { name, category, type, expire_date, price, qty } = this.state
        return (
            <div>
                <h2 style={{ marginTop: '10px' }}>Add Medicine</h2>
                <form style={{ margin: '3% 10% 0 10%' }} onSubmit={this.onSubmitHandler}>
                    <div className="p-3 p-lg-5 border">
                        <div className="form-group row">
                            <div className="col-md-12">
                                <label htmlFor="email_address" >Name</label>
                                <input
                                    type="text"
                                    value={name}
                                    id="name"
                                    onChange={this.onChangeHandler}
                                    name="name"
                                    className="form-control"
                                    placeholder="Enter Name of Medicine"
                                />
                            </div>

                            <div className="col-md-12">
                                <label htmlFor="email_address">Expire Date</label>
                                <input
                                    type="date"
                                    value={expire_date}
                                    id="expire_date"
                                    onChange={this.onChangeHandler}
                                    name="expire_date"
                                    className="form-control"
                                    placeholder="Enter Expire Date"
                                />

                            </div>
                            <div className="col-md-12">
                                <label htmlFor="email_address">Quantity</label>
                                <input
                                    value={qty}
                                    type="text"
                                    onChange={this.onChangeHandler}
                                    id="qty"
                                    name="qty"
                                    className="form-control"
                                    placeholder="Enter quantity"
                                />

                            </div>

                            <div style={{ display: 'flex' }}>
                                <div className="col-md-6">

                                    <div className="form-group">
                                        <label className="label input-required" htmlFor="gender">Category</label>
                                        <select
                                            value={category}
                                            onChange={this.onChangeHandler}
                                            className="form-control text-capitalize"
                                            id="gender"
                                            name="category"
                                            required="required"
                                        >
                                            <option default value='' disabled>Select Category</option>
                                            <option value='tablet'>Capsules/Tablets</option>
                                            <option value='liquid'>Liquid</option>
                                            <option value='topical'>Topical</option>
                                            <option value='injections'>Injections</option>
                                            <option value='inhalers'>Inhalers</option>
                                            <option value='drops'>Drops</option>
                                            <option value='equiqment'>Medical Equiqment</option>
                                        </select>
                                    </div>

                                </div>

                                <label htmlFor="email_address">Sale Type</label>
                                <div className="col-md-6 d-flex justify-content-between">

                                    <input type="radio" id="free" name="type" value="free" onChange={this.onChangeHandler} />
                                    <label for="free">Free</label>
                                    <input type="radio" id="price" name="type" value="price" onChange={this.onChangeHandler} />
                                    <label for="price">Discounted Price</label>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <label htmlFor="email_address">Price</label>
                                <input
                                    value={price}
                                    onChange={this.onChangeHandler}
                                    type="text"
                                    disabled={type === "free" ? true : false}
                                    readOnly={type === "free" ? true : false}
                                    id="qty"
                                    name="price"
                                    className="form-control"
                                    placeholder="Enter quantity"
                                />

                            </div>
                            <div className="col-md-12">
                                <input type="submit" style={{ background: 'aqua', marginTop: '4%' }} className="form-control" />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    auth: state.auth
});
export default connect(mapStateToProps, { AddMedicineApi })(withRouter(AddMedicine))
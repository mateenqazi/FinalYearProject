import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { SignupApi } from '../../store/actions/authAction'
class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user_name: '',
            contact_number: '',
            email: '',
            password: '',
            confirm_password: ''
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    onSubmitHandler = (e) => {
        e.preventDefault()
        const data = {
            user_name: this.state.user_name,
            contact_number: this.state.contact_number,
            email: this.state.email,
            password: this.state.password,
        }
        this.props.SignupApi(data, this.props.history)
    }


    changeHandler = (e) => {
        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        const { user_name, password, confirm_password, contact_number, email } = this.state
        return (
            <div>
                <h2 style={{ marginTop: '10px' }}>Sign Up</h2>
                <form style={{ margin: '3% 10% 0 10%' }} onSubmit={this.onSubmitHandler}>
                    <div className="p-3 p-lg-5 border">
                        <div className="form-group row">
                            <div className="col-md-6">
                                <label for="c_email" className="text-black">User Name <span className="text-danger">*</span></label>
                                <input type="text" className="form-control" id="c_email" name="user_name" value={user_name} onChange={this.changeHandler} placeholder="" />
                            </div>
                            <div className="col-md-6">
                                <label for="c_email" className="text-black">Number <span className="text-danger">*</span></label>
                                <input type="text" pattern="[0-9]+" maxLength="11" minLength="11" className="form-control" id="c_email" onChange={this.changeHandler} name="contact_number" value={contact_number} placeholder="" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-md-12">
                                <label for="c_email" className="text-black">Email <span className="text-danger">*</span></label>
                                <input type="email" className="form-control" id="c_email" name="email" value={email} onChange={this.changeHandler} placeholder="" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-md-6">
                                <label for="c_email" className="text-black">Password <span className="text-danger">*</span></label>
                                <input type="password" value={password} onChange={this.changeHandler} className="form-control" id="c_email" name="password" placeholder="" />

                            </div>
                            <div className="col-md-6">
                                <label for="c_email" className="text-black">Confirm Password <span className="text-danger">*</span></label>
                                <input type="password" value={confirm_password} className="form-control" id="c_email" onChange={this.changeHandler} name="confirm_password" placeholder="" />
                            </div>
                            <div className="col-md-12">
                                <input type="submit" style={{ background: 'aqua', marginTop: '4%' }} className="form-control" />
                            </div>
                            <p style={{ margin: '16px auto' }}>Already an Account?<Link to="/login"><span style={{ color: 'aqua', marginLeft: '8px', fontWeight: 'bold', cursor: 'pointer' }}> Click Here</span></Link></p>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default connect(null, { SignupApi })(withRouter(Signup))

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { loginApi } from '../../store/actions/authAction'
class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    onSubmitHandler = (e) => {
        e.preventDefault()
        const data = {
            email: this.state.email,
            password: this.state.password
        }
        this.props.loginApi(data, this.props.history)
    }
    onChangeHandler = (e) => {
        e.preventDefault()
        console.log('hello', e.target.name)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const { email, password } = this.state
        return (
            <div>
                <h2 style={{ marginTop: '10px' }}>LOGIN</h2>
                <form style={{ margin: '3% 10% 0 10%' }} onSubmit={this.onSubmitHandler}>
                    <div className="p-3 p-lg-5 border">
                        <div className="form-group row">
                            <div className="col-md-6">
                                <label for="c_email" className="text-black">Email <span className="text-danger">*</span></label>
                                <input type="email" name="email" onChange={this.onChangeHandler} value={email} className="form-control" id="c_email" placeholder="" />
                            </div>
                            <div className="col-md-6">
                                <label for="c_email" className="text-black">Password <span className="text-danger">*</span></label>
                                <input type="password" onChange={this.onChangeHandler} value={password} name="password" className="form-control" id="c_email" placeholder="" />
                            </div>
                            <div className="col-md-12">
                                <input type="submit" style={{ background: 'aqua', marginTop: '4%' }} className="form-control" />
                            </div>
                            <p style={{ margin: '16px auto' }}>Don't have an Account?<Link to="/sign-up"><span style={{ color: 'aqua', marginLeft: '8px', fontWeight: 'bold', cursor: 'pointer' }}> Click Here</span></Link></p>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
export default connect(null, { loginApi })(withRouter(Login))

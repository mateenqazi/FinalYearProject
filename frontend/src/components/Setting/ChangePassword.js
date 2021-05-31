import React from 'react';
import { connect } from 'react-redux';
import { updatePassword } from '../../store/actions/authAction';
import { withRouter, Link } from 'react-router-dom';


class ChangePassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            oldPassword: '',
            newPassword: '',
            confirmPassword: '',
            errors: {}
        };
    }

    onSubmit = e => {
        e.preventDefault();
        this.setState({ errors: {} });
        const inputPassword = {
            id: this.state.id,
            oldPassword: this.state.oldPassword,
            newPassword: this.state.newPassword,
            confirmPassword: this.state.confirmPassword,
        };
        this.props.updatePassword(inputPassword, this.props.history);
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        const { errors } = this.state;
        let pageContent = '';
        pageContent = <div className="card card-custom">
            <p className="form-page-heading">
                Change Password
			</p>
            <hr />

            <div className="">
                <form onSubmit={this.onSubmit} className="px-4 pt-2 pb-4">
                    <div className="form-group">
                        <label className="input-required" htmlFor="current-password">Current Password</label>
                        <input
                            id="current-password"
                            type="password"
                            className="form-control"
                            name="oldPassword"
                            onChange={this.onChange}
                            required="required"
                        />
                        {errors.oldPassword && <div className="invalid-feedback d-block">{errors.oldPassword}</div>}
                    </div>
                    <div className="form-group row">
                        <div className="col-lg-6">
                            <label className="input-required" htmlFor="new-password">New Password</label>
                            <input
                                id="new-password"
                                type="password"
                                className="form-control"
                                name="newPassword"
                                onChange={this.onChange}
                                required="required"
                                pattern=".{5,30}"
                                title="Password must have at least 5 and at most 30 characters"
                            />
                            {errors.newPassword && <div className="invalid-feedback d-block">{errors.newPassword}</div>}
                        </div>
                        <div className="col-lg-6">
                            <label className="input-required" htmlFor="confirm-password">Confirm Password</label>
                            <input
                                id="confirm-password"
                                type="password"
                                className="form-control"
                                name="confirmPassword"
                                onChange={this.onChange}
                                required="required"
                                pattern=".{5,30}"
                                title="Password must have at-least 5 and at-most 30 characters"
                            />
                            {errors.confirmPassword && <div className="invalid-feedback d-block">{errors.confirmPassword}</div>}
                        </div>
                    </div>
                    <div className="password-field">
                        <button type="submit" className="btn btn-primary-panel">Update</button>
                    </div>
                </form>
            </div>
        </div>
        // }

        return (
            <div>
                {pageContent}
            </div>
        );
    }
};

const mapStateToProps = state => ({
    user: state.user,
});

export default connect(mapStateToProps, { updatePassword })(withRouter(ChangePassword));

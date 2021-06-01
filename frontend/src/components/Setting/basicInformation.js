import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUserInfo, editUserInfo } from '../../store/actions/userAction'
import DateFormat from 'dateformat';

class BasicInformation extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            profile: null,
            user_name: "",
            contact_number: "",
            email: "",
            dob: new Date(),
            gender: '',
            bio: '',
        };
    }

    static getDerivedStateFromProps(props, state) {
        const { profile } = props.user
        if (profile && profile !== state.profile) {
            state.profile = profile
            state.user_name = profile.user_name
            state.contact_number = profile.contact_number
            state.email = profile.email
            state.dob = DateFormat(profile.dob, "yyyy-mm-dd")
            state.gender = profile.gender
            state.bio = profile.bio
        }
    }


    componentDidMount() {
        this.props.getUserInfo(this.props.match.params.id)
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmitForm = e => {
        e.preventDefault();
        const basicInfo = {
            id: this.props.match.params.id,
            user_name: this.state.user_name,
            email: this.state.email,
            dob: DateFormat(this.state.dob, "yyyy-mm-dd"),
            contact_number: this.state.contact_number,
            gender: this.state.gender,
            bio: this.state.bio
        };

        console.log('basic Info', basicInfo)
        this.props.editUserInfo(
            basicInfo,
            this.props.history
        );
    }



    render() {
        const { errors, user_name, email, contact_number, bio, dob, gender } = this.state;
        let pageContent = "";

        console.log(dob)
        pageContent = <form onSubmit={this.onSubmitForm}>
            <div className="form-group">
                <label className="label input-required">Username</label>
                <input
                    className="form-control"
                    type="text"
                    id="user_name"
                    name="user_name"
                    disabled
                    readOnly
                    value={user_name || ''}
                    onChange={this.onChange}
                    required="required"
                />
            </div>
            <div className="form-group">
                <label className="label input-required" htmlFor="lastName">Email</label>
                <input
                    className="form-control"
                    type="text"
                    id="lastName"
                    name="email"
                    disabled
                    readOnly
                    value={email || ''}
                    onChange={this.onChange}
                    required="required"
                />
            </div>
            <div className="form-group">
                <label className="label input-required" htmlFor="dob">Date Of Birth</label>


                <input type="date" className="form-control" value={dob} onChange={this.onChange} id="dob"
                    name="dob"
                    required="required" />

            </div>
            <div className="form-group">
                <label className="label input-required" htmlFor="gender">Gender</label>
                <select
                    value={gender}
                    onChange={this.onChange}
                    className="form-control text-capitalize"
                    id="gender"
                    name="gender"
                    required="required"
                >
                    <option default value='' disabled>Select your gender</option>
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                    <option value='other'>Other</option>
                </select>
            </div>
            <div className="form-group">
                <label className="label" htmlFor="headline">Contact Number</label>
                <input
                    className="form-control"
                    type="text"
                    id="headLine"
                    name="contact_number"
                    value={contact_number || ''}
                    onChange={this.onChange}
                />
            </div>
            <div className="form-group">
                <label className="label" htmlFor="bio">Bio</label>
                <textarea
                    className="form-control"
                    id="bio"
                    name="bio"
                    value={bio || ''}
                    onChange={this.onChange}
                    style={{ height: "100px", overflowY: 'auto' }}
                />
            </div>
            <button type="submit" className="btn btn-primary-panel">Update</button>
        </form>
        // }

        return (
            <div>
                <div className="container-fluid nav-distance-content">
                    <div className="row">
                        <div className="col-lg-12" style={{ padding: "0px 32px" }}>
                            {pageContent}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}




const mapStateToProps = state => ({
    user: state.user
});

export default connect(mapStateToProps, { getUserInfo, editUserInfo })(
    withRouter(BasicInformation)
);

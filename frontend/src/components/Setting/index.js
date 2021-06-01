import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { getUserInfo } from '../../store/actions/userAction'
import StarRating from '../../common/StarRating'
import * as moment from 'moment'
class Setting extends Component {
    constructor(props) {
        super(props)
        this.state = {
            profile: null,
            user_name: '',
            contact_number: '',
            email: '',
            picture: "",
            dob: '',
            gender: '',
            bio: ''

        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.getUserInfo(this.props.match.params.id)
    }

    onSubmitHandler = (e) => {
        e.preventDefault()
        const data = {
            user_name: this.state.user_name,
            contact_number: this.state.contact_number,
            email: this.state.email,
        }
        //this.props.SettingApi(data, this.props.history)
    }

    static getDerivedStateFromProps(props, state) {
        const { profile } = props.user

        if (profile && profile !== state.profile) {
            state.profile = profile
            state.user_name = profile.user_name
            state.contact_number = profile.contact_number
            state.email = profile.email
            state.bio = profile.bio
            state.dob = profile.dob
            state.gender = profile.gender
            state.picture = profile.picture
        }
    }

    changeHandler = (e) => {
        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        const { user_name, contact_number, email, picture, dob, bio, gender } = this.state
        return (
            <div>
                <h2 style={{ marginTop: '10px' }}>View Profile</h2>
                <div className="container-fluid nav-distance-content">
                    <div className=" public-profile p-0" >
                        <div className="col-lg-12 px-4">
                            <div className="tutor-info-box clearfix col-lg-12">
                                <div className="row">
                                    <div className="col-lg-10">
                                        <div className="tutor-dp float-sm-none float-none float-md-left">
                                            <img style={{ height: '100%', borderRadius: '100%' }} src={picture ? `${process.env.REACT_APP_API_URL}/${picture}` : `${process.env.REACT_APP_FRONTEND_URL}/images/download.png`} alt="tutor-dp" className="img-fluid" />
                                        </div>
                                        <div className="text-md-left float-md-left pl-5">
                                            {user_name && <p className="text-truncate"><strong className="strong">Username: </strong>{user_name}</p>}
                                            {email && <p className="text-truncate"><strong className="strong">Email: </strong>{email}</p>}
                                            {contact_number && <p className="text-truncate"><strong className="strong">Phone: </strong>{contact_number}</p>}
                                        </div>
                                    </div>
                                    <div className="col-lg-2 text-center">
                                        <Link to={"/setting/edit/" + this.props.match.params.id} className="btn btn-primary mt-1">Edit profile</Link>
                                    </div>
                                </div>
                                <div className="rating-stars mb-2 float-right">
                                    <span className="mr-3 strong">User Rating</span>
                                    <StarRating starRating="4" />
                                </div>
                                <div className="hr" />
                                <hr />

                                <div className="text-md-left float-md-left pl-5">
                                    {dob && <p className="text-truncate"><strong className="strong">Date of Birth: </strong>{moment(dob).format('DD MMMM YYYY')}</p>}
                                    {gender && <p className="text-truncate"><strong className="strong">Gender: </strong>{gender}</p>}
                                    {bio && <p className="text-truncate"><strong className="strong">Bio: </strong>{bio}</p>}
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
    user: state.user
});
export default connect(mapStateToProps, { getUserInfo })(withRouter(Setting))

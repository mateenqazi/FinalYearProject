import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { getUserInfo, submitStar, reportUser } from '../../store/actions/userAction'
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
            bio: '',
            star: '',
            rating: 0,
            rating_record: [],
            report: 0,
            report_record: []
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
        console.log('profile', profile)
        if (profile && profile !== state.profile) {
            state.profile = profile
            state.user_name = profile.user_name
            state.contact_number = profile.contact_number
            state.email = profile.email
            state.bio = profile.bio
            state.dob = profile.dob
            state.gender = profile.gender
            state.picture = profile.picture
            state.rating = Math.ceil(profile.rating)
            state.rating_record = profile.rating_record
            state.report = profile.report
            state.report_record = profile.report_record
        }
    }

    changeHandler = (e) => {
        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        }, () => {
            this.props.submitStar({
                id: this.props.match.params.id,
                user_id: this.props.auth.user.userId,
                star: this.state.star
            })
        })
    }

    reportUser = (e) => {
        e.preventDefault()
        this.props.reportUser({
            id: this.props.match.params.id,
            user_id: this.props.auth.user.userId,
        })
    }
    render() {
        const { user_name, contact_number, email, picture, dob, bio, gender, star, rating, rating_record, report_record } = this.state
        console.log(this.props.auth)
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
                                    {this.props.auth.isAuthenticated && this.props.auth.user.userId !== this.props.match.params.id ?
                                        <>
                                            {report_record.includes(`${this.props.auth.user.userId}`) ?
                                                <h5 className="col-lg-2 text-right" >Already Report!</h5>
                                                :
                                                <div className="col-lg-2 text-center">
                                                    <span onClick={this.reportUser} className="btn btn-danger mt-1">Report User</span>
                                                </div>}
                                        </>
                                        : null
                                    }
                                </div>
                                <div className="rating-stars mb-2 float-right">
                                    <span className="mr-3 strong">User Rating</span>
                                    <StarRating starRating={rating} />
                                </div>
                                <div className="hr" />
                                <hr />
                                <div className="col-md-12">

                                    <div className="text-md-left float-md-left pl-5 col-md-6">
                                        {dob && <p className="text-truncate"><strong className="strong">Date of Birth: </strong>{moment(dob).format('DD MMMM YYYY')}</p>}
                                        {gender && <p className="text-truncate"><strong className="strong">Gender: </strong>{gender}</p>}
                                        {bio && <p className="text-truncate"><strong className="strong">Bio: </strong>{bio}</p>}
                                    </div>

                                    {this.props.auth.isAuthenticated && this.props.auth.user.userId !== this.props.match.params.id ?
                                        <>
                                            {rating_record.includes(`${this.props.auth.user.userId}`) ?
                                                <h5 style={{ float: 'right' }}>Rating Already Submitted</h5>
                                                :
                                                <div className="col-md-6" style={{ width: '200px', float: 'right' }}>
                                                    <div className="form-group">
                                                        <label className="label input-required" style={{ color: 'black' }} htmlFor="gender">Rating Now</label>
                                                        <select
                                                            value={star}
                                                            onChange={this.onChangeHandler}
                                                            className="form-control text-capitalize"
                                                            id="star"
                                                            name="star"
                                                            required="required"
                                                        >
                                                            <option default disabled value='' disabled>Rate Now</option>
                                                            <option value='1'>1 star</option>
                                                            <option value='2'>2 star</option>
                                                            <option value='3'>3 star</option>
                                                            <option value='4'>4 star</option>
                                                            <option value='5'>5 star</option>
                                                        </select>
                                                    </div>

                                                </div>
                                            }
                                        </> : null}



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
    user: state.user,
    auth: state.auth
});
export default connect(mapStateToProps, { getUserInfo, submitStar, reportUser })(withRouter(Setting))

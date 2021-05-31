import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
// import { updateProfilePicture, removeProfilePicture } from '../../../actions/userActions';
// import { getCurrentProfile } from '../../../actions/profileActions';
// import { images } from '../../../custom/js/images';
import { FontAwesomeIcon } from '../../common/FontAwesome';
class FileUpload extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            errors: {},
            file: '',
            filename: 'Choose File',
            uploadPercentage: 0,
            uploadedFile: {},

            profilePic: '',
            getProfilePic: false,
        };
    };

    setFile = file => {
        this.setState({ file: file });
    };

    setFilename = name => {
        this.setState({ filename: name });
    };

    onChange = e => {
        let files = e.target.files[0];
        this.setState({ errors: {} })
        this.setFile(files);
        this.setFilename(files.name);
    };

    getProfilePicture = () => {
        this.setState({ getProfilePic: true });
    }

    removeProfilePic = () => {
        const { user } = this.props.profile.profile;
        const { role } = this.props.auth
        //this.props.removeProfilePicture({ id: user }, role, this.props.history);
    }

    onSubmit = e => {
        e.preventDefault();
        if (this.state.file) {
            const formData = new FormData();
            formData.append('file', this.state.file);
            //this.props.updateProfilePicture(formData, this.props.userType, this.props.history);
        }
    };

    static getDerivedStateFromProps(props, state) {
        let profileData = props.profile;
        if (profileData) {
            let profile = profileData.profile;
            if (profile) {
                if (state.profilePic != profile.picture) {
                    state.profilePic = profile.picture
                    state.file = false;
                    state.filename = 'Choose File'
                }
            }
        }
        return state;
    }


    render() {

        const { errors } = this.state;
        const profilePicturesBasePath = process.env.profilePicturesBasePath;

        return (<React.Fragment>
            <div className="row align-items-center px-4">
                <div className="col-lg-3 text-center mb-5">
                    <img className="img-thumbnail" style={{ borderRadius: '50%', width: '85px', height: '85px' }} src={this.state.profilePic ? `${profilePicturesBasePath}${this.state.profilePic}` : null} alt='' />
                    {/* &nbsp;&nbsp;<button onClick={this.getProfilePicture} className="align-middle btn btn-link float-none d-inline p-0">Update Profile Picture</button><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
                    {this.state.profilePic && <button onClick={() => this.removeProfilePic()} className="align-middle btn btn-link float-none d-inline p-0"><FontAwesomeIcon style={{ color: 'black' }} icon="trash" /></button>}
                </div>
                <div className="col-lg-9">
                    <form onSubmit={this.onSubmit} className=" px-4">
                        <div className='custom-file mb-1'>
                            <input
                                type='file'
                                className='custom-file-input'
                                id='customFile'
                                onChange={this.onChange}
                            />
                            <label className='custom-file-label' htmlFor='customFile'>
                                {this.state.filename}
                            </label>
                        </div>
                        <small className="mb-4">Allowed Formats are PNG, JPG, JPEG, GIF</small>

                        {errors.file && <div className="invalid-feedback d-block">{errors.file}</div>}
                        <input
                            type='submit'
                            value='Update'
                            className='btn btn-primary-panel btn-block mt-3 mb-5'
                        />
                    </form>
                </div>


            </div>

        </React.Fragment>);
    }
}
const mapStateToProps = state => ({
    profile: state.profile,
    auth: state.auth.user,
    page: state.page,
});

export default connect(mapStateToProps, {})(
    withRouter(FileUpload)
);
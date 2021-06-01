import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
// import { updateProfilePicture, removeProfilePicture } from '../../../actions/userActions';
// import { getCurrentProfile } from '../../../actions/profileActions';
// import { images } from '../../../custom/js/images';
import { FontAwesomeIcon } from '../../common/FontAwesome';
import { getUserInfo, updateProfilePicture } from '../../store/actions/userAction'

class FileUpload extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            errors: {},
            id: this.props.match.params.id,
            file: '',
            filename: 'Choose File',
            picture: ''
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
            formData.append('id', this.state.id)
            console.log(formData.get('file'))
            this.props.updateProfilePicture(formData, this.props.history);
        }
    };

    static getDerivedStateFromProps(props, state) {
        const { profile } = props.user
        if (profile && profile !== state.profile) {
            state.profile = profile
            state.picture = profile.picture
            state.file = false;
            state.filename = 'Choose File'
        }
        return state;
    }


    componentDidMount() {
        this.props.getUserInfo(this.props.match.params.id)
    }

    render() {

        const { errors } = this.state;
        const profilePicturesBasePath = process.env.profilePicturesBasePath;

        return (<React.Fragment>
            <div className="row align-items-center px-4">
                <div className="col-lg-3 text-center mb-5">
                    <img className="img-thumbnail" style={{ borderRadius: '50%', width: '85px', height: '85px' }} src={this.state.picture ? `${process.env.REACT_APP_API_URL}/${this.state.picture}` : `${process.env.REACT_APP_FRONTEND_URL}/images/download.png`} alt='' />
                    {this.state.picture && <button onClick={() => this.removeProfilePic()} className="align-middle btn btn-link float-none d-inline p-0"><FontAwesomeIcon style={{ color: 'black' }} icon="trash" /></button>}
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
    user: state.user

});

export default connect(mapStateToProps, { getUserInfo, updateProfilePicture })(
    withRouter(FileUpload)
);
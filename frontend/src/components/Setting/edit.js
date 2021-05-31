import React from 'react';
import ChangePassword from './ChangePassword'
import ProfilePicture from './ProfilePicture'
import BasicInformation from './basicInformation'
import { withRouter } from 'react-router-dom';
//import { FontAwesomeIcon } from '../../../../custom/js/FontAwesome';
import { connect } from 'react-redux';
import { getUserInfo } from '../../store/actions/userAction'


class EditTutorProfile extends React.Component {
    render() {
        let pageContent = "";
        pageContent = <div className="row">
            <div className="col-lg-2 mt-3">
            </div>
            <div className="col-lg-10 text-right mb-2 mt-4">
            </div>
            <div className="col-lg-6">
                <div className="card card-custom mb-4">
                    <p className="form-page-heading">
                        Basic Information
						</p>
                    <hr />
                    <BasicInformation />

                </div>
            </div>

            <div className="col-lg-6">
                <div className="card card-custom mb-4">
                    <p className="form-page-heading">
                        Profile Picture
						</p>
                    <hr />
                    <ProfilePicture userType="tutor" />
                </div>
                <div className="card card-custom mb-4">
                    <ChangePassword />
                </div>
            </div>

        </div>


        return (
            <div>

                <div className="container-fluid">
                    <div className="row px-3">
                        <div className="col-lg-12">
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

export default connect(mapStateToProps, { getUserInfo })(withRouter(EditTutorProfile));

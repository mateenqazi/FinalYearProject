import React, { Component } from "react";
import { getAllPost } from '../../store/actions/postAction'
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import * as moment from 'moment'
class ViewPost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: null
        }
    }
    componentDidMount() {
        this.props.getAllPost()
    }
    static getDerivedStateFromProps(props, state) {
        const { posts } = props.post
        if (posts && posts !== state.posts) {
            state.posts = posts
        }
        return state
    }
    render() {
        const { posts } = this.state
        console.log('user_id', posts)
        return (
            <div className="container">
                {posts && posts.map((item, key) => {
                    return <div key={key} className="well">
                        <div className="media">
                            <a className="pull-left" href="#">
                                <img style={{ height: '130px', width: '130px', borderRadius: '100%' }} className="media-object" src={item.user_id.picture ? `${process.env.REACT_APP_API_URL}/${item.user_id.picture}` : `${process.env.REACT_APP_FRONTEND_URL}/images/download.png`} />
                            </a>
                            <div className="media-body">
                                <h4 className="media-heading"><Link to={`/user-profile/${item.user_id._id}`}>{item && item.user_id && item.user_id.user_name}</Link></h4>
                                <p className="text-right">{moment(item.last_updated).format('LLLL')}</p>
                                <p>{item.description}</p>
                                <ul className="list-inline list-unstyled">
                                    <li><span><i className="glyphicon glyphicon-calendar"></i> {item.user_id.contact_number} </span></li>
                                    <li>|</li>
                                    <span><i className="glyphicon glyphicon-comment"></i> {item.user_id.email}</span>
                                </ul>
                            </div>
                        </div>
                    </div>
                })}

            </div>
        );
    }
}
const mapStateToProps = state => ({
    post: state.post
});
export default connect(mapStateToProps, { getAllPost })(withRouter(ViewPost));

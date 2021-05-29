import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { createPost } from '../../store/actions/postAction'
class Posts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            description: ''
        }
    }
    onChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    CancelHandler = (e) => {
        e.preventDefault()
        this.setState({
            description: ''
        })
    }
    submitHanlder = (e) => {
        e.preventDefault()
        const data = {
            description: this.state.description
        }
        this.props.createPost(data, this.props.history)
    }
    render() {
        const { description } = this.state
        return (
            <div>
                <h2 style={{ marginTop: "10px" }}>Posts</h2>
                <form onSubmit={this.submitHanlder} style={{ margin: "3% 10% 0 10%" }}>
                    <div className="p-3 p-lg-5 border">
                        <div className="form-group row">
                            <div className="col-md-10">
                                <label for="post" className="text-black">
                                    Posts <span className="text-danger">*</span>
                                </label>
                                <textarea type="text"
                                    className="form-control"
                                    id="post"
                                    name="description"
                                    placeholder="Request Medicine"
                                    style={{ height: '100px' }}
                                    value={description}
                                    onChange={this.onChangeHandler}
                                >

                                </textarea>
                            </div>
                            <div className="col-md-5">
                                <input
                                    type="submit"
                                    style={{ background: "aqua", marginTop: "4%" }}
                                    className="form-control"
                                />
                            </div>

                            <div className="col-md-5">
                                <input
                                    type="submit"
                                    value="Cancel"
                                    onClick={this.CancelHandler}
                                    style={{ background: "aqua", marginTop: "4%" }}
                                    className="form-control"
                                />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    auth: state.auth
});
export default connect(mapStateToProps, { createPost })(withRouter(Posts));
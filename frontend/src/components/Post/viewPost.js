import React, { Component } from "react";
import { Link } from "react-router-dom";
class ViewPost extends Component {
    render() {
        return (
            <div>
                <h2 style={{ marginTop: "10px" }}>View Post</h2>
                <form style={{ margin: "3% 10% 0 10%" }}>
                    <div className="p-3 p-lg-5 border">
                        <div className="form-group row">
                            <div className="col-md-10">
                                <label for="name" className="text-black">
                                    Person Name: <span className="text-danger">*</span>
                                </label>
                                <textarea
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    name="name"
                                    readonly
                                    style={{ height: "100px" }}
                                ></textarea>
                            </div>
                            <div className="col-md-10">
                                <label for="post" className="text-black">
                                    Post Details: <span className="text-danger">*</span>
                                </label>
                                <textarea
                                    type="text"
                                    className="form-control"
                                    id="post"
                                    name="post"
                                    readonly
                                    style={{ height: "100px" }}
                                ></textarea>
                            </div>
                            <div className="col-md-10">
                                <label for="date" className="text-black">
                                    Date: <span className="text-danger">*</span>
                                </label>
                                <textarea
                                    type="text"
                                    className="form-control"
                                    id="date"
                                    name="date"
                                    readonly
                                    style={{ height: "100px" }}
                                ></textarea>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
export default ViewPost;

import React, { Component } from "react";
import { Link } from "react-router-dom";
class Posts extends Component {
    render() {
        return (
            <div>
                <h2 style={{ marginTop: "10px" }}>Posts</h2>
                <form style={{ margin: "3% 10% 0 10%" }}>
                    <div className="p-3 p-lg-5 border">
                        <div className="form-group row">
                            <div className="col-md-10">
                                <label for="post" className="text-black">
                                    Posts <span className="text-danger">*</span>
                                </label>
                                <textarea type="text"
                                    className="form-control"
                                    id="post"
                                    name="post"
                                    placeholder="Request Medicine"
                                    style={{ height: '100px' }}>

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
                                    style={{ background: "aqua", marginTop: "4%" }}
                                    className="form-control"
                                    value="Cancel"
                                />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
export default Posts;
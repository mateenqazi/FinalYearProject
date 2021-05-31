import React from 'react';
import { FontAwesomeIcon } from '../FontAwesome';

class StarRating extends React.Component {
    render() {
        var starRating = this.props.starRating;

        if (starRating == 5) {
            return (
                <React.Fragment>
                    <FontAwesomeIcon icon="star" className="checked" />
                    <FontAwesomeIcon icon="star" className="checked" />
                    <FontAwesomeIcon icon="star" className="checked" />
                    <FontAwesomeIcon icon="star" className="checked" />
                    <FontAwesomeIcon icon="star" className="checked" />
                </React.Fragment>
            );
        } else if (starRating == 4) {
            return (
                <React.Fragment>
                    <FontAwesomeIcon icon="star" className="checked" />
                    <FontAwesomeIcon icon="star" className="checked" />
                    <FontAwesomeIcon icon="star" className="checked" />
                    <FontAwesomeIcon icon="star" className="checked" />
                    <FontAwesomeIcon icon="star" className="unchecked" />
                </React.Fragment>
            );
        } else if (starRating == 3) {
            return (
                <React.Fragment>
                    <FontAwesomeIcon icon="star" className="checked" />
                    <FontAwesomeIcon icon="star" className="checked" />
                    <FontAwesomeIcon icon="star" className="checked" />
                    <FontAwesomeIcon icon="star" className="unchecked" />
                    <FontAwesomeIcon icon="star" className="unchecked" />
                </React.Fragment>
            );
        } else if (starRating == 2) {
            return (
                <React.Fragment>
                    <FontAwesomeIcon icon="star" className="checked" />
                    <FontAwesomeIcon icon="star" className="checked" />
                    <FontAwesomeIcon icon="star" className="unchecked" />
                    <FontAwesomeIcon icon="star" className="unchecked" />
                    <FontAwesomeIcon icon="star" className="unchecked" />
                </React.Fragment>
            );
        } else if (starRating == 1) {
            return (
                <React.Fragment>
                    <FontAwesomeIcon icon="star" className="checked" />
                    <FontAwesomeIcon icon="star" className="unchecked" />
                    <FontAwesomeIcon icon="star" className="unchecked" />
                    <FontAwesomeIcon icon="star" className="unchecked" />
                    <FontAwesomeIcon icon="star" className="unchecked" />
                </React.Fragment>
            );
        } else {
            return (
                <React.Fragment>
                    <FontAwesomeIcon icon="star" />
                    <FontAwesomeIcon icon="star" />
                    <FontAwesomeIcon icon="star" />
                    <FontAwesomeIcon icon="star" />
                    <FontAwesomeIcon icon="star" />
                </React.Fragment>
            );
        }

    }
}

export default StarRating;
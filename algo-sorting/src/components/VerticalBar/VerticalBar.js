import React from "react";
import PropTypes from "prop-types";

import "./VerticalBar.css";

const verticalBar = (props) => {
    const { value, type } = props;

    if (type === "selected") {
        return (
            <div className="BarSelected" style={{ height: `${value * 5}px` }}>
                &nbsp;
            </div>
        );
    }
    return (
        <div className="Bar" style={{ height: `${value * 5}px` }}>
            &nbsp;
        </div>
    );
};

verticalBar.propTypes = {
    value: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
};

export default verticalBar;

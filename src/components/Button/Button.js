import React from "react";
import PropTypes from 'prop-types';

function Button(props) {
    return (
        <button>{props.label}</button>
    )
}


Button.propTypes = {
    label: PropTypes.string
}

export default Button;
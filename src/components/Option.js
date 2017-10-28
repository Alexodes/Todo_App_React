import React from 'react';

export default (props) => {
    return (
        <div className="option_line">
            <p className="option_p">{props.index}. {props.optionText}</p>
            <button
                className="option_button_remove"
                onClick={(e) => {
                    props.handleDeleteOption(props.optionText);
                }}
            >
                remove
            </button>
        </div>
    );
};
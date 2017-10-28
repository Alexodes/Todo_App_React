import React from 'react';
import Option from './Option';


const Options = (props) => {
    return(
        <div className="options">
            {
                props.options.map((option, count) => (
                    <Option
                        key={option}
                        index={count + 1}
                        optionText={option}
                        handleDeleteOption={props.handleDeleteOption}
                    />
                ))
            }
            <button className="remove_button" onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.length === 0 && <p>Please add an option to get started!</p>}
        </div>
    );
};

export default Options;
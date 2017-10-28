import React from 'react';

export default (props) => {
    return (
        <div>
            <h1 className="header">{props.title}</h1>
            {props.subtitle && <h2 className="sub_header">{props.subtitle}</h2>}
        </div>
    );
};


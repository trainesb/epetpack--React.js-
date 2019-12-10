import React from "react";

const Testimony = ({name, text}) => (
	<div className='testimony'>
        <div className='header'>
            <h3>{name}</h3>
        </div>
        <div className='body'>
        	<p>{text}</p>
        </div>
    </div>
);

export default Testimony;
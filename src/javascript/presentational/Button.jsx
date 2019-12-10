import React from 'react';


const Button = ({active, path, text}) => (
	<a className={active ? 'active' : ''} href={path}>{text}</a>
);

export default Button;

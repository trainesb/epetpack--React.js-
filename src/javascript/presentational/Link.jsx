import React from 'react';


const Link = ({active, path, text}) => (
	<a className={active ? 'active' : ''} href={path}>{text}</a>
);

export default Link;
import React from 'react';


const Button = ({path, text}) => (
	<button>
		<a href={path}>{text}</a>
	</button>
);

export default Button;

import React from "react";

const Image = ({path, alt}) => (
	<p>
		<img src={path} alt={alt} />
	</p>
);

export default Image;